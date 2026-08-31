# C# Best Solution.

**Author:** Ebrahem-Outlook
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/5169661/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/5169661/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
public class Solution\r
{\r
    public int FindLHS(int[] nums)\r
    {\r
        Dictionary<int, int> count = new Dictionary<int, int>();\r
        foreach (int num in nums)\r
        {\r
            if (count.ContainsKey(num))\r
                count[num]++;\r
            else\r
                count[num] = 1;\r
        }\r
\r
        int longest = 0;\r
        foreach (var kvp in count)\r
        {\r
            if (count.ContainsKey(kvp.Key + 1))\r
            {\r
                longest = Math.Max(longest, kvp.Value + count[kvp.Key + 1]);\r
            }\r
        }\r
        \r
\r
        return longest;\r
    }\r
}\r
```