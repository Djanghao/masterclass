# Python Build the Cipher Matrix

**Author:** WangQiuc
**Votes:** 5
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1577075/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1577075/)

---

This solution works as the problem states "the rightmost column will not be empty after filling in `originalText`". But then just wonder why it not avoid corner cases as `len(originalText) == 0`. Anyway, testcase like `"a    ", 4` is treated as invalid case.
```
def decodeCiphertext(s, r):
	k = len(s) // r
	mat = [s[i*k+i:i*k+k] for i in range(r)]
	mat[-1] += " "  # handle trailing characters for rows in mat[:-1]
	return "".join(map("".join, zip(*mat))).rstrip()
```