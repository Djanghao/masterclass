# C# Backtracking, beats 100%

**Author:** matheri
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/4907117/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/4907117/)

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
    public int MinimumBeautifulSubstrings(string s) {
        // 101
        
        int Recurse(int index)
        {
            if (index >= s.Length) return 0;
            var min = 20;
            for (var j = index; j < s.Length; j++)
            {
                if (!IsBeautiful(s[index..(j + 1)]))
                    continue;

                min = Math.Min(min, 1 + Recurse(j + 1));
            }

            return min;
        }

        bool IsBeautiful(string str)
        {
            if (str[0] == '0') return false;
            var fromBin = Convert.ToInt32(str, 2);
            if (fromBin <= 0) return false;

            while (fromBin > 1)
            {
                if (fromBin % 5 != 0) return false;
                fromBin /= 5;
            }
            return true;
        }

        var res = Recurse(0);
        return res > 15 ? -1 : res;
    }
}
```