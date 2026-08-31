# O(N*H)

**Author:** testsingh1996
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971554/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971554/)

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
```python3 []
class Solution:
    def findSubtreeSizes(self, parent: List[int], s: str) -> List[int]:
        n = len(parent)
        newParent = parent +[]
        newCount = [1]*n
        
        for i in range(1,n):
            p = parent[i]
            while(p!=-1):
                if s[p]!=s[i]:
                    p = parent[p]
                else:
                    newParent[i] = p
                    break
                    
        for i in range(1,n):
            p = newParent[i]
            while(p!=-1):
                newCount[p]+=1
                p = newParent[p]
                
        return newCount
        
        
```