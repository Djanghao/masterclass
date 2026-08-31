# Duplicates in an array

**Author:** meet02
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/775775/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/775775/)

---

Swift Solution: 
    
	func findDuplicates(_ nums: [Int]) -> [Int] {
        return Array(Dictionary(grouping: nums, by: { $0 }).filter { $1.count > 1 }.keys).sorted()
    }