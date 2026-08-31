# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/5985448/](https://leetcode.com/problems/reformat-the-string/solutions/5985448/)

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
```csharp []
public class Solution {
    public string Reformat(string s) {
        int let=0;int dig=0;
        List<char> a=new List<char>();
        List<char> b=new List<char>();
        foreach(var e in s)
        {
            if(Char.IsDigit(e))
            {
                dig++;
                a.Add(e);
            }
            else
            {
                let++;
                b.Add(e);
            }
        }
        int f=Math.Abs(let-dig);
        string res="";
        if(f==0)
        {
            for(int i=0;i<a.Count;i++)
            {
                res+=a[i];
                res+=b[i];
            }
            return res;
        }
        else if (f==1)
        {
            int l=a.Count;int p=b.Count;
            int len=Math.Min(l,p);
            for(int i=0;i<len;i++)
            {
                if(l>p)
                {
                res+=a[i];
                res+=b[i];
                }
                else
                {
                    res+=b[i];
                    res+=a[i];
                }
                Console.WriteLine(res);
            }
            if(l>p)
            {
                res+=a[len];
            }
            else
            {
                res+=b[len];
            }
            return res;
        }
        return "";
    }
}
```