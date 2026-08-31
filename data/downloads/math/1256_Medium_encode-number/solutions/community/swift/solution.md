# Swift O(num's bit count) 100% time / 100% memory

**Author:** ilikeswift
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-number/solutions/500660/](https://leetcode.com/problems/encode-number/solutions/500660/)

---

```Swift
func encode(_ num: Int) -> String {
	var encoder = num + 1
	var string = [Character]()
	while encoder != 0 {
		string.append(encoder & 1 == 0 ? "0" : "1")
		encoder = encoder >> 1
	}
	return String(string.dropLast().reversed())
}
```