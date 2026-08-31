# Python Solution | Time O( target * source ) -> 98 % | Space O(1) -> 100 %

**Author:** tolujimoh
**Votes:** 36
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/396138/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/396138/)

---

```python
class Solution:
    def shortestWay(self, source: str, target: str) -> int:
        
        i, minimum = 0, 1
        
        for c in target:
            
			# Get leftmost char after previously matched index
            i = source.find(c, i)

			# If not found
            if i == -1:
                
				# Get leftmost char from begining of string and increase number of concatenated string
                i = source.find(c)
                minimum += 1
                
				# if not found, then target can't be formed. Return -1
                if i == -1:
                    return i
                
            i += 1
                
            
                
        return minimum
```