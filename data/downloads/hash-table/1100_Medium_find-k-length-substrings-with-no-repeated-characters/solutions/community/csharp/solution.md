# Recursive delegate.

**Author:** shnitsel666
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/3622230/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/3622230/)

---

# Approach
Recursive delegate.

# Code
```
public class Solution {
    public int NumKLenSubstrNoRepeats(string s, int k) {
        if(s.Length < k)
        {
            return 0;
        }
        List<string> list = new ();
        Action<string> func = null;

        func = (string subst) =>
        {
            if (subst.Length == k)
            {
                list.Add(subst);
                return;
            }
            if (subst.Length < k)
            {
                return;
            }
            string curSubstr = string.Empty;
            for (int i = 0; i < subst.Length; i++)
            {
                char ch = subst[i];
                if (!curSubstr.Contains(ch) && curSubstr.Length < k)
                {
                    curSubstr += ch;
                    continue;
                }
                else
                {
                    if(curSubstr.Length == k)
                    {
                        list.Add(curSubstr);
                    }
                    curSubstr = string.Empty;
                    subst = subst.Remove(0, 1);
                    break;
                }
            }
            func(subst);
        };

        func(s);

        var res = list.FindAll(str => str.Length == k && str.ToCharArray().Distinct().Count() == k);
        return res.Count;
    }
}
```