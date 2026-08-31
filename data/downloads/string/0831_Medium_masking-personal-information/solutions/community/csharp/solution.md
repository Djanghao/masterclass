# 50ms run time 100% faster

**Author:** izaLSqvYne
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/5410145/](https://leetcode.com/problems/masking-personal-information/solutions/5410145/)

---

# Complexity
- Time complexity:
O(n) 50 ms

- Space complexity:
O(1) 40,3 MB
![image.png](./images/0.png)

# Code
```
public class Solution {
                 public string MaskPII(string s)
        {
            if (s.Contains('@'))
            {
                s = s.ToLower().Remove(1, s.IndexOf('@') - 2);
                for (int i = 0; i < 5; i++)
                {
                    s = s.Insert(1, "*");
                }
                return s;
            }
            else
            {
                RemoveChars(ref s);
                var len = s.Length - 4;
                s = s.Insert(len, "-");
                for (int i = len - 3; i >= 0; i = i - 3)
                {
                    s = s.Remove(i, 3).Insert(i, "-***");
                }
                if (s[0] != '-')
                {
                    var index = s.IndexOf('-');
                    s = s.Remove(0, index);
                    for (int i = 0; i < index; i++)
                        s = s.Insert(i, "*");
                    s = s.Insert(0, "+");
                }
                else
                {
                    if (s.Length > 14)
                        s = s.Insert(1, "+");
                    s = s.Remove(0, 1);
                }
                return s;
            }
        }
        public void RemoveChars(ref string s)
        {
            char[] chars = { '+', '-', '(', ')', ' ' };
            for (int i = 0; i < s.Length; i++)
                foreach (var c in chars)
                    if (s[i] == c)
                    {
                        s = s.Remove(i, 1);
                        i--;
                        break;
                    }
        }

}
```