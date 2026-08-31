# C# few lines bitwise OR solution | 56ms 98%

**Author:** Legon2k
**Votes:** 2
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/3054339/](https://leetcode.com/problems/rings-and-rods/solutions/3054339/)

---

# Code
```
public class Solution {
    public int CountPoints(string rings) 
    {
        var rods = new int [10];

        for(var i=0; i < rings.Length; i+=2)
        {
            rods[rings[i+1]-'0'] |= 
                rings[i] switch { 'R' => 1, 'G' => 2, _ => 4 };
        }

        return rods.Count(_ => _ == 7);
    }
}
```