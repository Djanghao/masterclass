# Official Solution

**Link:** [https://leetcode.com/problems/split-array-largest-sum/solution/](https://leetcode.com/problems/split-array-largest-sum/solution/)

---

[TOC]

## Solution

--- 

### Overview
We have an array of $$n$$ non-negative integers which we must split into $$m$$ subarrays. The goal is to split it in such a way that the largest sum of a subarray among these $$m$$ subarrays is minimized.

While dividing the array, we can observe that for each integer, there are two options: either add it to the current subarray or start a new subarray with it (as long as the number of subarrays does not exceed $$m$$). The maximum number of possible combinations is $${n - 1} \choose {m - 1}$$ (because we must split the array at $$m - 1$$ positions to obtain $$m$$ subarrays, and there are $$n - 1$$ positions where the array can be split). The brute force approach is to enumerate every possible combination and select the combination with the smallest maximum sum subarray. However, given the problem constraints, the worst-case scenario will have $${999} \choose {49}$$ combinations, which is extraordinarily large. So let's try to find a better-optimized approach.

There are two characteristics of this problem that we should take note of at this time. First, as we iterate over each element, we must decide whether to add the element to the current subarray or to start a new subarray. This decision will depend on the number of subarrays we have already made. In other words, each decision we make is affected by the previous decisions we have made. Second, the problem is asking to **minimize** the largest sum of subarrays. These are two common characteristics of dynamic programming problems, and as such we will first approach this problem using dynamic programming.

> **Note:** If you arrived at this conclusion before reading this article, then you have done well! The clues in the problem description hint that we should consider using dynamic programming to solve this problem. However, what makes this problem especially tricky is that the optimal solution does not use dynamic programming! This speaks to the importance of taking a moment to consider other possible approaches, even after arriving at the first possible solution. Take a moment to try to come up with another viable approach now, and we will discuss the optimal approach last. 
</br>

---

### Approach 1: Top-Down Dynamic Programming

**Intuition**

Let's start with the first subarray, which can have a range like `[0, i]`. We need to decide the value of index `i`. Once we have decided the value of `i`, we can find the sum for the first subarray `sum[0, i]`. Then the problem simplifies to finding the maximum value out of `sum[0, i]` and the largest sum subarray for the array in the range `[i + 1, n - 1]` with $$m - 1$$ subarrays. This way we are able to divide the problem into smaller subproblems.

How do we find the optimal value of `i`? Let's try with every possible value of `i`. We can try every possible first subarray and then recursively solve the problem for the remaining array. Let's define our recurrence relation `F[currIndex, subarrayCount]` to be the minimum largest subarray sum for the array `[currIndex, n - 1]` with `subarrayCount` subarrays, we can write it in the following way:

`F[currIndex, subarrayCount] = min( max(sum[currIndex, i], F[i + 1, subarrayCount - 1]) )`, For all `i` in range `[currIndex, n - subarrayCount]`

Note that the function `F` shown here, represents `getMinimumLargestSplitSum` in the code provided below.

Let's break down the expression `max(sum[currIndex, i], F[i + 1, subarrayCount - 1])` so that we understand it better. 
- `F[i + 1, subarrayCount - 1]` represents the smallest possible largest sum subarray in the range `[i + 1, n - 1]` with  ` subarrayCount - 1` subarrays. 
- `sum[currIndex, i]` represents the sum of the current subarray spanning the range of `[currIndex, i]`. 
- We take the `max` of these two values, the expression as a whole represents the largest sum subarray in the range `[currIndex, n - 1]` with `subarrayCount` subarrays, when we make the first split at index `i`. 
- To find the optimal place to split the array, we calculate this for all `i` in the range `[currIndex, n - subarrayCount]` and take the minimum value as the result.

Also, it's worth noting a small optimization that we just did here by deciding the range for `i` as `[currIndex, n - subarrayCount]` instead of `[currIndex, n - 1]` this is because we need to divide the array into exactly `m` subarrays. Hence, if `i` goes beyond `n - subarrayCount` we won't be able to make `m` subarrays even if we only place a single element in each of the remaining subarrays.

If we can calculate the result for the subproblem without using the above recurrence relation (a base case) then we can simply return the result instead of making further recursive calls. In this problem, when there is only one subarray remaining, all of the numbers remaining must go in that subarray, so when `subarrayCount` is `1`, we can simply return the sum of the numbers between `currIndex` and the end of the array.

This recursive approach will have repeated subproblems; this can be observed in the figure below. Notice the green nodes are repeat subproblems signifying that we have already solved these subproblems before.

![fig](../Figures/410/410A.png)

To avoid spending time recalculating the results for previously seen subproblems, the first time we calculate the minimum largest sum for a certain range and number of subarrays, we will store the value in an array. Then, the next time we need to calculate the result for this same range and subarray count we can look up the result in constant time. This technique is known as memoization and it helps us avoid recalculating repeated subproblems.

**Algorithm**

1. Fill the array `prefixSum`. The $$i^{th}$$ index of `prefixSum` will have the sum of integers in `nums` in the range `[0, i - 1]` with `prefix[0] = 0`. (We need `prefixSum` because  each time we reach a base case, we must return the sum of the remaining elements, and a prefix sum array allows us to do this in constant time.)
2. Start with index `currIndex` as `0` and the number of subarrays  `subarrayCount` as `m`, this represents the subarray with range `[0, n - 1]` and `m` subarrays.
3. Select which elements will go in the current subarray by traversing over the indices starting from `currIndex` to `N - subarrayCount`. At each index:
   - Use `prefixSum` to find the sum of the elements in the current subarray (`firstSplitSum`).
   - Recursively call `getMinimumLargestSplitSum` to find the minimum largest subarray that can be obtained from the remaining elements.
   - The maximum of these two values (`largestSplitSum`) will be the largest subarray sum **if** the first subarray is `[currIndex, i]`.
   - Repeat this process for all `i` up to `n - subarrayCount`, then store the minimum possible `largestSplitSum` in `minimumLargestSplitSum`.
4. Return `minimumLargestSplitSum`; to avoid repeat calculations, also store it in the memoization table `memo` corresponding to `currIndex` and `subarrayCount`.
5. Base case: If `subarrayCount` is `1`, then we know that all of the remaining numbers **must** go in the current subarray. So instead of making recursive calls according to step 3, when `subarrayCount` is `1`, we can simply return the sum of numbers between `currIndex` and the end of the array.

**Note:**  In the for loop for traversing `i`, once `firstSplitSum` is larger than `minimumLargestSplitSum` it is impossible for us to find a better `minimumLargestSplitSum` because `firstSplitSum` will only continue to increase (because all numbers are non-negative) and so does the `largestSplitSum`. So we can prune our search by breaking when `firstSplitSum` becomes greater than or equal to the `minimumLargestSplitSum`.

**Implementation**


<iframe src="https://leetcode.com/playground/nAv3vU7q/shared" frameBorder="0" width="100%" height="500" name="nAv3vU7q"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of the array and $$M$$ is the number of subarrays allowed.

* Time complexity: $$O(N^2 \cdot M)$$

  Each state is defined by the values `currIndex` and `subarrayCount`. As such, there are $$N \cdot M$$ possible states, and we must visit almost every state in order to solve the original problem. Each state (subproblem) requires $$O(N)$$ time because we have a for loop from `currIndex` to `N - subarrayCount`. Thus the total time complexity is equal to $$O(N^2 \cdot M)$$.

* Space complexity: $$O(N \cdot M)$$
  
  The memoization results are stored in the table `memo` with size $$N \cdot M$$. Also, stack space in the recursion is equal to the maximum number of active functions. The maximum number of active functions can be equal to $$M$$ as we only make a recursive call when splitting the array and we do not make a recursive call when there is only $$1$$ subarray remaining. Hence, the space complexity is equal to $$O(N \cdot M)$$.
<br/>

---

### Approach 2: Bottom-Up Dynamic Programming

**Intuition**

In the previous approach, the recursive calls incurred stack space. This can be avoided by applying the same approach iteratively which is generally faster than the top-down approach. We will follow a similar approach as the previous one just in a reverse manner.

In this approach, we will use the same recurrence relation and the base case as we used in the previous approach. So the code will remain largely the same as in the previous approach. The difference lies in the way of filling the memoization table `memo`.  In the top-down implementation, we visited each subproblem by making recursive calls until we reached a base case. Whereas in the bottom-up implementation, we will use two for loops to iterate over every subproblem (`currIndex`, `subarrayCount`), starting from the base case (`subarrayCount = 1`). We will iterate `subarrayCount` from `1` to `m`, and for each value, we will find the largest minimum subarray sum for every range `[currIndex, n - 1]`, where `currIndex` varies from `0` to `n - 1`.

**Algorithm**
1. Fill the array `prefixSum`. The $$i^{th}$$ index of `prefixSum` will have the sum of integers in `nums` in the range `[0, i - 1]` with `prefix[0] = 0`.
2. Initialize an array `memo` where `memo[currIndex][subarrayCount]` will store the result for the subproblem (`currIndex`, `subarrayCount`).
3. We need to find the value of `memo[0][m]` which represents the minimum largest subarray sum starting at index `0` with `m` subarrays. But we only know what the result will be for the base cases. To fill the `memo` array, we will iterate `subarrayCount` over the range `[1, m]` (starting at 1 because that is our base case) and iterate `currIndex` over the range `[0, n - 1]`.
4. For each value of `subarrayCount` and `currIndex`, we will update `memo[subarrayCount][currIndex]`:
   - As the sum of the elements between `currIndex` and the end of the array if we are at a base case (`subarrayCount` equals 1).
   - Otherwise, we will use the recurrence relation and the results from previously solved subproblems to calculate `memo[subarrayCount][currIndex]`. 
5. Return the value stored at `memo[0][m]`.

**Implementation**


<iframe src="https://leetcode.com/playground/5RbHyTQW/shared" frameBorder="0" width="100%" height="500" name="5RbHyTQW"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of the array and $$M$$ is the number of subarrays allowed.

* Time complexity: $$O(N^2 \cdot M)$$

  Each state is defined by the values `currIndex` and `subarrayCount`. As such, there are $$N \cdot M$$ possible states, and we must visit almost every state in order to solve the original problem. Each state (subproblem) requires $$O(N)$$ time because we have a for loop from `currIndex` to `N - subarrayCount`; because we have stored the result in the table `memo`, any repeated calls will only require constant time. Thus the total time complexity is equal to $$O(N^2 \cdot M)$$.

* Space complexity: $$O(N \cdot M)$$
  
  The results are stored in the table `memo` with size $$N \cdot M$$. Hence, the space complexity is equal to $$O(N \cdot M)$$.
<br/>

---

### Approach 3: Binary Search

**Intuition**

This approach is quite different from the previous approaches. The characteristics of this problem are a good fit for the dynamic programming solution hence, it's easy to overlook the idea of using binary search. This problem satisfies the property that we can guess the answer (the minimum largest sum subarray value) and check if that value was too high or too low, thus narrowing our search space. It requires a different perspective to think of this approach, but after realizing that this problem is a candidate for a binary search solution, it becomes easier to implement than the previous approaches.

The goal of this problem is to find the minimum largest subarray sum with $$m$$ subarrays. Instead of finding the answer directly, what if we try to guess the answer (say $$X$$), and check whether this particular value could be the largest subarray sum with $$m$$ subarrays. If this is possible, we can check all values for $$X \geq  0$$, and the first value that satisfies the condition will be the answer. Thus, by repeatedly solving the following problem, we can find the minimum largest subarray sum needed to split `nums` into $$m$$ subarrays:

> Given an array of $$n$$ integers and a value $$X$$, determine the minimum number of subarrays the array needs to be divided into such that no subarray sum is greater than $$X$$.

If the minimum number of subarrays required is less than or equal to $$m$$ then the value $$X$$ could be the largest subarray sum.

The solution to this newly defined problem is as follows

- First, make sure $$X$$ is greater than or equal to the maximum element in the array. Otherwise, no solution would be possible because we cannot divide an element.
- Start from `0th` index and keep adding elements to `sum` only if adding the element does not make `sum` greater than $$X$$.
- If adding the current element would make the `sum` greater than $$X$$ then we have to split the subarray here. So we will increment the number of splits required (`splitsRequired`) and set `sum` to the value of current element (signifying that the current subarray only contains the current element).
- Once we traversed the whole array, return `splitsRequired + 1`. This is the minimum number of subarrays required.

Now the problem with the current solution is that the value of $$X$$ can be as large as the sum of integers in the given array. Hence, checking for all values of $$X$$ is not feasible.

The key observation here is that if we are able to split the array into $$m$$ or fewer subarrays for a value $$X$$ then we will also be able to do it for any value greater than $$X$$. This is because the number of subarrays would be even less in case of any value greater than $$X$$. Similarly, if it's not possible for a value $$X$$ it will not be possible to have $$m$$ or fewer splits for any value less than $$X$$.

The following slideshow demonstrates this algorithm:

!?!../Documents/410_Split_Array_Largest_Sum.json:960,720!?! <br>

Therefore, instead of searching linearly for $$X$$, we can do a binary search! If we can split the array into $$m$$ or fewer subarrays all with a sum that is less than or equal to $$X$$ then we will try a smaller value for $$X$$ otherwise we will try a larger value for $$X$$. Each time we will select $$X$$ so that we reduce the size of the search space by half.

**Algorithm**

1. Store the sum of elements in `nums` in the variable `sum` and the maximum element of the array in `maxElement`.
2. Initialize the boundary for binary search. The minimum value for the largest subarray sum is `maxElement` and the maximum value is equal to `sum`. Hence assign `left` and `right` to `maxElement` and `sum` respectively.
3. Then while the left is not greater than right:

    a. Find the mid-value in range `[left, right]`, this is equal to the maximum subarray sum allowed. Store it in `maxSumAllowed`.

    b. Find the minimum number of subarrays required to have the largest subarray sum equal to `maxSumAllowed`. 
      
     - If the number of subarrays is less than or equal to $$m$$ then assign `maxSumAllowed` as the answer `minimumLargestSplitSum` and decrease the value of our right boundary.
     - If the number of subarrays is more than $$m$$ this can't be the answer hence, increase the value of our left boundary.
4. Return `minimumLargestSplitSum`.

**Implementation**


<iframe src="https://leetcode.com/playground/AtL368Rt/shared" frameBorder="0" width="100%" height="500" name="AtL368Rt"></iframe>


**Complexity Analysis**

Here $$N$$ is the length of the array and $$S$$ is the sum of integers in the array.

* Time complexity: $$O(N \cdot \log(S))$$
   
   The total number of iterations in the binary search is $$\log(S)$$, and for each such iteration, we call `minimumSubarraysRequired` which takes $$O(N)$$ time. Hence, the time complexity is equal to $$O(N \cdot \log(S))$$.
   
* Space complexity: $$O(1)$$
   
   We do not use any data structures that require more than constant extra space.

<br/>

---