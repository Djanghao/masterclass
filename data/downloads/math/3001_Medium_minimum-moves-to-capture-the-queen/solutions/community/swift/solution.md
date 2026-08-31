# Swift - Chess - rook or the bishop

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/5257092/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/5257092/)

---

# Intuition
To solve this problem, we need to determine if either the rook or the bishop can capture the queen in one move. If neither can do so in one move, we return 2, indicating that it will take two moves to position one of the pieces to capture the queen.

# Approach
1. Rook Movement:

- Check if the rook and queen are in the same row or column.
- If they are in the same row, verify there are no pieces between them.
- If they are in the same column, verify there are no pieces between them.
2. Bishop Movement:

- Check if the bishop and queen are on the same diagonal.
- Move diagonally from the bishop's position to the queen's position, ensuring there are no pieces in between.
3. Two Moves:

- If neither the rook nor the bishop can capture the queen in one move, return 2.

# Complexity
- Time complexity: O(1), since the problem involves a fixed number of checks based on the positions of the pieces.

- Space complexity: O(1), as we are only using a constant amount of additional space.

# Code
```
class Solution {
    func minMovesToCaptureTheQueen(_ a: Int, _ b: Int, _ c: Int, _ d: Int, _ e: Int, _ f: Int) -> Int {
        // Check if the queen is on the same row or column as the rook
        if a == e {
            // Same row
            if (min(b, f) + 1..<max(b, f)).allSatisfy({ $0 != d || a != c }) {
                return 1
            }
        } else if b == f {
            // Same column
            if (min(a, e) + 1..<max(a, e)).allSatisfy({ $0 != c || b != d }) {
                return 1
            }
        }
        
        // Check if the queen is on the same diagonal as the bishop
        if abs(c - e) == abs(d - f) {
            let dx = (e - c) / abs(e - c)
            let dy = (f - d) / abs(f - d)
            var x = c + dx
            var y = d + dy
            var blocked = false
            while x != e && y != f {
                if x == a && y == b {
                    blocked = true
                    break
                }
                x += dx
                y += dy
            }
            if !blocked {
                return 1
            }
        }

        // If neither can capture in one move, consider 2 moves
        return 2
    }
}
```

# ;) 
If you found this helpful, please give it a like!