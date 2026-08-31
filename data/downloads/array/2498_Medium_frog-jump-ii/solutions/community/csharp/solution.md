# C# || Simple max

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/2897931/](https://leetcode.com/problems/frog-jump-ii/solutions/2897931/)

---

# Code
```
public class Solution 
{
    public int MaxJump(int[] stones) 
    {
        if (stones.Length == 2)
            return stones[1] - stones[0];
        int max = int.MinValue;
        for (int i = 0; i < stones.Length - 2; i++)
        {
            max = Math.Max(max, stones[i + 2] - stones[i]);
        }
        return max;
    }
}
```