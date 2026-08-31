# ✅☑[C++/C/Java/Python/JavaScript] || 2 Approaches || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 60
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4414413/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4414413/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
*(Also explained in the code)*

#### ***Approaches 1(Maps with Queue)***
1. **Food Class:** Represents a food item with its rating and name.

1. **FoodRatings Class:** Manages food ratings and cuisines using maps and priority queues.

    - **foodRatingMap:** Stores food names mapped to their ratings.
    - **foodCuisineMap:** Maps food names to their respective cuisines.
    - **cuisineFoodMap:** Organizes food items in priority queues according to their ratings within their cuisines.
1. **Functionalities:**

    - Initializes and updates food ratings and cuisines.
    - Retrieves the highest-rated food item from a specified cuisine, ensuring its current rating matches the stored rating.


# Complexity
- Time complexity:
   $$O(nlogn+mlog(n+m))

$$
    

- Space complexity:
   $$O(n+m)$$
    


# Code
```C++ []
class Food {
public:
    // Store the food's rating.
    int foodRating;
    // Store the food's name.
    string foodName;

    Food(int foodRating, string foodName) {
        this->foodRating = foodRating;
        this->foodName = foodName;
    }

    // Overload the less than operator for comparison
    bool operator<(const Food& other) const {
        // If food ratings are same sort on the basis of their name. (lexographically smaller name food will be on top)
        if (foodRating == other.foodRating) {
            return foodName > other.foodName;
        }
        // Sort on the basis of food rating. (bigger rating food will be on top)
        return foodRating < other.foodRating;
    }
};

class FoodRatings {
    // Map food with its rating.
    unordered_map<string, int> foodRatingMap;
    // Map food with cuisine it belongs to.
    unordered_map<string, string> foodCuisineMap;
    
    // Store all food of a cusine in priority queue (to sort them on ratings/name)
    // Priority queue element -> Food: (foodRating, foodName)
    unordered_map<string, priority_queue<Food>> cuisineFoodMap;

public:
    FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
        for (int i = 0; i < foods.size(); ++i) {
            // Store 'rating' and 'cuisine' of current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps.
            foodRatingMap[foods[i]] = ratings[i];
            foodCuisineMap[foods[i]] = cuisines[i];
            // Insert the '(rating, name)' element in current cuisine's priority queue.
            cuisineFoodMap[cuisines[i]].push(Food(ratings[i], foods[i]));
        }
    } 
    
    void changeRating(string food, int newRating) {
        // Update food's rating in 'foodRating' map.
        foodRatingMap[food] = newRating;
        // Insert the '(new rating, name)' element in respective cuisine's priority queue.
        auto cuisineName = foodCuisineMap[food];
        cuisineFoodMap[cuisineName].push(Food(newRating, food));
    }
    
    string highestRated(string cuisine) {
        // Get the highest rated 'food' of 'cuisine'.
        auto highestRated = cuisineFoodMap[cuisine].top();
        
        // If latest rating of 'food' doesn't match with 'rating' on which it was sorted in priority queue,
        // then we discard this element of the priority queue.
        while (foodRatingMap[highestRated.foodName] != highestRated.foodRating) {
            cuisineFoodMap[cuisine].pop();
            highestRated = cuisineFoodMap[cuisine].top();
        }
        // Return name of the highest rated 'food' of 'cuisine'.
        return highestRated.foodName;
    }
};


```
```C []
struct Food {
    int foodRating;
    char foodName[50];
};

// Struct to represent FoodRatings
struct FoodRatings {
    char foods[100][50];
    char cuisines[100][50];
    int ratings[100];
    int size;
};

void initializeFoodRatings(struct FoodRatings *fr) {
    fr->size = 0;
}

void addFoodRating(struct FoodRatings *fr, char foodName[], char cuisine[], int rating) {
    strcpy(fr->foods[fr->size], foodName);
    strcpy(fr->cuisines[fr->size], cuisine);
    fr->ratings[fr->size] = rating;
    fr->size++;
}

char* highestRated(struct FoodRatings *fr, char cuisine[]) {
    int maxRating = -1;
    char* highestRatedFood = "";

    for (int i = 0; i < fr->size; ++i) {
        if (strcmp(fr->cuisines[i], cuisine) == 0 && fr->ratings[i] > maxRating) {
            maxRating = fr->ratings[i];
            highestRatedFood = fr->foods[i];
        }
    }

    return highestRatedFood;
}

void changeRating(struct FoodRatings *fr, char foodName[], int newRating) {
    for (int i = 0; i < fr->size; ++i) {
        if (strcmp(fr->foods[i], foodName) == 0) {
            fr->ratings[i] = newRating;
            break;
        }
    }
}




```
```Java []
class Food implements Comparable<Food> {
    // Store the food's rating.
    public int foodRating;
    // Store the food's name.
    public String foodName;

    public Food(int foodRating, String foodName) {
        this.foodRating = foodRating;
        this.foodName = foodName;
    }

    // Implement the compareTo method for comparison
    @Override
    public int compareTo(Food other) {
        // If food ratings are the same, sort based on their names (lexicographically smaller name food will be on top)
        if (foodRating == other.foodRating) {
            return foodName.compareTo(other.foodName);
        }
        // Sort based on food rating (bigger rating food will be on top)
        return -1 * Integer.compare(foodRating, other.foodRating);
    }
}

class FoodRatings {
    // Map food with its rating.
    private Map<String, Integer> foodRatingMap;
    // Map food with the cuisine it belongs to.
    private Map<String, String> foodCuisineMap;
    
    // Store all food of a cuisine in a priority queue (to sort them on ratings/name)
    // Priority queue element -> Food: (foodRating, foodName)
    private Map<String, PriorityQueue<Food>> cuisineFoodMap;

    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        foodRatingMap = new HashMap<>();
        foodCuisineMap = new HashMap<>();
        cuisineFoodMap = new HashMap<>();

        for (int i = 0; i < foods.length; ++i) {
            // Store 'rating' and 'cuisine' of the current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps.
            foodRatingMap.put(foods[i], ratings[i]);
            foodCuisineMap.put(foods[i], cuisines[i]);
            // Insert the '(rating, name)' element into the current cuisine's priority queue.
            cuisineFoodMap.computeIfAbsent(cuisines[i], k -> new PriorityQueue<>()).add(new Food(ratings[i], foods[i]));
        }
    } 
    
    public void changeRating(String food, int newRating) {
        // Update food's rating in the 'foodRating' map.
        foodRatingMap.put(food, newRating);
        // Insert the '(new food rating, food name)' element into the respective cuisine's priority queue.
        String cuisineName = foodCuisineMap.get(food);
        cuisineFoodMap.get(cuisineName).add(new Food(newRating, food));
    }
    
    public String highestRated(String cuisine) {
        // Get the highest rated 'food' of 'cuisine'.
        Food highestRated = cuisineFoodMap.get(cuisine).peek();
        
        // If the latest rating of 'food' doesn't match with the 'rating' on which it was sorted in the priority queue,
        // then we discard this element from the priority queue.
        while (foodRatingMap.get(highestRated.foodName) != highestRated.foodRating) {
            cuisineFoodMap.get(cuisine).poll();
            highestRated = cuisineFoodMap.get(cuisine).peek();
        }
        
        // Return the name of the highest-rated 'food' of 'cuisine'.
        return highestRated.foodName;
    }
}


```
```python3 []
class Food:
    def __init__(self, food_rating, food_name):
        # Store the food's rating.
        self.food_rating = food_rating
        # Store the food's name.
        self.food_name = food_name

    def __lt__(self, other):
        # Overload the less than operator for comparison.
        # If food ratings are the same, sort based on their name (lexicographically smaller name food will be on top).
        if self.food_rating == other.food_rating:
            return self.food_name < other.food_name
        # Sort based on food rating (bigger rating food will be on top).
        return self.food_rating > other.food_rating

class FoodRatings:
    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        # Map food with its rating.
        self.food_rating_map = {}
        # Map food with the cuisine it belongs to.
        self.food_cuisine_map = {}
        # Store all food of a cuisine in a priority queue (to sort them on ratings/name).
        # Priority queue element -> Food: (food_rating, food_name)
        self.cuisine_food_map = defaultdict(list)

        for i in range(len(foods)):
            # Store 'rating' and 'cuisine' of the current 'food' in 'food_rating_map' and 'food_cuisine_map' maps.
            self.food_rating_map[foods[i]] = ratings[i]
            self.food_cuisine_map[foods[i]] = cuisines[i]
            # Insert the '(rating, name)' element into the current cuisine's priority queue.
            heapq.heappush(self.cuisine_food_map[cuisines[i]], Food(ratings[i], foods[i]))

    def changeRating(self, food: str, newRating: int) -> None:
        # Update food's rating in 'food_rating' map.
        self.food_rating_map[food] = newRating
        # Insert the '(new rating, name)' element in the respective cuisine's priority queue.
        cuisineName = self.food_cuisine_map[food]
        heapq.heappush(self.cuisine_food_map[cuisineName], Food(newRating, food))

    def highestRated(self, cuisine: str) -> str:
        # Get the highest rated 'food' of 'cuisine'.
        highest_rated = self.cuisine_food_map[cuisine][0]

        # If the latest rating of 'food' doesn't match with the 'rating' on which it was sorted in the priority queue,
        # then we discard this element from the priority queue.
        while self.food_rating_map[highest_rated.food_name] != highest_rated.food_rating:
            heapq.heappop(self.cuisine_food_map[cuisine])
            highest_rated = self.cuisine_food_map[cuisine][0]

        # Return the name of the highest-rated 'food' of 'cuisine'.
        return highest_rated.food_name

```

```javascript []
class Food {
    constructor(foodRating, foodName) {
        this.foodRating = foodRating;
        this.foodName = foodName;
    }

    // Overload the less than operator for comparison
    compareTo(other) {
        if (this.foodRating === other.foodRating) {
            return this.foodName.localeCompare(other.foodName) > 0;
        }
        return this.foodRating < other.foodRating;
    }
}

class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foodRatingMap = new Map();
        this.foodCuisineMap = new Map();
        this.cuisineFoodMap = new Map();

        for (let i = 0; i < foods.length; ++i) {
            this.foodRatingMap.set(foods[i], ratings[i]);
            this.foodCuisineMap.set(foods[i], cuisines[i]);

            if (!this.cuisineFoodMap.has(cuisines[i])) {
                this.cuisineFoodMap.set(cuisines[i], []);
            }
            this.cuisineFoodMap.get(cuisines[i]).push(new Food(ratings[i], foods[i]));
        }

        for (const [cuisine, foods] of this.cuisineFoodMap) {
            foods.sort((a, b) => a.compareTo(b));
        }
    }

    changeRating(food, newRating) {
        this.foodRatingMap.set(food, newRating);
        const cuisineName = this.foodCuisineMap.get(food);
        const foods = this.cuisineFoodMap.get(cuisineName);

        for (const foodObj of foods) {
            if (foodObj.foodName === food) {
                foodObj.foodRating = newRating;
                foods.sort((a, b) => a.compareTo(b));
                break;
            }
        }
    }

    highestRated(cuisine) {
        const foods = this.cuisineFoodMap.get(cuisine);
        if (foods.length === 0) {
            return '';
        }

        while (this.foodRatingMap.get(foods[0].foodName) !== foods[0].foodRating) {
            foods.shift();
        }
        return foods[0].foodName;
    }
}


```

---
#### ***Approaches 2(Maps with Sets)***
1. **foodRatingMap:** Maps each food item to its corresponding rating.
1. **foodCuisineMap:** Maps each food item to the cuisine it belongs to.
1. **cuisineFoodMap:** Associates each cuisine with a set of food items sorted by their ratings.
###### **Functions:**

1. **FoodRatings:** Constructor that initializes food ratings and cuisines, stores them in respective maps, and populates `cuisineFoodMap` with food items sorted by ratings.
1. **changeRating:** Updates a food item's rating by modifying `foodRatingMap` and the corresponding set in `cuisineFoodMap`.
1. **highestRated:** Returns the highest-rated food item for a given cuisine based on the first element in the set sorted by ratings.

# Complexity
- Time complexity:
   $$O((n+m)logn)

$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
class FoodRatings {
    // Map food with its rating.
    unordered_map<string, int> foodRatingMap;
    // Map food with cuisine it belongs to.
    unordered_map<string, string> foodCuisineMap;

    // Store all food of a cusine in set (to sort them on ratings/name)
    // Set element -> Pair: (-1 * foodRating, foodName)
    unordered_map<string, set<pair<int, string>>> cuisineFoodMap;

public:
    FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
        for (int i = 0; i < foods.size(); ++i) {
            // Store 'rating' and 'cuisine' of current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps.
            foodRatingMap[foods[i]] = ratings[i];
            foodCuisineMap[foods[i]] = cuisines[i];
            // Insert the '(-1 * rating, name)' element in current cuisine's set.
            cuisineFoodMap[cuisines[i]].insert({ -ratings[i], foods[i] });
        }
    } 

    void changeRating(string food, int newRating) {
        // Fetch cuisine name for food.
        auto cuisineName = foodCuisineMap[food];

        // Find and delete the element from the respective cuisine's set.
        auto oldElementIterator = cuisineFoodMap[cuisineName].find({ -foodRatingMap[food], food });
        cuisineFoodMap[cuisineName].erase(oldElementIterator);

        // Update food's rating in 'foodRating' map.
        foodRatingMap[food] = newRating;
        // Insert the '(-1 * new rating, name)' element in respective cuisine's set.
        cuisineFoodMap[cuisineName].insert({ -newRating, food });
    }
    
    string highestRated(string cuisine) {
        auto highestRated = *cuisineFoodMap[cuisine].begin();
        // Return name of the highest rated 'food' of 'cuisine'.
        return highestRated.second;
    }
};


```
```C []
// Define Pair struct to simulate std::pair in C++
typedef struct Pair {
    int first;
    char second[50];
} Pair;

// Define Set struct to simulate set<pair<int, string>> in C++
typedef struct Set {
    Pair elements[100]; // Assuming a maximum of 100 elements in the set
    int size;
} Set;

// Define the FoodRatings struct to simulate the class in C++
typedef struct FoodRatings {
    // Map food with its rating
    int foodRatingMap[100]; // Assuming a maximum of 100 food items
    // Map food with cuisine it belongs to
    char foodCuisineMap[100][50]; // Assuming a maximum of 100 food items and 50-character cuisine names

    // Store all food of a cuisine in a set (to sort them on ratings/name)
    Set cuisineFoodMap[100]; // Assuming a maximum of 100 cuisines
    int mapSize; // Size of the cuisineFoodMap
} FoodRatings;

void initFoodRatings(FoodRatings* foodRatings, char foods[][50], char cuisines[][50], int* ratings, int size) {
    foodRatings->mapSize = 0;
    for (int i = 0; i < size; ++i) {
        // Store 'rating' and 'cuisine' of current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps
        foodRatings->foodRatingMap[i] = ratings[i];
        strcpy(foodRatings->foodCuisineMap[i], cuisines[i]);
        // Insert the '(-1 * rating, name)' element in current cuisine's set
        foodRatings->cuisineFoodMap[foodRatings->mapSize].elements[0].first = -ratings[i];
        strcpy(foodRatings->cuisineFoodMap[foodRatings->mapSize].elements[0].second, foods[i]);
        foodRatings->cuisineFoodMap[foodRatings->mapSize].size++;
        foodRatings->mapSize++;
    }
}

void changeRating(FoodRatings* foodRatings, char* food, int newRating) {
    // Fetch cuisine name for food
    char cuisineName[50];
    for (int i = 0; i < 100; ++i) {
        if (strcmp(foodRatings->foodCuisineMap[i], food) == 0) {
            strcpy(cuisineName, foodRatings->foodCuisineMap[i]);
            break;
        }
    }

    // Find and delete the element from the respective cuisine's set
    int idx;
    for (int i = 0; i < foodRatings->cuisineFoodMap->size; ++i) {
        if (strcmp(foodRatings->cuisineFoodMap[i].elements[i].second, food) == 0) {
            idx = i;
            break;
        }
    }
    for (int i = idx; i < foodRatings->cuisineFoodMap->size - 1; ++i) {
        foodRatings->cuisineFoodMap[i] = foodRatings->cuisineFoodMap[i + 1];
    }
    foodRatings->cuisineFoodMap->size--;

    // Update food's rating in 'foodRating' map
    for (int i = 0; i < 100; ++i) {
        if (strcmp(foodRatings->foodCuisineMap[i], food) == 0) {
            foodRatings->foodRatingMap[i] = newRating;
            break;
        }
    }

    // Insert the '(-1 * new rating, name)' element in respective cuisine's set
    foodRatings->cuisineFoodMap[foodRatings->mapSize].elements[0].first = -newRating;
    strcpy(foodRatings->cuisineFoodMap[foodRatings->mapSize].elements[0].second, food);
    foodRatings->cuisineFoodMap[foodRatings->mapSize].size++;
    foodRatings->mapSize++;
}

char* highestRated(FoodRatings* foodRatings, char* cuisine) {
    // Return name of the highest rated 'food' of 'cuisine'
    return foodRatings->cuisineFoodMap->elements[0].second;
}



```
```Java []

class FoodRatings {
    // Map food with its rating.
    private Map<String, Integer> foodRatingMap = new HashMap<>();
    // Map food with cuisine it belongs to.
    private Map<String, String> foodCuisineMap = new HashMap<>();

    // Store all food of a cuisine in set (to sort them on ratings/name)
    // Set element -> Pair: (-1 * foodRating, foodName)
    private Map<String, TreeSet<Pair<Integer, String>>> cuisineFoodMap = new HashMap<>();

    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        for (int i = 0; i < foods.length; ++i) {
            // Store 'rating' and 'cuisine' of current 'food' in 'foodRatingMap' and 'foodCuisineMap' maps.
            foodRatingMap.put(foods[i], ratings[i]);
            foodCuisineMap.put(foods[i], cuisines[i]);

            // Insert the '(-1 * rating, name)' element in the current cuisine's set.
            cuisineFoodMap
                .computeIfAbsent(cuisines[i], k -> new TreeSet<>((a, b) -> {
                    int compareByRating = Integer.compare(a.getKey(), b.getKey());
                    if (compareByRating == 0) {
                        // If ratings are equal, compare by food name (in ascending order).
                        return a.getValue().compareTo(b.getValue());
                    }
                    return compareByRating;
                }))
                .add(new Pair(-ratings[i], foods[i]));
        }
    }

    public void changeRating(String food, int newRating) {
        // Fetch cuisine name for food.
        String cuisineName = foodCuisineMap.get(food);

        // Find and delete the element from the respective cuisine's set.
        TreeSet<Pair<Integer, String>> cuisineSet = cuisineFoodMap.get(cuisineName);
        Pair<Integer, String> oldElement = new Pair<>(-foodRatingMap.get(food), food);
        cuisineSet.remove(oldElement);

        // Update food's rating in 'foodRating' map.
        foodRatingMap.put(food, newRating);
        // Insert the '(-1 * new rating, name)' element in the respective cuisine's set.
        cuisineSet.add(new Pair<>(-newRating, food));
    }

    public String highestRated(String cuisine) {
        Pair<Integer, String> highestRated = cuisineFoodMap.get(cuisine).first();
        // Return name of the highest rated 'food' of 'cuisine'.
        return highestRated.getValue();
    }
}

```
```python3 []
from sortedcontainers import SortedSet

class FoodRatings:
    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        # Map food with its rating.
        self.food_rating_map = {}
        # Map food with cuisine it belongs to.
        self.food_cuisine_map = {}

        # Store all food of a cuisine in a set (to sort them on ratings/name)
        # Set element -> Tuple: (-1 * food_rating, food_name)
        self.cuisine_food_map = defaultdict(SortedSet)

        for i in range(len(foods)):
            # Store 'rating' and 'cuisine' of the current 'food' in 'food_rating_map' and 'food_cuisine_map' maps.
            self.food_rating_map[foods[i]] = ratings[i]
            self.food_cuisine_map[foods[i]] = cuisines[i]
            # Insert the '(-1 * rating, name)' element in the current cuisine's set.
            self.cuisine_food_map[cuisines[i]].add((-ratings[i], foods[i]))

    def changeRating(self, food: str, newRating: int) -> None:
        # Fetch cuisine name for food.
        cuisine_name = self.food_cuisine_map[food]

        # Find and delete the element from the respective cuisine's set.
        old_element = (-self.food_rating_map[food], food)
        self.cuisine_food_map[cuisine_name].remove(old_element)

        # Update food's rating in 'food_rating' map.
        self.food_rating_map[food] = newRating
        # Insert the '(-1 * new rating, name)' element in the respective cuisine's set.
        self.cuisine_food_map[cuisine_name].add((-newRating, food))

    def highestRated(self, cuisine: str) -> str:
        highest_rated = self.cuisine_food_map[cuisine][0]
        # Return name of the highest-rated 'food' of 'cuisine'.
        return highest_rated[1]

```

```javascript []

// In JavaScript, the equivalent implementation using objects and arrays would be:
class FoodRatings {
    constructor(foods, cuisines, ratings) {
        this.foodRatingMap = {};
        this.foodCuisineMap = {};
        this.cuisineFoodMap = {};

        for (let i = 0; i < foods.length; ++i) {
            this.foodRatingMap[foods[i]] = ratings[i];
            this.foodCuisineMap[foods[i]] = cuisines[i];

            if (!this.cuisineFoodMap[cuisines[i]]) {
                this.cuisineFoodMap[cuisines[i]] = [];
            }
            this.cuisineFoodMap[cuisines[i]].push({ rating: -ratings[i], name: foods[i] });
        }
        for (let key in this.cuisineFoodMap) {
            this.cuisineFoodMap[key].sort((a, b) => a.rating - b.rating);
        }
    }

    changeRating(food, newRating) {
        const cuisineName = this.foodCuisineMap[food];
        const cuisineArr = this.cuisineFoodMap[cuisineName];

        const idx = cuisineArr.findIndex(item => item.name === food);
        cuisineArr.splice(idx, 1);

        this.foodRatingMap[food] = newRating;
        this.cuisineFoodMap[cuisineName].push({ rating: -newRating, name: food });
        this.cuisineFoodMap[cuisineName].sort((a, b) => a.rating - b.rating);
    }

    highestRated(cuisine) {
        return this.cuisineFoodMap[cuisine][0].name;
    }
}


```

---


# PLEASE UPVOTE IF IT HELPED

---
---


---