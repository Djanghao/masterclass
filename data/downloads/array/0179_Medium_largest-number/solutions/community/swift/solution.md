# Largest Number | Swift

**Author:** meet02
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-number/solutions/864931/](https://leetcode.com/problems/largest-number/solutions/864931/)

---

Swift Solution:

    func largestNumber(_ nums: [Int]) -> String {
        let strings = nums.map { String($0) }.sorted { $0 + $1 > $1 + $0 }
        return Int(strings.joined()) == 0 ? "0" : strings.joined()
    }