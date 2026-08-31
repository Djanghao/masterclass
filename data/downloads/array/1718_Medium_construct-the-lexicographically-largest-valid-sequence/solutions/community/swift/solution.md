# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1089785/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1089785/)

---

Swift solution
```
class Solution {
    func constructDistancedSequence(_ n: Int) -> [Int] {
        let rc = (n - 1) * 2 + 1
        var free = [Bool](repeating: true, count: n), result = [Int](repeating: 0, count: rc)
        func helper(_ skip: Int) -> Bool {
            guard skip < n else { return true } // all nums are in result, it's finish!
            for i in 0..<rc where result[i] == 0 { // find first free cell in result
                for num in stride(from: n, through: 1, by: -1) where free[num - 1] { // try all unused nums
                    let i2 = i + num
                    if num > 1 && (i2 >= rc || result[i2] != 0) { continue } // num > 1 & second cell in result is unavailable
                    free[num - 1] = false // mark num as used
                    result[i] = num // put num into result
                    if num > 1 { result[i2] = num } // put twice if num > 1
                    if helper(skip + 1) { return true } // try to put one more num into result. finish if it's possible
                    free[num - 1] = true // mark num as unused
                    result[i] = 0 // pop num from result
                    if num > 1 { result[i2] = 0 } // pop twice if num > 1
                }
                break
            }
            return false
        }
        helper(0)
        return result
    }
}
```