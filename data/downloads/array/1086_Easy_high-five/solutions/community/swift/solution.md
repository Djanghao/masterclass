# 🚀 Swift | Time: O(n log n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 0
**Link:** [https://leetcode.com/problems/high-five/solutions/5622401/](https://leetcode.com/problems/high-five/solutions/5622401/)

---

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func highFive(_ items: [[Int]]) -> [[Int]] {
        var studentsAndScores: [Int: [Int]] = [:]
        
        for i in 0 ..< items.count {
            let item = items[i]
            let studentId = item[0]
            let studentScore = item[1]
            
            if let scores = studentsAndScores[studentId] {
                studentsAndScores[studentId] = scores + [studentScore]
            } else {
                studentsAndScores[studentId] = [studentScore]
            }
        }
        
        let keys = studentsAndScores.keys.sorted()
        var res: [[Int]] = []
        
        for studentId in keys {
            guard var studentScores = studentsAndScores[studentId] else { continue }
            studentScores.sort(by: >)
            let top5: [Int] = .init(studentScores.prefix(5))
            let average = top5.reduce(0, +) / 5
            res.append([studentId, average])
        }
        
        return res
    }
}
```