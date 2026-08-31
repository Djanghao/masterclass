# c# easy and clean solution

**Author:** haylejj
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5442727/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/5442727/)

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
    public int[] ShortestToChar(string s, char c) {
        int[] result=new int[s.Length];
        List<int> list = new List<int>();
        for (int i = 0; i < s.Length; i++)
            if (s[i]==c) list.Add(i);

        for (int i = 0; i < s.Length; i++)
        {
            var min= int.MaxValue;
            for(int k = 0; k<list.Count; k++)
            {
                min=Math.Min(min, Math.Abs(i-list[k]));
            }
            result[i]=min;
        }
        return result;
    }
}
```