# ✅ [Swift] Easy, one line, 100% speed

**Author:** lmvtsv
**Votes:** 3
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/2843201/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/2843201/)

---

```
class Solution {
    func xorOperation(_ n: Int, _ start: Int) -> Int {
        return (0..<n).map({ start + $0 * 2 }).reduce(0, ^)
    }
}
```