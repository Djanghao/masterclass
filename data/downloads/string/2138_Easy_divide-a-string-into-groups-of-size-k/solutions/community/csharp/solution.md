# C# Linq 1-liner | 137ms 100%

**Author:** Legon2k
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/3054626/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/3054626/)

---

# Code
```
public class Solution {
    public string[] DivideString(string s, int k, char fill) 
        => s.Chunk(k).Select(_ => new string(_).PadRight(k, fill)).ToArray();
}
```
or cutting to chunks by Substring
```
public class Solution {
    public string[] DivideString(string s, int k, char fill) 
    {
        var r = new string[(s.Length + k - 1) / k];

        for(var i = r.Length-2; i >=0; i--)
        {
            r[i] = s.Substring(i * k, k);
        }

        r[r.Length-1] =  s.Substring((r.Length-1) * k).PadRight(k, fill);

        return r;
    }
}
```