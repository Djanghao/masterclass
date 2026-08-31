# Python 3   ||   3 lines,  string methods   ||  T/S: 92% / 70%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4745094/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4745094/)

---


```
class Solution:
    def countPrefixSuffixPairs(self, words: List[str], ans = 0) -> int:

        for pre_suf, word in combinations(words,2):
            ans+= word.startswith(pre_suf) and word.endswith(pre_suf)

        return  ans
```
[https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1285525181/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/submissions/1285525181/)

I could be wrong, but I think that time complexity is *O*(*N* ^2) and space complexity is *O*(1), in which *N* ~ `len(words)`.