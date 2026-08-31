# Official Solution

**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solution/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solution/)

---

[TOC]

## Solution

---

### Approach 1: Simulate

**Intuition**

The problem description describes a step-by-step process of how much money we add to the bank every day. We can follow these steps and simulate the process for each of the `n` days.

Initially, it is Monday and we deposit `1` dollar. Each day of the week, we deposit `1` more dollar than the previous. So on the first week, we deposit `1 + 2 + 3 + 4 + 5 + 6 + 7` dollars.

Next week, we deposit `2` dollars on Monday, `3` dollars on Tuesday, and so on. The week after that, we deposit `3` dollars on Monday, `4` on Tuesday, and so on.

Let's handle each week one at a time. Initially, we set a variable `monday = 1` that represents the amount of money we will deposit on Monday. We then iterate over each day of the week. How many days will we deposit money this week? If `n < 7`, we will only deposit money on the first `n` days of this week. If `n >= 7`, we will deposit money on all `7` days of this week. Thus, we will iterate `min(n, 7)` days.

To iterate over the days of the week, we will use a variable `day` starting from `0`. Monday is the $$0^{th}$$ day. At each iteration, we will add `monday + day` dollars to the answer. This way, we add `monday` dollars on Monday, `monday + 1` dollars on Tuesday, `monday + 2` dollars on Wednesday, and so on.

Once we have finished adding money for the week, we subtract `7` from `n` and increment `monday`. We then move on to the next week and repeat the process until `n <= 0`.

**Algorithm**

1. Initialize the answer `ans = 0` and `monday = 1`.
2. While `n > 0`:
    - Iterate `day` from `0` until `min(n, 7)`:
        - Add `monday + day` to `ans`.
    - Subtract `7` from `n`.
    - Increment `monday`.
3. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/eptHym9H/shared" frameBorder="0" width="100%" height="361" name="eptHym9H"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n)$$

    The while loop handles one week per iteration. Thus, the while loop will iterate $$\dfrac{n}{7}$$ times. In each iteration, we iterate up to $$7$$ times. Thus, we will have $$O(n)$$ iterations. At each step, we perform $$O(1)$$ work.

* Space complexity: $$O(1)$$

    We aren't using any extra space other than a few integers.
    
<br/>

---

### Approach 2: Math

**Intuition**

The manner in which we add money is static. Each week we add:

1. `1 + 2 + 3 + 4 + 5 + 6 + 7 = 28`
2. `2 + 3 + 4 + 5 + 6 + 7 + 8 = 35`
3. `3 + 4 + 5 + 6 + 7 + 8 + 9 = 42`
4. and so on...

As you can see, each week we add `7` more dollars than the previous week. Perhaps we can formulate a mathematical solution to this problem.

We have `k = n / 7` full weeks. Here, we are performing integer/floor division. These full weeks form an [arithmetic sequence](https://en.wikipedia.org/wiki/Arithmetic_progression). An arithmetic sequence is a sequence of numbers such that the difference between every adjacent element is the same. Here, we have a common difference of `7`.

The sum of an arithmetic sequence can be found very quickly if we know the following information:

1. The first element in the sequence $$F$$.
2. The final element in the sequence $$L$$.
3. The number of elements in the sequence $$k$$.

Then, the sum is $$\dfrac{k \cdot (F + L)}{2}$$.

We know the first element in the sequence is `28` and that there are `k` elements in the sequence, since each element represents a week. What is the final element in the sequence? The final element in the sequence represents how much money we add in the final full week, and we know that the value must be `28 + (k - 1) * 7`, since we add `28` dollars on the first week and `7` more dollars each additional week.

Let `F = 28`, `k = n / 7`, `L = 28 + (k - 1) * 7`. We can then plug each of these values into the above equation to get the total money we deposit in all full weeks as `arithmeticSum`.

What if `n` is not divisible by `7`? Then, the final week will have less than `7` days. How do we calculate how much money we get from the final week? First, we need to know how many days are in the final week. We can obtain this by taking `n` modulo `7`, i.e. `n % 7`.

Note that we will have `k` full weeks before the final week, therefore, on the Monday of the final week, we will deposit `1 + k` dollars. We can either form another arithmetic sequence for the final week (since we know its first value and how many elements there will be, we can deduce the final value and thus the overall sum), or we could simply iterate over the final week explicitly.

For the sake of simplicity, we will iterate over the final week explicitly and calculate the money we deposit as `finalWeek`.

Finally, the answer to the problem is `arithmeticSum + finalWeek`.

**Algorithm**

1. Set the following values:
    - `k = n / 7`.
    - `F = 28`.
    - `L = 28 + (k - 1) * 7`.
2. Calculate `arithmeticSum = k * (F + L) / 2`.
3. Initialize `monday = 1 + k` and `finalWeek = 0`.
4. Iterate `day` from `0` until `n % 7`:
    - Add `monday + day` to `finalWeek`.
5. Return `arithmeticSum + finalWeek`.

**Implementation**

<iframe src="https://leetcode.com/playground/PqXrGKGt/shared" frameBorder="0" width="100%" height="344" name="PqXrGKGt"></iframe>

**Complexity Analysis**

* Time complexity: $$O(1)$$

    Assuming we treat arithmetic operations as $$O(1)$$, which is a very standard practice on LeetCode, this algorithm runs in constant time.

    To calculate `arithmeticSum`, we perform a few calculations that do not change with the input size. To calculate `finalWeek`, we never iterate more than `6` times.

* Space complexity: $$O(1)$$

    We aren't using any extra space other than a few integers.
    
<br/>

---