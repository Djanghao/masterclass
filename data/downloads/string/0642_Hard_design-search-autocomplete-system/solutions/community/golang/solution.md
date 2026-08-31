# [go] run: 244 ms; mem: 9.9 MB; using data trie+priority queue+dfs

**Author:** horki665
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/1319691/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/1319691/)

---

```
import "container/heap"

type trie struct {
	dict   map[rune]*trie
	isWord bool
	hot    int
}

type pair struct {
	word string
	hot  int
}

type pq []pair

func initPq() *pq {
	p := new(pq)
	heap.Init(p)
	return p
}

func (h pq) Len() int { return len(h) }

func (h pq) Less(x, y int) bool {
	if h[x].hot < h[y].hot {
		return true
	} else if h[x].hot > h[y].hot {
		return false
	}
	return h[x].word < h[y].word
}

func (h pq) Swap(x, y int) { h[x], h[y] = h[y], h[x] }

func (h *pq) Push(x interface{}) {
	*h = append(*h, x.(pair))
}

func (h *pq) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func constructTrie() *trie {
	return &trie{
		make(map[rune]*trie),
		false,
		0,
	}
}

func (t *trie) insert(word string, hot int) {
	for _, w := range word {
		if child, ok := t.dict[w]; ok {
			t = child
		} else {
			c := constructTrie()
			t.dict[w] = c
			t = c
		}
	}
	t.isWord = true
	t.hot -= hot
}

type AutocompleteSystem struct {
	root, current *trie
	search        string
	match         bool
}

func Constructor(sentences []string, times []int) AutocompleteSystem {
	root := constructTrie()
	for i, word := range sentences {
		root.insert(word, times[i])
	}
	return AutocompleteSystem{
		root,
		root,
		"",
		true,
	}
}

func dfs(current *trie, word string, result *pq) {
	if current.isWord == true {
		heap.Push(result, pair{word, current.hot})
	}
	for elem, _ := range current.dict {
		dfs(current.dict[elem], word+string(elem), result)
	}
}

func (this *AutocompleteSystem) Input(c byte) []string {
	var result []string
	if c == '#' {
		this.root.insert(this.search, 1)
		this.search = ""
		this.current = this.root
		this.match = true
		return result
	}
	this.search += string(c)
	if this.current.dict[rune(c)] == nil || this.match == false {
		this.match = false
		return result
	}
	this.current = this.current.dict[rune(c)]
	priority := initPq()
	var dfs func(*trie, string)
	dfs = func(current *trie, word string) {
		if current.isWord == true {
			heap.Push(priority, pair{word, current.hot})
		}
		for elem, _ := range current.dict {
			dfs(current.dict[elem], word+string(elem))
		}
	}

	dfs(this.current, this.search)

	for i := 0; priority.Len() > 0 && i < 3; i++ {
		item := heap.Pop(priority).(pair)
		result = append(result, item.word)
	}
	return result
}
```