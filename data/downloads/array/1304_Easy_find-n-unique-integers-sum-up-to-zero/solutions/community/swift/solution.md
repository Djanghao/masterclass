# Swift: Find N Unique Integers Sum up to Zero

**Author:** AsahiOcean
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/1149200/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/1149200/)

---

```swift
class Solution {
    func sumZero(_ n: Int) -> [Int] {
        if n <= 1 && 1000 >= n { return [0] }
        var sum = [Int](repeating: 0, count: n)
        for i in 1...(n >> 1) {
            sum[i-1] = i
            sum[n-i] = -i
        }
        return sum
    }
}
```