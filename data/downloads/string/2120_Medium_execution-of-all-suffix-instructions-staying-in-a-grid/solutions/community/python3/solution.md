# [Python3] Clean Solution

**Author:** Bariscan97
**Votes:** 3
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3349530/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3349530/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:
        row,col,res=startPos[0],startPos[1],[]
        for i in range(len(s)):
            startPos[0],startPos[1],arr,count=row,col,s[i:],0
            for j in arr:
                if j=="R":
                    if startPos[1]+1==n:break
                    else:
                        startPos[1]+=1
                        count+=1
                elif j=="L":
                    if startPos[1]-1==-1:break
                    else:
                        startPos[1]-=1
                        count+=1
                elif j=="U":
                    if startPos[0]-1==-1:break
                    else:
                        startPos[0]-=1
                        count+=1
                elif j=="D":
                    if startPos[0]+1==n:break
                    else:
                        startPos[0]+=1
                        count+=1
            res.append(count)
        return res
```