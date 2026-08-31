# Scala Solution

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/890351/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/890351/)

---

That question was about efficient memory reading, as loading 4 bytes is efficient than 4 times loading one byte.
1. Simple read file till end
2. If read count is less than 4 means file ended
3. In inner loop we iterate to update buf from tmp, taking care, required read and current read
```
def read(buf: Array[Char], n: Int): Int = {
	val tmp = Array.ofDim[Char](4)
	var read = 0
	var eof = false

	while(!eof) {
		val len = read4(tmp)
		eof = len < 4
		var i = 0
		while(i < len && read < n) {
			buf(read) = tmp(i)
			read += 1
			i += 1
		}
	}
	read
}
```