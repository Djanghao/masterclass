# [C#], Calculate min cost for each operation up to N

**Author:** Yerkon
**Votes:** 0
**Link:** [https://leetcode.com/problems/collecting-chocolates/solutions/3639902/](https://leetcode.com/problems/collecting-chocolates/solutions/3639902/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Didn't solved this problem myself. Thought that it can be solved by recursion, calculating each possible min cost, but hard to implement. It's interesting approach of shifting problem that can be solved by accumulating for each operation min cost.

# Approach
<!-- Describe your approach to solving the problem. -->
- **`var res = new long[N];`** Store min cost for each operation up to `N`. So, initially we can store for each operation `i = (0,1,2..,N), res[i] = x*i` cost

- **`Outer loop, for (int i = 0; i < N; i++)`** First initialize `res[i]`, `i*x` cost for `i` operation. Then use `cur=nums[i]` element as starting point. 

- **`Inner lopp, for (int k = 0; k < N; k++)`** Then for each `cur` item calculate min cost for each shift to left `min(nums[i], nums[i - 1], ..., nums[i - k])` and add it for each shift `result[k]`.
- Finally return `min` result from all shift operations


# Complexity
- Time complexity:$$O(N^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {

    public long MinCost(int[] nums, int x) {
        int N = nums.Length;
        var res = new long[N];

        for (int i = 0; i < N; i++) {
            res[i] += i * (long)x;
            int cur = nums[i];

            for (int k = 0; k < N; k++) {
                cur = Math.Min(cur, nums[(i - k + N) % N]);
                res[k] += cur;
            }
        }

        return res.Min();
    }

}

```