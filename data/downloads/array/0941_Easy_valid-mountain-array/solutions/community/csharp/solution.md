# 🏔️ 941. Valid Mountain Array

**Author:** muqimjon
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/5096765/](https://leetcode.com/problems/valid-mountain-array/solutions/5096765/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool ValidMountainArray(int[] arr) {
        int n = arr.Length;
        int i = 0;

        while (i + 1 < n && arr[i] < arr[i + 1])
            i++;

        if (i == 0 || i == n - 1)
            return false;

        while (i + 1 < n && arr[i] > arr[i + 1])
            i++;

        return i + 1 == n;
    }
}
```