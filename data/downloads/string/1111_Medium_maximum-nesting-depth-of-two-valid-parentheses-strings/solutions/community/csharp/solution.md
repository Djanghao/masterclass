# Easy C# Solution

**Author:** Rysev_Dmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/3318138/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/3318138/)

---


# Code
```
public class Solution {
    public int[] MaxDepthAfterSplit(string seq) {
        var result = new int[seq.Length];

        for (int i = 0; i < seq.Length; i++)
        {
            result[i] = seq[i] == '(' ? i % 2 : (i - 1) % 2;
        }

        return result;
    }
}
```