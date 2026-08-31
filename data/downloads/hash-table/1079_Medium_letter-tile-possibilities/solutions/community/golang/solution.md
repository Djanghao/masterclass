# BFS then print out all possible permuatations with set

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/2428849/](https://leetcode.com/problems/letter-tile-possibilities/solutions/2428849/)

---

```

func numTilePossibilities(tiles string) int {
	wordSet := make(map[string]struct{})

	var queue []string

	for i := 0; i < len(tiles); i++ {
		char := fmt.Sprintf("%c", tiles[i])
		length := len(queue)
		wordSet[char] = struct{}{}
		queue = append(queue, char)

		for j := 0; j < length; j++ {
			for k := 0; k <= len(queue[j]); k++ {
				item := queue[j]
				item = item[:k] + char + item[k:]
				wordSet[item] = struct{}{}
				queue = append(queue, item)
			}
		}
	}

    return len(wordSet)
}
```