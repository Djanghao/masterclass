# Manacher's algorithm

**Author:** Nikita_Vashchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/6082370/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/6082370/)

---

```swift []
class Solution {
    func maxProduct(_ s: String) -> Int {
        let t1 = helper(s)
        let t2 = helper(String(s.reversed())).reversed()

        var maxProduct = 0
        for i in 0..<s.count - 1 {
            maxProduct = max(maxProduct, t1[i] * t2[t2.index(t2.startIndex, offsetBy: i + 1)])
        }

        return maxProduct
    }

    func manacherOdd(_ s: String) -> [Int] {
        let n = s.count
        let chars = Array(s)
        var radii = [Int](repeating: 0, count: n)
        var center = 0
        var right = 0

        for i in 0..<n {
            if i < right {
                let mirror = 2 * center - i
                radii[i] = min(right - i, radii[mirror])
            }

            while i - radii[i] - 1 >= 0 && i + radii[i] + 1 < n &&
                    chars[i - radii[i] - 1] == chars[i + radii[i] + 1] {
                radii[i] += 1
            }

            if i + radii[i] > right {
                center = i
                right = i + radii[i]
            }
        }

        return radii.map { $0 * 2 + 1 }
    }

    func helper(_ s: String) -> [Int] {
        let man = manacherOdd(s)
        let n = s.count
        var maxLengths = Array(repeating: 0, count: n)

        for (i, len) in man.enumerated() {
            let start = i - len / 2
            let end = i + len / 2
            maxLengths[end] = max(maxLengths[end], end - start + 1)
        }

        for i in stride(from: n - 2, through: 0, by: -1) {
            maxLengths[i] = max(maxLengths[i], maxLengths[i + 1] - 2)
        }

        return maxLengths.reduce(into: []) { acc, curr in
            acc.append(acc.last.map { max($0, curr) } ?? curr)
        }
    }
}
```