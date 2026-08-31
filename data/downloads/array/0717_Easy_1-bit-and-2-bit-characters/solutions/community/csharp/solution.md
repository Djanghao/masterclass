# C# - Solution for 1-bit and 2-bit Characters

**Author:** manjul22
**Votes:** 2
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/4472932/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/4472932/)

---

# Code
```
public class Solution {
    public bool IsOneBitCharacter(int[] bits) {
        int i = 0;
        while(i < bits.Length-1)
        {
            if(bits[i] == 1)
            {
                i++;
            }
            i++;
        }
        return i == bits.Length-1;
    }
}
```