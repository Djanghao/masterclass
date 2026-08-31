# Simple C# solution

**Author:** Khaliljel04
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2786566/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2786566/)

---

# Approach
If you find 'O' jump to next letter.
If you find 'X' ignore the next two letters and to the third next and count that as a move.

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
public class Solution {
    public int MinimumMoves(string s) {
        int moves = 0;
        for (int i = 0; i < s.Length; i++) {
            if (s[i] != 'O') { 
                moves++;
                i += 2;
            }
        }
        return moves;
    }
}
```