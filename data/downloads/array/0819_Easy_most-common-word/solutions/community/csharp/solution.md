# C# 解決方案

**Author:** z087757775
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-common-word/solutions/6043222/](https://leetcode.com/problems/most-common-word/solutions/6043222/)

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
```csharp []
public class Solution {
    public string MostCommonWord(string paragraph, string[] banned) {
            string cleanParagraph = System.Text.RegularExpressions.Regex.Replace(paragraph, @"[^\\w\\s]", " ");
            string[] strArray = cleanParagraph.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            Dictionary<string, int> Din = new Dictionary<string, int>();

            foreach(string str in strArray)
            {
                string tolowerStr = str.ToLower();
                if (Din.ContainsKey(tolowerStr))
                {
                    Din[tolowerStr]++;
                }
                else
                {
                    Din[tolowerStr] = 1;
                }
            }

            string maxKey = Din.Aggregate((x, y) => x.Value > y.Value ? x : y).Key;
            while(banned.Contains(maxKey))
            {
                Din.Remove(maxKey);
                maxKey = Din.Aggregate((x, y) => x.Value > y.Value ? x : y).Key;
            }


            return maxKey;
    }
}
```