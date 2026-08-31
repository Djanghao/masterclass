# ✅ Optimal | FP laconic

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5730008/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5730008/)

---

![Screenshot.png](./images/0.png)

# Solution
```swift []
struct Solution {
    @_optimize(speed)
    func getLucky(_ s: consuming String, _ k: Int) -> Int {
        let digitsSumTransform = s.utf8CString.dropLast()
            .lazy
            .compactMap { $0.digitsSum(mutator: $0 - 96) }
            .compactMap(Int.init)
            .reduce(0, +)
        return (1..<k).reduce(digitsSumTransform) { result, _ in
            result.digitsSum(mutator: result)
        }
    }
}

private extension FixedWidthInteger {
    /// Note: mutator is applicable for initial digit convertion
    func digitsSum(mutator: @autoclosure () -> Self) -> Self {
        var sum: Self = 0
        var num = mutator()
        while num > 0 {
            sum += num % 10
            num /= 10
        }
        return sum
    }
}
```