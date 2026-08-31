# Python 3   ||   3 lines,  w/ comment   ||   T/S: 93% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/3005158/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/3005158/)

---

Pretty much the same as the other brute force solutions, with one enhancement: *If`num`is in s then so is`num`//2.* For example, 13 = "1101" and 13//2= 6 = "110." 

It follows then we only need to verify`num`over `range(n//2+1, n+1)`.
```
class Solution:
    def queryString(self, s: str, n: int) -> bool:

        for num in range(n//2+1, n+1):
            if bin(num)[2:] not in s: return False

        return True
```
[https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/submissions/872267745/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/submissions/872267745/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `n`.