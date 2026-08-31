# C# bitmask + dictionary

**Author:** rajeshkumar1130
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/4976528/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/4976528/)

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
    public int MaxProduct(string[] words) {
        Dictionary<int, int> map = new();

        foreach(var word in words)
        {
            int mask = 0;
            foreach(char ch in word)
            {
                mask |= (1<<(ch-'a'));
            }

            if(!map.ContainsKey(mask))
            {
                map[mask] = 0;
            }

            map[mask] = Math.Max(map[mask], word.Length);
        }
        int ans = 0;
        foreach(var a in map)
        {
            foreach(var b in map)
            {
                if((a.Key & b.Key) == 0)
                {
                    ans = Math.Max(ans, a.Value*b.Value);
                }
            }
        }

        return ans;
    }
}
```