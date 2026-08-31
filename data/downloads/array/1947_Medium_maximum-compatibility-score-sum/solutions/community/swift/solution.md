# Swift - DFS

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/5053680/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/5053680/)

---

# Intuition
The problem is essentially asking us to find the maximum total compatibility score by pairing each student with a mentor. We can intuitively understand that we should pair each student with the mentor that they have the highest compatibility score with. However, since each mentor can only be paired with one student, we need to consider all possible pairings.

# Approach
We can solve this problem using a depth-first search (DFS) approach. We start by iterating over each student and for each student, we iterate over each mentor. For each student-mentor pair, we calculate the compatibility score. We then recursively call the DFS function for the next student, adding the current compatibility score to the total score. We keep track of the maximum score found so far. To avoid pairing a mentor with more than one student, we keep a visited array to mark which mentors have already been paired.


# Code
```
class Solution {
    func maxCompatibilitySum(_ students: [[Int]], _ mentors: [[Int]]) -> Int {
        let m = students.count
        let n = students[0].count
        var visited = Array(repeating: false, count: m)
        var maxScore = 0

        func dfs(_ index: Int, _ score: Int) {
            if index == m {
                maxScore = max(maxScore, score)
                return
            }
            for i in 0..<m {
                if visited[i] { continue }
                var tempScore = 0
                for j in 0..<n {
                    if students[index][j] == mentors[i][j] {
                        tempScore += 1
                    }
                }
                visited[i] = true
                dfs(index + 1, score + tempScore)
                visited[i] = false
            }
        }

        dfs(0, 0)
        return maxScore
    }
}

```