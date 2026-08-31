# Official Solution

**Link:** [https://leetcode.com/problems/powerful-integers/solution/](https://leetcode.com/problems/powerful-integers/solution/)

---

[TOC]

## Solution

---

### Overview

We rarely come across problems where the simplest solution, a brute-force solution, is the optimal one. Luckily for us, this is one of those problems! As we can see from the description given for the first example, both the numbers have powers that range from `0` to a certain higher value. E.g. in the case where `x = 2`, `y = 3`, and `bound = 10`, the power of `x` ranges from `0..3` and the power of `y` ranges from `0..2`. More specifically we have

$$
x^a + y^b <= bound
$$

If we know the bounds for `a` and `b`, then we can simply use a nested loop to find all possible powerful integers. It all boils down to determining these bounds. **Note** that the problem statement asks us to find *all* powerful integers. Had the problem statement been to find *how many* powerful integers there are, we might have been able to use some mathematical formula to find the exact count. However, because the problem asks us to list all the values, we have to use a nested-loop-based brute-force solution to find and list all such values.

</br>

---

### Approach: Logartihmic Bounds

**Intuition**

Our approach here will only focus on finding the bounds for numbers `x` and `y`. One way to get the bounds on the powers is to have nested loops that iterate from $$[0 \cdots \text{bound}]$$. However, this is very inefficient because the `bound` can be an extremely large value and a nested-loop over this `bound` will take forever to finish. Also, we don't need to iterate over all of the values and combinations.  There is a way to find a much smaller bound for the powers. 

$$
m^n <= \text{bound}
$$

This formula implies that

$$
n <= \log_m \text{bound}
$$

> We can use the log function to determine the bounds for the powers of "x" and "y".

**Algorithm**

1. Let's define `a` as the power bound for the number `x`. Thus $$\text{a} = \log_x \text{bound}$$.
2. Similarly, let's define `b` as the power bound for the number `y`. Thus $$\text{b} = \log_y \text{bound}$$.
3. Now we will have our nested for-loop structure where the outer loop will iterate from $$[0 \cdots a]$$ and the inner loop will iterate from $$[0 \cdots b]$$.
4. We will use a set to store our results. This is because we might generate the same value multiple times. E.g. `2^1 + 3^2 = 11` and `2^3 + 3^1 = 11`. We only need to include the value `11` once and hence, we will use a set called `powerfulIntegers` to store our answers.
5. At each step, we calculate `x^a + y^b` and check if this value is less than or equal to `bound`. If it is, then this is a powerful integer and we add it to our set of answers.
6. We need special break conditions to handle the scenario when `x` or `y` is `1`. This is because if the number `x` or `y` is `1`, then their power-bound will be equal to `bound` itself. Also, it doesn't matter what their power-bound is because $$1^N$$ is always $$1$$. Thus, when the number is `1`, we don't need to loop from $$[0 \cdots N]$$ and we can break early.
7. Finally, convert the set to a list and return.

**Implementation**

<iframe src="https://leetcode.com/playground/iwbt6BfB/shared" frameBorder="0" width="100%" height="500" name="iwbt6BfB"></iframe>

**Complexity Analysis**

* Time Complexity: Let $$N$$ be $$\text{log}_x \text{bound}$$ and $$M$$ be $$\text{log}_y \text{bound}$$. Then the overall time complexity is $$O(N \times M)$$ because we used a nested loop structure to calculate all of the powerful integers.

* Space Complexity: $$O(N \times M)$$ because we use a set to omit duplicates. We could just use our result list to check membership before adding values. However, that would be costly in terms of time complexity because it would require a full scan of the result list to see if the value already exists.

</br>

---