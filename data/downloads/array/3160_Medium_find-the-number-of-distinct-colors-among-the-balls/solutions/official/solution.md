# Official Solution

**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solution/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solution/)

---

[TOC]

## Solution

---

### Overview

Our task is to return an array listing the number of distinct colors after each query. Note that in this case, distinct means the number of total colors. It does not mean that the color only appears one time. 

Let's look at an example of a potential set of queries:

!?!../Documents/3160_fix/slideshow1_fix.json:960,540!?!

In this problem, two main scenarios can occur at each query:
1. **Uncolored Ball** - adding a color to a ball that did not already have a color
2. **Colored Ball** - adding a color to an already colored ball, replacing the previous color on the ball with the new color

---

### Approach 1: Hashmap and Array (MLE)

#### Intuition

When approaching this problem, the main challenge is efficiently tracking and updating the colors of the balls after each query.

To solve this problem, we'll need to track both the number of times each color appears, and the number of distinct colors. 

Let's consider the two different scenarios that occur when a query is applied to a ball. If the ball is:
1. Uncolored: the count of the newly assigned color is increased. 
2. Colored: the count of the new color is increased and the count of the previously assigned color decreases. 

Whether or not the number of distinct colors is impacted will depend on the total number of balls of that color already present. 

A **hashmap** can be used for this purpose since it efficiently associates counts with specific colors.

We also need to track the current color of each ball because the problem involves overwriting existing colors. A straightforward solution is to use an **array** to store the color of each ball, where the index represents the ball and the value at that index represents the current color of the ball.

With these data structures in place, we can now proceed to process the queries. For each query, we update the color of the ball and adjust the count of distinct colors accordingly. As we process each query, we maintain the color count and track the balls' colors.

However, this solution ultimately fails due to exceeding the memory limit allowed for this problem.

#### Algorithm

1. Initialize:
   * an integer `n`, equal to the length of `queries`.
   * an array `result` of length `n`, where `result[i]` denotes the number of distinct colors after the `ith` query.
   * an array `ballArray`, which stores the distinct ball labels found when traversing `queries` and the current colors associated with them.
   * A hash map `colorMap`, which stores the number of distinct colors after processing the current query.
2. Iterate from index `0` to `n - 1` to traverse the queries. For each query, `query[i]`:
   * Initialize:
       * an integer `ball` equal to `query[i][0]`, denoting the current ball that will be colored.
       * an integer `color` equal to `query[i][1]`, denoting the color that the ball will be colored.
   * If `ballArray[ball]` is not `0`, meaning the ball is already colored:
       * Check the existing color of `ball`, which will be labeled `prevColor`.
       * Decrement the count of `prevColor` in `colorMap`.
       * If the count becomes `0`, remove `prevColor` from `colorMap`.
   * Update `ballArray[ball]` to color.
   * Increase the count of `color` in `colorMap` by one.
   * Set `result[i]` to the size of `colorMap`.
3. Return the `result` array.

#### Implementation

<iframe src="https://leetcode.com/playground/E5VfQp4D/shared" frameBorder="0" width="100%" height="500" name="E5VfQp4D"></iframe>

#### Complexity Analysis

Let $n$ be the number of `queries` and $m$ be the `limit`.

* Time Complexity: $O(n)$

   The algorithm iterates through each query exactly once, performing constant-time operations for each query. 
   
   Specifically, for each query, it checks and updates the `ballArray` and colorMap, both of which are $O(1)$ operations due to the use of a hash map (`colorMap`) and an array (`ballArray`). 
   
   Therefore, the overall time complexity is linear in the number of queries, $O(n)$.

   Note: The operations on the `colorMap` (such as get, put, and remove) are considered $O(1)$ on average due to the nature of hash maps.

* Space Complexity: $O(m + n)$

   The space complexity is determined by the `ballArray` and the `colorMap`. The `ballArray` has a size of $m + 1$ (since it stores the color of each ball up to the limit $m$), and the `colorMap` can store up to $n$ distinct colors in the worst case (if all queries introduce a new color). Therefore, the space complexity is $O(m + n)$.
   
   Note: The `result` array also contributes $O(n)$ space, but since it is part of the output, it is typically not counted in the auxiliary space complexity. However, if we include it, the space complexity remains $O(m + n)$.

---

### Approach 2: Two Hash Maps

#### Intuition

The main challenge from the previous solution is identifying and addressing areas where large amounts of memory are used.

A significant portion of our memory usage comes from the array of size `limit + 1`. When we look at the constraints, we can see that the value of `limit` can be extremely large, with the range `1 <= limit <= 10^9`. Contrarily, the queries only range from `1 <= n <= 10^5`, where `n` is the length of `queries`. As we navigate through the queries, we can see that not all of the ball labels are guaranteed to be accessed by the queries, leading to unnecessary memory usage.

We can improve our storage efficiency by eliminating wasted space. Here, we need to choose a data structure that only allocates space as needed. Similar to how the colors are stored, we can utilize a **hash map** to store only the necessary labels accessed by the queries. By doing so, we can optimize the space complexity and prevent memory overuse.

After making this adjustment, we can apply the same logic and procedure as the previous solution. With this space optimization, we can process and track the results from the queries while staying within the memory limit.

#### Algorithm

1. Initialize:
   * an integer `n`, equal to the length of `queries`.
   * an array `result` of length `n`, where `result[i]` denotes the number of distinct colors after the `ith` query.
   * two hash maps:
       1. `colorMap`, which stores the number of distinct colors after processing current query.
       2. `ballMap`, which stores the distinct ball labels found when traversing `queries` and the current colors associated with them.
2. Iterate from index `0` to `n-1` to traverse the queries. For each query, `query[i]`:
   * Initialize:
       * an integer `ball` equal to `query[i][0]`, denoting the current ball that will be colored.
       * an integer `color` equal to `query[i][1]`, denoting the color that the ball will be colored.
   * If `ball` already exists in `ballMap`, meaning it is already colored:
       * Check the existing color of `ball`, which will be labeled `prevColor`.
       * Decrement the count of `prevColor` in `colorMap`.
       * If the count becomes `0`, remove `prevColor` from `colorMap`.
   * Update `ballMap[ball]` to `color`.
   * Increase the count of `color` in `colorMap` by one.
   * Set `result[i]` to the current size of `colorMap`.
3. Return the `result` array.

#### Implementation

<iframe src="https://leetcode.com/playground/5wuHE5ag/shared" frameBorder="0" width="100%" height="500" name="5wuHE5ag"></iframe>

#### Complexity Analysis

Let $n$ be the size of `queries`.

* Time Complexity: $O(n)$

   The algorithm iterates through each query exactly once, performing constant-time operations for each query. 
   
   Specifically, for each query, it checks and updates the `ballMap` and `colorMap`, both of which are $O(1)$ operations on average due to the use of hash maps. 
   
   Therefore, the overall time complexity is linear in the number of queries, $O(n)$.
   
   Note: The operations on the `ballMap` and `colorMap` (such as `get`, `put`, and `remove`) are considered $O(1)$ on average due to the nature of hash maps.

* Space Complexity: $O(n)$

   The space complexity is determined by the `ballMap` and the `colorMap`. 
   
   In the worst case, `ballMap` can store up to $n$ distinct colors (if all queries introduce a new ball label), and the `colorMap` can store up to $n$ distinct colors (if all queries introduce a new color). Therefore, the space complexity is $O(2n)$, which simplifies to $O(n)$.
   
   Note: The `result` array also contributes $O(n)$ space, but since it is part of the output, it is typically not counted in the auxiliary space complexity. However, if we include it, the space complexity remains $O(n)$.

---