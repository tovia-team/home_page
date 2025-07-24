import React from 'react';

const App = () => {
  const products = [
    {
      id: 1,
      image: "https://user-images.githubusercontent.com/61306041/265280977-c47a0f77-4430-40ec-a60e-b44c9834f6bb.png",
      subtitle: "[특별구성] 크로스플백 + 미니 스크런치 SET",
      title: "[특별구성] 크로스플백 + 미니 스크런치 SET",
      originalPrice: 40000,
      price: 28900,
      discount: 28,
    },
    {
      id: 2,
      image: "https://user-images.githubusercontent.com/61306041/265280986-0e194303-cc6d-4f4c-8ba3-e3efebc70e41.png",
      subtitle: "도트 패브릭 북커버",
      title: "도트 패브릭 북커버",
      originalPrice: 40000,
      price: 25000,
      discount: 38,
    },
    {
      id: 3,
      image: "https://user-images.githubusercontent.com/61306041/265280994-64ebc99c-89ab-4a5a-8d8e-63efdf79a5f4.png",
      subtitle: "브레드이발소X토비아 콜라보 유아 베색 볼캡",
      title: "브랜드이발소X세인트바인 콜라보 유아용 베색 볼캡",
      originalPrice: 32000,
      price: 32000,
      discount: 0,
    },
    {
      id: 4,
      image: "https://user-images.githubusercontent.com/61306041/265281001-0c1b87f5-e4c1-4f79-b39f-547877155187.png",
      subtitle: "폴피 엔젤 키링",
      title: "폴피 엔젤 키링",
      originalPrice: 35000,
      price: 19900,
      discount: 43,
    },
  ];

  const formatPrice = (price) => {
    return `₩${price.toLocaleString()}`;
  };

  const ProductCard = ({ product }) => (
    <div className="border border-gray-200 p-4 text-center hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover mb-3 rounded"
      />
      <h3 className="text-sm font-bold mb-2 text-black min-h-[2.5rem] flex items-center justify-center">
        {product.title}
      </h3>
      <p className="text-xs text-gray-500 mb-3 h-8 leading-tight overflow-hidden">
        {product.subtitle}
      </p>
      
      <div className="space-y-1">
        {product.originalPrice && product.discount > 0 && (
          <div className="text-xs text-gray-400 line-through">
            {formatPrice(product.originalPrice)}
          </div>
        )}
        <div className="text-base font-bold text-black">
          {formatPrice(product.price)}
        </div>
        {product.discount > 0 && (
          <div className="text-xs text-red-500 font-medium">
            {product.discount}%
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans text-black w-full bg-white">
      {/* Global Navigation Bar */}
    
<nav className="w-full bg-black text-white text-xs py-2 px-4 flex justify-center items-center">
  <div className="flex space-x-4">
    <button className="hover:underline transition-all">MEMBER</button>
    <button className="hover:underline transition-all">LOGIN</button>
    <button className="hover:underline transition-all">CART</button>
    <button className="hover:underline transition-all">ORDER</button>
    <button className="hover:underline transition-all">MY PAGE</button>
    <button className="hover:underline transition-all">HELP</button>
  </div>
</nav>

{/* Main Navbar */}
<nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 text-sm sticky top-0 bg-white z-50 shadow-sm">
  <div className="text-2xl font-bold tracking-tight lowercase italic hover:scale-105 transition-transform cursor-pointer">
    saintvine
  </div>
  <div className="flex space-x-8 font-medium uppercase">
    <button className="hover:underline transition-all hover:text-gray-600">HOME</button>
    <button className="hover:underline transition-all hover:text-gray-600">ABOUT</button>
    <button className="hover:underline transition-all hover:text-gray-600">PRODUCT</button>
    <button className="hover:underline transition-all hover:text-gray-600">COLLABORATION</button>
    <button className="hover:underline transition-all hover:text-gray-600">CONTACT</button>
  </div>
  <div className="flex space-x-4 text-lg">
    <button className="hover:opacity-60 transition-opacity">🛒</button>
    <button className="hover:opacity-60 transition-opacity">👤</button>
    <button className="hover:opacity-60 transition-opacity">🔍</button>
  </div>
</nav>

      {/* Hero Section */}
      <div className="relative bg-white min-h-screen">
        {/* Section Number */}
        <div className="absolute top-8 left-8 text-8xl font-bold leading-none text-black z-10 opacity-20">
          03
        </div>
        
        {/* Brand Logo - Top Right */}
        <div className="absolute top-8 right-8 text-xl font-bold italic lowercase z-10 opacity-60">
          saintvine
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-white">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 uppercase">
              HEAL UP , HEAT UP<br />
              <span className="text-2xl lg:text-4xl">LET'S GO BACK TO SWEET HOME WITH US</span>
            </h1>
            <p className="text-lg text-gray-600 font-light">
              for every day use ___
            </p>
          </div>

          {/* Right Side - Image and Review */}
          <div className="relative bg-gradient-to-br from-gray-100 via-pink-100 to-pink-200 flex items-center justify-center">
            {/* Review Badge */}
            <div className="absolute top-8 left-8 bg-gray-600 text-white px-4 py-2 text-sm font-medium rounded">
              REVIEW
            </div>
            
            {/* Review Text */}
            <div className="absolute top-20 left-8 text-gray-700 italic text-lg leading-relaxed">
              from love,<br />
              <span className="text-gray-600">for the ones left behind</span>
            </div>

            {/* Main Image */}
            <div className="relative">
              <img 
                src="https://user-images.githubusercontent.com/61306041/265280960-3b3fcd36-b8ad-4f47-92c6-6dc92ce9c701.png" 
                alt="Model with dog" 
                className="w-80 h-80 object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Small Product Images - Right Side */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
              {products.slice(0, 3).map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={`Product ${index + 1}`} 
                    className="w-16 h-16 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom Section - Collaboration */}
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="text-2xl font-bold">×</span>
            <span className="text-2xl font-bold italic">saintvine</span>
          </div>
          <img 
            src="https://user-images.githubusercontent.com/61306041/265280994-64ebc99c-89ab-4a5a-8d8e-63efdf79a5f4.png" 
            alt="Collaboration product" 
            className="mx-auto w-80 h-60 object-cover rounded-lg shadow-lg mb-6"
          />
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            브랜드이발소X세인트바인 콜라보 유아용 베색 볼캡
          </h3>
          <div className="text-2xl font-bold text-black">₩32,000</div>
        </div>
      </div>
    </div>
  );
};

export default App;