# Swift using Gauss's formula

**Author:** leetsaber
**Votes:** 4
**Link:** [https://leetcode.com/problems/missing-number/solutions/1855354/](https://leetcode.com/problems/missing-number/solutions/1855354/)

---

```
    func missingNumber(_ nums: [Int]) -> Int {
        let sumOfFirstNNumbers: Int = nums.count * (nums.count + 1) / 2
        // If you can't remember the forumla, you can use the following line
        // let sumOfFirstNNumbers: Int = (0...nums.count).reduce(0, +)
        let sum = nums.reduce(0, +)

        return sumOfFirstNNumbers - sum
    }
```