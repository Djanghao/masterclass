# ✅Python || Map || Easy Approach

**Author:** chuhonghao01
**Votes:** 21
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2324754/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2324754/)

---

Algorithm:
(1) use setS to store the letter have ever seen;
(2) one pass the input string:
(3) if x is already in setS:
		x is what we need (it is the first occurrence twice).
(4) else (x is not in setS):
		we put the x into the setS to store it.
```
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        
        setS = set()

        for x in s:
            if x in setS:
                return x
            else:
                setS.add(x)
        
```