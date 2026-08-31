# C# solution

**Author:** cvalingam
**Votes:** 0
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/4777536/](https://leetcode.com/problems/decremental-string-concatenation/solutions/4777536/)

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
    public int MinimizeConcatenatedLength(string[] words) {
        int n = words.Length;
        int[,,] dp = new int[n, 26, 26];
        int len = n * 26 * 26;
        int[] oneDarray = new int[len];
        Array.Fill(oneDarray, -1);
        Buffer.BlockCopy(oneDarray, 0, dp, 0, len * sizeof(int));
        int initialSize = words[0].Length;

        return initialSize + topDown(1, words[0][0] - 'a', words[0][initialSize - 1] - 'a', words, dp);
    }

    private int topDown(int i, int start, int end, string[] words, int[,,] dp)
    {
        if(i >= words.Length)
            return 0;

        if(dp[i, start, end] != -1)
            return dp[i, start, end];

        string word = words[i];
        int nextStart = word[0] - 'a';
        int nextEnd = word[word.Length - 1] - 'a';
        int concatWithStart = Int32.MaxValue, concatWithEnd = Int32.MaxValue;

        if(nextStart == end)
            concatWithEnd = word.Length - 1 + topDown(i + 1, start, nextEnd, words, dp);
        else
            concatWithEnd = word.Length + topDown(i + 1, start, nextEnd, words, dp);

        if(nextEnd == start)
            concatWithStart = word.Length - 1 + topDown(i + 1, nextStart, end, words, dp);
        else
            concatWithStart = word.Length + topDown(i + 1, nextStart, end, words, dp);

        return dp[i, start, end] = Math.Min(concatWithStart, concatWithEnd);
    }
}
```