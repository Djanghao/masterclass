# Official Solution

**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solution/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solution/)

---

[TOC]

## Solution

--- 

### Overview

We have the task of breaking the given array into `k` different parts such that all parts have the same sum. 
This implies that each part will have a sum of `totalArraySum / k`.
While breaking the given array into `k` subsets, we can pick elements from any position.

Let's start from the most naive approach and gradually progress towards the optimal approach.

An intuitive way to approach this problem is to build each subset by randomly selecting one element at a time.  Since the whole array has a sum of `totalArraySum`, then as long as the current subset's sum `currentSubsetSum` is less than `totalArraySum / k`, we can randomly select elements to add to the current subset.
If the `currentSubsetSum` becomes equal to `totalSum / k`, then we have found one subset of the desired sum and we can proceed to make another subset. However, if the `currentSubsetSum` is greater than `totalSum / k`, we need to go back and try to build this subset differently.
This can be done using a backtracking algorithm.      

<br />

What is backtracking?
> Let's consider a situation. Suppose a thief is standing in front of three houses, one of which has a bag of gold, but he doesn't know which one. 
The thief will try all three houses. First, he will go into House 1, if the gold isn't there, then he will leave, and go into House 2, and again if that is not the right house, then he will leave and go into House 3. 

!?!../Documents/698/slideshow_1.json:960,540!?!

<br />

> While solving a problem using recursion, we break the given problem into smaller subproblems.    
So basically, in backtracking, we attempt to solve a subproblem, and if we don't reach the desired solution, then we **undo** whatever we did when trying to solve that subproblem and then try to solve the subproblem again by making a different choice.      


So in this problem, we will pick one element and try including it in our subset, if after including this element in the current subset we can't make a valid combination of all subsets, then we will discard the last picked element, _hence we will backtrack_ and try another element.


<br />     

---

### Approach 1: Naive Backtracking


**Intuition**

Our goal is to break the given array into `k` subsets of equal sums.     
Firstly, we will check if the array sum can be evenly divided into `k` parts by ensuring that `totalArraySum % k` is equal to `0`.

Now, if the array sum can be evenly divided into `k` parts, as previously mentioned, we will try to build those k subsets using backtracking.    

We will keep a `currentSum` variable denoting the sum of the current subset. One by one, try to include each element from the array that has not already been picked and then make a recursive call to pick the next element.    
To keep track of already picked elements we will use a vector (`taken`) to denote if the element at the `ith` index has already been picked or not.     
When we pick the `ith` element, we will set `taken[i]` equal to `true`. Then after we try all combinations, we will backtrack and discard the picked element by setting `taken[i]` equal to `false` so that it can be picked in a future recursive call.      

If we reach the condition `currentSum` is greater than `targetSum`, then we cannot reach the target by adding more elements to the subset, so there is no need to proceed further; we can just backtrack from here.     
If we reach the condition, `currentSum` equals `targetSum`, that means we made one subset with the target sum. So now we can increment a `count` variable that counts how many subsets with a sum equal to the target we have made from our array.    
When `count` becomes `k`, that means we have made `k` equal sum subsets of our array; hence we can return `true`.      
Finally, when `count` becomes `k - 1`, that means we have `k` equal sum subsets in our array because the `totalArraySum` is divisible by `k` and the sum of `k - 1` subsets will be `(k - 1) * targetSum`, hence the last subset-sum must also equal `targetSum`. So we can stop at condition `count == k - 1` to save some time by skipping a few redundant recursive calls.


!?!../Documents/698/slideshow_2.json:960,540!?!

<br />

**Algorithm**

1. Calculate `totalArraySum`, and check if the sum is evenly divisible by `k`.  If so, we can break the array into `k` subsets and the sum of each subset must be equal `targetSum = totalArraySum / k`.
2. For each element that has not been picked yet, i.e. `taken[j]` is `false`:
    * We include it in our subset, `currSum = currSum + arr[j]` and mark it as taken, by setting `taken[j]` equal to `true`.
    * Then we make a recursive call to find the next element to include.
        * If this recursive call returns `true`, it means we have found a valid combination to break the array into `k` subsets. Thus, we can return `true` from here.
        * Otherwise, we will discard the current element (backtrack) i.e. set `taken[j]` to `false` and subtract the current element from `currSum`, and then try the next element that is not taken.
3. When `currSum` equals `targetSum`, we have made one subset. So reset `currSum` to `0` to start a new subset, and increment `count` by `1`.
4. When `count` equals `k - 1`, we have made `k - 1` subsets, each with a sum equal to `targetSum`.  Therefore, the last subset must also have the sum equal to `targetSum`, so we can return `true` from here.


**Implementation**

<iframe src="https://leetcode.com/playground/E5pW5kkq/shared" frameBorder="0" width="100%" height="500" name="E5pW5kkq"></iframe>


**Complexity Analysis**

Let $$N$$ denote the number of elements in the array.

* Time complexity: $$O(N \cdot N!)$$. 

    The idea is that for each recursive call, we will iterate over $$N$$ elements and make another recursive call. Assume we picked one element, then we iterate over the array and make recursive calls for the next $$N-1$$ elements and so on.    
    Therefore, in the worst-case scenario, the total number of recursive calls will be $$N \cdot (N-1) \cdot (N-2) \cdot ... \cdot 2 \cdot 1 = N!$$ and in each recursive call we perform an $$O(N)$$ time operation.    

    Another way is to visualize all possible states by drawing a recursion tree. From root node we have $$N$$ recursive calls. The first level, therefore, has $$N$$ nodes. For each of the nodes in the first level, we have $$(N-1)$$ similar choices. As a result, the second level has $$N*(N-1)$$ nodes, and so on. The last level must have $$N \cdot (N-1) \cdot (N-2) \cdot (N-3) \cdot ... \cdot 2 \cdot 1$$ nodes.

![recursion tree](../Figures/698/Slide56.JPG)

<br />

* Space complexity: $$O(N)$$.
    
    We have used an extra array of size $$N$$ to mark the picked elements.    
    And the maximum depth of the recursive tree is at most $$N$$, so the recursive stack also takes $$O(N)$$ space.

<br/>

---

### Approach 2: Optimized Backtracking

**Intuition**

In the previous approach in each function call, we will start iterating over the given array from the 0th index, even if the previous elements were already taken.    
Instead of starting our search for each element to include from the 0th index, again and again, we can continue the search from the last picked element. When a subset is completed, only then will we start the search from the 0th index, as we can now include the previously skipped elements in new subsets.        
We are doing this because it allows us to skip checking the elements that are already picked. Also, if there is an element that was skipped earlier, then that element will be skipped again because now the subset-sum has increased; if it did not fit in the subset earlier, it would not fit now.

The runtime can be further improved by initially sorting the given array in decreasing order.
> If we had sorted the array in ascending order (smaller values on the left side), then there would be more recursion branches (recursive calls). This is because when the change in subset-sum is small, more branches will be repeatedly created during the backtracking process.


!?!../Documents/698/slideshow_3.json:960,540!?!

<br />

**Algorithm**

1. Calculate `totalArraySum`, and check if the sum is evenly divisible by `k`.  If so, we can break the array into `k` subsets and the sum of each subset must be equal `targetSum = totalArraySum / k`.
2. Sort the array.
3. For each element that has not been picked yet, i.e. `taken[j]` is `false`:
    * We include it in our subset, `currSum = currSum + arr[j]` and mark it as taken, by setting `taken[j]` equal to `true`.
    * Then we make a recursive call to find the next element to include. Note that we start looking from the next element in the array after the element we have already included, not from the beginning of the array as we did in the previous approach.
        * If this recursive call returns `true`, it means we have found a valid combination to break the array into `k` subsets. Thus, we can return `true` from here.
        * Otherwise, we will discard the current element (backtrack) i.e. set `taken[j]` to `false` and subtract the current element from `currSum`, and then try the next element that is not taken.
4. When `currSum` equals `targetSum`, we have made one subset. So reset `currSum` to `0` to start a new subset, and increment `count` by `1`.
5. When `count` equals `k - 1`, we have made `k - 1` subsets, each with a sum equal to `targetSum`.  Therefore, the last subset must also have the sum equal to `targetSum`, so we can return `true` from here.

**Implementation**

<iframe src="https://leetcode.com/playground/GTApFphi/shared" frameBorder="0" width="100%" height="500" name="GTApFphi"></iframe>


**Complexity Analysis**

Let $$N$$ be the number of elements in the array and $$k$$ be the number of subsets.

* Time complexity: $$O(k \cdot 2^N)$$. 

    We are traversing the entire array for each subset (once we are done with one subset, for the next subset we are starting again with index 0). So for each subset, we are choosing the suitable elements from the array (basically iterate over nums and for each element either use it or skip it, which is $$O(2^N)$$ operation).     
    Once the first subset is found, we go on to find the second, which would take 2^N operations roughly (because some numbers have been marked as visited). So $$T = 2^N + 2^N + 2^N + ... = k \cdot 2^N$$.     
    
    > Also, one point to note that some might think if we take $$2^N$$ time in finding one subset and we find $$k$$ such subsets, then it will lead to $$2^N \cdot 2^N \cdot ...(k times).. \cdot 2^N = 2^(N \cdot k)$$ time complexity. However, this is a misconception, as we iterate over array $$k$$ times to get $$k$$ subsets, hence total time is $$k \cdot (time to get one subset) = k \cdot 2^N$$.     

    <br />

    _Why do the recursive calls for including and not including elements have $$O(2^N)$$ time complexity?_

    >    The idea is that we have two choices for each element: include it in the subset OR not include it in the subset. We have N such elements. Therefore, the number of cases for events of including/excluding all numbers is: $$2 \cdot 2 \cdot 2 \cdot ...(N times).. \cdot 2 = 2^N$$.     


    >    Another way is to visualize all possible states by drawing a recursion tree. In the first level, we have 2 choices for the first number, including the first number in the current subset or not. The second level, therefore, has 2 nodes. For each of the nodes in the second level, we have 2 similar choices. As a result, the third level has 2^2 nodes, and so on. The last level must have $$2^N$$ nodes.

    <br />

* Space complexity: $$O(N)$$.
    
    We have used an extra array of size $$N$$ to mark the already used elements.    
    And the recursive tree makes at most $$N$$ calls at one time, so the recursive stack also takes $$O(N)$$ space.

<br/>

---


### Approach 3: Backtracking plus Memoization


**Intuition**

In the previous approach, in some scenarios, like the one illustrated below, we would make recursive calls that are identical to previous recursive calls that returned false. As in the previous approach, here, we will also try out each possible combination. However, this time, we will avoid redundant computations by adding memoization.

_What is Memoization?_
> Memoization is an optimization technique that speeds up algorithms by storing the results of function calls and returning the cached result when the same inputs are supplied again.

We can memoize the answer based on elements included in any of the subsets.

> For example, consider a scenario in which we have picked the 0th and 1st elements in set 1 and the 2nd and 3rd elements in set 2, but now we can't make set 3 using the remaining elements. We can store that if we have picked 0th, 1st, 2nd, and 3rd elements, we will never be able to make k valid subsets.    
If in some other recursive calls we picked the 0th and 3rd elements in set 1, and the 1st and 2nd elements in set 2, then instead of checking if we can make a set 3 or not, we have already stored the answer that we can't make a valid subset using only the remaining elements. Hence we can return the stored answer (false) from this configuration.    


!?!../Documents/698/slideshow_4.json:960,540!?!


Now, we need to store the `taken` array so an easy way will be to use a string instead of a `taken` array.
The string will denote `'0'` if the element is not picked and `'1'` if the element is picked.
And we can use a map of string as a key and boolean as value to memoize the result. 

<br />

**Algorithm**

1. Calculate `totalArraySum`, and check if the sum is evenly divisible by `k`.  If so, we can break the array into `k` subsets and the sum of each subset must be equal `targetSum = totalArraySum / k`.
2. Check if the result for the current configuration of picked elements is already stored.
    * If it is already stored, then return the cached answer.
3. For each element that has not been picked yet, i.e. `taken[j]` is `'0'`:
    * We include it in our subset, `currSum = currSum + arr[j]` and mark it as taken, by setting `taken[j]` equal to `'1'`.
    * Then, we make a recursive call to find the next element to include.
        * If this recursive call returns `true`, it means we have found a valid combination to break the array into `k` subsets. Thus, we can return `true` from here.
        * Otherwise, we will discard the current element (backtrack) i.e. set `taken[j]` to `'0'` and subtract the current element from `currSum`, and then try the next element that is not taken.
4. When `currSum` equals `targetSum`, we have made one subset. So reset `currSum` to `0` to start a new subset, and increment `count` by `1`.
5. When `count` equals `k - 1`, we have made `k - 1` subsets, each with a sum equal to `targetSum`.  Therefore, the last subset must also have the sum equal to `targetSum`, so we can return `true` from here.
6. Memoize the answer for this configuration of picked elements.

**Implementation**

<iframe src="https://leetcode.com/playground/5V5oDppi/shared" frameBorder="0" width="100%" height="500" name="5V5oDppi"></iframe>


**Complexity Analysis**

Let $$N$$ denote the number of elements in the array.

* Time complexity: $$O(N \cdot 2^N)$$. 
    
    There will be $$2^N$$ unique combinations of the `taken` string, in which every combination of the given array will be linearly iterated. And if a combination occurs again then we just return the stored answer for it.      

<br />

* Space complexity: $$O(N \cdot 2^N)$$.
    
    There will be $$2^N$$ unique combinations of the `taken` string, and each string of size $$N$$ will be stored in the map. Also, the recursive stack will use at most $$O(N)$$ space at any time.

<br/>

---


### Approach 4: Backtracking plus Memoization with Bitmasking


**Intuition**

In the previous approach, we saw that the answer could be memoized using the state of picked elements from our array. And for that, we used a string. Similarly, we can use an integer (called a mask) to represent which indices have been picked and not picked in the array. The benefit of using an integer as a mask to represent the `taken` array is that it only uses constant space instead of the linear space required by an array. Furthermore, updating an integer mask and checking if it is present in `memo` only requires constant time; this process required linear time in the previous approach.

_How can we use an integer mask instead of a boolean array?_
> An integer has 32 bits, where each bit can be 0 or 1, we can denote the picked/not-picked state of the ith index of the array as an ith bit of the integer. If the ith index is picked from the array, we set the ith bit to 1, otherwise, we set the ith bit to 0 indicating that the element at the ith index has not been used.


!?!../Documents/698/slideshow_5.json:960,540!?!

_Some BitMask Operations:_
*   To check if the `ith` bit is set in the mask, we can perform, `(mask >> i) & 1`. 
    `(mask >> i)` operation will shift the `ith` bit to the `0th` position, and then we can check if the right-most bit is `0` or `1` by taking its bitwise AND with `1`.  

*   To set the `ith` bit in the mask we can do, `mask | (1 << i)`.    
    `(1 << i)` operation will shift the `0th` bit of `1` to the `ith` position, and after taking its bitwise OR with the mask, the mask's `ith` bit will also become `1`.    

*   To unset the `ith` bit in the mask we can do, `mask ^ (1 << i)`.
    `(1 << i)` operation will shift the `0th` bit of `1` to the `ith` position, then taking its bitwise-XOR with mask will unset the `ith` bit and rest bits remain same.       

<br />

**Algorithm**

1. Calculate `totalArraySum`, and check if the sum is evenly divisible by `k`.  If so, we can break the array into `k` subsets and the sum of each subset must be equal `targetSum = totalArraySum / k`.
2. Check if the result for the current configuration of picked elements is already stored.
    * If it is already stored, then return the cached result.
3. For each element that has not been picked, i.e. `jth` bit of mask is `0`.
    * We include it in our subset, `currSum = currSum + arr[j]` and mark it as taken, by setting the `jth` bit of the mask to `1`. 
    * Then, we make a recursive call to find the next element to include.
        * If this recursive call returns `true`, it means we have found a valid combination to break the array into `k` subsets. Thus, we can return `true` from here.
        * Otherwise, we will discard the current element (backtrack) i.e. set the `jth` bit of mask to `0` and subtract the current element from `currSum`, and then try the next element that is not taken.
4. When `currSum` equals `targetSum`, we have made one subset. So reset `currSum` to `0` to start a new subset, and increment `count` by `1`.
5. When `count` equals `k - 1`, we have made `k - 1` subsets, each with a sum equal to `targetSum`.  Therefore, the last subset must also have the sum equal to `targetSum`, so we can return `true` from here.
6. Memoize the result of this configuration of picked elements using the integer mask.

**Implementation**

<iframe src="https://leetcode.com/playground/hYGiK5gt/shared" frameBorder="0" width="100%" height="500" name="hYGiK5gt"></iframe>


**Complexity Analysis**

Let $$N$$ denote the number of elements in the array.

* Time complexity: $$O(N \cdot 2^N)$$. 
    
    There will be $$2^N$$ unique combinations of building a subset from the array of length `N`, in every combination the given array will be linearly iterated. And if a combination occurs again, then we just return the stored answer for it.      

<br />

* Space complexity: $$O(2^N)$$.
    
    There will be $$2^N$$ unique combinations of the integer `mask` which will be stored in the map. And recursive stack will require at most $$O(N)$$ space.

<br/>

---


### Approach 5: Tabulation plus Bitmasking

**Intuition**

By converting the DFS + Memo approach (which is an optimized top-down dynamic programming approach) to an iterative DP approach, we can eliminate the recursive stack space usage and the time usage to call functions. However, keep in mind that iterative DP approaches will typically iterate over every subproblem.  This includes subproblems that we would have skipped in the previous approach.  So while the average time and space required to solve each subproblem are better, we may need to visit more subproblems overall.
The DP state will be the mask that denotes which elements have been picked from the array.     

In each DP state we will pick a non-picked element, then set the corresponding bit in the mask (and the new mask will be greater than the current mask, because we set some unset bit hence we increased the value) and also add the value of that picked element to current DP state value. This indicates that in a previous subset we picked a non-picked element from the array and added it to the subset sum, and we set the same bit in the mask as the position of that element in the array.     

Next time when this new DP state will occur we will try the same thing, pick a non-picked element and add it to the current subset sum, set the corresponding bit and store it again.     


Also, we will take the DP value's mod with `targetSum`. Doing so will reset the value to `0` whenever we make one complete subset (meaning we will start a new subset) or will keep the value as it was earlier when the subset was not complete.
In the end, after picking all of the elements, the `subsetSum[111.....1111]` should have the remainder `0` in it.

Hence,    
- We will only start a new subset when the sum of the previous subset is equal to `targetSum`.
- We are not allowing any state where the sum becomes more than the `targetSum` (`subsetSum[mask] + arr[i] <= targetSum`). So the sum of the (`current subset + current element`) is either less than `targetSum` or equal to `targetSum`. If it is equal to `targetSum` then we can start the next subset.      
- For the solution to return true there should be exactly `k` subsets and this can only happen when `subsetSum[111.....1111]` is changed from -1 to 0.

!?!../Documents/698/slideshow_6.json:960,540!?!

<br />

**Algorithm**

1. Calculate `totalArraySum`, and check if the sum is evenly divisible by `k`.  If so, we can break the array into `k` subsets and the sum of each subset must be equal `targetSum = totalArraySum / k`.
2. For each valid `mask` state:
    - Iterate over each element in the array, and pick a not picked element if the sum will not exceed `targetSum`.
    - Mark the element as picked in the mask and store the subset's sum at `subsetSum[new_mask]`.
    - `new_mask` will be the previous mask ORed with the current picked index, i.e. `mask | (1<<i)`.
    - It will make a new state valid and this state can be used in the future to add more elements to it.
3. If we reached the last dp state, i.e. 1111....111, then it means we can partition all the elements in `k` subsets of the equal sum.

**Implementation**

<iframe src="https://leetcode.com/playground/KDk3ACvA/shared" frameBorder="0" width="100%" height="500" name="KDk3ACvA"></iframe>


**Complexity Analysis**

Assume $$N$$ denotes the number of elements in the array.

* Time complexity: $$O(N \cdot 2^N)$$. 
    
    There will be $$2^N$$ unique states of the `mask` and in each state, we iterate over the whole array.

<br />

* Space complexity: $$O(2^N)$$.
    
    There will be $$2^N$$ unique states of the `mask` which will be stored in the `subsetSum` array.

<br/>

---