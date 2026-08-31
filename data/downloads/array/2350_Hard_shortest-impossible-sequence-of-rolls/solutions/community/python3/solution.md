# Python easy understanding solution

**Author:** byroncharly3
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2322381/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2322381/)

---

For example,  k = 3,  rolls = [1, 1, 2, 2, 3, 1]
Use a set to record if all possible numbers has appeared at least once.
In this case, when iterate to 3 in [1, 1, 2, 2, **3**, 1], all possible numbers (1-3) has appeared at least once,
so you must at least take 1 number from interval [1, 1, 2, 2, 3], in practice, take 3.

In the remain array [1], it cannot fill the set again. It means there exists a number you can take to make the sequence impossible, in this case, take either 2 or 3. So both [3, 2] and [3, 3] are impossible array.

```
class Solution:
    def shortestSequence(self, rolls: List[int], k: int) -> int:
        s = set()
        res = 0
        
        for r in rolls:
            s.add(r)
            if len(s) == k:        # All possible number has appeared once.
                res += 1           # So you must "at least" use one more place to store it.
                s.clear()          # Clear the set.
        
        
        return res + 1