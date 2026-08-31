# Simple java solution

**Author:** Siddhant_1602
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836111/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836111/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int count=0;
        for(int i:hours)
        {
            if(i>=target)
            {
                count++;
            }
        }
        return count;
    }
}
```