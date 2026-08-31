# Python solution with video explanation

**Author:** spec_he123
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/749333/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/749333/)

---

[https://www.youtube.com/watch?v=j0KejYpI_Mc&feature=youtu.be]
```
class Solution:
    def findBestValue(self, arr: List[int], target: int) -> int:
        arr.sort()
        length = len(arr)
        
        for x in range(length):
            sol = round(target / length)
            if arr[x] >= sol:
                return sol
            target -= arr[x]
            length -= 1
        
        return arr[-1]
```
