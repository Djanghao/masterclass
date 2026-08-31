# O(1) add and O(N) find solution

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/5988055/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/5988055/)

---

# Code
```swift []

class TwoSum {
    var nums = [Int]()
    var dict = [Int: Int]()

    init() {}
    
    func add(_ number: Int) {
        dict[number] = nums.count //starts with 0 (empty array) to denote 0th index
        nums.append(number)
    }
    
    func find(_ value: Int) -> Bool {
        guard nums.count > 1 else { return false }
        for (index, num) in nums.enumerated() {
            if let otherIndex = dict[value - num], index != otherIndex {
                return true
            }
        }

        return false
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * let obj = TwoSum()
 * obj.add(number)
 * let ret_2: Bool = obj.find(value)
 */
```