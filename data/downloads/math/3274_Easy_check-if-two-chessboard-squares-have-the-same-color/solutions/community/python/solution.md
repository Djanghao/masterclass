# TS : O(1) | 3 Liner math solution

**Author:** ashwanidey2904
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5732832/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5732832/)

---

# Intuition Behind the Code
The problem involves checking if two coordinates on a chessboard lie on the same color. In a typical chessboard:

The board has alternating black and white squares.
Coordinates are given in the form "a1", "h8", etc., where the first character represents the column (a-h) and the second character represents the row (1-8).

Each square's position can be translated into a unique numeric value:
The column (a-h) can be mapped to integers 0-7.
The row (1-8) can be directly used as integers.
**The color of a square can be determined by summing its column and row indices:**
**If the sum is even, the square is black.
If the sum is odd, the square is white.**
# **Code Explanation:**
**Mapping Characters to Numbers:**

(coordinate1[0] - 'a'): Converts the column character to a zero-based index (a = 0, b = 1, ..., h = 7).
(coordinate1[1] - '0'): Converts the row character (which is a digit) to its integer form.
Sum Calculation:

For each coordinate, the sum of the column index and row index is calculated.
The modulo operation (% 2) is applied to determine whether the sum is even or odd.
Comparison:

The function checks whether both sums have the same parity (both even or both odd).
If they do, the two coordinates are on the same color; otherwise, they are on different colors.


# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    bool checkTwoChessboards(string coordinate1, string coordinate2) {
        int one = (coordinate1[0] - 'a') + (coordinate1[1] - '0');
        int two = (coordinate2[0] - 'a') + (coordinate2[1]-'0');
        return one % 2 == two % 2;
    }
};
```
``` python []
class Solution:
    def checkTwoChessboards(self, coordinate1: str, coordinate2: str) -> bool:
        one = (ord(coordinate1[0]) - ord('a')) + (int(coordinate1[1]) - 0)
        two = (ord(coordinate2[0]) - ord('a')) + (int(coordinate2[1]) - 0)
        return one % 2 == two % 2



```
```java []
public class Solution {
    public boolean checkTwoChessboards(String coordinate1, String coordinate2) {
        int one = (coordinate1.charAt(0) - 'a') + (coordinate1.charAt(1) - '0');
        int two = (coordinate2.charAt(0) - 'a') + (coordinate2.charAt(1) - '0');
        return one % 2 == two % 2;
    }
}
```
```javascript []
class Solution {
    checkTwoChessboards(coordinate1, coordinate2) {
        let one = (coordinate1.charCodeAt(0) - 'a'.charCodeAt(0)) + (parseInt(coordinate1[1]) - 0);
        let two = (coordinate2.charCodeAt(0) - 'a'.charCodeAt(0)) + (parseInt(coordinate2[1]) - 0);
        return one % 2 === two % 2;
    }
}
```