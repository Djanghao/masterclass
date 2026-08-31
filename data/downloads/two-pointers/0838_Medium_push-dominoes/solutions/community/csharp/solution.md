# C# two pointers

**Author:** Legon2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/4976298/](https://leetcode.com/problems/push-dominoes/solutions/4976298/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public string PushDominoes(string dominoes) 
    {
        var s = 0;

        while(s < dominoes.Length && dominoes[s] =='.') s++; 

        if(s == dominoes.Length) return dominoes;

        var d = dominoes.ToCharArray();

        if(s > 0 && d[s] == 'L') Array.Fill(d, 'L', 0, s);

        var e = s + 1;

        for(;e < d.Length; s = e++)
        {
            if(d[e] != '.') continue;

            while(e < d.Length && d[e] =='.') e++; 

            if(e == d.Length) break;

            if(d[s] == d[e])
            {
                Array.Fill(d, d[s], s + 1, e - s - 1);
            }
            else if(d[s] == 'R' && d[e] == 'L')
            {
                for(int l=s+1, r=e-1; l < r; l++, r--)
                    (d[l], d[r]) = (d[s], d[e]);
            }
        }

        if(d[s] == 'R') Array.Fill(d, d[s], s + 1, e - s - 1);

        return new string(d);
    }
}
```