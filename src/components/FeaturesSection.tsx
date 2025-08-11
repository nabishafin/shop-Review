import { Shield, Search, Edit3, Star, Clock, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Star,
      title: "Star Ratings",
      description: "Easy 5-star rating system with instant visual feedback",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Quickly find reviews by shop name or rating filters",
      color: "from-blue-500 to-teal-500",
    },
    {
      icon: Edit3,
      title: "Edit & Delete",
      description: "Update your reviews anytime or remove them with ease",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Persistent Storage",
      description: "Your reviews are saved securely and never lost",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose
            <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent font-semibold">
              {" "}
              ShopReview?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make sharing and discovering
            shopping experiences effortless and trustworthy.
          </p>
        </div>

        {/* Image left, content right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12  mx-auto">
          {/* Left Side Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
              alt="Shopping experience"
              className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>

          {/* Right Side Features List */}
          <div className="flex-1 space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-6">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-purple-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2 max-w-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
