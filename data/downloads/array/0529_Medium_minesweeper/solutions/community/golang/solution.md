# Go Lang BFS

**Author:** ilya-pimenov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minesweeper/solutions/3434128/](https://leetcode.com/problems/minesweeper/solutions/3434128/)

---

# Intuition && Approach

BFS reveal with boundary check

# Complexity
- Time complexity:
$$O(n*m)$$

- Space complexity:
$$O(n*m)$$

# Code
```
func updateBoard(board [][]byte, click []int) [][]byte {
    type El struct {
        r, c int
    }

    inBounds := func(el El) bool {
        return el.r >= 0 && 
          el.c >= 0 && 
          el.r < len(board) && 
          el.c < len(board[0])
    }

    adjacent := func(el El) []El {
      return []El{
          {el.r, el.c-1}, 
          {el.r-1, el.c-1}, 
          {el.r-1, el.c}, 
          {el.r-1, el.c+1},
          {el.r, el.c+1}, 
          {el.r+1, el.c+1}, 
          {el.r+1, el.c}, 
          {el.r+1, el.c-1}}
    }

    mines := func(el El) int {
      var count int
      for _, adj := range adjacent(el) {
        if !inBounds(adj.r, adj.c) {
          continue
        }
        if board[adj.r][adj.c] == 'M' {
          count ++
        }
      }
      return count
    }

    visited := map[El]bool{}

    q := []El{{ click[0], click[1] }}

    for len(q) > 0 {
        el := q[0]
        q = q[1:]

        visited[el] = true
        if board[el.r][el.c] == 'M' {
            board[el.r][el.c] = 'X'
            break
        }
        if mines(el) > 0 {
            board[el.r][el.c] = '0' + byte(mines(el))
            continue
        }
        board[el.r][el.c] = 'B'

        for _, adj := range adjacent(el) {
                if !inBounds(adj.r, adj.c) {
                    continue
                }
                if visited[adj] {
                    continue
                }
                visited[adj] = true
                
                q = append(q, adj)
            }
    }
    return board    
}
```