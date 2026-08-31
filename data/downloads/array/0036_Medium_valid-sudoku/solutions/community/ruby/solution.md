# Reusable Solution Ruby

**Author:** emmamm05
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/1788373/](https://leetcode.com/problems/valid-sudoku/solutions/1788373/)

---

```
# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
  board.flatten!
  valid_rows?(board) && valid_cols?(board) && valid_blocks?(board)
end

def valid_rows?(board)
  valid_group?(board) { |i| i / 9 }
end

def valid_cols?(board)
  valid_group?(board) { |i| i % 9 }
end

def valid_blocks?(board)
  valid_group?(board) { |i| [(i / 9) / 3, (i % 9) / 3] }
end

def valid_group?(board)
  board
    .map
    .with_index
    .group_by{ |n, i| yield(i)  }
    .to_a
    .map{ |_group, v| 
      v.map(&:first)
      .reject{ |n| n == "." }
      .group_by(&:itself)
      .to_a
      .map(&:last)
      .map(&:count) 
    }
    .all?{ |group| 
      group.all?{ |count| count == 1 } 
    }
end
```