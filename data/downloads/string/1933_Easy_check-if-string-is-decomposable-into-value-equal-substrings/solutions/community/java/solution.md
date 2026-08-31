# Java | Clean | Simple

**Author:** prashant404
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/2224638/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/2224638/)

---

The code is self explanatory, but feel free to ask questions
>**T/S:** O(n)/O(1), where n = size(s)
```
public boolean isDecomposable(String s) {
	var n = s.length();
	var twin = 0;
	var triple = 0;

	for (var i = 0; i + 1 < n; i++)
		if (s.charAt(i) == s.charAt(i + 1))
			if (i + 2 < n && s.charAt(i + 1) == s.charAt(i + 2)) {
				triple++;
				i += 2;
			} else {
				if (++twin == 2)
					return false;
				i++;
			}

	return twin == 1 && 2 + triple * 3 == n;
}
```
***Please upvote if this helps***