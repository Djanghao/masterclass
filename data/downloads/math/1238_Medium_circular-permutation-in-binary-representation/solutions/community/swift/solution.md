# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5074556/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5074556/)

---

This code generates the Gray code sequence for n bits, which is a sequence of numbers where each number differs from the previous one by exactly one bit. It then finds the position of start in the sequence and returns the sequence starting from start. The time complexity of this solution is O(2^n), where n is the input to the function. The space complexity is also O(2^n), due to the storage of the Gray code sequence. 
```
class Solution {
    func circularPermutation(_ n: Int, _ start: Int) -> [Int] {
        let grayCode = (0..<1<<n).map { $0 ^ ($0 >> 1) }
        guard let idx = grayCode.firstIndex(of: start) else { return [] }
        return Array(grayCode[idx...] + grayCode[..<idx])
    }
}

```