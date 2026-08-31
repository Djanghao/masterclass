# short O(n)

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5352218/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5352218/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumEnergy(int[] e, int k) {
        for (int i = e.Length - 1 - k; i >= 0; i--)            
            e[i] = e[i] + e[i + k];
        return e.Max();
    }
}
```