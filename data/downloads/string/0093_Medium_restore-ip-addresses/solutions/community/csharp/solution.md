# C# Simple Solution

**Author:** nazir_cinu
**Votes:** 4
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/1206516/](https://leetcode.com/problems/restore-ip-addresses/solutions/1206516/)

---

```
public class Solution 
{
    public IList<string> RestoreIpAddresses(string s) 
    {
        IList<string> ans = new List<string>();

        if(s.Length > 12)
            return ans;
        
        Backtrack(s,0,new List<string>(),ans);
        return ans;
    }
    
    private void Backtrack(string s, int st, IList<string> li, IList<string> ans)
    {
        if(st==s.Length && li.Count==4)
        {
            string ip = string.Join(".", li.ToArray());
            ans.Add(ip);
            return;
        }
        
        for(int len=1; len<=s.Length-st; len++)
        {
            string str = s.Substring(st,len);
            
            if(IsValid(str))
            {
                li.Add(str);
                Backtrack(s,st+len,li,ans);
                li.RemoveAt(li.Count-1);
            }
        }
    }
    
    private bool IsValid(string str)
    {
        if(str.Length > 3)
            return false;
        
        int num = int.Parse(str);
        
        if(num < 0 || num > 255 || str.Length != num.ToString().Length)
            return false;
        
        return true;
    }
}
```