# Beat 100% Trie

**Author:** SurajKadam
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-common-suffix-queries/solutions/4922054/](https://leetcode.com/problems/longest-common-suffix-queries/solutions/4922054/)

---

# Code
```
func stringIndices(wordsContainer []string, wordsQuery []string) []int {
	t := New(-1)
	result, smallest := make([]int, len(wordsQuery)), 0
	for i, str := range wordsContainer {
		t.Insert(str, i, wordsContainer)
		if len(wordsContainer[smallest]) > len(str) {
			smallest = i
		}
	}

	for i, str := range wordsQuery {
		result[i] = t.Find(str)
		if result[i] == -1 {
			result[i] = smallest
		}
	}
	return result
}

func getInd(ch byte)int{
    return int(ch) - int('a')
}

type Trie struct {
	ch    []*Trie
	idx   int // stores min string index till current ch
}

func New(idx int) *Trie {
	return &Trie{
		ch:  make([]*Trie, 26),
		idx: idx,
	}
}

func (t *Trie) Insert(str string, idx int, ws []string) {
	temp := t
	for i := len(str) - 1; i >= 0; i-- {
		cI := getInd(str[i])
		if temp.ch[cI] == nil {
			temp.ch[cI] = New(idx)
		}
		curr := temp.ch[cI].idx
		if len(ws[curr]) > len(str) {
			temp.ch[cI].idx = idx
		}
		temp = temp.ch[cI]
	}
}

func (t *Trie) Find(str string) int {
	temp := t
	for i := len(str) - 1; i >= 0; i-- {
		cI := getInd(str[i])
		if temp.ch[cI] == nil {
			break
		}	
		temp = temp.ch[cI]
	}
	return temp.idx
}
```