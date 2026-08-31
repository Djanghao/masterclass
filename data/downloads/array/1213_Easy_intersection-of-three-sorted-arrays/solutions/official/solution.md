# Official Solution

**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solution/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force with Hashmap

#### Intuition

One of the most straightforward approaches would be counting the frequencies of each item in `arr1`, `arr2`, and `arr3` so that we would be able to find the numbers that appear exactly three times.
This is feasible because all of the three arrays are _strictly increasing_, hence we can rule out the possibility that some element appears more than once in any of the arrays.

#### Algorithm

- We would initiate a Hashmap `counter` to record the numbers that appear in the three arrays and the number of times they appear;
- then we scan `arr1`, `arr2`, and `arr3` to count the frequencies;
- finally, we would iterate through `counter` to find the numbers that appear three times.

#### Implementation

<iframe src="https://leetcode.com/playground/6wV652ye/shared" frameBorder="0" width="100%" height="500" name="6wV652ye"></iframe>

#### Complexity Analysis

* Time Complexity: $$\mathcal{O}(n)$$, where $n$ is the total length of all of the input arrays.
* Space Complexity: $$\mathcal{O}(n)$$, where $n$ is the total length of all of the input arrays.
This is because we adopted a Hashhmap to store all numbers and their number of appearances.

---

### Approach 2: Three Pointers

#### Intuition

You may notice that Approach 1 does not utilize the fact that all arrays are _sorted_.
Indeed, instead of using a Hashmap to store the frequencies, we can use three pointers `p1`, `p2`, and `p3` to iterate through `arr1`, `arr2`, and `arr3` accordingly:

- Each time, we want to increment the pointer that points to the smallest number, i.e., `min(arr1[p1], arr2[p2], arr3[p3])` forward;
- if the numbers pointed to by `p1`, `p2`, and `p3` are the same, we should then store it and move all three pointers forward.

Moreover, we don't have to move the pointer pointing to the smallest number - we only need to move the pointer pointing to a smaller number. In this case, we avoid comparing three numbers and finding the smallest one before deciding which one to move.
You may find the rationale behind this in the Algorithm.

!?!../Documents/1213_Intersection_of_Three_Sorted_Arrays.json:531,198!?!

#### Algorithm

- Initiate three pointers `p1`, `p2`, `p3`, and place them at the beginning of `arr1`, `arr2`, `arr3` by initializing them to 0;
- while they are within the boundaries:
  - if `arr1[p1] == arr2[p2] && arr2[p2] == arr3[p3]`, we should store it because it appears three times in `arr1`, `arr2`, and `arr3`;
  - else
    - if `arr1[p1] < arr2[p2]`, move the smaller one, i.e., `p1`;
    - else if `arr2[p2] < arr3[p3]`, move the smaller one, i.e., `p2`;
    - if neither of the above conditions is met, it means `arr1[p1] >= arr2[p2] && arr2[p2] >= arr3[p3]`, therefore move `p3`.

#### Implementation

<iframe src="https://leetcode.com/playground/QmgTErZN/shared" frameBorder="0" width="100%" height="500" name="QmgTErZN"></iframe>

#### Complexity Analysis

* Time Complexity: $$\mathcal{O}(n)$$, where $n$ is the total length of all of the input arrays.
* Space Complexity: $$\mathcal{O}(1)$$, as we only initiate three integer variables using constant space.

---