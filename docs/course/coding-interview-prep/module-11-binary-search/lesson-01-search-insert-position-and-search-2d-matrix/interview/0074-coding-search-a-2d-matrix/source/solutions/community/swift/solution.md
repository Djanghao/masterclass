# ✔️ 100% Fastest Swift Solution, time: O(log(nm)), space: O(1).

**Author:** sergeyleschev
**Votes:** 16
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/1918845/](https://leetcode.com/problems/search-a-2d-matrix/solutions/1918845/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(log(nm)), where n is the number of rows in the matrix, and m is the number of columns in the matrix.
    //   - space: O(1), only constant space is used.
    
    func searchMatrix(_ matrix: [[Int]], _ target: Int) -> Bool {
        guard !matrix.isEmpty else { return false }

        let m = matrix.count
        let n = matrix[0].count

        var left = 0
        var right = m * n - 1

        while left <= right {
            let mid = left + (right - left) / 2

            let el = matrix[mid / n][mid % n]
            guard el != target else { return true }

            if el < target {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.