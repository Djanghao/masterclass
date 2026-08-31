# Swift solution

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/1212870/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/1212870/)

---

Swift solution
```
class Solution {
    func subsetXORSum(_ nums: [Int]) -> Int {
        let c = nums.count
        var result = 0
        func helper(_ xor: Int, _ start: Int) {
            guard start < c else { return }
            let nextXor = xor ^ nums[start]
            result += nextXor
            helper(xor, start + 1)
            helper(nextXor, start + 1)
        }
        helper(0, 0)
        return result
    }
}
```