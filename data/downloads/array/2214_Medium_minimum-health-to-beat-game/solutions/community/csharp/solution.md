# C# solution

**Author:** like2learn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3042332/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/3042332/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At every level, we either use armor at that level, or see if using at a previous level was better.

# Approach
<!-- Describe your approach to solving the problem. -->
Loop over the levels, and update the running count of using armor at that level vs previous levels.

It would be a little bit simpler by just taking the full sum and subtracting from it later. I just thought of this way first, and solved it this way.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) for looping

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) for constant space

# Code
```
public class Solution {
    public long MinimumHealth(int[] damage, int armor) {
        long noArm = 1;
        long arm = 1;

        for (int i = 0; i < damage.Length; i++) {
            arm = Math.Min(arm + damage[i], noArm + Math.Max(0, damage[i] - armor));
            noArm += damage[i];
        }

        return Math.Min(arm, noArm);
    }
}
```