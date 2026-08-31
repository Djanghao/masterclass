# Python BFS - track candidates of increasing length

**Author:** coco987
**Votes:** 12
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/1472005/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/1472005/)

---

(It's my first time getting 4 questions in a contest lol.) 

Since each char has to appear at least k times, we only need to keep track of these `chars` (found in one pass).

Let's keep a list of valid candidates `old_cand` that appear at least k times in string `s`. Initially, chunk length m=1, it's the same as `chars`. To get the next level (chunks of length m+1), try to append each character in the `chars` we found earlier, and if it is valid, add to `new_cand`. Do this until `new_cand` is empty, or maximum length `n/k` is reached. 

* In order to validate a subsequence t (repeated k times) in s, we just need O(n) string match. See `find()` below.
* Finally, return the lexicographically largest candidate. Always try appending the largest valid char first, so we won't need to sort at the end.



```
class Solution:
    def longestSubsequenceRepeatedK(self, s: str, k: int) -> str:
        n = len(s)
        max_chunk_sz = n // k
        
        d = collections.Counter(s)
        chars = sorted([c for c in d if d[c] >= k], reverse=True)
        if not chars:
            return ''
        
        old_cand = chars
        for m in range(2, max_chunk_sz+1):
            new_cand = []
            for t in self.get_next_level(old_cand, chars):
                if self.find(s, t*k):
                    new_cand.append(t)
            
            if len(new_cand) == 0:
                break
            old_cand = new_cand
        return old_cand[0]
        
    def get_next_level(self, cand, chars):
        for s in cand:
            for ch in chars:
                yield s + ch
        
    def find(self, s, t):
        # find subsequence t in s
        j = 0
        for i in range(len(s)):
            if s[i] == t[j]:
                j += 1
            if j == len(t):
                return True
        return False
```