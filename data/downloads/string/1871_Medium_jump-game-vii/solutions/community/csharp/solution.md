# Unique Solution using Range

**Author:** robin1302
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/5625200/](https://leetcode.com/problems/jump-game-vii/solutions/5625200/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
While iterating the string, If the current 0 is reachable, Add +1 at the start of jump range and -1 at the end of Jump Range, continue to sum the range value to know if current 0 is reachable or not.
# Approach
<!-- Describe your approach to solving the problem. -->
Whenever we starting a possible jump range, the start will be put as +1 and the end will be -1.
So, if the current zero is reachable through any previous jumps, the sum of range values till now must be > 0.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
public class Solution {
    public bool CanReach(string s, int minJump, int maxJump) {
        int n = s.Length;
        int[] range = new int[n];
        if (s[n-1] != '0')
        {
            return false;
        }
        int r = 0;
        for(int i=0; i<s.Length; i++)
        {
            r += range[i];
            if (i == n-1)
            {
                return r > 0;
            }
            // Reachable zero, since r > 0
            if (s[i] == '0' && (r > 0 || i == 0))
            {
                int max = Math.Min(i+maxJump, n-1);
                if (max+1 < n)
                {
                    range[max+1] -= 1;
                }
                if ((i+minJump) < n) {
                    range[i+minJump] += 1;
                }
            }
            //Print(range);
        }
        return true;
    }

    private void Print(int[] r)
    {
        for(int i=0; i<r.Length; i++)
        {
            Console.Write($"{r[i]} : ");
        }
        Console.WriteLine("\
");
    }
}
```