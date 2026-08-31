# Easy python solution 🎉

**Author:** shivaansh_0712
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/4097127/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/4097127/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->First we run a loop till the length of any one the given array.Then as we know the length of both the arrays are equal so we check the elements of both array at once and check if we find our queryTime in between the range of these elements.Once we find our queryTime we increase our count value and return it.

# Complexity
- Time complexity:44ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->Beats 56.12%of users with Python3

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->Beats 68.62%of users with Python3

# Code
```
class Solution:
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        c=0
        for i in range(0,len(startTime)):
            if(queryTime in range(startTime[i],endTime[i]+1)):
                c+=1
        return c
```