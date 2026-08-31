# ✅ [Python] Simple O(N) Solution || Straightforward

**Author:** linfq
**Votes:** 53
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/1675386/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/1675386/)

---

**PLEASE UPVOTE if you like** \uD83D\uDE01 **If you have any question, feel free to ask.** 
* 2 Key Points
	* the center word can only contain only two identical letters like 'aa'
		* for example 'bc**aa**cb'
		* palindrome may not contain center word, for example 'bccb'
	* only pairs like ('aa', 'aa') or ('ab', 'ba') can put on two sides respectively
		* so we count the 'aa' and 'abba' patterns
		* if the count of 'aa' pattern is odd, the left one can be the center word

```
class Solution(object):
    def longestPalindrome(self, words):
        wc = collections.Counter(words)
        aa = 0  # count how many words contain only two identical letters like 'aa'
        center = 0  # if one count of 'aa' is odd, that means it can be the center of the palindrome, answer can plus 2
        abba = 0 # count how many word pairs like ('ab', 'ba') and they can put on both sides respectively

        for w, c in wc.items():
            if w[0] == w[1]: # like 'aa', 'bb', ...
                aa += c // 2 * 2 # if there are 3 'aa', we can only use 2 'aa' put on both sides respectively
                # if one count of 'aa' is odd, that means it can be the center of the palindrome, answer can plus 2
                if c % 2 == 1: center = 2
            else:
                abba += min(wc[w], wc[w[::-1]]) * 0.5  # will definitely double counting
        return aa * 2 + int(abba) * 4 + center
```