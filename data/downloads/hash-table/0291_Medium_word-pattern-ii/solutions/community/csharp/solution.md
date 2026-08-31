# Backtrack | Beats 100 % of C#

**Author:** ExceptionHandle
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern-ii/solutions/4949224/](https://leetcode.com/problems/word-pattern-ii/solutions/4949224/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O (m ^ n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O (k * n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    private string pattern;
    private string s;
    private int patternSize;
    private int sSize;
    private Dictionary<char, string> patternToSMap = new Dictionary<char, string>();
    private Dictionary<string, char> sToPatternMap = new Dictionary<string, char>();

    public bool WordPatternMatch(string pattern, string s) {
        this.pattern = pattern;
        this.s = s;
        this.sSize = s.Length;
        this.patternSize = pattern.Length;
        
        return BackTrack(0, 0);
    }

    private bool BackTrack(int patternIndex, int sIndex) {
        if (patternIndex >= patternSize && sIndex >= sSize) {
            return true;
        }
        if (patternIndex >= patternSize || sIndex >= sSize) {
            return false;
        }

        char patternChar = this.pattern[patternIndex];
        bool pContains = patternToSMap.ContainsKey(patternChar);
        for (int j = sIndex + 1; j <= sSize; j++) {
            string substr = s.Substring(sIndex, j - sIndex);
            if (pContains && patternToSMap[patternChar] != substr) {
                continue;
            }

            bool sContains = sToPatternMap.ContainsKey(substr);
            if (sContains && sToPatternMap[substr] != patternChar) {
                continue;
            }

            patternToSMap[patternChar] = substr;
            sToPatternMap[substr] = patternChar;

            if (BackTrack(patternIndex + 1, j)) {
                return true;
            }

            if (!sContains) {
                patternToSMap.Remove(patternChar);
                sToPatternMap.Remove(substr);
            }
        }
        
        return false;
    }
}
```