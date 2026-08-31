# A C# Solution

**Author:** jlccl
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/3978331/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/3978331/)

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
    public bool CanReorderDoubled(int[] arr) {
        var dict = new Dictionary<int, int>();
        for(int i = 0; i < arr.Length; i++)
        {
            if (dict.ContainsKey(arr[i])) dict[arr[i]]++;
            else dict.Add(arr[i], 1);
        }
        if (dict.ContainsKey(0))
        {
            if (dict[0] % 2 != 0) return false;
            dict.Remove(0);
        }
        Array.Sort(arr);
        for (int i = 0; i < arr.Length; i++)
        {
            if (!dict.ContainsKey(arr[i])) continue;
            if (dict.ContainsKey(arr[i] * 2))
            {
                var min = Math.Min(dict[arr[i]], dict[arr[i] * 2]);
                dict[arr[i]] -= min;
                if (dict[arr[i]] == 0) dict.Remove(arr[i]);
                dict[arr[i] * 2] -= min;
                if (dict[arr[i] * 2] == 0) dict.Remove(arr[i] * 2);
            }
        }
        return dict.Count == 0;
    }
}
```