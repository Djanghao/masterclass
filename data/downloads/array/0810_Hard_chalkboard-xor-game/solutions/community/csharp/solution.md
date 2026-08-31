# [C#]

**Author:** rxgq
**Votes:** 0
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/5582124/](https://leetcode.com/problems/chalkboard-xor-game/solutions/5582124/)

---

# Code
```
public class Solution {
    public bool XorGame(int[] nums) {
        int xor = 0;
        foreach (int n in nums)
          xor ^= n;

        return xor == 0 || nums.Length % 2 == 0;
    }
}
```