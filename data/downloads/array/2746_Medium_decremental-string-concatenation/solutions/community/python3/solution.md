# Python 3   ||   6 lines,  dp  ||   T/S: 90%  /  73%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3682035/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3682035/)

---

```
class Solution:
    def minimizeConcatenatedLength(self, words: List[str]) -> int:
        
        @lru_cache(None)
        def dp(aLft,aRgt,idx):

            if idx == len(words): return 0

            wLft, wRgt = words[idx][0], words[idx][-1]
            
            return max((wRgt==aLft) + dp(wLft,aRgt,idx+1), 
                       (aRgt==wLft) + dp(aLft,wRgt,idx+1))
        
        return sum(map(len, words)) - dp(words[0][0],words[0][-1],1)
```
[https://leetcode.com/problems/decremental-string-concatenation/submissions/1294916325/](https://leetcode.com/problems/decremental-string-concatenation/submissions/1294916325/)

I could be wrong, but I think that time complexity is *O*(*N*) (because of the cachingand space complexity is *O*(*N*), in which *N* ~`len(words)`.