# SSS: Swift Simple Solutions (4 different approaches) ★★★★

**Author:** mishe1e
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/1972706/](https://leetcode.com/problems/number-of-1-bits/solutions/1972706/)

---

**Binary Arithmetic Approach**

```
func hammingWeight(_ n: Int) -> Int {
	var n = n, result = 0
	while n != 0 {
		result += n % 2
		n /= 2
	}
	return result
}
```

**Binary Shift Approach**

```
func hammingWeight(_ n: Int) -> Int {
	var n = n, result = 0
	while n != 0 {
		result += n & 1
		n >>= 1
	}
	return result
}
```

**Magic way**

https://stackoverflow.com/questions/4678333/n-n-1-what-does-this-expression-do

```
func hammingWeight(_ n: Int) -> Int {
	var n = n, result = 0
	while n != 0 {
		result += 1
		n &= n - 1 // NOTE: look at https://stackoverflow.com/questions/4678333/
	}
	return result
}
```

**Cheater way**

```
func hammingWeight(_ n: Int) -> Int {
	n.nonzeroBitCount
}
```