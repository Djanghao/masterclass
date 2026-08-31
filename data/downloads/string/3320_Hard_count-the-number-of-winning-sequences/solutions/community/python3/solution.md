# Recursion + Memorization (Beats 100%) python3

**Author:** aswin_14
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905874/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5905874/)

---

# Intuition

- Start with a score of bob with zero.

- If alice wins subtract 1 from score, if bob wins add 1 otherwise add 0.

- Keep track of previous creature to make sure we not repeat that in current iteration.




<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
## Edge cases:

- If remaining number of rounds remaining plus current score is **negative** we can stop that iteration here itself because in that case alice will win but we need bob to win.

- If remaining number of rounds remaining plus current score is **zero** we can stop that iteration itself because in that case no one wins.

- If current index equals n we can return 1(we found out 1 way to win bob).

## Recursive Process:

- Iterate over 3 magical features and calculate the points gained in that round as per given conditions and add it to score and recursively call that funcion by changing prev to current feature.

- Store that total in dp so that if we come across this same level any time in the future iterations, we can use this.

# Complexity
- **Time complexity:** O(3 x n^2)=O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- **Space complexity:** Dp usage: O(n^2)

<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```python3 []
class Solution:
    def countWinningSequences(self, s: str) -> int:
        n=len(s)
        MOD=10**9+7
        def get(alice,bob):
            if alice=='F' and bob=='E':
                return -1
            if alice=='F' and bob=='W':
                return 1
            if alice=='W' and bob=='F':
                return -1
            if alice=='W' and bob=='E':
                return 1
            if alice=='E' and bob=='F':
                return 1
            if alice=='E' and bob=='W':
                return -1
            return 0
        dp={}
        def func(prev,i,score):
            if(score+(n-i)<=0):
                return 0
            if(i==n):
                return 1
            if((prev,i,score) in dp):
                return dp[(prev,i,score)]
            points=0
            for x in "EFW":
                if(x!=prev):
                    d=get(s[i],x)
                    points+=func(x,i+1,score+d)
            dp[(prev,i,score)]=points % MOD
            return dp[(prev,i,score)]
        return func('',0,0) % MOD
```