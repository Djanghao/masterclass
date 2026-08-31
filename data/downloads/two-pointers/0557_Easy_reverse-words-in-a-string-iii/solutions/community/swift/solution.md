# swift (one line)

**Author:** FlightyNEO
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/398755/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/398755/)

---

```
func reverseWords(_ s: String) -> String {
	return s.components(separatedBy: " ")
			.map { String($0.reversed()) }
			.joined(separator: " ")
}
```