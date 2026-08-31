# Official Solution

**Link:** [https://leetcode.com/problems/two-sum/solution/](https://leetcode.com/problems/two-sum/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/567281997" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Brute Force

**Algorithm**

The brute force approach is simple. Loop through each element $$x$$ and find if there is another value that equals to $$target - x$$.

**Implementation**

<iframe src="https://leetcode.com/playground/WTVGRyeD/shared" frameBorder="0" width="100%" height="327" name="WTVGRyeD"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n^2)$$.
For each element, we try to find its complement by looping through the rest of the array which takes $$O(n)$$ time. Therefore, the time complexity is $$O(n^2)$$.

* Space complexity: $$O(1)$$.
The space required does not depend on the size of the input array, so only constant space is used.

---
### Approach 2: Two-pass Hash Table

**Intuition**

To improve our runtime complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to get its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We can reduce the lookup time from $$O(n)$$ to $$O(1)$$ by trading space for speed. A hash table is well suited for this purpose because it supports fast lookup in *near* constant time. I say "near" because if a collision occurred, a lookup could degenerate to $$O(n)$$ time. However, lookup in a hash table should be amortized $$O(1)$$ time as long as the hash function was chosen carefully.

**Algorithm**

A simple implementation uses two iterations. In the first iteration, we add each element's value as a key and its index as a value to the hash table. Then, in the second iteration, we check if each element's complement ($$target - nums[i]$$) exists in the hash table. If it does exist, we return current element's index and its complement's index. Beware that the complement must not be $$nums[i]$$ itself!

**Implementation**

<iframe src="https://leetcode.com/playground/bbEpXJcf/shared" frameBorder="0" width="100%" height="500" name="bbEpXJcf"></iframe>  

**Complexity Analysis**

* Time complexity: $$O(n)$$.
We traverse the list containing $$n$$ elements exactly twice. Since the hash table reduces the lookup time to $$O(1)$$, the overall time complexity is $$O(n)$$.

* Space complexity: $$O(n)$$.
The extra space required depends on the number of items stored in the hash table, which stores exactly $$n$$ elements.

---
### Approach 3: One-pass Hash Table

**Algorithm**
    
It turns out we can do it in one-pass. While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

**Implementation**    
    
<iframe src="https://leetcode.com/playground/4KK3DMtw/shared" frameBorder="0" width="100%" height="500" name="4KK3DMtw"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n)$$.
We traverse the list containing $$n$$ elements only once. Each lookup in the table costs only $$O(1)$$ time.

* Space complexity: $$O(n)$$.
The extra space required depends on the number of items stored in the hash table, which stores at most $$n$$ elements.