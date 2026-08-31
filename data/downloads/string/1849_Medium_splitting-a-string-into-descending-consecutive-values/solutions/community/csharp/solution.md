# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 1
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1235496/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/1235496/)

---

```
public class Solution {
    public bool SplitString(string s) 
    {
        return Recur(s,0,new List<long>());
    }
    
    
    private bool Recur(string s, int st, List<long> li)
    {
        if(st==s.Length && li.Count>1)
            return true;
        
        for(int len=1;len<=s.Length-st;len++)
        {
            string str = s.Substring(st,len).TrimStart('0');
            
            if(str.Length > 11)
                break;
            
            long cur = string.IsNullOrEmpty(str) ? 0 : long.Parse(str);
            
            
            if(li.Count==0 || li[li.Count-1] - cur == 1)
            {
                li.Add(cur);
                if(Recur(s,st+len,li))
                    return true;
                li.RemoveAt(li.Count-1);
            }
        }
        
        return false;
    }
}
```