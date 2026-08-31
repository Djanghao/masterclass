# Step by Step Ruby BFS

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/599444/](https://leetcode.com/problems/sliding-puzzle/solutions/599444/)

---

```
# @param {Integer[][]} board
# @return {Integer}
def sliding_puzzle(board)
    @move_count = nil
    @cache = {}
    @queue = []
    
    return 0 if check_winner(board, 0)
    
    zero_location = intial_zero_location(board)
    slide_puzzle_in_all_directions(board, zero_location[0], zero_location[1], 0)
    
    while @queue.any? && !@move_count
        popped_data = @queue.shift
        slide_puzzle(*popped_data)
    end
    
    @move_count || -1
end

def intial_zero_location(board)
    for x in (0..2)
       for y in (0..3)
          return [x,y] if board[x][y] == 0 
       end
    end
end

def slide_puzzle_in_all_directions(board, x, y, count)
    new_count = count + 1

    @queue.push([board, x, y, x+1, y, new_count]) if x == 0
    @queue.push([board, x, y, x-1, y, new_count]) if x == 1
    @queue.push([board, x, y, x, y-1, new_count]) if y > 0
    @queue.push([board, x, y, x, y+1, new_count]) if y < 2
end

def slide_puzzle(board, zero_x, zero_y, swap_x, swap_y, count)
    new_board = board.map(&:dup)
    swap_position(new_board, zero_x, zero_y, swap_x, swap_y)
    
    return if check_winner(new_board, count)
    
    cache_key = new_board.flatten.join(',')
    return if @cache[cache_key]
    
    @cache[cache_key] = count
    slide_puzzle_in_all_directions(new_board, swap_x, swap_y, count)
end

def swap_position(board, x1, y1, x2, y2)
    board[x1][y1], board[x2][y2] = board[x2][y2], board[x1][y1]
end

def check_winner(board, count)
    return false if board != [[1,2,3],[4,5,0]]
    
    @move_count = count
    true
end
```