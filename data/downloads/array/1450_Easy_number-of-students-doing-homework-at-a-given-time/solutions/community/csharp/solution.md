# easy

**Author:** SbSskVz9sc
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5445953/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/5445953/)

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
    public int BusyStudent(int[] startTime, int[] endTime, int queryTime) {
        int count=0;
        for(int i=0;i<startTime.Length;i++){
                 if (startTime[i] <= queryTime && queryTime <= endTime[i])
                   {
                      count++;
                   }
            
        }
        return count;
        
    }
}
```