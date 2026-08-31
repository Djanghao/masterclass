# Idiomatic Kotlin

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/1511098/](https://leetcode.com/problems/reverse-string-ii/solutions/1511098/)

---

```
var isReverseChunk = true
return s
	.chunked(k)
	.joinToString("") {
		val result = if (isReverseChunk) it.reversed() else it
		isReverseChunk = !isReverseChunk
		result
	}
```