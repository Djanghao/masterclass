# [Python3] sliding window O(N)

**Author:** ye15
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1563707/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1563707/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/6b6e6b9115d2b659e68dcf3ea8e21befefaae16c) for solutions of weekly 266. 

```
class Solution:
    def countVowelSubstrings(self, word: str) -> int:
        ans = 0 
        freq = defaultdict(int)
        for i, x in enumerate(word): 
            if x in "aeiou": 
                if not i or word[i-1] not in "aeiou": 
                    jj = j = i # set anchor
                    freq.clear()
                freq[x] += 1
                while len(freq) == 5 and all(freq.values()): 
                    freq[word[j]] -= 1
                    j += 1
                ans += j - jj
        return ans 
```