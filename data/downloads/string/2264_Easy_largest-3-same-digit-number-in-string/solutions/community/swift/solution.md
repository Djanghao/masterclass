# Swift - Easy Solution

**Author:** h_crane
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/2036449/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/2036449/)

---


```
func largestGoodInteger(_ num: String) -> String {
	var last = Character(" ")
	var maximum = -1
	var counter = 0

	for char in num {
		counter = (last == char) ? counter + 1 : 1
		last = char

		if counter == 3 {
			maximum = max(maximum, Int(String(char))!)
		}
	}

	return maximum < 0 ? "" : "\\(maximum)\\(maximum)\\(maximum)"
}
```