# Easy Python | 100% Speed | Recursion + Memoization

**Author:** Aragorn_
**Votes:** 31
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/746142/](https://leetcode.com/problems/predict-the-winner/solutions/746142/)

---

**Easy Python | 100% Speed | Recursion + Memoization**

Easy Python solution tracking the maximum score that Player 1 can achieve. The score of Player 2 can be calculated afterwards by noting that both scores must sum the total of the array: Player_1 + Player_2 = Sum(nums).

For each turn of Player_1, we do the following:
1. We consider picking the first or the last element of the (remaining) array separately. Each alternative is assigned a score, according to the rules of step-2.

2. For each alternative in step-1, we consider that Player 2 is smart and will leave us with the worst possible score afterwards. So, from the 2 upcoming turns (with Player 2 picking his/her first or last element), we consider that we achieve the **minimum** score from these possibilities.

3. After using the previous rules, we pick the **best** score from the 2 alternatives described in (1).

4. Steps (1-3) are repeated recursively until we reach an answer. We use memoization to avoid redundant calculations.

I hope the expalanation was helpful. Cheers,

```
class Solution:
    def PredictTheWinner(self, A):
        memo = {}
        def maxscore(i,j):
            if (i,j) in memo:
                return memo[i,j]
            if i>j:
                return 0
            #
            sA = A[i] + min( maxscore(i+1,j-1), maxscore(i+2,j  ) ) # pick A[i] + min of the 2 possible upcoming turns (player 2 is smart)
            sB = A[j] + min( maxscore(i  ,j-2), maxscore(i+1,j-1) )
            score = max(sA,sB)
            memo[i,j] = score
            return score
        p1 = maxscore(0,len(A)-1) # Score Player 1
        return p1>=(sum(A)-p1) # p1 >= p2
```