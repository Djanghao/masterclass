# [Python3] greedy

**Author:** ye15
**Votes:** 11
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1175044/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/1175044/)

---


```
class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        vowels = "aeiou"
        ans = 0
        cnt = prev = -1 
        for i, x in enumerate(word): 
            curr = vowels.index(x)
            if cnt >= 0: # in the middle of counting 
                if 0 <= curr - prev <= 1: 
                    cnt += 1
                    if x == "u": ans = max(ans, cnt)
                elif x == "a": cnt = 1
                else: cnt = -1 
            elif x == "a": cnt = 1
            prev = curr 
        return ans 
```

Alternative implementations
```
class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        ans = 0
        cnt = unique = 1
        for i in range(1, len(word)): 
            if word[i-1] <= word[i]: 
                cnt += 1
                if word[i-1] < word[i]: unique += 1
            else: cnt = unique = 1
            if unique == 5: ans = max(ans, cnt)
        return ans 
```

```
class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        ans = ii = 0
        unique = 1
        for i in range(1, len(word)): 
            if word[i-1] > word[i]: 
                ii = i 
                unique = 1
            elif word[i-1] < word[i]: unique += 1
            if unique == 5: ans = max(ans, i-ii+1)
        return ans 
```