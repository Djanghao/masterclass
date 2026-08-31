# [Accepted] One-line solution

**Author:** ArtyZenk
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3564288/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/3564288/)

---


# Code
```
class Solution {
    func sortTheStudents(_ score: [[Int]], _ k: Int) -> [[Int]] {
        score.sorted { $0[k] > $1[k] }
    }
}
```