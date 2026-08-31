# Ruby: concise

**Author:** giner
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/6143508/](https://leetcode.com/problems/available-captures-for-rook/solutions/6143508/)

---

```ruby
def num_rook_captures(board)
    row = board.index{_1.include? "R"}
    col = board[row].index("R")

    borders = [-1, -1, board.size, board[0].size]

    borders.each_with_index.count{ |b, i|
        coords = [row, col]
        ci = i % 2
        d = i < 2 ? -1 : 1

        while (coords[ci] += d) != b
            f = board[coords[0]][coords[1]]
            break true if f == "p"
            break if f != "."
        end
    }
end
```