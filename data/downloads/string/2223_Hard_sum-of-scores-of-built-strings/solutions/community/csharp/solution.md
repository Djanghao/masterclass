# C# | O(n) | Z-Algorithm

**Author:** Yark1n
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/4252891/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/4252891/)

---

# Complexity
- Time complexity: $$O(n)$$, where n is len(s)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$, where n is len(s)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long SumScores(string s) {
        int left = 0; int right = 0;
        int[] z = new int[s.Length];
        z[0] = s.Length;
        for(int i = 1;  i < s.Length; i++)
        {
            if (right >= i)
            z[i] = Math.Min(z[i - left], right - i + 1);
            while (z[i] + i < s.Length && s[z[i]] == s[z[i] + i])
                z[i]++;
            if (i + z[i] - 1 > right)
            {
                left = i; right = i + z[i] - 1;
            }
        }
        long score = 0;
        foreach (int i in z)
            score += i;
        return score;
    }
}
```