# 2 easy Python Solutions

**Author:** ayushi7rawat
**Votes:** 11
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/1193688/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/1193688/)

---

```
class Solution:
    def trimMean(self, arr: List[int]) -> float:
        arr.sort()

        return statistics.mean(arr[int(len(arr)*5/100):len(arr)-int(len(arr)*5/100)])
        
```

**Solution two:**
```
class Solution:
    def trimMean(self, arr: List[int]) -> float:
        arr.sort()
        
        n = len(arr)
        per = int(n*5/100)
        l2 = arr[per:len(arr)-per]
		
        x = sum(l2)/len(l2)

        return x
        
```