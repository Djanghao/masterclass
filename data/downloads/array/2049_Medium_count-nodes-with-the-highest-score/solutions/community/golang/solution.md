# Golang postorder-traversal solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1538790/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1538790/)

---

```go
type cs struct {
	children []int
	summary  int
}

func countHighestScoreNodes(parents []int) int {
	magic := make([]*cs, len(parents))
	for i := range magic {
		magic[i] = &cs{
			children: make([]int, 0, 2),
			summary:  1,
		}
	}
	for i := 1; i < len(parents); i++ {
		magic[parents[i]].children = append(magic[parents[i]].children, i)
	}
	postOrderTraversal(magic, 0)
	highestScore := 1
	for _, v := range magic[0].children {
		highestScore *= magic[v].summary
	}
	highestCount := 1
	for i := 1; i < len(parents); i++ {
		currentScore := 1
		for _, v := range magic[i].children {
			currentScore *= magic[v].summary
		}
		currentScore *= magic[0].summary - magic[i].summary
		if currentScore > highestScore {
			highestScore = currentScore
			highestCount = 1
		} else if currentScore == highestScore {
			highestCount++
		}
	}
	return highestCount
}

func postOrderTraversal(magic []*cs, i int) {
	for _, v := range magic[i].children {
		postOrderTraversal(magic, v)
		magic[i].summary += magic[v].summary
	}
}
```