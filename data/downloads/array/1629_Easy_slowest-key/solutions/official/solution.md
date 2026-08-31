# Official Solution

**Link:** [https://leetcode.com/problems/slowest-key/solution/](https://leetcode.com/problems/slowest-key/solution/)

---

[TOC]

## Solution

---
### Overview

The problem is to find the slowest key, i.e. the key which was pressed for the longest duration.

This can be solved using simple array traversal. Given the `keysPressed` and their respective `releaseTimes`, we can find the duration for each keypress. Once we know this, we can find the longest duration among all key presses and return the slowest key.

Let's look at different approaches to solve the problem.

---
### Approach 1: Using Map

**Intuition**

Let's split the problem into 2 parts:

1. _Find the duration of all keypresses_

   We will traverse the array `releaseTimes` and find the keypress duration for each corresponding key in `keysPressed`. For each key at $$i^{th}$$ position in string `keysPressed`, the keypress duration can be calculated as

       Duration for $$i^{th}$$ key = releaseTimes[i] - releaseTimes[i - 1]  //if i > 0
       Duration for $$0^{th}$$ key = releaseTimes[0]                                       


   The following figure illustrates the calculation of press duration for `keysPressed = cbcd` and `releaseTimes = [9, 29, 49, 50]`

 ![Calculation of release times for each keypress duration](../Figures/1629/Approach1_durationCalculation.png)


2. _Find the key with longest press duration_

   For this, we must first store the press duration that we calculated for each key in the first part. Once we retrieve and store all the durations, the longest press duration can be calculated as:

    > Longest keypress duration = maximum(longest keypress duration found so far, current keypress duration)

    However, the important question is "_What is the best way to store the duration of each keypress_?"
     Let's evaluate different data structures for this.
    - We can store the durations for each keypress in a _List_.  Each element in the list will store the key and its press duration.   `(key, duration)`.

      The following figure illustrates the list structure for `keysPressed = cbcd` and `releaseTimes = [9, 29, 49, 50]`.

      ![Store the keypress durations in List Data Structure](../Figures/1629/Approach1_listStorage.png)

      > Do you notice any problems in this implementation?

      We know that a key can be pressed multiple times. In the above example, the key `c` is pressed twice. Using lists, we are storing all the press durations of a key. But we are only concerned about the longest keypress duration of each unique key.

     In the above example, we can replace the first entry for `key = c` and `duration = 9` from the list when we encounter `key = c` and `duration = 20`, as we found a new keypress duration for key `c` that is greater than `9`.
     However, checking the list to see if `c` has been pressed before requires linear time, because a list is a _Linear_ data structure.

      > Linear Data Structures store elements in _Sequential_ order. When the data structure is not sorted, locating a specific element may require iterating over every element in the data structure.

    - We can use a _map_ having key-value pair. For each key, the value will be the press duration. Using the map, we can find if the current key has already been encountered in constant time. We can choose to store only the value with the longest keypress duration seen so far for the key.

        The following figure illustrates the idea for `key = c`.

       ![Store the keypress durations in Map Data Structure](../Figures/1629/Approach1_mapStorage.png)


**Algorithm**

1. Iterate over the array `releaseTimes` to find the press duration `currentDuration` for each key `currentKey`.

2. Build a map `durationMap` to store the keypress duration of each key in the form of key-value pair, `currentKey -> currentDuration`.  If the key is already present in the map, store the duration with the maximum value.

3. Iterate over each element in `durationMap`. Track the maximum duration in the variable `longestPressDuration` and the corresponding key in the variable  `slowestKey`. For each entry of the map, get the `duration` and `key` and check for the following conditions:

   - If the value of `duration` is greater than the `longestPressDuration` found so far, then update the `longestPressDuration` with the value of `duration`. Also, the `slowestKey` will be updated with the corresponding `key` value.

   - If the value of `duration` is equal to the `longestPressDuration`, check if the `key` is lexicographically larger than the `slowestKey`. If so, update the `slowestKey` with the `key` value.

     > Lexicographically larger key denotes the key that is larger than the other key in alphabetical order. For example, `b` is lexicographically larger than `a`, `c` is larger than `b`, and so on.
	
4. At the end, return the `slowestKey` found after iterating over all the elements in the map.

**Implementation**

<iframe src="https://leetcode.com/playground/dtu3e8Wo/shared" frameBorder="0" width="100%" height="500" name="dtu3e8Wo"></iframe>

**Complexity Analysis**

Let $$N$$ be the size of array `releaseTimes` and $$K$$ be the number of distinct characters in `keysPressed`.

* Time Complexity: $$O(N)$$. Let's find the time complexity of each step.

    We iterate over the array `releaseTimes` of size $$N$$ to find the duration of each key. The time complexity of each iteration is constant, so the overall time complexity of iterating over the array is $$O(N)$$.

    Next, we iterate over all elements of `durationMap`. In the worst case, if all the keys are unique, the size of `durationMap` would be equal to $$K$$. Thus, the time complexity is $$O(K)$$.

    This gives us total time complexity is $$O(N) + O(K)$$.  Since, in this problem, $$K$$ is at most 26 and must be less than or equal to $$N$$ the time complexity simplifies to $$O(N)$$.

* Space Complexity: $$O(K)$$, as we are using additional space for `durationMap` which can have maximum $$K$$ elements.

---
### Approach 2: Fixed Size Array

**Intuition**

In the previous approach, we were able to efficiently store only the longest keypress duration for each key by using a `map`.

However, we know that the `keysPressed` contains only the lowercase English letters. We can simplify our solution even further by using a fixed-size array, where each element in the array represents each key. As there are `26` lowercase letters in the English alphabet, we will use an array of size `26`.

> The advantage of using an array is that it takes slightly less time to access elements in an array compared to a hashmap.  Also, when the array is dense (all elements are sequential and the first element starts at index 0 as shown below) it uses slightly less space than a hashmap.

The following figure illustrates how the press duration would be stored for each key.

 ![Store the keypress durations in Fixed Size Array](../Figures/1629/Approach2_arrayStorage.png)

This implementation has one additional benefit. When two keys have been pressed for the same duration, we will consider the lexicographically largest key. Unlike in the unordered map, where we can't access the keys in sorted order, in the list we can traverse values in descending order. Therefore, we no longer need to check for cases when the current keypress duration is equal to the longest keypress duration found so far.

**Algorithm**

1. Build an array `durationArray` of size `26` to store the keypress duration of each key and initialize all the values in the array to `0`.

2. Iterate over the array `releaseTime` to calculate the longest press duration `currentDuration` for each key `currentKey`.

   Each iteration, find the index for `currentKey` in `durationArray` and store its press duration at that location.

   For example, if `currentKey` is `d`, it is at $$4^{th}$$ position in alphabetical order (`a`, `b`, `c`,`d`, ..., `z`). Hence, store the press duration `currentDuration` for `d` at position `durationArray[3]`(since array is 0-indexed).

   > The easiest way to find the position for any key `currentKey` in its alphabetical order is by subtracting the ASCII value of `a` from the `currentKey`. This will give us the distance of the `currentKey` from `a` in alphabetical order.
     We will always store the maximum press duration seen so far for each key as we did in _Approach 1_.

3. Next, iterate over `durationArray` and find the key with the longest press duration. As discussed above, we will start from the lexicographically largest key. Hence, we will iterate over `durationArray` in reverse order.

   Initially, assume the slowest key is `z` at position `durationArray[25]`. We will only keep track of the index of the slowest key found so far in the `slowestKeyIndex` variable. Iterate from `y` to `a` and update the `slowestKeyIndex` when `currentDuration` is greater than the keypress duration of the slowest key found so far.

4. At the end, return the slowest key.

**Implementation**

<iframe src="https://leetcode.com/playground/kkGdWzUg/shared" frameBorder="0" width="100%" height="463" name="kkGdWzUg"></iframe>

**Complexity Analysis**

Let $$N$$ be the size of array `releaseTimes` and $$M$$ be the maximum possible number of distinct characters.  The value of $$M$$ is fixed as 26 for this problem because `keysPressed` contains only lowercase English letters.

* Time Complexity: $$O(N + M)$$. Let's find the time complexity of each step.

    We iterate over the array `releaseTimes` of size $$N$$ to find the duration of each key. The time complexity of each iteration is constant, so the overall time complexity of iterating over the array is $$O(N)$$.

    Next, we iterate over all elements of `durationArray` of size $$M$$ which takes $$O(M)$$ time.

    This gives us total time complexity is $$O(N) + O(M)$$.  Since, in this problem, the value of $$M$$ is fixed at 26, $$O(M)$$ may be considered as constant and the total time complexity would simplify to $$O(N)$$.

* Space Complexity: $$O(M)$$, as we are using $$O(M)$$ extra space for `durationArray`.  However, since the value of $$M$$ is fixed at 26, the space complexity may be considered as $$O(1)$$.

---
### Approach 3: Constant Extra Space

**Intuition**

In the above approaches, we implemented the problem in 2 steps. First, we calculated the press duration for each key and stored the results. Then we iterated over the stored results to find the slowest key.

We can combine this into a single step. As we are iterating over the `releaseTimes` to calculate the duration for each key, we can also keep track of the `slowestKey` found so far. In this way, the solution can be implemented in a single iteration without the need for an additional data structure.
Let's look at the algorithm in detail.

**Algorithm**

1. Initially, assume the slowest key is the first key in the string `keysPressed`. The press duration for this slowest key is initialized to `releaseTimes[0]`. Let's use the variables `slowestKey` and `longestPress` to track the slowest key and its corresponding press duration.

2. As we iterate over the `releaseTimes`, calculate the press duration `currentDuration` for each key. The new slowest key is found if either of the following 2 conditions is satisfied:

   1. The value of `currentDuration` is larger than `longestPress`.

   2. The value of `currentDuration` is equal to `longestPress` and the current key is lexicographically larger than the slowest key found so far.

   Update the `longestPress` and `slowestKey` if either of the above conditions is satisfied.

3. At the end, return the `slowestKey`.

**Implementation**

<iframe src="https://leetcode.com/playground/BypEcNmH/shared" frameBorder="0" width="100%" height="395" name="BypEcNmH"></iframe>

**Complexity Analysis**

Let $$N$$ be the size of array `releaseTimes`.

* Time Complexity: $$O(N)$$. We iterate over the array `releaseTimes` of size $$N$$ once to find the slowest key and each iteration requires only constant time.

* Space Complexity: $$O(1)$$, as we are using only constant extra space.


---