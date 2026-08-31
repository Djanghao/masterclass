# SIMPLE PICK / NOT PICK RECURSION || EXPLAINED PYTHON

**Author:** JigglyyPuff
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/3557956/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/3557956/)

---

# Intuition
Its a simple pick not pick question where bob can pick either to battle in the score field or not let alice win and try another battle field.

Now what are the requirements in question :-
`1. Bob have to maximize his score`
`2. must use all arrows (arrows by bob sum == numArrows)`
`3. To win from alice he needs atleast aliceArrows + 1`

Now follow the recursion code here if we choose not to pick any battle field we add 0 to path(as none arrow were used by Bob)
but if he competes to win he will use AliceArrows + 1
subtract it from total arrows and add it to path arrows

**What's different here from normal recursion code?** 
It says he must use all his arrows so, whenever we see bob hasnt used all the arrows we will just add the remaining arrows to any element ( here i chose 0th index) because they are just extra arrows and bob has already maximized his score.

Store maxScore path in res array and that should be your ans!!


# Code
```
class Solution:
    def maximumBobPoints(self, numArrows: int, aliceArrows: List[int]) -> List[int]:
        maxScore = 0
        res = [0] * len(aliceArrows)
    
        def recur(i, numArrows, score, path):
            nonlocal maxScore, res
            if i >= len(aliceArrows):
                if score > maxScore:
                    if numArrows > 0:
                        path[0] += numArrows
                    res = path
                    maxScore = score
                return score
            
            notPick = recur(i+1, numArrows, score, path + [0])
            pick = 0
            if numArrows - (aliceArrows[i] + 1) >= 0:
                pick = recur(i+1, numArrows - (aliceArrows[i] + 1), score + i, path + [aliceArrows[i] + 1])
            
            return max(pick, notPick)
        recur(0, numArrows, 0, [])
        return res


```