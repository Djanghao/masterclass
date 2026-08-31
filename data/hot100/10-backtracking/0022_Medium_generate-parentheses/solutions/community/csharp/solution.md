# C# simple solution (beats 88%)

**Author:** pawel753
**Votes:** 19
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/656411/](https://leetcode.com/problems/generate-parentheses/solutions/656411/)

---

Runtime: 232 ms, faster than 88.71% of C# online submissions for Generate Parentheses.
Memory Usage: 32.8 MB, less than 12.50% of C# online submissions for Generate Parentheses.
```
public class Solution 
{
    List<string> result = new List<string>();
    int maxLen;
    
    public IList<string> GenerateParenthesis(int n) {
        maxLen = n;
        GenerateAndCheck("", 0, 0);
        return result;
    }
    
    private void GenerateAndCheck(string str, int opened, int closed)
    {
        if(opened == closed && opened == maxLen)
        {
            result.Add(str);
            return;
        }
        
        if(opened < maxLen)
            GenerateAndCheck(str + "(", opened + 1, closed);
        if(closed < opened)
            GenerateAndCheck(str + ")", opened, closed + 1);
    }
}
```

Inspired by: https://youtu.be/qBbZ3tS0McI