// App.tsx
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ReviewForm } from "./components/ReviewForm";
import { ReviewList } from "./components/ReviewList";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FooterSection } from "./components/FooterSection";
import { Toaster } from "@/components/ui/sonner";

export interface Review {
  id: string;
  shopName: string;
  reviewText: string;
  rating: number;
  createdAt: string;
}

// Data validation function
function isValidReview(data: any): data is Review {
  return (
    typeof data === "object" &&
    typeof data.id === "string" &&
    typeof data.shopName === "string" &&
    typeof data.reviewText === "string" &&
    typeof data.rating === "number" &&
    typeof data.createdAt === "string"
  );
}

function isValidReviewArray(data: any): data is Review[] {
  return Array.isArray(data) && data.every(isValidReview);
}

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load reviews from localStorage on component mount
  useEffect(() => {
    try {
      const savedReviews = localStorage.getItem("shopReviews");
      if (savedReviews) {
        const parsedReviews = JSON.parse(savedReviews);
        if (isValidReviewArray(parsedReviews)) {
          setReviews(parsedReviews);
        } else {
          console.warn("Invalid reviews data in localStorage, resetting...");
          localStorage.removeItem("shopReviews");
        }
      }
    } catch (error) {
      console.error("Failed to load reviews from localStorage", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("shopReviews", JSON.stringify(reviews));
      } catch (error) {
        console.error("Failed to save reviews to localStorage", error);
      }
    }
  }, [reviews, isLoading]);

  const addReview = (reviewData: Omit<Review, "id" | "createdAt">) => {
    const newReview: Review = {
      ...reviewData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  const updateReview = (updatedReview: Review) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === updatedReview.id ? updatedReview : review
      )
    );
    setEditingReview(null);
  };

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  const filteredReviews = reviews.filter((review) =>
    review.shopName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      {/* Main Content */}
      <div className="mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 container mx-auto">
          {/* Review Form */}
          <div className="">
            <ReviewForm
              onSubmit={editingReview ? updateReview : addReview}
              editingReview={editingReview}
              onCancelEdit={() => setEditingReview(null)}
            />
          </div>

          {/* Review List */}
          <div>
            <ReviewList
              reviews={filteredReviews}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onEdit={setEditingReview}
              onDelete={deleteReview}
            />
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <FooterSection />
      <Toaster />
    </div>
  );
}

export default App;
