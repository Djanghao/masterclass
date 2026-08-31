# Official Solution

**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solution/](https://leetcode.com/problems/design-a-food-rating-system/solution/)

---

[TOC]

## Solution

---


### Approach 1: Hash Maps and Priority Queue

#### Intuition

We are given three arrays:
`foods`, containing food's names,
`cuisines`, containing the name of the cuisine of the food at the respective index in the `foods` array, and
`ratings`, containing the rating of the food at respective index in the `foods` array.

<br />

We have to update the food's ratings in the method `changeRating(food, newRating)`.

One way is to search for the `food` in the `foods` array and then update the rating at the respective index in the `ratings` array. However, searching for `food` in the `foods` array for every update will not be efficient.
Instead, we should keep the food names mapped with their ratings, we can use a hash map (named `foodRatingMap`) and this hash map will enable quick retrieval and modification of the respective food's rating.

To change the rating of any `food`, we simply update the rating stored in this `foodRatingMap`.

![foodRatingsMap](../Figures/2353/Slide1a.jpg)

Another requirement is to return the highest-rated food of a particular cuisine in the method `highestRated(cuisine)`. We are given `cuisines` and `foods` arrays, we can group and store all foods belonging to one cuisine together beforehand, this will help prevent iterating on foods that don't belong to the given cuisine.

For grouping, we can again use a hash map (named `cuisineFoodMap`) that maps cuisine names and arrays of foods belonging to that particular cuisine. This hash map will enable quick retrieval of all foods belonging to a particular cuisine.

![cuisineFoodMap](../Figures/2353/Slide1b.jpg)


However, retrieving the highest-rated food would require iterating over all the foods of that particular cuisine each time. If we could maintain the food in `cuisineFoodMap` arrays in a sorted order (sorted according to ratings) then it might save us some time.

You might be thinking of sorting the array using the in-built `sort()` method, but if any element of the array changes (i.e. rating of any food changes) we will have to again sort the whole array using the `sort()` method, this will make the algorithm inefficient.

<br />

**This hints that we should store the foods of a particular cuisine in a max-heap instead of an array.**

> Max-heap data structure is a complete binary tree, where the parent nodes are always bigger than the corresponding child nodes, in order to keep the maximum-valued element at the root node of the tree. Here, pushing and popping an element are both logarithmic time operations, but getting the maximum-valued element is a constant time operation.

If you are new to this data structure we recommend that you read [Leetcode's Heap Explore Card](https://leetcode.com/explore/learn/card/heap/).

<br />

We will use priority queues which are internally implemented using a heap. Each element of the priority queue will be an object of `class Food(integer foodRating, string foodName)`. To keep the appropriate element on the top of the priority queue we will use a custom comparator to define the logic for comparing two elements.

Since the priority queue will keep the elements sorted based on their ratings, you might be thinking: when we modify the rating of food, do we need to remove this food with the old rating from the priority queue to ensure accuracy and then add the food with the new rating?

For example, if we change the rating of food `X` from `10` to `1`, the old data `(10, X)` in the queue might become the highest-rated food, which it shouldn't be. Should we remove it in this case?

![change_rating](../Figures/2353/Slide2.jpg)

First of all, searching for elements in the priority queue is a time-consuming task as in the worst case we would have to iterate over all elements stored in the priority queue.

Secondly, we can avoid the deletion of old rating elements.

If we fetch any element `(foodRating, foodName)` from the priority queue then there are only two cases: either the element has the correct `foodRating` or an old rating.
One food can only have one rating, we can verify the fetched element's `foodRating` with the rating stored in `foodRatingMap` against the key `foodName`. If the values don't match, it means the rating for `foodName` was changed and we can safely discard this fetched element of the priority queue and move on to the next highest rating in the priority queue.

![remove_pq_element](../Figures/2353/Slide3.jpg)

Also remember that while changing the rating, it is necessary to get the cuisine name of that corresponding food to push the new rating element into the appropriate priority queue. To obtain the cuisine name, we must map the food name to its respective cuisine name as well using another hash map (say `foodCuisineMap`).


![figure2](../Figures/2353/Slide4.jpg)


![figure3](../Figures/2353/Slide5.jpg)



#### Algorithm

1. Create a class `Food` containing `foodRating` and `foodName` properties, and overload less than operator method to keep the highest rated or lexicographically smaller named element on the top in the priority queue.

2. Create three hash maps:
    - `foodRatingMap`, to store ratings associated with the respective food.
    - `foodCuisineMap`, to store the cuisine name of the respective food.
    - `cuisineFoodMap`, to store `Food(foodRating, foodName)` elements in a priority queue associated with the respective cuisine.

3. Initialization. Iterate on all indices of the `foods` array, and for each index `i`:
    - Store `(foods[i], ratings[i])` and `(foods[i], cuisines[i])` key-value pairs in `foodRatingMap` and `foodCuisineMap` respectively.
    - Insert `Food(ratings[i], foods[i])` element in the priority queue of `cuisines[i]` key of `cuisineFoodMap`.

4. Implementing `changeRating(food, newRating)` method:
    - Update new rating in `foodRatingMap`.
    - Fetch the cuisine name for `food` from `foodCuisineMap`.
    - Insert the `Food(newRating, food)` element in the priority queue of the cuisine name in `cuisineFoodMap`.

5. Implementing `highestRated(cuisine)` method:
    - Get the top element `(i.e. highestRated)` from the priority queue of `cuisine` in `cuisineFoodMap`.
    - If the rating of the top element and the rating of the corresponding food in `foodRatingMap` are not the same, i.e. `highestRated.foodRating != foodRatingMap[highestRated.foodName]`, then we discard and remove the current top element and fetch the next top element from the priority queue. Repeat this step until ratings are the same.
    - Return the food name of the top element, i.e. `highestRated.foodName`.


#### Implementation

<iframe src="https://leetcode.com/playground/7pxsjysQ/shared" frameBorder="0" width="100%" height="500" name="7pxsjysQ"></iframe>


#### Complexity Analysis

Here, $n$ is the initial size of the `foods` array, and let, $m$ be the number of calls made to `changeRating` and `highestRated` methods.

* Time complexity:  $O(n \log n +  m \log (n + m))$
    - **Initialization:**
        - We iterate over all `foods` elements and insert them into appropriate hash maps and priority queues. Inserting a value into the hash map takes constant time, but, inserting a value into the priority queue will take logarithmic time.
         - Thus, for $n$ elements, the total time taken will be $O(n \log n)$ time.

    - **changeRating(food, newRating)** method:
        - Updating the rating in the hash map will take constant time.
        - But, in the worst case, the priority queue can contain $(n + m)$ elements, and inserting an element into the priority queue will take $O(\log (n + m))$ time.
        - Thus, for $m$ insertions, the total time taken will be $O(m \log (n + m))$ time.

    - **highestRated(cuisine)** method:
        - Getting the cuisine name from the hash map and the top element of the priority queue are both constant time operations.
        - But, we might also remove some elements from the priority queue. Each removal operation will take $O(\log (n + m))$ time.
        - Each element is permanently unused after it is removed, i.e. they are removed at most once, so, for all `highestRated` method calls we may remove at most $m$ elements.
        - Thus, the total time taken for all calls will be $O(m \log (n + m))$ time.

* Space complexity: $O(n + m)$
    - In `foodRatingMap`, and `foodCuisineMap` we will store all $n$ elements, thus, they both will take $O(n)$ space.
    - In `cuisineFoodMap` we might insert $(n + m)$ elements, thus, it will take $O(n + m)$ space.


<br />

---



### Approach 2: Hash Maps and Sorted Set

#### Intuition

Unlike in the previous approach, we can also use the built-in advanced data structure sorted/ordered set instead of max-heap.

> This data structure internally uses a height-balanced binary search tree (like, a red-black tree, AVL tree, etc.) to keep the data sorted. Thus, pushing an element, popping an element, and getting the minimum-valued element are all logarithmic time operations because the tree balances itself after each operation.

You can read more about [Height-Balanced BST](https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/143/appendix-height-balanced-bst/1021/) in our explore card.

In Python, we will use `SortedSet`, which is internally implemented as a sorted list that maintains its elements in sorted order. Here insertion and deletion algorithms often use binary search related techniques to achieve $O(\log n)$ time complexity.

> Note: This sorted set approach is not expected during the interview, but we are including it here for the completeness of the article and to familiarize you with a built-in advanced data structure.

<br />

In this approach, we will show the implementation without defining an additional class and its custom comparator.
We will use the `Pair` (another in-built data structure) to store the food's rating and food name elements in the sorted set.

By default, the sorted set sorts the elements in increasing order.
We want to store the elements in decreasing order of food ratings, so we will store the food ratings by their negative values (because, if $ratingA > ratingB$ then $-ratingA < -ratingB$, so $-ratingA$ will be kept before $-ratingB$ in the sorted set).

Also, in the previous approach, we never deleted the old rating element from the priority queue as searching was a costly operation, however, in a sorted set, searching for an element also takes logarithmic time, so we will search and delete the old element and then insert the new element in the sorted set. Hence, sorted sets will not contain old rating elements, unlike priority queues in the previous approach.



#### Algorithm

1. Create three hash maps:
    - `foodRatingMap`, to store ratings associated with the respective food.
    - `foodCuisineMap`, to store the cuisine name of the respective food.
    - `cuisineFoodMap`, to store `(-1 * foodRating, foodName)` pair elements in a sorted set associated with the respective cuisine.

2. Initialization. Iterate on all indices of the `foods` array, and for each index `i`:
    - Store `(foods[i], ratings[i])` and `(foods[i], cuisines[i])` key-value pairs in `foodRatingMap` and `foodCuisineMap` respectively.
    - Insert `(-1 * ratings[i], foods[i])` pair element in the sorted set of `cuisines[i]` key of `cuisineFoodMap`.

3. Implementing `changeRating(food, newRating)` method:
    - Fetch the cuisine name for `food` from `foodRatingMap`.
    - Delete the `(-1 * oldRating, food)` pair element from the sorted set of the cuisine name in `cuisineFoodMap`.
    - Update new rating in `foodRatingMap`.
    - Insert the `(-1 * newRating, food)` pair element in the sorted set of the cuisine name in `cuisineFoodMap`.

4. Implementing `highestRated(cuisine)` method:
    - Get the top element `(i.e. highestRated)` from the sorted set of `cuisine` in `cuisineFoodMap`.
    - Return the food name of the top element, i.e. `highestRated.second`.



#### Implementation

<iframe src="https://leetcode.com/playground/fSv4KKNk/shared" frameBorder="0" width="100%" height="500" name="fSv4KKNk"></iframe>


#### Complexity Analysis

Here, $n$ is the initial size of the `foods` array, and let, $m$ be the number of calls made to `changeRating` and `highestRated` methods.

* Time complexity:  $O((n + m) \log n)$
    - **Initialization:**
        - We iterate over all `foods` elements and insert them into appropriate hash maps and sorted sets. Inserting a value into the hash map takes constant time, but, inserting a value into the sorted set will take logarithmic time.
         - Thus, for $n$ elements, the total time taken will be $O(n \log n)$ time.

    - **changeRating(food, newRating)** method:
        - Updating the rating in the hash map will take constant time.
        - But, the sorted set will have $n$ elements, and inserting and deleting an element in it will take $O(\log n)$ time.
        - Thus, for $m$ insertions, the total time taken will be $O(m \log n)$ time.

    - **highestRated(cuisine)** method:
        - Getting the cuisine name from the hash map is a constant time operation.
        - Retrieving the highest rated food from the sorted set is also a constant time operation, since in C++ (`std::set`), Java (`TreeSet`), and Python (`heapq`, `SortedList`, or list indexing), we can directly access the smallest or largest element in $O(1)$ time.
        - Thus, the total time taken for $m$ calls will be $O(m)$ across all languages.

* Space complexity: $O(n)$
    - In `foodRatingMap`, `foodCuisineMap`, and `cuisineFoodMap` we will store $n$ elements.
    - Thus, overall it will take $O(n)$ space.