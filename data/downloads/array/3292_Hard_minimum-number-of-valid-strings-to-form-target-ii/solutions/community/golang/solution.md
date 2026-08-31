# Golang Aho Corasick DP

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5806153/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5806153/)

---

# Aho Corasick
```
package main

var dp [5e4 + 1]int

func minValidStrings(words []string, target string) int {
	n := len(target)
	root := buildTrie(words)
	computeSuffix(root)

	current := root
	for i := 1; i <= len(target); i++ {
		ch := target[i-1] - 'a'

		for current.child[ch] == nil && root != current {
			current = current.suffix
		}

		current = current.child[ch]
		if current == nil {
			return -1
		}

		// Longest suffix in target[:i] that is prefix in Trie
		suffixLength := current.length

		dp[i] = 1 + dp[i-suffixLength]
	}

	return dp[n]
}

type Trie struct {
	child  []*Trie
	suffix *Trie
	length int
}

func NewTrie() *Trie {
	return &Trie{child: make([]*Trie, 26)}
}

func buildTrie(words []string) *Trie {
	root := NewTrie()
	for _, word := range words {
		current := root
		l := 0
		for _, ch := range word {
			ch = ch - 'a'
			if current.child[ch] == nil {
				current.child[ch] = NewTrie()
			}
			l++
			current = current.child[ch]
			current.length = l
		}
	}
	return root
}

func computeSuffix(root *Trie) {
	root.suffix = root
	queue := []*Trie{root}

	for len(queue) > 0 {
		parent := queue[0]
		queue = queue[1:]

		for i := 0; i < 26; i++ {
			child := parent.child[i]
			if child == nil {
				continue
			}
			s := parent.suffix
			for s != root && s.child[i] == nil {
				s = s.suffix
			}
			if s.child[i] != nil && parent != root {
				child.suffix = s.child[i]
			} else {
				child.suffix = root
			}
			queue = append(queue, child)
		}
	}
}

```


---

# Max LPS

```
package main

var dp [5e4 + 1]int
var lps [1e5 + 2]int

func minValidStrings(words []string, target string) int {
	n := len(target)
	maxPrefix := make([]int, n)

	for _, word := range words {
		maxLps(maxPrefix, word, target)
	}

	for i := 1; i <= n; i++ {
		prev := i - maxPrefix[i-1]
		if prev == i {
			return -1
		}
		dp[i] = 1 + dp[prev]
	}

	return dp[n]
}

func maxLps(maxPrefix []int, word string, target string) {
	l1 := len(word)
	str := word + "$" + target

	for i := 1; i < len(str); i++ {
		lps[i] = lps[i-1]
		for lps[i] != 0 && str[i] != str[lps[i]] {
			lps[i] = lps[lps[i]-1]
		}
		if str[i] == str[lps[i]] {
			lps[i]++
		}
	}

	for i := 0; i < len(target); i++ {
		maxPrefix[i] = max(maxPrefix[i], lps[i+l1+1])
	}
}




```