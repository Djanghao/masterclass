# Splitting string into chuncks

**Author:** laskoteam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5550467/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5550467/)

---


```
public class Solution {
    public int MaxOperations(string s) {
        if (string.IsNullOrEmpty(s) || !s.Contains('1') || !s.Contains('0'))
            return 0;
        var arrays = s.Split("0");

        var result= 0;
        var current = 0;
        for(int i=0; i < arrays.Count(); i++)
        {
            if(arrays[i].Any())
            {
                current +=arrays[i].Count();
                if ( i != arrays.Count()-1 )
                    result+=current;
            }
        }

        return result;
    }
}
```