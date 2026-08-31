# ✅Beats 100% in both runtime and memory [DART]

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4416639/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4416639/)

---


# Code
```
class FoodRatings {
  Map<String,String> highestRatedFoods={};
  Map<String,Map<String,int>> cuisinesFoodRating={};
  Map<String,String> foodCuisineMap={};


  FoodRatings(List<String> foods, List<String> cuisines, List<int> ratings) {
    for(int i=0;i<foods.length;i++){
        addToCuisinesFoodRating(foods[i],cuisines[i],ratings[i]);
    }
  }

  void addToCuisinesFoodRating(String food,String cuisine,int rating){
      if(!cuisinesFoodRating.containsKey(cuisine)){
          cuisinesFoodRating[cuisine] = {food:rating};
          highestRatedFoods[cuisine]=food;
      }else{
          cuisinesFoodRating[cuisine]![food]=rating;
          if (rating > cuisinesFoodRating[cuisine]![highestRatedFoods[cuisine]]! ||
          (rating == cuisinesFoodRating[cuisine]![highestRatedFoods[cuisine]] &&
              food.compareTo(highestRatedFoods[cuisine]!) < 0)) {
                highestRatedFoods[cuisine] = food;
            }
      }
      foodCuisineMap[food]=cuisine;
  }
  
  void changeRating(String food, int newRating) {
  if (foodCuisineMap.containsKey(food)) {
    String cuisine = foodCuisineMap[food]!;
    int currentRating = cuisinesFoodRating[cuisine]![food] ?? 0;
    cuisinesFoodRating[cuisine]![food] = newRating;

    if (newRating > cuisinesFoodRating[cuisine]![highestRatedFoods[cuisine]]! ||
        (newRating == cuisinesFoodRating[cuisine]![highestRatedFoods[cuisine]] &&
            food.compareTo(highestRatedFoods[cuisine]!) < 0)) {
      highestRatedFoods[cuisine] = food;
    } else if (food == highestRatedFoods[cuisine] && newRating < currentRating) {
      updateHighestRatedFood(cuisine);
    }
  }
}

  void updateHighestRatedFood(String cuisine) {
    int maxRating = -1;
    String newHighestRatedFood = "";

    cuisinesFoodRating[cuisine]!.forEach((food, rating) {
        if (rating > maxRating || (rating == maxRating && food.compareTo(newHighestRatedFood) < 0)) {
        maxRating = rating;
        newHighestRatedFood = food;
        }
    });

    highestRatedFoods[cuisine] = newHighestRatedFood;
  }
  
  String highestRated(String cuisine) {
    return highestRatedFoods[cuisine]!;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * FoodRatings obj = FoodRatings(foods, cuisines, ratings);
 * obj.changeRating(food,newRating);
 * String param2 = obj.highestRated(cuisine);
 */
```