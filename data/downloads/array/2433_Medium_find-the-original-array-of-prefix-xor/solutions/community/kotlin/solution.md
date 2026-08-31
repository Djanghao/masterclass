# Kotlin Opposite of XOR is XOR easy

**Author:** Z3ROsum
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2678879/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2678879/)

---

```
fun findArray(pref: IntArray): IntArray {
	var curr = pref[0]
	var result = mutableListOf(curr)
	for (i in 1 until pref.size) {
		val new = curr xor pref[i]
		result.add(new)
		curr = curr xor (new)
	}
	return result.toIntArray()
}
```