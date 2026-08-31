# Swift beats 100% runtime and 100% memory

**Author:** june82629
**Votes:** 0
**Link:** [https://leetcode.com/problems/reward-top-k-students/solutions/5522291/](https://leetcode.com/problems/reward-top-k-students/solutions/5522291/)

---

# Intuition
Hash set

# Approach


# Code
```
class Solution {
    func topStudents(_ positive_feedback: [String], _ negative_feedback: [String], _ report: [String], _ student_id: [Int], _ k: Int) -> [Int] {
        var points: [Int: [Int]] = [:]
        let pSet: Set<String> = Set(positive_feedback)
        let nSet: Set<String> = Set(negative_feedback)
        for (i, r) in report.enumerated() {
            var point: Int = 0
            let rStrings: [String] = r.split(separator: " ")
                .map { String($0) }
            for rs in rStrings {
                if pSet.contains(rs) { point += 3 }
                if nSet.contains(rs) { point -= 1 }
            }
            let id: Int = student_id[i]
            if var ids: [Int] = points[point] {
                ids.append(id)
                points[point] = ids
            } else {
                points[point] = [id]
            }
        }

        var arr = Array(points.sorted(by: { $0.key > $1.key }))
            .map { $0.value.sorted() }
            .flatMap { $0 }
        
        return Array(arr.prefix(k))
    }
}
```