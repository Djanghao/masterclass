# Swift beats 100% runtime

**Author:** TigranNeDoDeveloper
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/3253741/](https://leetcode.com/problems/valid-word-square/solutions/3253741/)

---

# Complexity
- Time complexity:
The time complexity of this code is O(n^2), where n is the length of the longest word in the input array. This is because the code constructs a matrix of characters from the input array, and then iterates over each element of the matrix, which takes O(n^2) time.

- Space complexity:
The space complexity of this code is also O(n^2), because it creates a matrix of characters from the input array, which requires O(n^2) space.

# Code
```
class Solution {
    func validWordSquare(_ words: [String]) -> Bool {
        let matrix = words.map({ Array($0) })
        guard !matrix.isEmpty, matrix.count == matrix[0].count else { return false }
        
        for y in matrix.indices {
            for x in matrix[y].indices {
                guard x < matrix.count, matrix[x].count > y else { return false }
                
                if matrix[y][x] != matrix[x][y] {
                    return false
                }
            }
        }
        
        return true
    }
}
```