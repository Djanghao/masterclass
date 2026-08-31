# c#, simple loop

**Author:** bytchenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2680996/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2680996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Direct computation will have just `O(n)` time complexity.

# Approach
<!-- Describe your approach to solving the problem. -->
A simple loop will do.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n)`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)`

# Code
```
public class Solution {
    public int HardestWorker(int n, int[][] logs) {
        int prior = 0;
        int max = 0;
        int result = 0;

        foreach (int[] item in logs) {
            int v = item[1] - prior;

            if (v > max || v == max && result > item[0]) {
                max = v;
                result = item[0];
            }
            
            prior = item[1];
        }       

        return result;
    }
}
```