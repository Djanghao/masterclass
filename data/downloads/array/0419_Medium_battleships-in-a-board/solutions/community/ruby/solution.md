# Ruby Solution

**Author:** jessicaxiejw
**Votes:** 2
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/1270812/](https://leetcode.com/problems/battleships-in-a-board/solutions/1270812/)

---

```
def count_battleships(board)
    count = 0
    (0...board.length).each do |i|
        (0...board.first.length).each do |j|
			next if board[i][j] == '.'
			next if i - 1 >= 0 && board[i-1][j] == 'X'
			next if j - 1 >= 0 && board[i][j-1] == 'X'
	
            count += 1
        end
    end
    count
end
```