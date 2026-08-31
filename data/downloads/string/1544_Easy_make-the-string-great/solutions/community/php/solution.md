# [PHP] Solution - Faster than 100% | 4ms

**Author:** dragon13
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/819077/](https://leetcode.com/problems/make-the-string-great/solutions/819077/)

---

**Simple solution and faster than 100%, takes only 4ms:**
* Start from the first to the penultimate char of the string.
* Compare the char with the next with **strcasecmp** because it's case insensitive.
* If different or both (original) chars are equal continue (everything is good).
* Both chars are therefore not equal in upper/lowercase so use **substr_replace** to cut out both.
* Set iterator 2 steps back to continue with the last char (1 will be balanced through the $i++ of the loop) with a min of -1 (so the index is not getting smaller than 0) because through deletion of chars could be last char with next char getting bad.

```
    function makeGood($s) {
		for ($i=0; $i<strlen ($s)-1; $i++) {
			if (strcasecmp($s[$i], $s[$i+1])!=0 || $s[$i]==$s[$i+1])
				continue;
			$s = substr_replace($s, '', $i, 2);
			$i = max(-1,$i-2);
		}
		return $s;
	}
```