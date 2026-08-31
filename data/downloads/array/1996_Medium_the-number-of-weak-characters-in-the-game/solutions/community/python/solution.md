# Python - Sort

**Author:** lokeshsk1
**Votes:** 220
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/1445198/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/1445198/)

---

**Solution 1:**

```
class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        
        properties.sort(key=lambda x: (-x[0],x[1]))
        
        ans = 0
        curr_max = 0
        
        for _, d in properties:
            if d < curr_max:
                ans += 1
            else:
                curr_max = d
        return ans
```

**Soultion 2: Stack**
```
class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        
        properties.sort(key=lambda x: (x[0], -x[1]))
        
        stack = []
        ans = 0
        
        for a, d in properties:
            while stack and stack[-1] < d:
                stack.pop()
                ans += 1
            stack.append(d)
        return ans
```