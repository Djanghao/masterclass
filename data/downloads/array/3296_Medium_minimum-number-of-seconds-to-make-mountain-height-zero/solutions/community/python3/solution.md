# Python3 || 5 lines, some maths and a bisect_left  || T/S: 86% / 70%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5821270/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5821270/)

---

Here's the plan:

1. We define the function `work_done` to determine the work done in `days` days by all the workers. 

2. Within this function, we define a lambda function to determine the work done in `days` days by an individual worker with a *workertime* of `x`. Here's how we determine this function

 ```
                   worktime * x * (x + 1)/2 = days 
mult each side by 8 and divide by worktime:
                           4 *  x * (x + 1) = 8 * days / worktime 
simplify and add 1 to each side:   
                              4x^2 + 4x + 1 = 8 * days / worktime + 1
factor:                 
                                (2x + 1)^2  = 8 * days / worktime + 1
solve for x...
```
3. We use `bisect_left` to determine the minimum number of days required to eliminate the mountain.
_____
Here's the code:

```python3 []
class Solution:
    def minNumberOfSeconds(self, mountainHeight: int,
                workerTimes: List[int], mx = 50_000_500_000) -> int:

        def work_done(days: int)-> int:                             # <- 1)
            work = lambda wt: int(sqrt(8 * days / wt + 1) - 1)//2   # <- 2)
            return sum(map(work,workerTimes))

        poss_days = range( mx * mountainHeight // len(workerTimes))

        return bisect_left(poss_days, 
                               mountainHeight, key = work_done)     # <- 3)
```
[https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/submissions/1398793773/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/submissions/1398793773/)

I could be wrong, but I think that time complexity is *O*(*N* log *M*) and space complexity is *O*(1), in which *N* ~ `len(workerTimes)` and *M* ~ `mountainHeight`.
