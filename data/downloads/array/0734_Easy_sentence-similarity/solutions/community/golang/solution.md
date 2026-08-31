# [Go] Hash-Table; 80%, 3ms; O(n+m); Explained; Unit test

**Author:** vsir
**Votes:** 2
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/3237940/](https://leetcode.com/problems/sentence-similarity/solutions/3237940/)

---

# Intuition

When one reads the problem statement, the approach with a [(hash-)map](https://leetcode.com/tag/hash-table/) jumps at them right away, which is the right intuition. But what is not evident what associativity track in it.

The

-   `similarPairs[0]` -> `similarPairs[1]` is clear, but what should notice, that
-   the reverse `similarPairs[1]` -> `similarPairs[0]` is `true` as well, then
-   the case when any given `word` in any `sentence*` is equal to itself, although there&rsquo;s unlikely an associativity pair tracking it in the `similarPairs`, but what was not obvious (to me, till I hit a failed test), that
-   there are/might be **multiple** values associated to the **same key** in the `similarPairs` array.
    
    To be able to track all those associations we will not use associativity of `word` to `word`, but a **composite key**, where two words will be used as a key in our map and their **existence** will denote associativity.



# Approach

-   allocate a [hash map](https://leetcode.com/tag/hash-table/) with size of `len(similarPairs) + len(sentence1)`
-   store the following associations as **keys**
    -   the `sentence1` `word` to itself (`word`)
    -   `similarPairs[0]` to `similarPairs[1]`, and
    -   `similarPairs[1]` to `similarPairs[0]`
-   iterate over `sentence1` and check if there&rsquo;s a **composite key** in our map made of `sentence1[i]` and `sentence2[i]` words, if there&rsquo;s no such key return `false`
-   at the end return `true` (as all associations are present in our map)


# Code
```
// package sentencesimilarity

func areSentencesSimilar(sentence1, sentence2 []string, similarPairs [][]string) bool {
	if len(sentence1) != len(sentence2) {
		return false
	}

	m := make(map[[2]string]bool, len(similarPairs))

	for _, word := range sentence1 {
		m[[2]string{word, word}] = true
	}

	for _, pair := range similarPairs {
		m[[2]string{pair[0], pair[1]}] = true
		m[[2]string{pair[1], pair[0]}] = true
	}

	for i, w1 := range sentence1 {
		if !m[[2]string{w1, sentence2[i]}] {
			return false
		}
	}

	return true
}

```


# Complexity

-   Time: $O(m+n)$
-   Space: $O(m+n)$

Where `n` is the size of the `sentence1` array and the `m` the size of the `similarPairs` array.

The solution's code covered with unit test is available at the Go playground by the URL https://go.dev/play/p/ynBIfRcQm3o

If you like solution and explanations, please **Upvote!**