# Easy to understand C# solution

**Author:** mark_kram
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/3942738/](https://leetcode.com/problems/repeated-string-match/solutions/3942738/)

---



# Code
```
public class Solution {
    public int RepeatedStringMatch(string a, string b) {
        var repeatStr = "";
        var count = 0 ;
        while(repeatStr.Length < b.Length)
        {
            repeatStr += a ;
            count++;
        }

        if(repeatStr.Contains(b))
        {
            return count;
        }else if((repeatStr+a).Contains(b)){
            return count+1;
        }

        return -1;
    }
}
```