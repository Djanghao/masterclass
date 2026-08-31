# dart solution beating 87% of  runtime

**Author:** sayedadinan
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/4918749/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/4918749/)

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
class Solution {
  int busyStudent(List<int> startTime, List<int> endTime, int queryTime) {
    int val=0;
    for(int i=0;i<startTime.length;i++){
        if(queryTime>=startTime[i]&&endTime[i]>=queryTime){
         val+=1;
        }
    }
    return val;
  }
}
```