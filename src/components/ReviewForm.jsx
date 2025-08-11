import { useState, useEffect } from "react";
import { Star, Send, X, Edit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ReviewForm({ onSubmit, editingReview, onCancelEdit }) {
  const [shopName, setShopName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    if (editingReview) {
      setShopName(editingReview.shopName);
      setReviewText(editingReview.reviewText);
      setRating(editingReview.rating);
    } else {
      resetForm();
    }
  }, [editingReview]);

  const resetForm = () => {
    setShopName("");
    setReviewText("");
    setRating(0);
    setHoveredRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!shopName.trim() || !reviewText.trim() || rating === 0) {
      toast.error("Please fill in all fields and select a rating");
      return;
    }

    if (reviewText.length > 500) {
      toast.error("Review text must be 500 characters or less");
      return;
    }

    const reviewData = {
      shopName: shopName.trim(),
      reviewText: reviewText.trim(),
      rating,
    };

    if (editingReview) {
      onSubmit({ ...editingReview, ...reviewData });
      toast.success("Review updated successfully!");
    } else {
      onSubmit(reviewData);
      toast.success("Review submitted successfully!");
      resetForm();
    }
  };

  const handleCancel = () => {
    resetForm();
    onCancelEdit?.();
    toast.info("Edit cancelled");
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm shadow-xl">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center space-x-2 text-2xl">
          {editingReview ? (
            <>
              <Edit2 className="w-6 h-6 text-blue-600" />
              <span>Edit Review</span>
            </>
          ) : (
            <>
              <Send className="w-6 h-6 text-blue-600" />
              <span>Write a Review</span>
            </>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shop Name */}
          <div className="space-y-2">
            <Label
              htmlFor="shopName"
              className="text-sm font-medium text-gray-700"
            >
              Shop Name *
            </Label>
            <Input
              id="shopName"
              placeholder="Enter the shop name"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              maxLength={100}
            />
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">
              Rating *
            </Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`p-1 transition-all duration-200 ${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-500 scale-110"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= (hoveredRating || rating) ? "fill-current" : ""
                    }`}
                  />
                </button>
              ))}
              <span className="ml-3 text-sm text-gray-600">
                {rating > 0 && `${rating} out of 5 stars`}
              </span>
            </div>
          </div>

          {/* Review Text */}
          <div className="space-y-2">
            <Label
              htmlFor="reviewText"
              className="text-sm font-medium text-gray-700"
            >
              Your Review *
            </Label>
            <Textarea
              id="reviewText"
              placeholder="Share your shopping experience..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={6}
              className="bg-white/80 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
              maxLength={500}
            />
            <div className="text-xs text-gray-500">
              {reviewText.length}/500 characters
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              type="submit"
              className="flex-1 bg-black text-purple-600 px-8 py-3"
            >
              {editingReview ? (
                <>
                  <Edit2 className="w-4 h-4 mr-2" />
                  Update Review
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Review
                </>
              )}
            </Button>

            {editingReview && (
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="border-gray-300 hover:border-red-500 hover:text-red-600"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
