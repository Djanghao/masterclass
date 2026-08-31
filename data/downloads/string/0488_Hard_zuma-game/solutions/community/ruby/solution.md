# Ruby solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/zuma-game/solutions/5654880/](https://leetcode.com/problems/zuma-game/solutions/5654880/)

---

# Code
```
# @param {String} board
# @param {String} hand
# @return {Integer}
def find_min_step(board, hand)
  dfs(board, hand.chars.sort.join, {})
end

def remove(board, index)
  return board if index < 0

  start = index
  end_index = index

  start -= 1 while start > 0 && board[start] == board[start - 1]
  end_index += 1 while end_index < board.length - 1 && board[end_index] == board[end_index + 1]

  if end_index - start + 1 >= 3
    remove(board[0...start] + board[end_index + 1..-1], start - 1)
  else
    board
  end
end

def dfs(board, hand, visited)
  return 0 if board.empty?
  return -1 if hand.empty?

  key = "#{board}##{hand}"

  return visited[key] if visited.key?(key)

  min_val = Float::INFINITY

  board.length.times do |i|
    hand.length.times do |j|
      next if j > 0 && hand[j] == hand[j - 1]

      if hand[j] == board[i] || (i > 0 && board[i] == board[i - 1] && hand[j] != board[i])
        new_board = remove(board[0...i] + hand[j] + board[i..-1], i)

        return 1 if new_board.empty?

        current = dfs(new_board, hand[0...j] + hand[j + 1..-1], visited)

        min_val = [min_val, 1 + current].min if current != -1
      end
    end
  end

  visited[key] = min_val

  min_val != Float::INFINITY ? min_val : -1
end
```