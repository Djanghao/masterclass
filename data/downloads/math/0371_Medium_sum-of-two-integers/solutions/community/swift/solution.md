# Swift - Use Only One Line in Swift Solution

**Author:** niafan
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/698418/](https://leetcode.com/problems/sum-of-two-integers/solutions/698418/)

---

Use the `advanced(by:)` method in generic code to offset a value by a specified distance. If you're working directly with numeric values, use the addition operator (`+`) instead of this method.

```
func getSum(_ a: Int, _ b: Int) -> Int {
    return a.advanced(by: b)
}
```