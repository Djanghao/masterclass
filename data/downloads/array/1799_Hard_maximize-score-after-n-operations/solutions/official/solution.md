# Official Solution

**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solution/](https://leetcode.com/problems/maximize-score-after-n-operations/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we have an array of size $\text{2 * n}$, and we perform $\text{n}$ operations, in each operation, we choose two numbers $\text{x}$ and $\text{y}$ and then we receive a score of $\text{i * gcd(x, y)}$, where $\text{i}$ is the current operation number, and remove these two numbers from our array. We need to maximize the sum of scores at the end.

---

### Approach 1: DP with Bitmasking (Recursive)

#### Intuition   

The problem can be solved by using a backtracking approach, we can try forming all cases of all possible pairs of elements, generating the total score in each case, and selecting the one with the maximum score. 

![img1](../Figures/1799/Slide1.PNG)

We can write a recursive function `backtrack()` which generates all possibilities by picking two elements and recursively finding the answer for the remaining array after discarding the two chosen elements. We break the current **bigger problem into smaller similar sub-problems**.  

```python
def backtrack(array) -> int:
    for element1 in array:
        for element2 in array:
            # get the current score for pair (element1, element2)
            # remove both elements from the array and get the remaining array score 
            # put the elements back in the array and try other elements, i.e. BACKTRACK
```

This is a brute-force approach. We can implement some optimizations.


Now, say we have an array of eight elements $\text{[a, b, c, d, e, f, g, h]}$. Consider two cases.   
- In case 1, we picked pairs $\text{(c, d)}$ and $\text{(b, e)}$, and we are left to find out the answer of the array $\text{[a, f, g, h]}$.
- In case 2, we picked pairs $\text{(b, c)}$ and $\text{(d, e)}$, and we are left to find out the answer of the array $\text{[a, f, g, h]}$.

In both cases, we can see that the sub-problem $\text{[a, f, g, h]}$ needs to be calculated, thus we can **memoize the results** to save computation time whenever a sub-problem is repeated.

![img2](../Figures/1799/Slide2.PNG)


Now, we know that the state of the current sub-problem depends on the remaining elements of the array. So we need to memoize the result based on this state. An easy way to implement this is using **bitmasking**.

We can keep a boolean array, and we mark picked numbers in this array. 
But instead of using an array, we can achieve the same functionality using an integer.  

As integers have $32$ bits, each bit can be $0$ or $1$. We can use these bits to represent if an element of our array is picked or not.   
In an integer number (say $\text{mask}$) if the bit at position $\text{i}$ is $0$, it means the array element at the $\text{i}^{th}$ index is not picked otherwise if it's $1$ it means the element was picked earlier.

**Note:** If number of elements in the `nums` array will exceed $32$ then we will not be able to use this method with a 32 bit integer.


So we can map the `mask` (current state) with the result, using a hashmap or an array, `memo`.  
Here, the `mask`'s value will vary from $0$ (no element is picked) to $2^{\text{nums array size}} - 1$ (i.e. $111111...11$ in binary, all elements are picked).   
Thus, the `memo` array's size will be $2^{\text{nums array size}} = 2^{2n}$.



#### Algorithm

1. Create a function `backtrack` which takes the `nums` array, `mask` and `pairsPicked` integers, and `memo` array as arguments:
    - If we picked all elements from the `nums` array, then we return $0$ from here as no score can be received now.
    - If we had already solved the same sub-problem earlier, i.e. `memo[mask] != -1`, then we return the stored result from the `memo` array.
    - Otherwise, initialize `maxScore` as `0`.
    - Using two nested for loops we iterate on each pair of numbers pointed by `firstIndex` and `secondIndex` in the `nums` array. We check if the bit of `mask` at these indices is `0` to make sure those numbers were not picked earlier.
        - We mark them as picked in `newMask`, calculate the current score `currScore`, and find the score of the remaining numbers `remainingScore` recursively passing `newMask` in its parameter.
        - If the `maxScore` is smaller than `currScore + remainingScore`, we update `maxScore` with it.
        - At the end of the loops, we discard the picked numbers and reset the `mask` to its previous value (i.e. we are backtracking).
    - In the end, we store the result of the current sub-problem in the `memo` array and return the result `maxScore`.
2. Create a `memo` array of size $2^{2 n}$ and initialize with `-1`.
3. Call the `backtrack` function with `mask = 0` and `pairsPicked = 0` to denote no element is initially picked and return the result.

#### Implementation

<iframe src="https://leetcode.com/playground/JYrCBwq9/shared" frameBorder="0" width="100%" height="500" name="JYrCBwq9"></iframe>


#### Complexity Analysis

Here, $m = 2 * n$ is the number of elements, and $A$ is the maximum value in the `nums` array.   
The maximum value of $A$ can be $10^6$.

* Time complexity: $$O(2^{2n} \cdot (2n)^2 \cdot \log A) = O(4^n \cdot n^2 \cdot \log A)$$   
    - We make exponential amount of calls to `backtrack` function, but as only $2^{m}$ unique states of `mask` are possible, due to memoization, we will only evaluate $2^{m}$ calls of the function (in other calls we directly return stored result).
    - In each `backtrack` function call we iterate on all pairs using a nested for loop which will take $O(m^2)$ time, and for each pair, we perform a gcd operation which will take at most $O(\log A)$ time.  So, we take $O(m^2 \cdot \log A) $ time in each function call.  
   - Thus, overall we take $O(2^{m} \cdot m^2 \cdot \log A)$ time.

> **Note:** A better upper bound for the time complexity might exist for this approach, but this analysis is sufficient during the limited time of an interview setting.

* Space complexity: $$O(n + 2^{2n}) = O(4^n)$$
    - The recursive stack will take at most $O(n)$ space at any time. 
    - We store the results of all possible states in the `memo` array, and a total of $2^{m} = 2^{2n}$ states are possible.
    - Thus, we use $O(n + 2^{2n}) = O(4^n)$ space.

<br/>

---

### Approach 2: DP with Bitmasking (Iterative)

#### Intuition  

The previous approach can also be implemented iteratively.

We keep one integer variable `state` which will represent all the states of all possible sub-problems.  
Also, let's keep a `dp` array, where `dp[i]` will store the maximum score we can get after we have picked elements represented by `i` (in binary).  

As we can't get more score after picking all the numbers.    
Thus, our base case will be: $\text{dp[finalMask] = 0}$, where $\text{finalMask = 1111...111}$ (in binary).


When we are at a sub-problem $\text{state = X}$ and we choose a pair at indices $\text{(i, j)}$.  
Then the current state's score will be, the maximum score we can get with the remaining numbers and the current score, i.e.  

> $\text{dp[state] = dp[stateAfterPickingCurrPair] + operationNumber * gcd(nums[i], nums[j])}$,  

where, $\text{stateAfterPickingCurrPair = X | (1 << i) | (1 << j)}$ (the new mask will always be greater than the current mask, this hints we need to find the result for the bigger mask first).  
and, $\text{operationNumber}$ will be one more than the number of pairs we already picked, $\text{(number of ones in mask / 2) + 1}$.


To sum up, in this approach, we will iterate on all possible `states` in decreasing order. The maximum score for the base state when all elements are picked is zero, otherwise, we iterate on all possible pairs of numbers we can choose, and using the chosen numbers and the score of the state after picking the current pair (as discussed above) we calculate the current state's maximum score.  

**Note:** If any state represents we picked odd number of elements then we skip that state, it will not be a valid state for us as we always pick numbers in pairs.

#### Algorithm

1. Initialize variable: 
    - `maxStates` as $2^{2n}$, `finalMask` as `maxStates - 1`.
    - an array `dp` of size `maxStates` to store the maximum score we can get after picking the remaining numbers represented by each possible state.
2. Iterate on all possible states `state` from `finalMask` to `0` in decreasing order:
    - If we have picked all numbers, we know we can't get more score as no number is remaining. Therefore, we set `dp[state]` to `0` and continue to the next iteration. Otherwise, we count the number of numbers already picked `numbersTaken` using built-in STL methods and calculate the number of pairs formed `pairsFormed` by dividing `numbersTaken` by `2`.
    - If `numbersTaken` is odd, it means we have picked an odd number of numbers, and this state is not possible in our problem. Therefore, we continue to the next state.
    - Using two nested for loops we iterate on each pair of remaining numbers pointed by `firstIndex` and `secondIndex` in the nums array. 
        - We check if the bit of state at these indices is `0` to make sure those numbers were not picked earlier.
        - We mark them as picked in `stateAfterPickingCurrPair`, calculate the current score `currentScore` by multiplying the number of pairs formed after picking current pair, `pairsFormed + 1` by the gcd of these two picked numbers, and find the score of the remaining numbers `remainingScore` by looking up `dp[stateAfterPickingCurrPair]`.
        - If the `dp[state]` is smaller than `currentScore + remainingScore`, we update `dp[state]` with it.
3. Return the maximum score we can get by picking all numbers, which is stored in `dp[0]`.

#### Implementation

<iframe src="https://leetcode.com/playground/VDkZ8zr7/shared" frameBorder="0" width="100%" height="500" name="VDkZ8zr7"></iframe>


#### Complexity Analysis

Here, $m = 2 * n$ is the number of elements, and $A$ is the maximum value in the `nums` array.  
The maximum value of $A$ can be $10^6$.

* Time complexity: $$O(2^{2n} \cdot (2n)^2 \cdot \log A) = O(4^n \cdot n^2 \cdot \log A)$$  
    - We iterate over $2^{m}$ states.    
    - And for each state, we find the number of set bits in the current `state` which in the worst case will take $O(\log_2 (2^m - 1)) = O(\log_2 2^m) = O(m)$ time, then we iterate on all pairs using a nested for loop which will take $O(m^2)$ time, and for each pair, we perform a gcd operation which will take at most $O(\log A)$ time.  So, we take $O(m + m^2 \cdot \log A) = O(m^2 \cdot \log A)$ time.  
   - Thus, overall we take $O(2^{m} \cdot m^2 \cdot \log A)$ time.

* Space complexity: $$O(2^{2n}) = O(4^n)$$
    - We keep an additional array `dp` of size $2^{m} = 2^{2n}$ to store results for all possible states.