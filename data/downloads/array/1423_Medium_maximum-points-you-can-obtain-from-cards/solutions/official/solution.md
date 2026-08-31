# Official Solution

**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solution/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solution/)

---

[TOC]

## Solution

---

### Overview

The brute force solution is to find all valid combinations of cards and then select the combination that gives us the maximum sum. To accomplish this, we can use a recursive approach. At each point, we choose a card either from the beginning or from the end of the array. Our base condition is when `k` cards are selected or when no cards are left to be selected.
This solution results in TLE because it checks an exponential number of combinations (many of the same combinations would be checked more than once). 
We can optimize this solution by using a **dynamic programming** approach.

A key observation in this problem is that *we need to select k cards from the beginning or end of the array*. Thus no matter how many cards we choose from the beginning, in the end, we need to select two subarrays: one from the beginning, and one from the end, and their total lengths must be `k` (the only exception is when `k = cardPoints.length`, in that case, we'll select all cards). Thus after selecting the two arrays we will be left with a single subarray of length `cardPoints.length - k`. There are three ways we can select the cards:

1. Select all cards from the beginning.
2. Select all cards from the end.
3. Select some cards from the beginning and the rest from the end.

In all the above three cases we will be left with a subarray (in the end, in the beginning, or somewhere in the middle) after our selection. This can be better understood in the following illustration where we are selecting 3 cards from an array of 8 cards.

![fig](../Figures/1423/1423_Maximum_Points_You_Can_Obtain_from_Cards_Overview_Image.png)


*Figure 1. An example demonstrating some of the positions of the subarrays possible from selecting `k = 3` cards from the array.*


In addition to the dynamic programming approach, we can also take a **sliding window** approach. A sliding window is a standard programming pattern used in many problems, including those related to finding the sum or the product of a subarray. In case you are not familiar with sliding windows, you can go through this article written by one of our LeetCode users: [Sliding Window Problems for Beginners](https://leetcode.com/discuss/study-guide/657507/Sliding-Window-for-Beginners-Problems-or-Template-or-Sample-Solutions).
In this article, we'll start by looking at the dynamic programming approach and discuss how to optimize its space complexity. After that, we will finish with the sliding window approach.

</br>

---

### Approach 1: Dynamic Programming

**Intuition**

As we determined above, the `k` cards that we choose will form two contiguous subarrays: one at the start, and one at the end of the input array. If we choose `i` cards from the start (where `i <= k`) then we must choose `k - i` cards from the end. There are `k` _different_ lengths the first array could be. 

Since these `k` arrays are _overlapping_, we can calculate the **prefix sum** for each of the first `k` values, and then for each of the last `k` values (working from the end of the array, and going inwards). We will store these values in two arrays of size `k`.

We can then use these to efficiently check each possible way of selecting `i` cards from the start and `k - i` cards from the end.

!?!../Documents/1423_Maximum_Points_You_Can_Obtain_from_Cards.json:960,540!?!

<br/>

**Algorithm**

1. Initialize two arrays of size `k + 1`, namely `frontSetOfCards` and `rearSetOfCards` to store the score (prefix sums) obtained by selecting the first `i` cards and the last `i` cards in the array.

2. We calculate the prefix sum (sum of `0 <= i <= k` cards) for the first `k` cards `frontSetOfCards[i + 1] = frontSetOfCards[i] + cardPoints[i]` and the last `k` cards `rearSetOfCards[i + 1] = cardPoints[n - i - 1] + rearSetOfCards[i]`.

3. Initialize `maxScore` to 0.

4. Iterate from `i = 0 -> k`. At each iteration, we determine the possible score by selecting `i` cards from the beginning of the array and `k - i` cards from the end (`currentScore`). If this score is greater than the `maxScore` then we update it.

**Implementation**


<iframe src="https://leetcode.com/playground/jWdkiT6K/shared" frameBorder="0" width="100%" height="500" name="jWdkiT6K"></iframe>


**Complexity Analysis**

Let $$k$$ be the number of cards we need to select.

* Time complexity: $$O(k)$$. Here we are using two `for` loops of length `k` to calculate the maximum possible score. This gives us $$O(2 \cdot k)$$, which in Big O notation is equal to $$O(k)$$.

* Space complexity: $$O(k)$$. Here we are using two arrays to store the total score obtained by selecting $$i(0 <= i < k)$$ cards from the beginning and $$i$$ cards from the end. This gives us $$O(2 \cdot k)$$, which is equal to $$O(k)$$.
    

<br/>

---

### Approach 2: Dynamic Programming - Space Optimized

**Intuition**

In approach 1 we used two extra storage spaces (two arrays of size `k`) to store the total score that can be obtained by taking `i` cards from the respective end of the array. 

Instead of pre-computing the arrays, we can calculate the total score while iterating over the array and store the total score in two variables (in place of the two arrays).

**Algorithm**

1. Initialize two variables, namely `frontScore` and `rearScore` to store the score obtained by selecting the first `i` cards and the last `k - i` cards in the array.

2. `frontScore` is initialized to the sum of the first `k` cards in the array, and `rearScore` is initialized to `0`.

3. Initialize `maxScore` to  `frontScore`.

4. Iterate backwards from `i = k - 1 -> 0`. At each iteration, we calculate the score by selecting `i` cards from the beginning of the array and `k - i` cards from the end (`currentScore`). If this score is greater than `maxScore`, we update it.

**Implementation**


<iframe src="https://leetcode.com/playground/56CunHLD/shared" frameBorder="0" width="100%" height="497" name="56CunHLD"></iframe>


**Complexity Analysis**

Let $$k$$ be the number of cards we need to select.

* Time complexity: $$O(k)$$. We are using two `for` loops of length `k` for calculation purposes. This gives us $$O(2 \cdot k)$$, which in Big O notation is equal to $$O(k)$$.

* Space complexity: $$O(1)$$. No extra space is used since all the calculations are done impromptu.
    

<br/>

---

### Approach 3: Sliding Window

**Intuition**

 In this problem, we must draw exactly `k` cards from the array in such a way that the score (sum of the cards) is maximized. After drawing `k` cards from the array `cardPoints.length - k` cards will remain in the array.

Another way that we could view the problem is that our objective is to choose cards from the beginning or end of the array in such a way that the sum of the *remaining* cards is *minimized*. 

 We can use a sliding window to find the subarray of size `cardPoints.length - k` that has the minimal sum. Subtracting this value from the total sum of all the cards will give us our answer. This is because no matter where the minimum subarray is located (in the beginning, the middle, or the end) the remaining cards must be selected under the given rule: *in one step, you can take one card from the beginning or the end of the array*.  


**Algorithm**

1. Find the sum of all cards in the array and store it in a variable `totalScore`.

2. If `k` is equal to `cardPoints.length`, then `return totalScore`.

3. Initialize `requiredSubarrayLength` to `cardPoints.length - k`.

4. Initialize two variables: `presentSubarrayScore` and `startingIndex` to `0`. This `startingIndex` marks the starting point of the subarray presently under consideration. Thus it keeps track of the length of the present subarray. 

5. Initialize a variable `minSubarrayScore` to `totalScore`. When the algorithm completes, this variable will hold the smallest possible subarray score in the input array.

6. Iterate over the array.
    * At each iteration add the current card to `presentSubarrayScore`.

7. If the size of the subarray under consideration `presentSubarrayLength` is equal to the `requiredSubarrayLength`:
    * Compare the score of the subarray `presentSubarrayScore` with the `minSubarrayScore` and modify the `minSubarrayScore` so that it stores the minimum possible subarray sum. 
    * Subtract the current card from the `presentSubarrayScore`.
    * Increment the `startingIndex`.

8. Subtract the `minSubarrayScore` from the `totalScore` to get the maximum total score that can be obtained by picking `k` cards from the beginning or the end of the array. Return this value.

**Implementation**

<iframe src="https://leetcode.com/playground/oSjd84Qu/shared" frameBorder="0" width="100%" height="500" name="oSjd84Qu"></iframe>

**Complexity Analysis**

Let $$n$$ be the number of cards we need to select.

* Time complexity: $$O(n)$$. In the problem, we are iterating over the array of cards twice. So the time complexity will be $$O(2 \cdot n)$$ = $$O(n)$$.

* Space complexity: $$O(1)$$ since no extra space is required.

<br/>

---