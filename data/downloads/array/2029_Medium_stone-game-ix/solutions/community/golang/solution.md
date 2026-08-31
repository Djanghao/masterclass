# Golang O(n) solution with explanation

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/1618468/](https://leetcode.com/problems/stone-game-ix/solutions/1618468/)

---

```go
func stoneGameIX(stones []int) bool {
	res0, res1, res2 := 0, 0, 0
	for _, s := range stones {
		switch s % 3 {
		case 0:
			res0++
		case 1:
			res1++
		case 2:
			res2++
		}
	}
	// we suppose res1 <= res2
	if res2 < res1 {
		res1, res2 = res2, res1
	}
	// only res0 exists, Alice picks one and lose the game
	if res1 == 0 && res2 == 0 {
		return false
	}
	if res1 == 0 {
		if res2 <= 2 {
			// nothing left after pick all elements, Bob will win
			return false
		}
		// the player who acts first loses the game
		// res0 change the order if odd
		return res0%2 == 1
	}
	// res0 is even, Alice picks 1 and win
	if res0%2 == 0 {
		return true
	}
	// res0 is odd, Alice picks 2, Bob has to pick 1, if 1 used up first, Alice wins
    // 2->3->2->1->2->(no 1, but 2 exits now)
	return res2 > res1+2
}
```