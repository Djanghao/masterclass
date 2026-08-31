# [Swift] A word can be placed in reverse order !!!

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486610/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486610/)

---

The description is not clear, it doesn't mention that the word can be placed in reverse order
```
class Solution {
    func placeWordInCrossword(_ board: [[Character]], _ word: String) -> Bool {
        let m = board.count
        let n = board[0].count
        let arr = Array(word)
        let reverse = Array(arr.reversed())
        
        func check(_ arr: [Character], _ r: Int, _ c: Int, _ count: Int, _ isHorizontal: Bool) -> Bool {
            if count != arr.count { return false }
            if isHorizontal {
                for i in 0..<count {
                    if board[r][c-count+i] != " ", arr[i] != board[r][c-count+i] { return false }
                }
            } else {
                for i in 0..<count {
                    if board[r-count+i][c] != " ", arr[i] != board[r-count+i][c] { return false }
                }
            }
            return true
        }
        
        for r in 0..<m {
            var count = 0
            for c in 0..<n {
                if board[r][c] == "#" {
                    if check(arr, r, c, count, true) || check(reverse, r, c, count, true) { return true }
                    count = 0
                } else { 
                    count += 1
                }
            }
            if check(arr, r, n, count, true) || check(reverse, r, n, count, true) { return true }
        }
                
        for c in 0..<n {
            var count = 0
            for r in 0..<m {
                if board[r][c] == "#" {
                    if check(arr, r, c, count, false) || check(reverse, r, c, count, false) { return true }
                    count = 0
                } else { 
                    count += 1
                }
            }
            if check(arr, m, c, count, false) || check(reverse, m, c, count, false) { return true }
        }
        return false
    }
}
```