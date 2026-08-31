# ✅Python || Math || Two Easy Approaches

**Author:** chuhonghao01
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2358259/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2358259/)

---

Math:
We have x students.
There are 1 student in 1st group,
				2 students in 2nd group,
				3 students in 3rd group,
				4 students in 4th group,
				...
				n students in n-th group
			
We have n * (n + 1) / 2 students in the first n groups totally,
we have (n + 1) * (n + 2) / 2 students in the first (n + 1) groups totally.

Now we have 
```
n * (n + 1) / 2 < x < (n + 1) * (n + 2) / 2
```
We got:
```
((8 * x + 1) ** 0.5 - 3) / 2 < n < ((8 * x + 1) ** 0.5 - 1) / 2
```
Hence, 
```
n = int( ((8 * x + 1) ** 0.5 - 1) / 2)
```

Implement:
```
class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        
        x = len(grades)
        n = 0.5 * ((8 * x + 1) ** 0.5 - 1)
        ans = int(n)
        
        return ans
```

Another Solution (more readable):
```
class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        
        sortedGrades = sorted(grades)

        groupNums = 0
        total = 0
        while total <= len(sortedGrades):
            groupNums += 1
            total += groupNums
        return groupNums - 1
```