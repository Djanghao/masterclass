# Python - Thoughts / Explanation

**Author:** kevinhynes
**Votes:** 11
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/406307/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/406307/)

---

Let `c1` be a char from `str1`, and `c2` be a char from `str2`.
1. If some `c1` maps to multiple `c2`'s, return False.  We cannot convert.
2. If multiple `c1`'s map to same `c2`, all those `c1`'s can be reduced to a single `c1`.
3. Where some `c2` is also a `c1`, a linkedlist-like structure is formed (`str1="abc", str2="bcd"`).  This is not a problem if we start replacements from the back.
4. Where this linkedlist ends in a cycle, (`str1="abc", str2="bca"`), we need a temporary character to break the cycle.  
	Here, using map `{'a': 'b', 'b': 'c', 'c': 'a'}` and converting `'abc' -> 'bca'` is not possible.
	But using map `{'a': 'b', 'b': 'c', 'c': 'd', 'd': 'a'}` and converting `'abc' -> 'bcd' -> 'bca'` **is** possible.

If all 26 characters are used in `str1`, then **ANY** conversion will result in 2 groups of the same character in `str1` - 1 group unconverted and the other converted. We cannot convert (...unless the unconverted group maps to itself (`str1='ab', str2='bb'`) but this case is handled by [2] anyway).
Using [2], we can reduce number of chars used in `str1` to fix this problem. But if all 26 chars in `str2` are also used, [2] does not apply, and we cannot convert.  But if [2] does apply, we do that first, and then use [3] and [4] as necessary to perform conversions.

 Therefore, we can always convert if `str2` does not use all chars because we can use [4] to break cycles, even if str1 DOES use all chars because we can use [2] to reduce `str1` to less than 26 chars.
The only edge case is when `str1 == str2`; all chars are used in both strings, but replacing a `c1` with `c2` (`c2 == c1`) does not create a situation where we have a converted and unconverted group of chars in `str1`.

```
def canConvert(self, str1: str, str2: str) -> bool:
	charmap = {}
	for c1, c2 in zip(str1, str2):
		if c1 not in charmap:
			charmap[c1] = c2
		elif charmap[c1] != c2:
			return False  # [1]

	return str1 == str2 or len(set(str2)) < 26
```