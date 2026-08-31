# [Go] DFS with frequency count, explained

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/zuma-game/solutions/1787418/](https://leetcode.com/problems/zuma-game/solutions/1787418/)

---

There is no greedy solution for this problem.

We must try to insert each ball at each valid position, where a valid position
on the board is:

1. Not within a sequence of balls with the same color as the one at hand 
2. The same color as the one at hand, or 
3. (NEW!) In-between two balls of the same color (not the color at hand)

The reason why (3) exists is because there are cases where splitting a group is
the optimal move.  See [this post](https://leetcode.com/problems/zuma-game/discuss/97007/SOLVED-Standard-test-program-is-wrong). This is what invalidated most solutions here.

Note that for any given position, we must only try each unique ball-color
combination. I tried first to use a bit-mask, but it was hard to avoid
double-using the same color, so a frequency count was used instead.

```go
func findMinStep(board string, hand string) int {
	var freq [26]int8
	for i := range hand {
		freq[hand[i]-'A']++
	}
	mem := make(map[key]int, len(board))
	res := dfs(mem, board, freq)
	if res == math.MaxInt32 {
		return -1
	}
	return res
}

type key struct {
	s    string
	freq [26]int8
}

func dfs(mem map[key]int, board string, freq [26]int8) int {
	board = dedup(board)
	if board == "" {
		return 0
	}
	k := key{board, freq}
	if v, exists := mem[k]; exists {
		return v
	}
	res := math.MaxInt32

	// For each available ball in the hand
	for i, count := range freq {
		if count == 0 {
			continue
		}
		ch := byte(i + 'A')
		// If the ball is available, try adding it to every position
		n := len(board)
		for j := 0; j < n; j++ {
			// Only insert at start of sequence of same color
			if j > 0 && board[j-1] == ch {
				continue
			}
			sameColor := board[j] == ch
			betweenColors := j > 0 && board[j] == board[j-1]
			if sameColor || betweenColors {
				freq[i]--
				newBoard := board[:j] + string(byte(i+'A')) + board[j:]
				res = min(res, 1+dfs(mem, newBoard, freq))
				freq[i]++
			}
		}
	}

	mem[k] = res
	return mem[k]
}

func dedup(board string) string {
	bb := []byte(board)
	bb = append(bb, byte(0)) // sentinel
	var i int
	for j := 0; j < len(bb); j++ {
		if bb[i] == bb[j] {
			continue
		}
		if j-i >= 3 {
			copy(bb[i:], bb[j:])
			bb = bb[:len(bb)-(j-i)]
			j = -1
			i = 0
		} else {
			i = j
		}
	}
	return string(bb[:len(bb)-1])
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```