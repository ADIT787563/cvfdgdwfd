interface GalleryProps {
  onImageClick: (image: { src: string; alt: string }) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  const mushrooms = [
    {
      name: "Shiitake Mushrooms",
      description: "Rich, umami flavor perfect for gourmet cooking and health benefits.",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Button Mushrooms",
      description: "Classic white mushrooms, versatile and perfect for everyday cooking.",
      image: "https://images.unsplash.com/photo-1564471203456-8c4e7a6da1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Oyster Mushrooms",
      description: "Delicate texture with a subtle, sweet flavor ideal for stir-fries.",
      image: "https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Portobello Mushrooms",
      description: "Large, meaty mushrooms perfect for grilling and vegetarian dishes.",
      image: "https://images.unsplash.com/photo-1571173980138-1b3b9c8a50b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Enoki Mushrooms",
      description: "Thin, delicate mushrooms with a crisp texture and mild flavor.",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      name: "Cremini Mushrooms",
      description: "Baby portobello mushrooms with a rich, earthy flavor.",
      image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Premium Mushroom Varieties</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our diverse selection of fresh, high-quality mushrooms</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mushrooms.map((mushroom, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onImageClick({ src: mushroom.image, alt: mushroom.name })}
            >
              <img 
                src={mushroom.image} 
                alt={mushroom.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{mushroom.name}</h3>
                <p className="mt-2 text-gray-600">{mushroom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
