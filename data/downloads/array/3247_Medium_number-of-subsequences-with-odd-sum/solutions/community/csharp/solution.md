# C# Math O(n) one line

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5605294/](https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/5605294/)

---

# Intuition
Say we have `m` odd numbers and `n` even numbers in `nums`.
Obviously we know that `m + n = nums.Length`.

To form an odd sum, we need to take **odd** sum of odd numbers and **0 or any** even numbers.

So there are 2 cases:
- 1. The number of odd numbers is `0`.
  Under this case we could not have any odd sums. So the result is `0`.
- 2. The number of odd numbers is not `0`.
  Under this case, the number of selection for odd numbers is 
$$\\Sigma_i C_m^{2i-1}$$ for all `i` which meets the condition $$1 <= 2i - 1 <= m$$. The $$C_m^k$$ here means the number of the permutations of selecting `k` elements from `m` elements. From math, we know that this result is $$2^{m-1}$$.
Similarly, the number of selection for even numbers is $$\\Sigma_{i=0}^nC_n^i$$, whose result is $$2^n$$ from math.
Knowing the above 2 number, we can know that the result is the multiplication of the both number, which is $$2^{m - 1} * 2^n = 2^{m + n - 1}$$, which is $$2^{nums.Length-1}$$ since $$m + n = nums.Length$$.

# Approach
Math

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int SubsequenceCount(int[] nums) => nums.All(num => num % 2 == 0) ? 0 : (int)BigInteger.ModPow(2, nums.Length - 1, 1000000007);
}
```