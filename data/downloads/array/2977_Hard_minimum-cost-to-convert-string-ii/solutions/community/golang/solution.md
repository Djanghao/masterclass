# [Golang] Floyd Warshall + DP + Trie

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4449881/](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/solutions/4449881/)

---

Explanation inline.

```go
type TrieNode struct {
  Children map[byte]*TrieNode
  Word string
}

func newNode() *TrieNode {
  return &TrieNode{Children: make(map[byte]*TrieNode)}
}

func insert(root *TrieNode, word string) {
  curr := root
  // Insert in reverse order
  for i := len(word)-1; i >= 0; i-- {
    child, ok := curr.Children[word[i]]
    if !ok {
      child = newNode()
      curr.Children[word[i]] = child
    }
    curr = child
  }
  curr.Word = word
}

func search(root *TrieNode, str string, pos int) []string {
  curr := root
  var res []string
  for i := pos; i >= 0; i-- {
    child := curr.Children[str[i]]
    if child == nil {
      break
    }
    curr = child
    if curr.Word != "" {
      res = append(res, curr.Word)
    }
  }
  return res
}

func minimumCost(source string, target string, original []string, changed []string, cost []int) int64 {
  // Let's assign unique IDs to every unique string in original and changed.
  ids := make(map[string]int)
  id := 0
  root := newNode()
  for _, str := range original {
    // We'll also insert each original string to Trie (in reverse order because the
    // search happens in reverse order)
    insert(root, str)
    if _, ok := ids[str]; !ok {
      ids[str] = id
      id++
    }
  }
  for _, str := range changed {
    if _, ok := ids[str]; !ok {
      ids[str] = id
      id++
    }
  }
  costarr := make([][]int64, id)
  // Initialize with Infinity except for self changes.
  for i := 0; i < len(costarr); i++ {
    costarr[i] = make([]int64, id)
    for j := 0; j < len(costarr[i]); j++ {
      if i != j {
        costarr[i][j] = math.MaxInt64
      }
    }
  }
  // Now we'll assign the cost for each direct pair of changes (edges)
  for i := 0; i < len(original); i++ {
    from := ids[original[i]]
    to := ids[changed[i]]
    costarr[from][to] = min(costarr[from][to], int64(cost[i]))
  }
  // Use Floyd Warshalls algorithm to compute the min cost for each possible pair
  // of transformations.
  for k := 0; k < id; k++ {
    for i := 0; i < id; i++ {
      for j := 0; j < id; j++ {
        if costarr[i][k] != math.MaxInt64 && costarr[k][j] != math.MaxInt64 && costarr[i][j] > costarr[i][k] + costarr[k][j] {
          costarr[i][j] = costarr[i][k] + costarr[k][j]
        }
      }
    }
  }
  // Now we'll use DP to compute the min cost for changing source to target
  // dp[i] is the minimum cost to make the first i characters to match the target
  dp := make([]int64, len(source)+1)
  for i := 0; i < len(dp); i++ {
    dp[i] = math.MaxInt64
  }
  dp[0] = 0 // base case
  for i := 1; i <= len(source); i++ {
    if source[i-1] == target[i-1] {
      dp[i] = dp[i-1] // No additional changes needed
    }
    // Even when the current character matches, we don't want to stop because we might be
    // able to replace a block of characters which will help bring down the cost even further.
    // We're doing a reverse search from the current position. This is done using Trie so it
    // only explores the path where we have something matching the source.
    for _, match := range search(root, source, i-1) {
      length := len(match)
      if i-length >= 0 {
        sourcestr := source[i-length:i]
        targetstr := target[i-length:i]
        from, to := -1, -1
        if sid, ok := ids[sourcestr]; ok {
          from = sid
        }
        if tid, ok := ids[targetstr]; ok {
          to = tid
        }
        if from != -1 && to != -1 && costarr[from][to] != math.MaxInt64 && dp[i-length] != math.MaxInt64 {
          dp[i] = min(dp[i], dp[i-length] + costarr[from][to])
        }
      }
    }
  }
  if dp[len(source)] == math.MaxInt64 {
    return -1
  }
  return dp[len(source)]
}
```