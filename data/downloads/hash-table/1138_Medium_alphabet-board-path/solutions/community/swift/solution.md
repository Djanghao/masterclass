# Swift using Dictionary - 4 ms

**Author:** lrettberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/346616/](https://leetcode.com/problems/alphabet-board-path/solutions/346616/)

---

```
class Solution {
    func alphabetBoardPath(_ target: String) -> String {
        let board: [Character: (row: Int, col: Int)] = ["a": (0, 0), "b": (0, 1), "c": (0, 2), "d": (0, 3), "e": (0, 4),
                                                    "f": (1, 0), "g": (1, 1), "h": (1, 2), "i": (1, 3), "j": (1, 4),
                                                    "k": (2, 0), "l": (2, 1), "m": (2, 2), "n": (2, 3), "o": (2, 4),
                                                    "p": (3, 0), "q": (3, 1), "r": (3, 2), "s": (3, 3), "t": (3, 4),
                                                    "u": (4, 0), "v": (4, 1), "w": (4, 2), "x": (4, 3), "y": (4, 4),
                                                    "z": (5, 0)
                                                    ]
    
        var prevChar: Character = "a"
        var moves: String = ""
    
        for eachChar in [Character](target) {

            while eachChar != prevChar {
                switch prevChar {
                    case "z":
                        moves += "U"
                        prevChar = "u"
                        continue

                    default:
                        let leftOrRight = board[eachChar]!.col - board[prevChar]!.col
                        let upOrDown = board[eachChar]!.row - board[prevChar]!.row

                        switch leftOrRight.signum() { // Move Left or Right
                            case -1:
                                moves += repeatElement("L", count: -leftOrRight)
                            case 1:
                                moves += repeatElement("R", count:  leftOrRight)
                            default:
                                moves.append("")
                        }

                        switch upOrDown.signum() { // Then Move Up or Down
                            case -1:
                                moves += repeatElement("U", count: -upOrDown)
                            case 1:
                                moves += repeatElement("D", count:  upOrDown)
                            default:
                                moves.append("")
                    }
                }
                prevChar = eachChar
            }
            moves += "!"
        }
        return moves    
    }
}
```