# C# O(N) - runtime, O(1) - space complexity

**Author:** AnujaPuranik
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/4143599/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/4143599/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool IsRobotBounded(string instructions) {
        int[] di = {0, 1};//facing North    
        int x = 0, y = 0;// start point of Robot
        
        foreach (char instruction in instructions) {
            if (instruction == 'G') {
                x += di[0];
                y += di[1];
            }
            else if (instruction == 'L') {//if left x coordinate becomes -1* y coordinate
                int temp = di[0];
                di[0] = -di[1];
                di[1] = temp;
            }
            else {
                int temp = di[1];// if Right y coordinate becomes -1* x coordinate
                di[1] = -di[0];
                di[0] = temp;
            }
        }
        
        return (x == 0 && y == 0) || (di[0] != 0 || di[1] != 1);
    }
}

```