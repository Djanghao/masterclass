# Python 3   ||   1-6 lines,  w/ example   ||   T/S: 86% / 85%

**Author:** Spaulding_
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995109/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995109/)

---

Here's the plan:
- Use`Counter` to determine the count`n`of each integer in the array.
- Determine whether`n = 1`for any integer. If so,`return -1`.
- For the count`n`of each integer in the array, add`n//3`to`ans`, plus 1 if`n%3 > 0`
- Return`ans`
```
class Solution:
    def minimumRounds(self, tasks: list[int]) -> int:
                                            # Example: tasks = [2,2,3,3,2,4,4,4,4,4,4,4]

        tasks = Counter(tasks)              #          tasks = {3:2, 2:3, 4:5}
        
        if 1 in tasks.values(): return -1   # <-- no solution if there's a singleton

        ans = 0                             # tasks.values() = [2, 3, 5]     
        for n in tasks.values():
            ans+= n//3 + bool(n%3)          # ans  = (2//3+True) + (3//3+False) + (5//3+True)
                                            #      = ( 0  +  1  ) + (  1 +  0 ) + (1   +  1 )
        return  ans                         #      = 4  <-- return
```
And, if you must, here's a one-liner:
```
class Solution:
    def minimumRounds(self, tasks: list[int]) -> int:

        return sum(n//3 + bool(n%3) for n in Counter(tasks).values()) if 1 not in Counter(tasks).values() else -1
```
[https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/submissions/1286567828/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/submissions/1286567828/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(tasks)`.
