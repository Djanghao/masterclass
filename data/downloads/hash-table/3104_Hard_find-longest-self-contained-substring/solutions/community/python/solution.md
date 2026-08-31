# Prefix Sum O(N * 26 * 26) [Python 3]

**Author:** LayzerK
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969218/](https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969218/)

---

For this question, we want to consider substrings such that the frequency of characters in the substring is either equal to zero (not present) OR it is equal to the frequency of that character in the whole string. Logically, every substring thus must be made up of the leftmost occurence of a character & the rightmost occurence of another character (potentially the same character, but not necessarily). If it isn't in this form, then there is guarenteed to be a character to the left or the right of the substring.

To get the frequency of characters in a substring, it makes sense to use a prefix sum since that allows us to do range sum queries on a static array. To make sure we account for all possible starting/ending characters, we loop over everything. Technically this has a constant factor of 26^2, but in practice its better since you can prune everything that has a right bound < left bound and also early break if you reach an invalid character in the substring.

Here is the code:

```python
class Solution:
    def maxSubstringLength(self, s: str) -> int:
        cnts = Counter(s)
        
        prefix = [[0 for char in range(26)] for i in range(len(s)+1)]
        rMost = {}
        lMost = {}
        ans = 0
        for i in range(1, len(s)+1):
            char = s[i-1]
            if char not in lMost:
                lMost[char] = i
            rMost[char] = i
            prefix[i][ord(char) - ord("a")] += 1
            for freq in range(26):
                prefix[i][freq] += prefix[i-1][freq]
        
    
        for char in lMost:
            left = lMost[char]
            for c2 in rMost:
                right = rMost[c2]
                if (right == len(s) and left == 1) or (right < left):
                    continue
                valid = True
                for i, (rfreq, lfreq) in enumerate(zip(prefix[right], prefix[left-1])):
                    if rfreq-lfreq != 0 and rfreq-lfreq != cnts[chr(i + ord("a"))]:
                        valid = False
                        break
                if valid:
                    ans = max(ans, right-left+1)
        return ans if ans != 0 else -1
```