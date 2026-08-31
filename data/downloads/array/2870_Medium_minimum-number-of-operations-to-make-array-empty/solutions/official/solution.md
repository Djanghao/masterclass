# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solution/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem revolves around manipulating a given array of positive integers with two distinct operations: the removal of two elements with equal values or three elements with equal values. The objective is to find the minimum number of operations required to empty the array entirely. If achieving an empty array is not possible, the function should return -1. The challenge lies in strategically applying these operations to minimize their overall count. In essence, the problem serves as a computational exercise, testing one's algorithmic proficiency and logical reasoning in optimizing array manipulation operations.

### Approach: Counting


#### Intuition

The given problem introduces us to an array, `nums`, composed of positive integers, and presents two distinct operations that can be applied repeatedly: the removal of two elements with equal values or the removal of three elements with equal values. The ultimate objective is to ascertain the minimum number of operations required to empty the array entirely. However, if such a scenario proves impossible, the function is expected to return -1.

Since we can only remove elements that are equal each time, we must find the frequency `count` of each element. To get the count of each element, we could create a counter `counter` to tally the occurrences of each unique element in the array. This step is crucial for understanding the composition of the array and determining the frequencies of each element. We can use a variable `ans` initialized to zero, to serve as the accumulator for the total number of operations required to make the array empty.

The first critical insight arises when considering elements with a count of 1 in the array. We must return `-1` immediately in such cases, as the removal of elements requires pairs or triplets, and a solitary element cannot satisfy this criterion.

To make sure we empty the array in the minimum number of operations, we need to make sure we are removing the maximum possible elements in each operation. That means we need to remove triplets whenever possible. Triplets get priority over pairs. This is shown in the following slides.

!?!../Documents/2870/Minimum_Number_of_Operations_to_Make_Array_Empty.json:3000,1687!?!

The first conclusion that we can draw is that whenever the count of an element is a **multiple of 3**, it will take us `count / 3` operations to remove the elements of that kind from the array.

Example: 3, 6, 9, 12,...

```
* count = 3
    3 - 3 = 0
    operations required = 1
* count = 6
    6 - 3 - 3  = 0
    operations required = 2
* count = 9
    9 - 3 - 3 - 3  = 0
    operations required = 3
* count = 12
    12 - 3 - 3 - 3 - 3  = 0
    operations required = 4
```

Now, let's consider the scenario when the count of an element is **one** more than a multiple of 3.

Example: 4, 7, 10, 13,...

In such instances, we can eliminate two pairs, thereby making the count divisible by 3. Following this adjustment, we can proceed to remove the remaining numbers in triplets. 

```
* count = 4
    4 - 2 - 2 = 0 -> eliminate two pairs
    operations required = 2
* count = 7
    7 - 2 - 2 = 3 -> eliminate two pairs
    3 - 3 = 0 -> eliminate remaining triplets
    operations required = 3
* count = 10
    10 - 2 - 2 = 6 -> eliminate two pairs
    6 - 3 - 3 = 0 -> eliminate remaining triplets
    operations required = 4
* count = 13
    13 - 2 - 2 = 9 -> eliminate two pairs
    9 - 3 - 3 - 3 = 0 -> eliminate remaining triplets
    operations required = 5
```

Now, let's consider the scenario when the count of an element is **two** more than a multiple of 3.

Example: 5, 8, 11, 14,...

In such instances, we can eliminate one pair, thereby making the count divisible by 3. Following this adjustment, we can proceed to remove the remaining numbers in triplets.

```
* count = 5
    5 - 2 = 3 -> eliminate one pair
    3 - 3 = 0 -> eliminate remaining triplets
    operations required = 2
* count = 8
    8 - 2 = 6 -> eliminate one pair
    6 - 3 - 3 = 0 -> eliminate remaining triplets
    operations required = 3
* count = 11
    11 - 2 = 9 -> eliminate one pair
    9 - 3 - 3 - 3 = 0 -> eliminate remaining triplets
    operations required = 4
* count = 14
    14 - 2 = 12 -> eliminate one pair
    12 - 3 - 3 - 3 - 3 = 0 -> eliminate remaining triplets
    operations required = 5
```

Now, that we have the optimal technique to remove elements from the array. Let's look at the pattern that has formed.

|   Count  | Operations required to remove elements |
| ---------|----------------------------------------|
| 1 | return -1 |
| 2 | 1 |
| 3 | 1 |
| 4 | 2 |
| 5 | 2 |
| 6 | 2 |
| 7 | 3 |
| 8 | 3 |
| 9 | 3 |
| 10 | 4 |
| 11 | 4 |
| 12 | 4 |

From the information presented in this table, we can deduce that the number of operations needed to remove a total of `count` elements of a given kind is represented by the expression `ceil(count / 3)`, where the `ceil` method rounds up the decimal result of `count / 3`. Except in the scenario where the count of the element is 1, making it impossible to remove elements of that kind, in which case we should return -1.

Once we have determined the number of operations needed to remove each type of element, we can aggregate these values and return the result as `ans`.

#### Algorithm

1. Create a hashmap object named `counter` to count the occurrences of each element in the given array `nums`. Initialize a variable `ans = 0` to keep track of the minimum number of operations required.
2. For each value `c` in the counter's values:
    - Check if `c` is equal to 1. If yes, return -1, as it is not possible to perform the required operations on a single element.
    - Else increment the answer `ans` by the ceiling division of `c` by 3.
3. After iterating through all counts in the Counter, return the final value of `ans` as the minimum number of operations required to empty the array.

#### Implementation

<iframe src="https://leetcode.com/playground/BtBQFcD5/shared" frameBorder="0" width="100%" height="344" name="BtBQFcD5"></iframe>

#### Complexity Analysis

Let $N$ be the number of elements in nums.

* Time complexity: $O(N)$. Iterating over `nums` to count each number will incur a time complexity of $O(N)$. The subsequent loop iterating over `counter` will also incur a time complexity of $O(N)$ since there could be at most $N$ unique elements in the hash map.

* Space complexity: $O(N)$. `counter` will incur a space complexity of $O(N)$ since there could be at most $N$ elements stored in the hash map in the worst-case scenario.

---