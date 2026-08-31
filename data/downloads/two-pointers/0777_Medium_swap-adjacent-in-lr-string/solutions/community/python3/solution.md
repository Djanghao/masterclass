# Simplest Python Solution O(n)

**Author:** Deo_Street
**Votes:** 6
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/1494845/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/1494845/)

---

'''
class Solution:
    def canTransform(self, start: str, end: str) -> bool:
        
        so , eo , sind, eind = [],[],[],[]
        for i in range(len(start)):
            if start[i] != 'X':
                so.append(start[i])
                sind.append(i)
            if end[i] != 'X':
                eo.append(end[i])
                eind.append(i)
        if so != eo:
            return False
        
        for j in range(len(so)):
            if so[j] == 'L' and eind[j]>sind[j]:
                return False
            if so[j] == 'R' and eind[j]<sind[j]:
                return False
        
        return True
'''
The idea is to initialy check whether the starting and the ending position have the same order of R and L configuration. We can imagine that X is the space that L and R can move along the array. So, we can check whether we can move R to the right or L to the left with the provided space.