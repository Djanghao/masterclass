# I❤️Kotlin&Java | Plain Math Formula Explanation | One-liners

**Author:** user3488KQ
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467762/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467762/)

---

# Math Approach
The approach consists of several steps.
## 1. Find the Best m at the First Step.
Let's show that the best 'm' to choose is a max value from `nums`.

Let's assume the final result is:

$$r = m_1 + m_2 + ... + m_k $$

where $m_i$ is the $m$ selected at the $i$-th step. If we choose a value $$ l $$ such that $l < m_0$, then the total sum will be lesser:

$$l + m_1 + ... + m_k  < m_0 + m_1 + ... + m_k $$

## 2. Find the Best m at Following Steps.

Now let's show that $m_i = m_{i-1}+1$ is the best value to choose during the next steps.

As it was said, the best value to choose is the maximum from the `nums`. Let's assume that there is a value $l_i$, and $l_i > m_i$, which is same as:

$ l_i > m_{i-1} + 1$

On the other hand, we know that $ m_{i-1} \\ge l_j $ for $1 \\le j < k$, and that brings us to:

$ l_i > m_{i-1} + 1 >  m_{i-1} \\ge l_j $

In a short form that led us to a contradiction:

$ l_i > l_j $, for $1 \\le j \\lt k$.

That means there is no such number $l_i$ that is bigger than $m_{i-1}+1$.

## 3. Calculate the Score

As it has been given in the description, the score is the sum of all $m_i$, and $1 \\le i \\le k$.

$r = m_1 + m_2 + m_3 + ... + m_k $

Do the replacement $m_i = m_{i-1}+1$:

$r = m_1 + (m_1 + 1) + (m_2 + 1)+...+ (m_{k-1} + 1) $

Continue, until we get $m_1$ only:

$r = m_1 + (m_1 + 1) + (m_1 + 2)+...+ (m_1 + k - 1) $

So we can group all $m_1$ to a multiplication:

$r = k m_1 + 1 + 2 + 3 + ... + k - 1 $

And now we have a sum of an arithmetic progression from $1$ to $k - 1$:

$r = k m_1 + \\frac{k(k - 1)}{2} $

That's it.

# Complexity
- Time complexity: $$O(n)$$
  Looking for a max value of the `nums` has a linear complexity.

- Space complexity: $$O(1)$$
  The space amount doesn't depend on input data size, so we get a constant complexity.

# Kotlin Code
```
class Solution {
    fun maximizeSum(nums: IntArray, k: Int) = 
        k * (nums.max() ?: 0) + k * (k - 1) / 2
}
```

# Java Code
```
class Solution {
    public int maximizeSum(int[] nums, int k) {
        return Arrays.stream(nums).max().getAsInt() * k + k * (k - 1) / 2;
    }
}
```