# Official Solution

**Link:** [https://leetcode.com/problems/relative-ranks/solution/](https://leetcode.com/problems/relative-ranks/solution/)

---

[TOC]

## Solution

---

### Overview

Given an array `score` with athletes' scores, we need to return their rank. The athlete with the highest score has the lowest place, and the athlete with the second-highest score will have the second-lowest place, and so on. The athletes in first, second, and third place receive gold, silver, and bronze medals, respectively. All other athletes receive their place as their rank.

**Key Observation:**
- All the scores are guaranteed to be unique.

---

### Approach 1: Sort & Reverse

#### Intuition

Consider Example 1 from the problem description: 

> **Input:** `score` = [5, 4, 3, 2, 1]
Placements: [1st, 2nd, 3rd, 4th, 5th]

The placements are assigned in order for this example. This works because the scores are given in decreasing order.

When the scores are sorted in decreasing order, each athlete gets assigned the next place.

We can start developing a solution by sorting the `score` array in decreasing order.

Consider Example 2 from the problem description: 

> **Input:** `score` = [10, 3, 8, 9, 4]
`score` sorted in decreasing order: [10, 9, 8, 4, 3]
Placements: [1st, 2nd, 3rd, 4th, 5th]

For this example, we now have the scores and placements, but because we sorted `score`, we don't know the order the placements should be in the result.

We can solve this by saving each athlete's original index in a hashmap before sorting the `score` array. The key is the athlete's score, and the value is the athlete's original index.

`scoreToIndex` hashmap: [10 ⟶ 0, 3 ⟶ 1, 8 ⟶ 2, 9 ⟶ 3, 4 ⟶ 4]

Then, we can use the hashmap and the sorted `score` array to add the athletes' ranks to the correct index in the result.

`score` sorted in decreasing order: [10, 9, 8, 4, 3]
`scoreToIndex` hashmap: [10 ⟶ 0, 3 ⟶ 1, 8 ⟶ 2, 9 ⟶ 3, 4 ⟶ 4]

- Place the 1st ranked athlete, who scored 10, at index 0.
- Place the 2nd ranked athlete, who scored 9, at index 3.
- Place the 3rd ranked athlete, who scored 8, at index 2.
- Place the 4th ranked athlete, who scored 4, at index 4.
- Place the 5th ranked athlete, who scored 3, at index 1.

For places 1st, 2nd, and 3rd, we assign medals.

`rank`:
| index | 0            | 1   | 2              | 3              |   4 |
| ------| ------------ | --- | -------------- | -------------- | --- |
| rank  | "Gold Medal" | "5" | "Bronze Medal" | "Silver Medal" | "4" |

> Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]

#### Algorithm

1. Initialize a variable `N` to the length of the `score` array.
2. Initialize a hashmap `scoreToIndex` and save the original index of each athlete based on their `score`. The key is the `score` and the value is the original index.
3. Sort the `score` array in descending order. Then, the scores will be in order from highest to lowest. Since the highest score corresponds to the lowest place, this means the places will be in order.
4. Initialize a string array `rank` of size `N` for storing the result.
5. Assign ranks to athletes. We use the `scoreToIndex` hashmap to retrieve the index in the result of the athlete with `score[i]`. For each rank `i`:
    - If `i` is `0`, assign the athlete the "Gold Medal".
    - If `i` is `1`, assign the athlete the "Silver Medal".
    - If `i` is `2`, assign the athlete the "Bronze Medal".
    - Otherwise, set `rank[score_to_index[score[i]]] = str(i + 1)`.
6. Return `rank`.

#### Implementation

> **Notes:** 
> - The best practice is to not modify the input, so we create a copy of the `score` array in the below implementation. We sort the copy, leaving the original array unmodified.
>
> - Java does not have a built-in ability to sort an array in reverse order. Therefore, we sort the score array in ascending order and then traverse the array in reverse order using `n - i - 1` when we assign ranks to the athletes.

<iframe src="https://leetcode.com/playground/JM7AVNab/shared" frameBorder="0" width="100%" height="500" name="JM7AVNab"></iframe>

#### Complexity Analysis

​Let $n$ be the length of `score`.
​
* Time complexity: $O(n \log n)$

    We traverse the score array once and populate `scoreToIndex`. Since inserting in a hashmap takes $O(1)$ time on average, the entire operation takes $O(n)$. Collisions are unlikely since the scores are guaranteed to be unique according to the constraints.
  
    Sorting the the score array array takes $O(n \log n)$.
  
    Finally, traversing the score array and assigning ranks to athletes takes $O(n)$.
  
    The dominating term is $O(n \log n)$.
​
* Space complexity: $O(n)$

    The hashmap `scoreToIndex` stores $n$ `(key, value)` mappings, so it requires $O(n)$ auxiliary space.
  
    The `rank` array is only used to store the result, so it does not contribute towards the space complexity. 
  
    Note that some extra space is used when we sort the score array. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the `sort` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space. 
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$ for sorting two arrays.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

    $O(n)$ is the dominating term.

---

### Approach 2: Heap (Priority Queue)

#### Intuition

When we assign placements, we assign the next place to the next highest score.

To assign ranks, we can make use of a max heap. By adding all scores to a heap and subsequently removing them, they'll be in descending order.

Heaps are a data structure that allows us to efficiently find the maximum or minimum value in a dataset. If you are not familiar with heaps, we recommend checking out the [Heap Explore Card](https://leetcode.com/explore/learn/card/heap/).

As discussed in the previous solution, we need to save each athlete's original index in the `score` array. For each athlete, we will create a `score, index` pair and push it to the heap.

Then, we assign ranks by removing each athlete from the heap and storing their corresponding index as `originalIndex`. We assign the current athlete the next rank and place the rank in the `rank` array at index `originalIndex`. The first three ranks receive medals.

#### Algorithm

1. Initialize a variable `N` to the length of the `score` array.
2. Initialize a max-heap (priority queue) that will store `(score, index)` pairs.
3. For each index in `score`, add a pair to the heap with the score and index.
4. Initialize a string array `rank` of size `N` for storing the answer.
5. Initialize a varaible `place` to `1`.
6. Assign ranks to athletes. While the heap is not empty:
    - Pop the pair with the highest score from the heap. Save the index in `originalIndex`. 
    - Add the corresponding place to the `rank` array at index `originalIndex`:
        - If `place` is `1`, assign the athlete the "Gold Medal".
        - If `place` is `2`, assign the athlete the "Silver Medal".
        - If `place` is `3`, assign the athlete the "Bronze Medal".
        - Otherwise, set `rank[originalIndex] = str(place)`.
    - Increment `place`.
7. Return `rank`.


#### Implementation

> **Note:** The Python3 heap implementation is a min-heap by default. We achieve max-heap behavior in the above solution by negating the score when we add it to the heap. Scores with the highest absolute values have the lowest negative values.

<iframe src="https://leetcode.com/playground/23Yn9XDm/shared" frameBorder="0" width="100%" height="500" name="23Yn9XDm"></iframe>


#### Complexity Analysis

​Let $n$ be the length of `score`.
​
* Time complexity: $O(n \log n)$

  We traverse the `score` array once and populate the `heap` with each score. Adding an element to the heap takes $\log n$ time, resulting in a time complexity of $O(n \log n)$ for this step.
  
  When assigning ranks to athletes, we pop each pair from the heap. Removing an element from the heap also takes $\log n$ time, so removing $n$ elements will take $O(n \log n)$ time.
  
  The overall time complexity is $O(2n \log n)$, which we can simplify to $O(n \log n)$.
​
* Space complexity: $O(n)$

  The `heap` stores $n$ `(score, index)` pairs, so it requires $O(n)$ auxiliary space.
  
  The `rank` array is only used to store the result, so it does not contribute towards the space complexity. 

---

### Approach 3: Array as Map

#### Intuition

The above approaches both have log-linear time complexities. Let's develop a more efficient approach.

In the first approach, we used a hashmap to save the original indices of the athletes. An alternative to using a map is an array.

We can use an array `scoreToIndex` to store the athletes' original indices. The "key" is the score, and the "value" is the original index of the athlete. An athlete's original index can be found at `scoreToIndex[score[i]]`. For example, the original index of an athlete with the score `5` is stored at `scoreToIndex[5]`.

Consider the example `score = [10, 3, 8, 9, 4]`.

The range of scores may not be equal to the number of athletes. Therefore, we must ensure that the `scoreToIndex` array is large enough to store the entire range of scores. As a result, we will begin by identifying the maximum score, and then declare our array `scoreToIndex` to be of size one greater than that maximum score.

There may be some indices in the `scoreToIndex` array that do not store indices of athletes, as the array may be larger than the number of athletes. Indices that do not correspond to athletes will contain `0` by default. One athlete will have the original index `0`, which cannot be differentiated from the default `0` indices if we store the athlete's original indices directly, we address this issue by adding one when adding the athletes to the `scoreToIndex` array. Later, when we iterate through the original indices, we subtract one to obtain the correct original index.

The indices of the `scoreToindex` array represent the scores. The highest score corresponds to the lowest rank, and the second-highest score corresponds to the second-lowest rank, and so on. 

In the first approach, we reversed the scores so we could easily determine the ranks. We can mimic this strategy by traversing the `scoreToIndex` in reverse, from the highest index to the lowest index. We can use a variable `place` to track the placement, and we can find the position in the `rank` array by saving `scoreToIndex[i] - 1` as the `orignalIndex`.

**Example:**

> **Input:** `score` = [10, 3, 8, 9, 4]

The max score is 10.

`scoreToIndex`:
| index            | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| ---------------- | - | - | - | - | - | - | - | - | - | - | -  |
|original index + 1| 0 | 0 | 0 | 2 | 5 | 0 | 0 | 0 | 3 | 4 | 1  |
 
- Place the 1st ranked athlete, who scored 10, at index 1 - 1 = 0.
- Place the 2nd ranked athlete, who scored 9, at index 4 - 1 = 3.
- Place the 3rd ranked athlete, who scored 8, at index 3 - 1 = 2.
- Place the 4th ranked athlete, who scored 4, at index 5 - 1 = 4.
- Place the 5th ranked athlete, who scored 3, at index 2 - 1 = 1.

For places 1st, 2nd, and 3rd, we assign medals.

`rank`:
| index | 0            | 1   | 2              | 3              |   4 |
| ----- | ------------ | --- | -------------- | -------------- | --- |
| rank  | "Gold Medal" | "5" | "Bronze Medal" | "Silver Medal" | "4" |

> **Output:** Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]

In this approach, we use a constant string array to store the medals. We use `MEDALS[place - 1]` to assign medals to the first three places instead of using an `if` statement for each medal.

#### Algorithm

1. Initialize a variable `N` to the length of the `score` array.
2. Define a function `findMax` that returns the maximum score in the array.
    - Initialize a variable `maxScore` to `0`.
    - For each score in the `score` array, if the score is greater than `maxScore`, update `maxScore` to the new score.
    - Return `maxScore`.
3. Initialize a variable `M` to the result of `findMax(score)`.
4. Initialize an array `scoretoIndex` of size `M + 1`. For each score `i` in the score array, set `scoreToIndex[score[i]]` to `i + 1`.
5. Create a constant string array to store the `MEDALS`: `["Gold Medal", "Silver Medal", "Bronze Medal"]`.
6. Initialize a string array `rank` of size `N` for storing the answer.
7. Initialize a variable `place` to `1`.
8. Assign ranks to athletes using a `for` loop. For each nonzero entry of `scoreToIndex`, `i`, starting with the last and moving to the first:
    - Set a variable `originalIndex` to `scoreToIndex[i] - 1`.
    - Add the place to the `rank` array at index `originalIndex`:
        - If `place` is less than `4`, assign the athlete `medals[place - 1]`.
        - Otherwise, set `rank[originalIndex] = str(place)`.
    - Increment `place`.
9. Return `rank`.

#### Implementation

<iframe src="https://leetcode.com/playground/o47aY2YT/shared" frameBorder="0" width="100%" height="500" name="o47aY2YT"></iframe>

#### Complexity Analysis

​Let $n$ be the length of `score` and $m$ be the maximum value in the array.
​
* Time complexity: $O(n + m)$

  The `findMax` function takes $O(n)$ because it traverses `score` once. We call this function once.

  Populating `scoreToIndex` takes $O(n)$ because we add one entry for each athlete.

  When we assign ranks to athletes, we iterate through every index of the `scoreToIndex` array, which is size $m + 1$. The operations within the loop take constant time, so this step takes $O(m)$.
  
  The overall time complexity is $O(2n + m)$, which we can simplify to $O(n + m)$.
​
* Space complexity: $O(m)$

  The `scoreToIndex` array is size $m + 1$.

  The `rank` array is only used to store the result, so it does not contribute towards the space complexity. 

  Therefore, the overall space complexity is $O(m)$.

---