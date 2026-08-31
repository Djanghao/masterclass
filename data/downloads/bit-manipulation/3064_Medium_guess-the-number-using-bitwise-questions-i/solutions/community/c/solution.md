# C++ very intuitive solution bit check

**Author:** OleksaM
**Votes:** -1
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4805160/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4805160/)

---

```
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Guess the Number Using Bitwise Questions I.
// Memory Usage: 7.4 MB, less than 100.00% of C++ online submissions for Guess the Number Using Bitwise Questions I.
int findNumber() {
	int res = 0;
	for (int i = 0; i < 32; i++)
		if (commonSetBits(1 << i))
			res |= 1 << i;
	return res;
}
```