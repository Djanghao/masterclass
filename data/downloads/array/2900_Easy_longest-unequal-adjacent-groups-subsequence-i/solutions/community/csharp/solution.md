# C# Two Pointers Approach

**Author:** DeyanDiulgerov
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4747074/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4747074/)

---

Beats 71.43% in both Runtime and Memory
# Code
```
public class Solution {
    public IList<string> GetLongestSubsequence(string[] words, int[] groups) {
            int n = words.Length; // == groups.Length
            List<string> result = new List<string>();
            int left = 0, right = 1;
            while (right <= n)
            {
                while (right < n && groups[left] == groups[right])
                    right++;
                result.Add(words[left]);
                left = right;
                right = left + 1;
            }
            return result;
    }
}
```