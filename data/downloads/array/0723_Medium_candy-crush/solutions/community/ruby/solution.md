# Ruby Beat 100%

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy-crush/solutions/3956278/](https://leetcode.com/problems/candy-crush/solutions/3956278/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We divide the problem in 3 phases:
1. Find at least 3 horizontal or vertical adjacent elements with same value that is not zero.
2. Delete found elements.
3. Collapse the matrix.
Repeat until Step 1 does not find any elements left.

# Approach
<!-- Describe your approach to solving the problem. -->
We transpose at the beginning and in the end, because it becomes easier to develop the collapse function. The problem remains the same except that gravity follows from left to right instead of top to bottom.

1. find_adjacents, finds adjacent elements either horizontally or vertically. It iterates from top to down and left to right.
2. delete_elements, sets a cell to zero.
3. collapse, divides the column (which is now an array because we transposed the matrix) into two groups, one with zeroes and the second one with non-zero elements. Then concatenates them together and replaces the whole row of the transposed matrix.

# Complexity
- Time complexity: $$O(M^2 * N^2)$$, worst case where we have to collapse multiple times.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(M * N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} board
# @return {Integer[][]}
def candy_crush(board)
  board = board.transpose
  loop do
    marked_for_deletion = find_adjacents(board)
    break if marked_for_deletion.empty?

    delete_elements(board, marked_for_deletion)
    collapse(board)
  end
  board.transpose
end

def delete_elements(board, marked_for_deletion)
  marked_for_deletion.each do |i, j|
    board[i][j] = 0
  end
end

def collapse(board)
  for i in 0...board.size
    # new_row = { true: [0,0,0], false: [2,3,5] }
    new_row = board[i].group_by(&:zero?)
    board[i] = (new_row[true] || []) + (new_row[false] || [])
  end
end

def find_adjacents(board)
  found = Set[]
  visited_h = Set[]
  visited_v = Set[]
  for i in 0...board.size
    for j in 0...board[0].size
      adj = [[i, j]] + find_adjacent_by_value(board, i, j + 1, board[i][j], :h, visited_h) 
      if adj.size >= 3
        found += adj 
        visited_h += adj
      end

      adj = [[i, j]] + find_adjacent_by_value(board, i + 1, j, board[i][j], :v, visited_v)
      if adj.size >= 3
        found += adj 
        visited_v += adj
      end
    end
  end
  found
end

def find_adjacent_by_value(board, i, j, v, orientation, visited)
  return [] if i >= board.size || j >= board[0].size
  return [] if board[i][j] != v || board[i][j] == 0
  return [] if visited.include? [i, j]
  
  result = [[i, j]]
  result += find_adjacent_by_value(board, i, j + 1, v, orientation, visited) if orientation == :h
  result += find_adjacent_by_value(board, i + 1, j, v, orientation, visited) if orientation == :v
  result
end
```