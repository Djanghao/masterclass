# Python3 || 1 line, groupby  || T/S: 97% / 57%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971378/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971378/)

---


```python3 []
class Solution:
    def possibleStringCount(self, word: str) -> int:
        
        return sum(len(list(x)) - 1 for _, x in groupby(word)) + 1
```

[https://leetcode.com/problems/find-the-original-typed-string-i/submissions/1434402488/](https://leetcode.com/problems/find-the-original-typed-string-i/submissions/1434402488/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.