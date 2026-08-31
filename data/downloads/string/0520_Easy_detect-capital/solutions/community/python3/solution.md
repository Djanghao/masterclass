# ✔️ [Python3] SHOW MUST GO ON (҂◡_◡) ᕤ, Explained

**Author:** artod
**Votes:** 44
**Link:** [https://leetcode.com/problems/detect-capital/solutions/1714310/](https://leetcode.com/problems/detect-capital/solutions/1714310/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

To solve this problem, we count the number of capital letters in the word and then check all three conditions:
- Number of capital letters is equal to the length of the word
- Number of capital letters is zero
- There is just one capital letter and it's the first letter

Time: **O(n)** - for the scan
Space: **O(1)**

Runtime: 26 ms, faster than **91.26%** of Python3 online submissions for Detect Capital.
Memory Usage: 14.3 MB, less than **13.27%** of Python3 online submissions for Detect Capital.

```
def detectCapitalUse(self, word: str) -> bool:
	cnt = sum(c.isupper() for c in word)

	return cnt == len(word) \\
		or cnt == 0 \\
		or cnt == 1 and word[0].isupper()
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**