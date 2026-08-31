# 11 line DFS solution

**Author:** nirajmotiani
**Votes:** 29
**Link:** [https://leetcode.com/problems/frog-jump/solutions/418003/](https://leetcode.com/problems/frog-jump/solutions/418003/)

---

Standard dfs with two base conditions and three recursive calls

If the same values has been explored before or if value not present in array, then return false.
If destination found, then return True
Keep log of the path visited so that not to visit that one again
Else go further with all the possible options

Use a set of stones for faster lookup
```
class Solution(object):
    def canCross(self, stones):
        n = len(stones)
        stoneSet = set(stones)
        visited = set()
        def goFurther(value,units):
            if (value+units not in stoneSet) or ((value,units) in visited):
                return False
            if value+units == stones[n-1]:
                return True
            visited.add((value,units))
            return goFurther(value+units,units) or goFurther(value+units,units-1) or goFurther(value+units,units+1)
        return goFurther(stones[0],1)
```