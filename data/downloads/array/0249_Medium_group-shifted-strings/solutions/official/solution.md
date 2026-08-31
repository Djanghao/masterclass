# Official Solution

**Link:** [https://leetcode.com/problems/group-shifted-strings/solution/](https://leetcode.com/problems/group-shifted-strings/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/844727384" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview

Given some strings, we need to group the ones that are in the same shifting sequence. Two Strings are said to be in the same shifting sequence if one can be converted to the other by shifting every character of the first string to its successive or preceding character a fixed number of times.

We need a way to represent these strings such that the ones belonging to the same shifting sequence have the same value. This need can be done by using Hashing in a unique manner. Typically when we design a hash function we do it in such a way that all the possible keys get mapped to a unique value. There should not be any many-to-one mappings i.e., hash collisions. However, in this case, by carefully selecting a hash function, we can use the hash collisions to our advantage.

We need to design a hash function that ensures that the hash values for strings in the same shifting sequence will collide and thus the strings will be grouped together. There can be any number of such hash functions and we can use any of them. We will discuss two such hash functions in this article.
</br>

--- 
### Approach 1: Hashing

**Intuition**

All the strings in the below table belong to the same shifting sequence. We want to represent each one of these by a single string. We can represent each of these strings by `abc` as shown in the below table.

![fig](../Figures/249/249A.png)

To make every string the same, the first character in all the strings will also have to be the same. Hence, we will first convert the first character of all the strings to any character, let's say `a`. To convert the first character to `a` we would require some number of shifting say `shift` `(shift $$\geq $$ 0)`, and we need to shift the other characters of string by the same value `shift`.

In this way, the strings in the same shifting sequence will end up having the same value.

**Algorithm**

1. Iterate over `strings`, and for each string:
 
   a. Find its Hash value, that is, the string starts with an `a` after some shifts. The value of `shift` is equal to the first character of the string. Then shift all the characters by the same value `shift`. Notice that we also have to do a mod of 26 on the resulting character for the circular shift.

   b. Map the original string to the above Hash value in the map `mapHashToList`. More specifically, add the original string to the list corresponding to its Hash value.

2. Iterate over the `mapHashToList` and store the list for every key in the map in the answer array `groups`.

**Implementation**

**Note:** Modulo operator `%` behaves differently in C++/Java and Python. The difference lies in the operator implementation.
 
- **C++/Java:** `a % b = a - int(a / b) * b`
- **Python:**      `a % b = a - floor(a / b) * b`

In C++/Java expression like `(a - b) % c` can be negative if `a < b` hence we need to manually add `c` to make it non-negative `(a - b + c) % c`. On the other hand, Python automatically performs this step. This is why we add `26` before taking the modulus in Java and C++ but we do not need to do so in the Python implementation.

<iframe src="https://leetcode.com/playground/npjQSUF9/shared" frameBorder="0" width="100%" height="500" name="npjQSUF9"></iframe>

**Note:** Any hash function that results in collisions for strings with a common shifting sequence will group the strings as required. Let's consider another possible way to implement the `getHash()` function: we can map each string to the collection of differences in ASCII code values between each of its consecutive characters. This works because strings in the same shifting sequence will have the same collection of differences between all the consecutive letters. For example, every string in the group `["acf","gil","xzc"]` can be represented as `2,3` because `c - a = i - g = z - x = 2` and `f - c = l - i = c - z = 3`. Here the last expression `c - z` is `-23`, however, we are doing a circular shift, so we will do a modulo operation on the result to make it `3`. As in the previous implementation, we will use a string for the hash key. So let's shift the values back to the alphabetical range so that our list of differences `2,3` becomes `"cd"`. Let's take a look at the code for this hashing method:

<iframe src="https://leetcode.com/playground/ffqLJtSL/shared" frameBorder="0" width="100%" height="500" name="ffqLJtSL"></iframe>

**Complexity Analysis**

Let $$N$$ be the length of `strings` and $$K$$ be the maximum length of a string in `strings`.

* Time complexity: $$O(N * K)$$
  
   We iterate over all $$N$$ `strings` and for each string, we iterate over all the characters to generate the Hash value, which takes $$O(K)$$ time. To sum up, the overall time complexity is $$O(N * K)$$.


* Space complexity: $$O(N * K)$$

  We need to store all the strings plus their Hash values in `mapHashToList`. In the worst scenario, when each string in the given list belongs to a different Hash value, the maximum number of strings stored in `mapHashToList` is $$2 * N$$. Each string takes at most $$O(K)$$ space. Hence the overall space complexity is  $$O(N * K)$$.

**Note**: The time and space complexity for both solutions are same because the `getHash()` function has the same time and space complexity, $$O(K)$$.
<br/>

---