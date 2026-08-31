# C# || Simple solution

**Author:** vdmhunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3202046/](https://leetcode.com/problems/minimum-impossible-or/solutions/3202046/)

---

# Code
```
public class Solution {
    public int MinImpossibleOR(int[] nums) {
        int res = 1;
        
        while (nums.Contains(res))
            res <<= 1;
        
        return res;
    }
}
```