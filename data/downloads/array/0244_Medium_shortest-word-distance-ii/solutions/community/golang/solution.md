# [Go] Simple Solution Using Map

**Author:** Samuel3Shin
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/2085335/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/2085335/)

---


	import "fmt"

	type WordDistance struct {
		wordIdxMap map[string][]int
	}

	func Constructor(wordsDict []string) WordDistance {
		p := new(WordDistance)
		p.wordIdxMap = map[string][]int{}

		for idx, word := range wordsDict {
			p.wordIdxMap[word] = append(p.wordIdxMap[word], idx)
		}

		return *p;
	}

	func (this *WordDistance) Shortest(word1 string, word2 string) int {
		idxArr1 := this.wordIdxMap[word1]
		idxArr2 := this.wordIdxMap[word2]

		ans := 30000

		idx1 := 0
		idx2 := 0

		for k:= 0; (idx1 < len(idxArr1) && idx2 < len(idxArr2)); k++{

			if ans > absDiff(idxArr1[idx1], idxArr2[idx2]) {
				ans = absDiff(idxArr1[idx1], idxArr2[idx2])
			}

			if idxArr1[idx1] < idxArr2[idx2] {
				idx1++
			} else {
				idx2++
			}
		}

		return ans

	}

	func absDiff(a, b int) int {
		if a > b {
			return a - b
		} else {
			return b - a
		}
	}

	/**
	 * Your WordDistance object will be instantiated and called as such:
	 * obj := Constructor(wordsDict);
	 * param_1 := obj.Shortest(word1,word2);
	 */