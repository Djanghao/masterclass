# C# Solution - Beats 100% with memory

**Author:** Athanasios-Kataras
**Votes:** 2
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075808/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075808/)

---

# Intuition
Backtracking seems like the way to go

# Approach
Simple backtracking with an extra:
- Maintain a `HashSet<int>` because previous would fail to not create duplicates for `[1,2,1,1]`
- Alternative would be to remove these duplicates at the end

# Complexity
- Time complexity:
 $$O(2^n)$$

- Space complexity:
$$O(n^2)$$ as we will be maintaining the hashsets.

# Code
```
public class Solution {
    public IList<IList<int>> FindSubsequences(int[] nums) {
        return FindSubsequences(nums, new List<int>(), 0);
    }

    public IList<IList<int>> FindSubsequences(int[] nums, List<int> current, int index) {
        List<IList<int>> ires = new List<IList<int>>();
        HashSet<int> used = new HashSet<int>();
        for(int i=index; i < nums.Length; i++) {
            if(i != index && used.Contains(nums[i]))
                continue;
            if(index == 0 || nums[i] >= current.Last() ) {
                current.Add(nums[i]);
                if(current.Count > 1)
                    ires.Add(current.ToList());
                ires.AddRange(FindSubsequences(nums, current, i+1));
                current.RemoveAt(current.Count-1);
            }
            used.Add(nums[i]);
        }
        return ires;
    }
}
```