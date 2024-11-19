from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
import textwrap3
 

load_dotenv()
API_KEY = os.getenv("API_KEY")

if API_KEY:
    genai.configure(api_key=API_KEY)


app = Flask(__name__)
CORS(app)

# prompt template
prompt_template = '''
    Provide a detailed environmental impact analysis along with statstics 
    and reusable alternatives for the {product} specified below. Format the response using bullets and proper bold in text format.
    Structure the output as follows:
    Product: {product}
    Environmental Impacts:
        Carbon Footprint: <details >
        Water Footprint: <details>
        Durability: <details>
        Pollution: <details>
        Health Metrics: <details>
    Eco-friendly alternatives to {product} include:
    1. Alternative: <alternative 1>
       Benefits: <recommendation for alternative 1>
       Where to find them online:
          - <Store Name>: <"Product Name" by Brand>" - ![link to the product]
    2. Alternative: <alternative 2>
       Benefits: <recommendation for alternative 2>
       Where to find them online:
          -<Store Name>: <"Product Name" by Brand>" - ![link to the product]
    3. Alternative: <alternative 3>
       Benefits: <recommendation for alternative 3>
       Where to find them online:
          - <Store Name>: <"Product Name" by Brand>" - ![link to the product]

    Ensure the response is structured as points in text format only.
'''

def to_markdown(text):
    formatted_text = text.replace('**', '')
    formatted_text=formatted_text.replace('*', '•')
    return textwrap3.indent(formatted_text, ' ', predicate=lambda _:True)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    product_name = data.get("product")

    if not product_name:
        return make_response("Please provide a product name.", 400)

    # Generate the prompt
    prompt = PromptTemplate(
        input_variables=['product'],
        template=prompt_template
    )
    prompt_text = prompt.format(product=product_name)

    
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt_text)
    markdown_response = to_markdown(response.text)

    # plain text response
    text_response = make_response(markdown_response)
    text_response.headers['Content-Type'] = 'text/plain'

    return text_response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

