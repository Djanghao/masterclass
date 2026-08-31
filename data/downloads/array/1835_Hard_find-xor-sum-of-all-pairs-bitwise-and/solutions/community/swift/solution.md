# Swift short

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/3646089/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/3646089/)

---

```
class Solution {
    func getXORSum(_ arr1: [Int], _ arr2: [Int]) -> Int {
        arr1.reduce(0, ^) & arr2.reduce(0, ^)
    }
}
```