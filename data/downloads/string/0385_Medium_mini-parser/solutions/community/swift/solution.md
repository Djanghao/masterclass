# Swift: SIMPLE & SWEET, 100%

**Author:** voxqhuy
**Votes:** 2
**Link:** [https://leetcode.com/problems/mini-parser/solutions/804667/](https://leetcode.com/problems/mini-parser/solutions/804667/)

---

```
func deserialize(_ s: String) -> NestedInteger {
	if s.first != "[" {
		return NestedInteger(Int(s))
	}

	var stack = [NestedInteger]()
	var result = NestedInteger()
	stack.append(result)
	var curInt = ""

	for char in s.dropFirst() {
		if char == "[" {
			var ni = NestedInteger()
			stack.last!.add(ni)
			stack.append(ni)
		} else if char == "," || char == "]" {
			// add the curInt to the last one
			if !curInt.isEmpty {
				stack.last!.add(NestedInteger(Int(curInt)))
			}
			if char == "]" {
				stack.popLast()!
			}

			curInt = ""
		} else {
			curInt += String(char)
		}
	}

	return result
} 
```