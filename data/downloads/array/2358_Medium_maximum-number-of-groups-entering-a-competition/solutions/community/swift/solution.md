# Binary Search by answer

**Author:** kripenometr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/3614442/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/3614442/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(nlog(n))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)
# Code
```
class Solution {
    func maximumGroups(_ grades: [Int]) -> Int {
        var sortedGrades = grades.sorted()

        var left = 1
        var right = grades.count

        while left < right {
            let middle = (left + right) / 2 + 1

            if check(middle, sortedGrades.count) {
                left = middle
            } else {
                right = middle - 1
            }
        }

        return left
    }

    func check(_ res: Int, _ allCount: Int) -> Bool {
        var countGroup = 0
        var countPeople = 0
        var prevCountPeople = 1
        
        while countGroup < res {
            countPeople += prevCountPeople
            prevCountPeople += 1
            countGroup += 1
            if countPeople > allCount {
                return false
            }
        }

        return true
    }
}
```