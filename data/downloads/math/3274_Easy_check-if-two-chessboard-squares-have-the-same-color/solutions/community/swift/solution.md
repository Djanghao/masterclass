# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5901328/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5901328/)

---

**One Liner, terse (accepted answer)**
ASCII values of characters "a"... and "1"... have same LSB, so just `& 1` to get color.
```
class Solution {
    func checkTwoChessboards(_ a: String, _ b: String) -> Bool {
        (a+b).utf8.reduce(0, ^) & 1 == 0
    }
}
```