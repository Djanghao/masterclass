# Python 3 || 1 line,  map to string  || T/S:  99% /  98%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884343/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884343/)

---

```
class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:

        return sum(int(max(n)*len(n)) for n in map(str,nums)) 
``` 

[https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1267025505/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/submissions/1267025505/)

I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(*N*), in which *M* ~ average count of digits and *N* ~ `len(nums)`.