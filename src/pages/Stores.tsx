import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingBag } from 'lucide-react';


const products = [
  {
    id: 1,
    name: 'Bamboo Water Bottle',
    description: 'Sustainable bamboo water bottle with stainless steel interior',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/51gVNXSejKL._SX679_.jpg',
    rating: 4.8,
    reviews: 128,
    url: 'https://www.amazon.in/Bamboo-Water-Bottle/dp/B0D795J5QG', // Unique link
  },
  {
    id: 2,
    name: 'Reusable Produce Bags',
    description: 'Set of 5 mesh produce bags for plastic-free shopping',
    price: 424,
    image: 'https://m.media-amazon.com/images/I/818bFUNW8uL._SX679_.jpg',
    rating: 4.9,
    reviews: 89,
    url: 'https://www.amazon.in/Beddify-Cotton-Reusable-Storage-Vegetables/dp/B07GZKW4CG/ref=sr_1_5?crid=21USRBOZN33D7&dib=eyJ2IjoiMSJ9.k3P89ATC7gDmOGDvzKMD-Lqz_GK5zSPzvkZ6e8gn1YLO39K22TaYY3T5wklmr2OZqzfk17enDvSmDnJeAouO6qMciyhKLpQU6ixxCys-kRRlm-sTrGHbDGjhZfZZKSQ_Qf0bBEnP9F6DEQGXP9nr0awu6BPrJS9HU2y-vYKX3KCAInmVZeofBwCJyRKQYb_rKtYbZwzHhkFvi6bKs9n12C897prScSAH2Hk6AaBJopqIRV6NT90rmqLLUJH2R8sqjvMOrG0ETq3L8n36gO6fx0WKX1DyoXWvj_0uSUlnNTk.S8DWyzIsRUGPC9yhv-kj2Kh80Ji_ABbgIYGf3trK6-o&dib_tag=se&keywords=Reusable+Produce+Bags&qid=1730456108&sprefix=bamboo+water+bottle%2Caps%2C248&sr=8-5', // Unique link
  },
  {
    id: 3,
    name: 'Bamboo Cutlery Set',
    description: 'Portable bamboo utensil set with carrying case and more',
    price: 379,
    image: 'https://m.media-amazon.com/images/I/810k2cJR9FL._SL1500_.jpg',
    rating: 4.7,
    reviews: 156,
    url: 'https://www.amazon.in/Bamboo-Bae-Cutlery-Friendly-Handcrafted/dp/B099NFQ4L7/ref=sr_1_4?crid=3R45IKRLPX51B&dib=eyJ2IjoiMSJ9.MZCv6tRW-JJ40ofxuDbPoIByDWCXgHeCCGy9pBxsM4_Cgmkwg_TdfWrJM7OenJXt-xNhIGpBMdXnSBbHIoHUzFVySDBq8poDKrZIAvlEZ_D6MDmyJlJoJpHSGl93mamzonTalQp2zu4NsS71ENAn2jJId48TFHUUSMEOOgEX1RVAEAGTRj1OCCWMQdNEmigYnjhEeEaVqB_MZBZUz2Ez_wSU1OGveNHj2nfPC1n77zPJtgkOoBa2Eb04d7X0QVZyisDGxRivD6YzBdabXMab6eZvTb7g6jt2P-BePZGBRAY.jMWD7bkaMzHTziEb3iRMAF2rfG0iwx6qXU0Y5ESP_qQ&dib_tag=se&keywords=bamboo+cutlery+set&qid=1730456594&sprefix=bamboo+clutery+se%2Caps%2C215&sr=8-4', // Unique link
  },
  {
    id: 4,
    name: 'Organic Cotton Tote',
    description: 'Durable organic cotton shopping bag with inner pockets',
    price: 248,
    image: 'https://m.media-amazon.com/images/I/81ZWR9jVJ1L._SX679_.jpg',
    rating: 4.6,
    reviews: 92,
    url: 'https://www.amazon.in/Metsi-internal-Traveling-Shopping-Shoulder/dp/B0CBPS432N/ref=sr_1_25?crid=1Z415PUT94I4J&dib=eyJ2IjoiMSJ9.mUmJR3OQKB9Iyi_srQhLUfsgDplglQdpzhHwIXApJtrR6FEf0x9sl3vbwLjDhaCf9WH_uygn2vXJ11NLMnQjhbrbdhHGGCe0SFYwcODubKtm8yGTh6Irfuv-ViiHYZiOicz_72EBGuWV-jPEJHJknrXnq7Nx8Om-ajUcvSosEoWHQBO7jZBhH3HqHJA5KD_O7ocLO4TR_ql8IK0gRjI8xofePNb7G_j7xB-zxUWLhAaOQa27lQ-eUWRQiClsnaCP9jdSGihhjIRZEO8Ti84Dwa9P9Ylnoa7VbCH6STlSlKI.Q-UO4c9fmyVWmRYKJOJ98yyaWFTETaoNFDC65QiPrcM&dib_tag=se&keywords=Organic+Cotton+Tote&qid=1730456711&sprefix=organic+cotton+tote%2Caps%2C224&sr=8-25', // Unique link
  },
  {
    id: 5,
    name: 'Beeswax Food Wraps',
    description: 'Reusable food wraps made from organic cotton and beeswax',
    price: 3686,
    image: 'https://m.media-amazon.com/images/I/81-RFKZmXML._SX679_.jpg',
    rating: 4.8,
    reviews: 143,
    url: 'https://www.amazon.in/HUNNYBEE-Reusable-Friendly-Alternative-Sustainable/dp/B083GKGT3C/ref=sr_1_12?crid=33CDXBKP1D280&dib=eyJ2IjoiMSJ9.Yk6MNN0IxSeO5wF89BfyAdeM6eSyvzZS5_Ix1mbq7hKp1K43WRLqiiaDlrzIvmHpPBBGVOu6ON3Kl3D_BYnnBN2l79ues971aZqk_Ke0Pg16Vb35DdmBhP1Zd04D3tp6vtceAxMHlPCyoV3icR8B3scKfJJiP7UqijT9WqP5twvpQ4uSPi8gQSsu0gxt241IhAoc8apeMN-1pjql1W393Zw9Pl6bVr9CmldhapBPQqoJlIZZ5Ppn_K9o3XAUI1e2XlLYE02RfU68ZY9vVY3Zb3uLvduwIVDTDczxJ2CjJ-U.gimXXec9eTReCCpE2Vlx7NfNLRQ75jWAUqfStB-R6ic&dib_tag=se&keywords=Beeswax%2BFood%2BWraps&qid=1730456802&sprefix=beeswax%2Bfood%2Bwraps%2Caps%2C219&sr=8-12&th=1', // Unique link
  },
  {
    id: 6,
    name: 'Glass Storage Containers',
    description: 'Set of 3 airtight glass containers for food storage and more.',
    price: 1829,
    image: 'https://m.media-amazon.com/images/I/71MEL7WO72L._SX679_.jpg',
    rating: 4.9,
    reviews: 167,
    url: 'https://www.amazon.in/FineDine-Glass-Food-Storage-Container/dp/B0CDXDHNXB/ref=sr_1_10?crid=3LNG8IA990PV4&dib=eyJ2IjoiMSJ9.7feSbWAtAL4gs0D4OV4_ZpCziek2TFVCB-yq4S6ESkUStbZOa1tf5K0QcQ6U4ao_MK7bVH1V-drXOIe2HgrSnVDncPj_sGd2or8Cee7stmy8dxIDT3TED97LHoxupzTYj69LsYCi3z3MsgSJvGK_ttxsTKiJZmkGKseqiYvTaY_8M8TECfgoan9EOkpix55mff8tbG8NB8lcVRnN23faYFArGtSOGxF5EpVAOY4sjcTGUZLEIGWzpg8CbGX6NVrHF1xs4kuYLOW_sgSBZz5Bj9RVyuqAviCpDjyzXNGvwn8.v8JTNtEd-z8KWDiYyHRy8i-wSNmmRXNOM0bhC6a0ffg&dib_tag=se&keywords=Glass+Storage+Containers&qid=1730456893&sprefix=glass+storage+containers%2Caps%2C226&sr=8-10', // Unique link
  },
  {
    id: 7,
    name: 'Reusable Sanitary Cloth Pads Napkins',
    description: 'FabPad Reusable Washable Sanitary Cloth Pads Napkins Full Cycle Eco-Friendly Menstrual Hygiene Solutions (Pack Of 8)',
    price: 949,
    image: 'https://m.media-amazon.com/images/I/91EwZHdX8dL._AC_UL320_.jpg',
    rating: 3.8,
    reviews: 1407,
    url: 'https://www.amazon.in/FabPad-Reusable-Eco-Friendly-Menstrual-Solutions/dp/B08WB4KW99/ref=sr_1_4_sspa?crid=2EYDP5MXB0F9U&dib=eyJ2IjoiMSJ9.AhUSVKr3rvORlUFMwkloR5Nj4cOab9ADEZRdWrEf-JKJyBI6cVPNR3N14efDYuR44qv9ZkYvDUtIlnsAXvYWENWjMfmzv3CGhQet1JbR7Hya4bUmw1w3NNOMEvNH703t3yd-vkCiCHOWVt1X-_XLUtc3DCVu2Ji0MHlGkJL5Fed2sm0X1p9zUVIiLvx7HWUj7U3KU7kGbtm4ejotYvd91Ry5xieafaY5Z0aeqpbBLSm-PhpdLVl5RovEPl0-IVaIdQzGfFK018tiIlLuHNfV99ZbW2Ul5mnkNxnfE5DC-00.wnY4r_kClY9Rn2Nd-D8Z1PLd3HnXIJeVLQ7dDSHwKPY&dib_tag=se&keywords=eco%2Bfriendly%2Breusable%2Bproducts&nsdOptOutParam=true&qid=1731934061&sprefix=eco%2Bfriendly%2Breusable%2Bproducts%2Caps%2C228&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&smid=AKQENKAJVHVT8&th=1' // Unique link
  },
  {
    id: 8,
    name: 'Pee Safe Reusable Sanitary Pads',
    description: 'Pee Safe Reusable Sanitary Pads For Women | Anti-Bacterial | Superb Absorbency | Lasts Up To 60 Washes | 3 Regular Pads + 1 Overnight Pad | Skin Friendly | Comfortable & Easy TO Use | Pack of 4',
    price: 359,
    image: 'https://m.media-amazon.com/images/I/51dRFZFQxZL._AC_UL320_.jpg',
    rating: 4.1,
    reviews: 3272,
    url: 'https://www.amazon.in/Reusable-Washable-Sanitary-Regular-Overnight/dp/B085QV1Q2H/ref=srd_d_psims_T1_d_sccl_3_1/257-7018781-1633132?pd_rd_w=bKqIv&content-id=amzn1.sym.c98d9c15-26d7-43ec-9c6a-adf52c73e51b&pf_rd_p=c98d9c15-26d7-43ec-9c6a-adf52c73e51b&pf_rd_r=M55S12DYPAY3VQ9F4WN0&pd_rd_wg=87RgA&pd_rd_r=07122b7b-a3ba-426c-ba60-a5788517f6b5&pd_rd_i=B085QV1Q2H&th=1' // Unique link
  },
  {
    id: 9,
    name: 'Reusable Menstrual Cup',
    description: 'Sirona Reusable Menstrual Cup for Women | Large Size with Pouch|Ultra Soft, Odour and Rash Free|100% Medical Grade Silicone |No Leakage | Protection for Up to 8-10 Hours | US FDA Registered,Pack of 1',
    price: 267,
    image: 'https://m.media-amazon.com/images/I/71KWZwaDQvL._AC_UL320_.jpg',
    rating: 4.3,
    reviews: 50581,
    url: 'https://www.amazon.in/Sirona-Approved-Reusable-Menstrual-Silicone/dp/B07548ND5J/ref=sr_1_6?crid=1AH4OOAX6CYVA&dib=eyJ2IjoiMSJ9.lf1Oq0NHUTFzQKC3Xp2DNt1Jn9D-btq_jA0vCTcUNKwSODOiDIamMsNAZkSVOiQ2UHOiatbbDszQOdJcix8vkzpLUFVbyPEhHu2eBzyAwOqmnz_Mo-UfObSUSw2r6Y3ODYW-Q4XrSfny0rr3ylu68d0JDvyMEle-hHBznvcoGPR7chBk2cIwdGEiorwuxCQj1P4uf5ziNi7MfYjbcieDihtlqjf9CqIRu7KMHogBspVoPO720Y38egrX1Yh5bzduXrLy8ocdJ6Ng7d0cj5y60fUCuOZGoPmaVHa1d3GT9Ug.dj8_UHbYM8zumNLhki1jFr0SE6ZH85y34_Fw9I9we90&dib_tag=se&keywords=reusable%2Bsanitary%2Bcups%2Bfor%2Bwomen&qid=1731934633&sprefix=reusable%2Bsanitary%2Bcup%2Bfor%2Bwomen%2Caps%2C325&sr=8-6&th=1' // Unique link
  },
  {
    id: 10,
    name: 'Asan Menstrual Cup',
    description: 'Asan Menstrual Cup - Light/Medium Flow Pack Of 2 | Easiest Cup To Insert & Remove I Special Ring Design | Premium Medical Grade Silicone I Designed In The Usa, Red',
    price: 2880,
    image: 'https://m.media-amazon.com/images/I/71P8K06zGHL._AC_UL320_.jpg',
    rating: 4.4,
    reviews: 180,
    url: 'https://www.amazon.in/Asan-Menstrual-cup-silicone-Designed/dp/B0CHDTGQ3D/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.cd33fa60-47cd-49f3-80b8-24b1f0cbef97%3Aamzn1.sym.cd33fa60-47cd-49f3-80b8-24b1f0cbef97&crid=1AH4OOAX6CYVA&cv_ct_cx=reusable%2Bsanitary%2Bcups%2Bfor%2Bwomen&dib=eyJ2IjoiMSJ9.NymeglFg_IDb8gXvBG_gzDtghOSMRv2SOZX65slM0mOtX6HGEQebotjt2UaWa0WG.jtTfDZ097BIi5a75JxX87o5LHXgzmA143Y_oAoFl3Ns&dib_tag=se&keywords=reusable%2Bsanitary%2Bcups%2Bfor%2Bwomen&pd_rd_i=B0CHDTGQ3D&pd_rd_r=fb1486c8-2200-4429-8cdd-fa727beb411e&pd_rd_w=6HPkb&pd_rd_wg=KUbte&pf_rd_p=cd33fa60-47cd-49f3-80b8-24b1f0cbef97&pf_rd_r=W8GJTYHZV2K7XSQ40XDD&qid=1731934633&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=reusable%2Bsanitary%2Bcup%2Bfor%2Bwomen%2Caps%2C325&sr=1-2-ced4eeeb-b190-41d6-902a-1ecb3fb8b7c4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1' // Unique link
  },
  {
    id: 11,
    name: 'Steel Straws + Straw Cleaning Brush ',
    description: 'S.S.M India Steel Straws + Straw Cleaning Brush | Straws for Drinking Juice | Metal Straw | Eco Friendly Products | Stainless Steel Straw | Straw for Kids | Reusable Straw | Steel Sipper with Straw',
    price: 179,
    image: 'https://m.media-amazon.com/images/I/61RsiEZZ0yL._AC_UL320_.jpg',
    rating: 5.0,
    reviews: 1,
    url: 'https://www.amazon.in/Cleaning-Drinking-Friendly-Products-Stainless/dp/B0B3MLMGFF/ref=sr_1_26?crid=1485E3V4QZFZR&dib=eyJ2IjoiMSJ9.AhUSVKr3rvORlUFMwkloR3bnQeGfyhmw4LO6YwVe_-0B58KWWiyT84bUsDl_eKldlOnbAx2NX0AVTwSYFpqgZzU2V6dt4-9pditt-0FVtyKVxPaY39tRuVpP7iFicTFd6P3shvv-bdg6bje-hZqb5BPU5b7xa2zIxXu7qS418BXdp26s7KasyRpszimJFh6muC-LX7R4dJqBNVuujHcO_JSBtew_zYlmGY1OZBpG-Qv_rhtJTVWAdiilW5YHvE9l6iswo9vrMARW4qlaFdYdfYRdLbOVO2RvIzMhiJW8QDA.R2dO83y0mYP1KGHunX_TT77ZStZCwZAfP07pUFSK404&dib_tag=se&keywords=reusable+eco+friendly+products&qid=1731935195&sprefix=reusable+eco+friendly+products+%2Caps%2C241&sr=8-26' // Unique link
  }


];

export default function Stores() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Kitchen', 'Shopping', 'Bathroom', 'Home'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search eco-friendly products..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <span className="px-3 py-1 text-sm text-emerald-700 bg-emerald-100 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-500">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-lg font-medium text-emerald-600">Rs.{product.price}</span>
                </div>
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Buy Now
                      </button>
                    </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}