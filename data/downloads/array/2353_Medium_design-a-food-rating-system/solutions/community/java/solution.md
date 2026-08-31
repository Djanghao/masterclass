# ✅Beats 100% - Explained with [ Video ] - HashMap + Priority Queue - C++/Java/Python/JS  - Visualized

**Author:** lancertech6
**Votes:** 131
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4414602/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4414602/)

---

![Screenshot 2023-12-17 075950.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/hOa09Edm3Ss](https://youtu.be/hOa09Edm3Ss)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 900 Subscribers*
*Current Subscribers: 830*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To implement the FoodRatings class, we can use a combination of data structures such as HashMaps and PriorityQueues. We need to efficiently handle changing ratings and finding the highest-rated food for a given cuisine.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a class `Info` to represent a combination of food, cuisine, and rating.
2. Use two maps: `foodMap` to store food information, and `cuisineMap` to store cuisine-specific PriorityQueues of Info objects.
3. In the constructor, populate these maps based on the input arrays.
4. For `changeRating` method, update the rating in `foodMap` and remove the corresponding Info object from the `cuisineMap` PriorityQueue.
5. For `highestRated` method, continuously remove Info objects with empty food names from the PriorityQueue until a valid food name is found.

# Complexity
- Constructor:
  - Time Complexity: `O(n*log(n))`, where n is the number of foods. We need to iterate through each food and insert into PriorityQueues.
  - Space Complexity: `O(n)`.
- `changeRating`:
  - Time Complexity: O(log(n)), where n is the number of foods. PriorityQueue operations take logarithmic time.
  - Space Complexity: O(1).
- `highestRated`:
  - Time Complexity: O(log(n)), where n is the number of foods. Removing from PriorityQueue takes logarithmic time.
  - Space Complexity: O(1).

# Code
```java []
class FoodRatings {
    public class Info{
        String food;
        String cuisine;
        int rating;
        public Info(String food,String cuisine,int rating){
            this.food=food;
            this.cuisine=cuisine;
            this.rating=rating;
        }
    }
    Map<String,PriorityQueue<Info>> cuisineMap;
    Map<String, Info> foodMap;
    

    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        cuisineMap=new HashMap<>();
        foodMap=new HashMap<>();
         for(int i=0; i<foods.length; i++){
            Info combo=new Info(foods[i],cuisines[i],ratings[i]);
            foodMap.put(foods[i],combo);
            if(cuisineMap.containsKey(cuisines[i])){
                cuisineMap.get(cuisines[i]).add(combo);
            }
            else{
                PriorityQueue<Info> pq=new PriorityQueue<Info>(new Comparator<Info>(){
                    @Override
                    public int compare(Info a,Info b){
                        int result=b.rating-a.rating;
                        if(result==0){
                            return (a.food).compareTo(b.food);
                        }
                        return result;
                    } 
                }); 
                pq.add(combo);
               cuisineMap.put(cuisines[i],pq);
            }
        }
    }
    
    public void changeRating(String food, int newRating) {
        Info prev=foodMap.get(food);
        Info curr= new Info(food,prev.cuisine,newRating);
        foodMap.put(food,curr);
        prev.food="";
        cuisineMap.get(prev.cuisine).add(curr);
             

        
    }
    
    public String highestRated(String cuisine) {
        while( cuisineMap.get(cuisine).peek().food.equals("")){
            cuisineMap.get(cuisine).remove();
        }
        return cuisineMap.get(cuisine).peek().food;
        
    }
   
}
```
```C++ []
#include <set>
#include <string>
using namespace std;

struct Info {
    string name;
    string cuisine;
    int rating{};

    Info() = default;
    Info(string name, string cuisine, int rating) : name{name}, cuisine{cuisine}, rating{rating}{}

    bool operator<(const Info& first) const {
        if (rating == first.rating) {
            return name < first.name;
        }
        return rating > first.rating;
    }
};

class FoodRatings {
    
    unordered_map<string, Info> foodNameToInfo;
    unordered_map<string, set<Info>> cuisineNameToSortedInfo;

public:
    FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
        for (size_t i = 0; i < foods.size(); ++i) {
            foodNameToInfo.emplace(foods[i], Info(foods[i], cuisines[i], ratings[i]));
            cuisineNameToSortedInfo[cuisines[i]].emplace(foods[i], cuisines[i], ratings[i]);
        }
    }

    void changeRating(const string& food, int newRating) {
        Info& toUpdate = foodNameToInfo[food];
        cuisineNameToSortedInfo[toUpdate.cuisine].erase(toUpdate);
        toUpdate.rating = newRating;
        cuisineNameToSortedInfo[toUpdate.cuisine].insert(toUpdate);
    }

    string highestRated(const string& cuisine) const {
        return cuisineNameToSortedInfo.at(cuisine).begin()->name;
    }
};
```
```Python []
from collections import defaultdict
class FoodRatings(object):

    def __init__(self, foods, cuisines, ratings):
        """
        :type foods: List[str]
        :type cuisines: List[str]
        :type ratings: List[int]
        """
        self.cuisine_to_heap = defaultdict(list)
        self.food_to_cuisine = {}
        self.food_to_rating = defaultdict(int)
        for i in range(len(foods)):
            self.food_to_cuisine[foods[i]] = cuisines[i]
            heapq.heappush(self.cuisine_to_heap[cuisines[i]], (-ratings[i], foods[i]))
            self.food_to_rating[foods[i]] = -ratings[i]
        

    def changeRating(self, food, newRating):
        """
        :type food: str
        :type newRating: int
        :rtype: None
        """
        cuisine = self.food_to_cuisine[food]
        heapq.heappush(self.cuisine_to_heap[cuisine], (-newRating, food))
        self.food_to_rating[food] = -newRating

    def highestRated(self, cuisine):
        """
        :type cuisine: str
        :rtype: str
        """
        smallest_lexico = None
        while len(self.cuisine_to_heap[cuisine]) > 0:
            curr = self.cuisine_to_heap[cuisine][0]
            if curr[0] != self.food_to_rating[curr[1]]:
                # delete old data
                heapq.heappop(self.cuisine_to_heap[cuisine])
                continue
            smallest_lexico = curr[1]
            break
        return smallest_lexico
```
```JavaScript []
/*
 @param{string}name
 @param{string}cuisine
 @param{number}rating
 */
function FoodData(name, cuisine, rating) {
    this.name = name;
    this.cuisine = cuisine;
    this.rating = rating;
}

class FoodRatings {

    constructor(foods, cuisines, ratings) {
        //Map<string, FoodData>
        this.foodNameToFoodData = new Map();
        this.cuisineNameToHeapifiedFoodData = new Map();

        for (let i = 0; i < foods.length; ++i) {
            let currentFood = new FoodData(foods[i], cuisines[i], ratings[i]);
            this.foodNameToFoodData.set(foods[i], currentFood);
            if (!this.cuisineNameToHeapifiedFoodData.has(cuisines[i])) {
                this.cuisineNameToHeapifiedFoodData.set(cuisines[i],
                        new MaxPriorityQueue({compare: (x, y) => (x.rating === y.rating) ? x.name.localeCompare(y.name) : (y.rating - x.rating)}));
            }
            this.cuisineNameToHeapifiedFoodData.get(cuisines[i]).enqueue(currentFood);
        }
    }

    changeRating(food, newRating) {
        let toUpdate = this.foodNameToFoodData.get(food);
        let updated = new FoodData(toUpdate.name, toUpdate.cuisine, newRating);
        this.foodNameToFoodData.set(food, updated);
        this.cuisineNameToHeapifiedFoodData.get(toUpdate.cuisine).enqueue(updated);
    }

    highestRated(cuisine) {
        let highestRatedFoodForCuisine = "";
        while (true) {
            let food = this.cuisineNameToHeapifiedFoodData.get(cuisine).front();
            if (food.rating !== this.foodNameToFoodData.get(food.name).rating) {
                this.cuisineNameToHeapifiedFoodData.get(cuisine).dequeue();
            } else {
                highestRatedFoodForCuisine = food.name;
                break;
            }
        }
        return highestRatedFoodForCuisine;
    }
}
```
![upvote.png](./images/1.png)
