# Single pass O(n), no stack, no recursion

**Author:** anikit
**Votes:** 6
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/1856351/](https://leetcode.com/problems/score-of-parentheses/solutions/1856351/)

---



```csharp
public class Solution
{
    public int ScoreOfParentheses(string s)
    {
        int res = 0;
        int n = 1;
        
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '(')
            {
                n *= 2;
            }
            else
            {
                n /= 2;
                if (s[i - 1] == '(') res += n;
            }
        }
        
        return res;
    }
}
```