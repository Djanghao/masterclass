# C# Solution - asked by the google

**Author:** birman89
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/2827815/](https://leetcode.com/problems/longest-absolute-file-path/solutions/2827815/)

---


# Code
```
public class Solution {
    public int LengthLongestPath(string input) {
        String[] paths = input.Split("\
");
        int[] stack = new int[paths.Length+1];
        int maxLen = 0;
        foreach(String s in paths){
            int lev = s.LastIndexOf("\	")+1;
            int curLen = stack[lev]+s.Length-lev+1;
            stack[lev+1]=curLen;
            if(s.Contains(".")) 
                maxLen = Math.Max(maxLen, curLen-1);
        }
        return maxLen;
    }
}
```