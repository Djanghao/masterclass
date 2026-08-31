# Python 3   ||   4 lines,  w/ explanation   ||   T/S: 99% / 89%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/3367678/](https://leetcode.com/problems/super-washing-machines/solutions/3367678/)

---

Here's the plan:
1. We can arrive at the final state `arr = [n,n,n..,n]` (where`n`is the average of the elements of`machine`) if and only if`n*len(arr) == sum(machines)`). If not, we return -1. 
2. If so, we revise the problem to a simpler, equivalent probem by decrementing each element in`machines`by`n`, which means the final state we seek becomes`arr = [0,0,0..,0]`. Now, one of two conditions will determine the minimum number of moves.  
3. The first condition is to determine `max(machines)`. (Think about how many dresses must be removed from this machine to empty the machine, one per move.)
4. The second condtion is the greatest absolute value of any element of the prefix sum of`machines`. The number of moves to the right or left must exceed or equal num or -num, respectively. (Think about how many dresses must pass through this machine, one per move.)

Here's the code:

```
class Solution:
    def findMinMoves(self, machines: List[int]) -> int:

        ave, rem = divmod(sum(machines),len(machines))    # <\u2013 1.
        if rem: return -1                                 #
        
        machines = [m - ave for m in machines]            # <\u2013 2.

        return max(max(machines),                         # <\u2013 3.
                   max(map(abs,(accumulate(machines)))))  # <\u2013 4.
```
[https://leetcode.com/problems/super-washing-machines/submissions/1270923243/](https://leetcode.com/problems/super-washing-machines/submissions/1270923243/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*).
