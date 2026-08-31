# Official Solution

**Link:** [https://leetcode.com/problems/burst-balloons/solution/](https://leetcode.com/problems/burst-balloons/solution/)

---

[TOC]

## Solution

---

### Overview

This is an interesting problem. Whenever we burst a balloon, we gain a certain number of coins equal to the product of the points of the burst balloon and its neighbors. Our goal is to maximize the total coins gained. A visual example of the balloon bursting process is given below.

![Overview](../Documents/312/312_overview.drawio.svg)

Two hints can be observed from the diagram above and the problem description. First, the problem asks us to **maximize** some value (the number of coins we can collect).  Second, each decision that we make at depends on previously made decisions, in this case the balloons that we have to choose from depends on which ballons we already popped.  Both of these attributes are characteristic of dynamic programming (DP) problems.  As such, we will approach this problem using dynamic programming. We will start with a naive DP approach that is intuitive but suboptimal.  The approach is good starting point that needs some optimizations, which may require you to think outside the box.

Below, we will discuss three approaches: _Dynamic Programming (Naive)_, _Dynamic Programming (Top-Down)_, and _Dynamic Programming (Bottom-Up)_.

The first approach (naive DP) receives _Time Limit Exceed_ and will be optimized in approaches 2 and 3. The purpose of including this approach is to show the thought process from scratch to the optimized solutions. Approaches 2 and 3 have the same ideas but differ in implementation details. We will explain the intuition behind them heavily in Approach 2.

Therefore, the recommended reading order is **Approach 1 then Approach 2 then Approach 3**.

</br>

---

### Approach 1: Dynamic Programming (Naive)

> This approach is _Time Limit Exceed_ and will be optimized in approaches 2 and 3.
> It is still recommended to read since the ideas of approaches 2 and 3 are evolved from here.

**Intuition**

>In this part, we will explain how to think of this approach step by step.
>
>If you are purely interested in the algorithm, you can jump to the algorithm part in Approach 2.

Whenever the problem involves different intermediate states and only one final state, it may hint that **_Dynamic Programming_** is a viable approach.

Also, DP is our old friend in hard-level problems. If you do not have any idea, you can always give DP a try.

Often, the Top-Down DP approach is more intuitive to implement than the Bottom-Up DP approach. Let's try Top-Down DP first.

>**Tip: Top-Down DP vs. Bottom-Up DP**
>
>Top-Down DP, also known as Memoization DP, uses recursive function and memoization.
>
>Bottom-Up DP, also known as Tabulation DP, uses iteration and DP array.
>
>For details, check out [Stack Overflow: What is the difference between bottom-up and top-down?](https://stackoverflow.com/questions/6164629/what-is-the-difference-between-bottom-up-and-top-down).

Generally, a basic template of a Top-Down DP follows the below pseudo-code. Don't worry if you do not get the idea from this template alone, we will dive into details right after this, just follow along for now.

```js
function dp(dp_state, memo_dict) {
    // check if we have seen this dp_state
    if dp_state in memo_dict
        return memo_dict[dp_state]

    // base case (a case that we know the answer for already) such as dp_state is empty
    if dp_state is the base cases
        return things like 0 or null
    
    calculate dp(dp_state) from dp(other_state)
    
    save dp_state and the result into memo_dict
}
function answerToProblem(input) {
    return dp(start_state, empty_memo_dict)
}
```

>**Tip: Decorators for Memoization**
>
>In some languages such as `Python`, there are some decorators for memoization, such as `lru_cache`.
>
>Such decorators automatically maintain the memo_dict for us and check if each dp_state has been seen.

Okay, let's fill in the template. There are four key items that we need to fill in:

1. What is `dp_state`?
2. What does `dp` function return?
3. What is the base case?
4. How to calculate `dp(dp_state)` from `dp(other_state)`?

Back to the problem. Since we are bursting balloons in `nums` and `nums` keeps changing, it might be a good idea to use `nums` to define our `dp_state`. `dp(nums, memo_dict)` will return the maximum coins obtainable if we burst all balloons in `nums`.

The base case should be a subproblem for which we already know the answer.  For example: When `nums` is empty, we cannot burst any more balloons, so return 0.

```js
// memo_dict is ignored for readability
// return maximum coins obtainable by optimally bursting all balloons in `nums`.
function dp(nums) {
    // base case
    if nums is empty
        return 0
    calculate dp(nums) from dp(other_state)
}
```

How do we calculate `dp(nums)` from `dp(other_state)`?

When given `nums`, we can burst any balloon in `nums`. We can try all possibilities and return the maximum.

```js
// memo_dict is ignored for readability
// return maximum coins obtainable by optimally bursting all balloons in `nums`.
function dp(nums) {
    // base case is ignored
    max_coins = 0
    for i in 1...nums.length-2:
        // burst nums[i]
        gain = nums[i - 1] * nums[i] * nums[i + 1]
        // burst the remaining balloons
        remaining = dp(nums without nums[i])
        max_coins = max(max_coins, gain + remaining)
    return max_coins
}
```

The above template will work for the most part of `nums`. However, `nums[i - 1]` and `nums[i + 1]` may be out of bounds for edge cases (leftmost and rightmost).

To handle these edge cases, we have two solutions:

1. Add fake balloons (each with the value of 1) to the beginning and the end of the original `nums`.
2. Use a customary `getOrDefault(nums, i, default)` to replace `nums[i]`.

Both options work, but here we will implement the first one, and just let `nums = [1] + nums + [1]`.

![Add One](../Documents/312/312_add_one.drawio.svg)

>**Tip: Sentinel Node**
>
>The fake balloons solution is a bit similar to Sentinel Node we use in linked lists. Both are fake and used to handle edge cases.
>
>To learn more about Sentinel Nodes, check out [Wikipedia: Sentinel node](https://en.wikipedia.org/wiki/Sentinel_node).

To sum up, our pseudo-code right now is:

```js
// return maximum coins obtainable if we burst all balloons in `nums`.
function dp(nums, memo_dict) {
    // check if have we seen this dp_state
    if dp_state in memo_dict
        return memo_dict[dp_state]

    // base case
    if nums is empty
        return 0
    
    max_coins = 0
    for i in 1 ... nums.length - 2:
        // burst nums[i]
        gain = nums[i - 1] * nums[i] * nums[i + 1]
        // burst the remaining balloons
        remaining = dp(nums without nums[i])
        max_coins = max(max_coins, gain + remaining)
    
    save dp_state and the result into memo_dict
    return max_coins
}

function maxCoin(nums) {
    nums = [1] + nums + [1] // add fake balloons
    return dp(nums, empty_memo_dict)
}
```

Hopefully, at this point, the above variation of the basic template is not difficult to follow.

Let's take a moment to analyze the complexity of our solution so far.

**Complexity Analysis**

Let $$N$$ be the number of balloons given.
* Time complexity: $$O(N2^N)$$
  * There are $$O(2^N)$$ states. For each state, determining the maximum coins requires iterating over all balloons. Thus the total time complexity is $$O(2^N) \times O(N) = O(N2^N)$$.
  
  * From the problem description, we know that `1 <= N <= 500`. Therefore, in the worst case, time_complexity $$ = 2^{500} \times 500 \approx 1.6 \times 10^{154}$$, which is unacceptable. Generally, a number around or less then $$10^8$$ is feasible.

* Space complexity: $$O(N2^N)$$
  * There are $$O(2^N)$$ states, and we need $$O(N)$$ to store each state. In total, this algorithm requires $$O(2^N) \times O(N) = O(N2^N)$$ space.

How can we improve our time complexity? Let's go to **Approach 2**.

> This approach is _Time Limit Exceed_ and will be optimized in Approach 2 and 3.

</br>

---

### Approach 2: Dynamic Programming (Top-Down)

**Intuition**

We are going to improve our naive DP approach.

> If you haven't read the Approach 1 (the naive DP approach), it is recommended to read it first.
>
> If you are purely interested in the algorithm, you can jump to the algorithm section below.

Let's dig deeper into the time complexity, which can be divided into two parts: `number_of_states` and `time_spent_on_each_state`.

Therefore, generally, there are two approaches to decrease the time complexity.

1. Decrease `number_of_states`.
2. Decrease `time_spent_on_each_state`.

Here, our `number_of_states` is $$O(2^N)$$, which is far larger than `time_spent_on_each_state`. As such, we may benefit more by considering how to reduce `number_of_states`. For this problem, a good target to reduce `number_of_states` to is $$O(N^2)$$.  This would reduce the total operations to $$N^2 \times N = N^3 \approx 1.25 * 10^8$$ which as mentioned before is close to the upper limit of operations that can be executed in a reasonable amount of time.

What can we do to decrease `number_of_states`?

As you may remember, we can use `left` and `right` pointers to represent a subarray in the original array.

If we can use `dp(left, right)` to replace `dp(nums)`, then the problem is solved.

But our DP states are not continuous and are not always a subarray of `nums`. For example, we can burst many balloons in the middle.

![Not Continuous](../Documents/312/312_not_continuous.drawio.svg)

Is that really true? Do we have a workaround?

Take a deeper look at what happens when we burst the first balloon.

![First Burst](../Documents/312/312_first_burst.drawio.svg)

Is there any continuous array? Yes! The burst balloon divides the original array into two **subarrays**.

We can recursively call the left subarray and the right subarray, and add the results together.

```js
// memo_dict is ignored for readability
// return the maximum coins obtainable if we burst all balloons 
// in nums[left] ... nums[right], inclusively.
function dp(left, right) {
    // base case is ignored
    max_coins = 0
    for i in 1 ... nums.length - 2:
        // burst nums[i]
        gain = nums[i - 1] * nums[i] * nums[i + 1]
        // burst remaining
        remaining = dp(left, i - 1) + dp(i + 1, right)
        max_coins = max(result, gain + remaining)
    return max_coins
}
```

>**Tip: Divide and Conquer**
>
>Here we divide the original array into two subarrays and then conquer them respectively. It is a perfect example of the Divide and Conquer algorithm.
>
>For details, check out [Wikipedia: Divide and Conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

>**Tip: Inclusive or Not**
>
>Should `dp(left, right)` represent the maximum coins obtainable after bursting `[left, right]`, `[left, right)`, ..., or `(left, right)`?
>
>In other words, should we include the edge case?
>
>The answer is that all of them work. However, `[left, right]` may be easier to visualize, and `[left, right)` maybe easier to implement. Here, we choose `[left, right]`.

Wait! You may say, this code yields the wrong answer!

Oh. What happened?

Note in this line

```js
remaining = dp(left, i - 1) + dp(i + 1, right)
```

Inside the left part `dp(left, i - 1)`, when we burst the rightmost balloon (i.e., `i - 1`th), what will we gain?

`nums[i - 2] * nums[i - 1] * nums[i]`? No, `nums[i]` has been burst, so `nums[i]` should be replaced by **some balloon** in the right part.

But exactly which one? Well...it seems it depends on the **order** of bursting balloons in the left part and in the right part.

![Not Independent](../Documents/312/312_not_independent.drawio.svg)

In other words, `dp(left, i - 1)` and `dp(i + 1, right)` are not independent, and cannot be calculated separately.

Bad news. Our divide and conquer plan fails. Is there any way to fix this?

What if...`nums[i]` has not burst? If we keep `nums[i]` alive **all the time**, then `nums[i - 2] * nums[i - 1] * nums[i]` always refers to the correct balloons, and the left part and right part are independent.

How to keep `nums[i]` alive **all the time**? Easy, just mark `nums[i]` as the **last** burst balloon among `[left, right]`.

![Keep i](../Documents/312/312_keep_i.drawio.svg)

>**Tip: Thinking Backwards**
>
>Instead of thinking of which one to burst **first**, we think of which one to burst **last**.
>
>Alternatively, you can reverse the whole process: instead of bursting the balloon, we add balloons to the empty array. This approach will result in the same code.

##### Special Cases

Now our time complexity is $$O(N^3)$$. Are there any other rooms to optimize? Note that if the array has some special properties, we may be able to calculate the result very fast.

For example, if all the numbers are the same, the answer is straight forward.

Let `N` be the length of `nums`, and `a` be the element in `nums`. The coins we gain, no matter which one is burst, are always `a * a * a`, since all balloons are the same, except the last two balloons. For the last two balloons, one yields `a * a * 1`, and the other yields `1 * a * 1`.

Therefore, we have `N-2` `a * a * a`, one `a * a * 1`, and one `1 * a * 1`. Adding together, we have `(N - 2) * a * a * a + a * a + a`.

We can improve the performance sightly by handling those special cases one by one. However, please notice that this optimization does not improve the time complexity and can not speed up too much if the input is highly randomized.

>**Tip: Matrix-Chain Multiplication**
>
>In fact, this problem is a variant of a classical DP problem, Matrix-Chain Multiplication, where we need to find the most efficient way to multiply a given sequence of matrices. The main idea is the same as above: DP, Divide and Conquer, and Thinking Backwards.
>
>For details of Matrix-Chain Multiplication, check out [Wikipedia: Matrix Chain Multiplication](https://en.wikipedia.org/wiki/Matrix_chain_multiplication).

**Algorithm**

1. Handle the special cases (all numbers are the same) if you want.
2. Add one balloon at the start of `nums` and one at the end to handle edge cases.
3. Define a function `dp` to return the maximum coins obtainable, if we burst all balloons on the interval `[left, right]`, inclusively.

     The base case is that the interval is empty, which yields 0 coin.
     
     For general cases, we iterate over every index `i` in `[left, right]`, and mark the balloon at that index as the **last** one burst.
     
     First, We burst all balloons expect the `i`th one. What we gain is:
    
     ```python
     dp(left, i - 1) + dp(i + 1, right)
     ```
	
     Then, we burst the `i`th one:
     
     ```python
     nums[left - 1] * nums[i] * nums[right + 1]
     ```
	
     Just return the maximum sum of those two among all possible `i`s.
     
4. Finally, return `dp(1, len(dp) - 2)`.

     Do not return `dp(0, len(dp) - 1)` since the first and the last balloons were added by us and we cannot burst them.

**Implementation**

<iframe src="https://leetcode.com/playground/NtutcY9u/shared" frameBorder="0" width="100%" height="500" name="NtutcY9u"></iframe>

**Complexity Analysis**

Let $$N$$ be the number of balloons given.

* Time complexity: $$O(N^3)$$. There are $$O(N^2)$$ states. For each state, determining the maximum coins requires iterating over all balloons in the range `[left, right]`.  Thus the total time complexity is $$O(N^2) \times O(N) = O(N^3)$$.

* Space complexity: $$O(N^2)$$. We need $$O(N^2)$$ to store all states, $$O(N)$$ for stacks to perform recursion, and $$O(N)$$ to store `[1] + nums + [1]`. In total, this algorithm requires $$O(N^2) + O(N) + O(N) = O(N^2)$$ space.

</br>

---

### Approach 3: Dynamic Programming (Bottom-Up)

**Intuition**

The intuition is the same as Approach 1. Here, we use DP array and iteration to re-implement Approach 1.

When iterating, we need to carefully arrange the order of iteration, such that `dp[left][i - 1]` and `dp[i + 1][right]` are iterated **before** `dp[left][right]`, where `left <= i <= right`.

This is important because in order to calculate `dp[left][right]`, we will use the results of `dp[left][i - 1]` and `dp[i + 1][right]`, where `left <= i <= right`.

But how arrange the order of iteration? Let's take a look at the DP table.

Suppose we have added fake balloons to the beginning and the end of `nums`, and `n` is the length of the **new** `nums` array.

We only need the top-right triangle since we only need `dp[left][right]` where `left` will always be less than or equal to `right`.

![DP Table](../Documents/312/312_dp_table.drawio.svg)

(Here `left` is for rows and `right` is for columns, or you can use a transposed one. Either way works.)

Also, we cannot have `dp[0][j]` and `dp[i][n-1]`, where `0 <= i < n` and `0 <= j < n`, since we cannot burst the fake balloons that we added.

![DP Table Inner](../Documents/312/312_dp_table_inner.drawio.svg)

Okay, now let's consider `dp[left][right]`. `dp[left][i - 1]` and `dp[i + 1][right]` should be iterated before `dp[left][right]`, where `left <= i <= right`. Where are they?

![DP Table Cell](../Documents/312/312_dp_table_cell.drawio.svg)

Notice that `dp[left][right]` depends on the cells directly below it and the cells to its left. If we always iterate from the lowest or the leftmost cell, then we can ensure that `dp[left][i - 1]` and `dp[i + 1][right]` are calculated before `dp[left][right]`.

There are many ways to do that. One possible iteration path is given below.

![DP Table Iterate](../Documents/312/312_dp_table_iterate.drawio.svg)

**Algorithm**

1. Handle the special cases (all numbers are the same) if you want.

2. Add one balloon at the start of `nums` and one at the end to handle edge cases.

3. Define an array `dp`, where `dp[left][right]` represents the maximum coins obtainable, if we burst all balloons on the interval `[left, right]`, inclusively.

4. Iterate over the `dp` array such that `dp[left][i - 1]` and `dp[i + 1][right]` are visited before `dp[left][right]` is visited.
  For `dp[left][right]`:

    We iterate over every index `i` in the range `[left, right]`, and mark it as the **last** burst balloon.

    First, we burst all balloons except the `i`th balloon. What we gain is:

    ```python
    dp[left][i - 1] + dp[i + 1][right]
    ```

    Then, we burst the `i`th balloon and gain:

    ```python
    nums[left - 1] * nums[i] * nums[right + 1]
    ```

    Let `dp[left][right]` be the maximum sum of these two values among all possible `i`s.

5. Finally, return `dp[1][len(nums) - 2]`.

   Note: Do not return `dp[0][len(nums) - 1]` because the first and the last balloons were added by us and we cannot be popped.

**Implementation**

<iframe src="https://leetcode.com/playground/85jpjNFG/shared" frameBorder="0" width="100%" height="500" name="85jpjNFG"></iframe>

**Complexity Analysis**

Let $$N$$ be the number of balloons given.

* Time complexity: $$O(N^3)$$. There are $$O(N^2)$$ states. For each state, determining the maximum coins requires iterating over all balloons in the range `[left, right]`, giving $$O(N^2) \times O(N) = O(N^3)$$.

* Space complexity: $$O(N^2)$$. We need $$O(N^2)$$ to store `dp`, and $$O(N)$$ to store `[1] + nums + [1]` (if fake balloons are added). In total, we need $$O(N^2) + O(N) + O(N) = O(N^2)$$ space.