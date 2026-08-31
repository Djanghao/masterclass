# Python 3 || 5 lines,  set, iteration  || T/S: 99%  / 65%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5207298/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5207298/)

---


```
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:

        ans, seen = 0, set()
 
        for num in nums:
            if num in seen: ans^= num
            else: seen.add(num)  

        return ans
```

[https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/submissions/1267708233/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/submissions/1267708233/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.