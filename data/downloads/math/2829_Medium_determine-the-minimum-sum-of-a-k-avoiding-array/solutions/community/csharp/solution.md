# c#, Formula

**Author:** bytchenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3936525/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3936525/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have a greedy solution: for given `n` and `k` we should take

```
1, 2, ... k / 2, k, k + 1, k + 2,...
^                                  ^
------    n items in total    ------         
```

So we have a tow simple case if `n <= k / 2` and if `n > k / 2`

# Approach
<!-- Describe your approach to solving the problem. -->
We have to cases for `n <= k / 2` and `n > k / 2`. For each of these cases we can provide a closed formula.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    public int MinimumSum(int n, int k) => n <= k / 2 
        ? (1 + n) * n / 2
        :  k / 2 * (k / 2 + 1) / 2 + (k + k + n - k / 2 - 1) * (n - k / 2) / 2;   
}
```