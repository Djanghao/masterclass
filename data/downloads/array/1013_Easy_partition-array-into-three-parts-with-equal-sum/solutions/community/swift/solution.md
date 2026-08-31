# Swift solution O(N) time & O(1) space

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/505133/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/505133/)

---

Swift solution O(N) time & O(1) space
```
class Solution {
    func canThreePartsEqualSum(_ A: [Int]) -> Bool {
        let sum = A.reduce(0, +), count = A.count
        if count < 3 || sum % 3 != 0 { return false } // impossible
        var leftIndex = 0, rightIndex = count - 1, leftSum = A[leftIndex], rightSum = A[rightIndex]
        while leftIndex + 1 < rightIndex && leftSum != sum / 3 { // search for equal part from beginning
            leftIndex += 1
            leftSum += A[leftIndex]
        }
        while leftIndex + 1 < rightIndex && rightSum != sum / 3 { // search for equal part from end
            rightIndex -= 1
            rightSum += A[rightIndex]
        }
        return leftIndex + 1 < rightIndex // there is 3 equal parts
    }
}
```