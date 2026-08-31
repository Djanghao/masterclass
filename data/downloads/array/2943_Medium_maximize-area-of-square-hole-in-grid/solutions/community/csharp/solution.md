# 100% C# Solution

**Author:** Andrewthebooger
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/5681962/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/5681962/)

---

# Intuition
<!-- At first I was confused on what the array meant but that confusion was later fixed when I relized that everything had a line and its only the nums in the array that you can take out. I noticed that the question was asking for a val or number rather than a couple of cordinets to take out, it was also giving us the same starting square val of 1 I also noticed by checking other problems that the squares went up by the power of the next 2-->

# Approach
<!--I first Sorted both arrays so I could easily walk through them, I then make 4 ints, the answer the streak for my for loops and ah and av, both ah and av stored the highest streak of lines close together, I used streak to find the longest collection of vals that were only one number apart, sorting beforehand helped me do this better-->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaximizeSquareHoleArea(int n, int m, int[] hBars, int[] vBars) {
        Array.Sort(hBars);
        Array.Sort(vBars);
        int ah = 0;
        int av = 0;
        int answer = 2;
        int streak = 0;
        for(int i = 1; i < hBars.Length; i++)
        {
            if(Math.Abs(hBars[i - 1] - hBars[i]) == 1)
            {
                streak++;
            }
            else
            {
                streak = 0;
            }
        ah = ah < streak ? streak : ah;
        }
        streak = 0;
        for(int i = 1; i < vBars.Length; i++)
        {
            if(Math.Abs(vBars[i - 1] - vBars[i]) == 1)
            {
                streak++;
            }
            else
            {
                streak = 0;
            }
        av = av < streak ? streak : av;
        }
        answer += Math.Min(ah, av);
        return Convert.ToInt32(Math.Pow(answer, 2));
    }
}
```