# Swift one liner: faster than 100%, memory usage less than 100%

**Author:** boraseoksoon
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/458351/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/458351/)

---

```
func findNumbers(_ nums: [Int]) -> Int {
	nums.filter { String($0).count.isMultiple(of: 2) }.count
}
```