# 【Video】Give me 5 minutes - How we think about a solution

**Author:** niits
**Votes:** 84
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4414691/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4414691/)

---

# Intuition
I like sushi.

---

# Solution Video

https://youtu.be/F6RAuglUOSg

\u25A0 Timeline of the video

`0:04` Explain constructor
`1:21` Why -rating instead of rating?
`4:09` Talk about changeRating
`5:19` Time Complexity and Space Complexity
`6:36` Step by step algorithm of my solution code
`6:39` Python Tips - SortedList

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,505
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

---

# Approach

## How we think about a solution

I think it would be easier to understand while looking at the solution code below.

Let's talk about constructor.

We initialize food information and sorted cuisine list. Food information is used when we change rating. We have data like this

```
self.food_info[food] = (cuisine, rating)
```
- Why we get food, cuisine and rating together?

That's because when we return the highest rated food in `highestRated`, there is possiblity that mulitple foods have the same highest rating. In that case the description says "If there is a tie, return the item with the lexicographically smaller name". That's why there is a case where we have to compare alphabets. We should have 3 information together.

To achive that, sorted cuisine also have
```
(-rating, food)
```

- Why `-rating` instead of `rating`?

Let's think about this case

```
food, rating
sushi, 8
miso, 14
ramen, 14
```
Sorted list sorts data from small to large.

If we add (rating, food) to sorted cuisine list, we will get this list
```
'japanese': SortedList([(8, 'sushi'), (14, 'miso'), (14, 'ramen')])
```
If we add (-rating, food) to sorted cuisine list, we will get this list
```
'japanese': SortedList([(-14, 'miso'), (-14, 'ramen'), (-8, 'sushi')])
```

We want to return the highest rating food with $$O(1)$$ time. In that case, we have two choices.

**Return the first data or the last data.**

But problem is there is possiblity that we have the same rating with different foods(`14` in this case). 

In the first case, we will return `ramen`. But that is wrong answer because as I told you, the description says "If there is a tie, return the item with the lexicographically smaller name". If we follow the rule, we should return `miso` because `m` (= miso) is smaller than `r` (= ramen). we need to iterate through the list. That is not $$O(1)$$ time.

On the other hand, look at the second case. `miso` is the first data, because if we convert positive highest rating to negative, the number become the smallest. And Sorted list sorts all data lexicographically, so all we have to do is just return the first food in the list.

When we implement `highestRated`, we can do like this.
```
def highestRated(self, cuisine: str) -> str:
    return self.sorted_cuisine[cuisine][0][1]
```

Summary of constructor

---

\u2B50\uFE0F Points

Create `food_info` with `HashMap` and add all data
```
self.food_info[food] = (cuisine, rating)
```

Create `sorted_cuisine` with `defaultdict(SortedList)` and add all data
```
self.sorted_cuisine[cuisine].add((-rating, food))
```

---

Let's talk about `changeRating`.

`food_info` has `cuisine` and `current rating`. Take them before update them with `new rating`.

Since we have the same rating with different foods, so remove current rating food with `(-old_rating, food)` from sorted cuisine list, so that we can definitely remove the target food, because constraint says "All the strings in foods are distinct". `old_rating` may be the same but food name is definitely different, so combination of `(-old_rating, food)` is actually unique.

Then add negetive new rating and food to sorted cuisine list.

Easy!\uD83D\uDE04
Let's see a real algorithm!

Today, I don't have enogugh time again. So could someone help me convert Python or Java to JavaScript or C++? I want to create a video before I go out.

---

# Complexity

This is based on Python.

### Init:

-   Time Complexity: $$O(N * log(N))$$ where N is the number of foods. The primary operation contributing to this time complexity is the insertion of elements into the SortedList, which has a logarithmic time complexity.

-   Space Complexity: $$O(N)$$ for storing food_info and sorted_cuisine.

### changeRating:

- Time Complexity: $$O(log(N))$$ where N is the number of foods in the specific cuisine. This is the time complexity of removing and adding elements to the SortedList.

- Space Complexity: $$O(1)$$. The space used is constant.

### highestRated:

- Time Complexity: $$O(1)$$. Accessing the first element of the SortedList takes constant time.

- Space Complexity: $$O(1)$$. The space used is constant.

```python []
from sortedcontainers import SortedList

class FoodRatings:
    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.food_info = {}
        self.sorted_cuisine = defaultdict(SortedList)
        
        for food, cuisine, rating in zip(foods, cuisines, ratings):
            self.food_info[food] = (cuisine, rating)
            self.sorted_cuisine[cuisine].add((-rating, food))

    def changeRating(self, food: str, newRating: int) -> None:
        cuisine, old_rating = self.food_info[food]
        self.food_info[food] = (cuisine, newRating)
        self.sorted_cuisine[cuisine].discard((-old_rating, food))
        self.sorted_cuisine[cuisine].add((-newRating, food))

    def highestRated(self, cuisine: str) -> str:
        return self.sorted_cuisine[cuisine][0][1]
```
```java []
class FoodRatings {
    private Map<String, Pair<String, Integer>> foodInfo = new HashMap<>();
    private Map<String, SortedSet<Pair<Integer, String>>> sortedCuisine = new HashMap<>();

    public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
        for (int i = 0; i < foods.length; i++) {
            String food = foods[i];
            String cuisine = cuisines[i];
            int rating = ratings[i];

            foodInfo.put(food, new Pair<>(cuisine, rating));
            sortedCuisine
                .computeIfAbsent(cuisine, k -> new TreeSet<>(Comparator
                    .<Pair<Integer, String>, Integer>comparing(Pair::getKey)
                    .reversed()
                    .thenComparing(Pair::getValue)))
                .add(new Pair<>(rating, food));
        }        
    }
    
    public void changeRating(String food, int newRating) {
        Pair<String, Integer> info = foodInfo.get(food);
        String cuisine = info.getKey();
        int oldRating = info.getValue();

        SortedSet<Pair<Integer, String>> sortedList = sortedCuisine.get(cuisine);
        sortedList.remove(new Pair<>(oldRating, food));
        sortedList.add(new Pair<>(newRating, food));

        foodInfo.put(food, new Pair<>(cuisine, newRating));        
    }
    
    public String highestRated(String cuisine) {
        SortedSet<Pair<Integer, String>> sortedList = sortedCuisine.get(cuisine);
        return sortedList.isEmpty() ? "" : sortedList.first().getValue();        
    }
}

```

## Step by step algorithm

This is based on Python.

### `__init__` Function:
1. **Initialize Data Structures:**
   - Create an empty dictionary `food_info` to store information about each food (cuisine and rating).
   - Create a defaultdict of SortedList named `sorted_cuisine` to store foods sorted by rating for each cuisine.

2. **Iterate Through Input Lists:**
   - Use a zip operation to iterate over `foods`, `cuisines`, and `ratings` simultaneously.
   - For each triplet (food, cuisine, rating):
      - Add an entry to `food_info` mapping food to a tuple of cuisine and rating.
      - Add an entry to `sorted_cuisine` mapping cuisine to a SortedList of pairs (-rating, food).

### `changeRating` Function:
1. **Get Current Information:**
   - Retrieve the current cuisine and old rating for the specified food from `food_info`.

2. **Update Food Information:**
   - Update the entry in `food_info` for the specified food with the same cuisine and the new rating.

3. **Update SortedList:**
   - Remove the pair (-old_rating, food) from the SortedList associated with the cuisine in `sorted_cuisine`.
   - Add the pair (-newRating, food) to the same SortedList.

### `highestRated` Function:
1. **Get Highest Rated Food:**
   - Retrieve the first element (highest rated) from the SortedList associated with the specified cuisine in `sorted_cuisine`.

2. **Return Food Name:**
   - Return the food name from the retrieved pair.

### Summary:
- `__init__` initializes data structures by populating `food_info` and `sorted_cuisine` with the provided input lists.
- `changeRating` updates the rating for a specified food, modifying both `food_info` and the associated SortedList in `sorted_cuisine`.
- `highestRated` returns the name of the highest-rated food for a specified cuisine by accessing the first element of the associated SortedList.

This algorithm ensures that food information and cuisine ratings are efficiently stored and updated, and the highest-rated food can be quickly retrieved.


---

## Python Tips - SortedList

`SortedList` is a sorted container type in Python provided by the `sortedcontainers` library. It's an alternative to Python's built-in `list` or `collections.deque` with the added benefit of maintaining the elements in sorted order. This makes it efficient for tasks that require frequent insertion, deletion, and access operations while keeping the collection sorted.

Here are some key features and characteristics of `SortedList`:

1. **Sorted Order:**
   - Elements in a `SortedList` are always kept in sorted order. When you iterate through the elements, they are returned in sorted order.

2. **Efficient Insertions and Deletions:**
   - Inserting an element into a `SortedList` has a time complexity of O(log N), where N is the number of elements.
   - Deleting an element from a `SortedList` also has a time complexity of O(log N).

3. **Fast Access to Sorted Elements:**
   - Accessing elements by index or retrieving the minimum/maximum element has a time complexity of O(1).

4. **Duplicates Handling:**
   - `SortedList` allows duplicate elements, and they are placed next to each other in sorted order.

5. **Custom Comparisons:**
   - You can provide custom comparison functions to define the sorting order.

6. **Built-in Operations:**
   - `SortedList` supports various set-like and list-like operations, such as union, intersection, difference, indexing, slicing, and more.

Here is a simple example of using `SortedList`:

```python
from sortedcontainers import SortedList

# Create a SortedList
sorted_list = SortedList([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])

# Access elements
print(sorted_list) # Output: SortedList([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
print(sorted_list[2]) # Output: 2

# Insert and delete elements
sorted_list.add(0)
sorted_list.discard(3)
print(sorted_list) # Output: SortedList([0, 1, 1, 2, 4, 5, 5, 5, 6, 9])

# Custom comparison
custom_sorted_list = SortedList([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], key=lambda x: -x)
print(custom_sorted_list) # Output: SortedList([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1])
```

Keep in mind that `SortedList` may have a slight performance overhead compared to a regular `list` for very small datasets, so it's often chosen when the collection needs to be frequently modified and accessed in sorted order.


---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418270/video-give-me-5-minutes-how-we-think-about-a-solution/

video
https://youtu.be/DMzedO_tGr8

\u25A0 Timeline of the video

`0:05` Explain solution formula
`0:47` Talk about the first smallest and the second smallest
`3:32` Talk about the first biggest and the second biggest
`5:11` coding
`8:10` Time Complexity and Space Complexity
`8:26` Step by step algorithm of my solution code

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/valid-anagram/solutions/4410317/video-give-me-5-minutes-4-solutions-how-we-think-about-a-solution/

video
https://youtu.be/UR9geRGBvhk

\u25A0 Timeline of the video

`0:03` Explain Solution 1
`2:52` Coding of Solution 1
`4:38` Time Complexity and Space Complexity of Solution 1
`5:04` Step by step algorithm of my solution code of Solution 1
`5:11` Explain Solution 2
`8:20` Coding of Solution 2
`10:10` Time Complexity and Space Complexity of Solution 2
`10:21` Step by step algorithm of my solution code of Solution 2
`10:38` Coding of Solution 3
`12:18` Time Complexity and Space Complexity of Solution 3
`13:15` Coding of Solution 4
`13:37` Time Complexity and Space Complexity of Solution 4
`13:52` Step by step algorithm of my solution code of Solution 3


