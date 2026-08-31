# Golang simple solution using map

**Author:** user2418K
**Votes:** 7
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/2720881/](https://leetcode.com/problems/top-k-frequent-words/solutions/2720881/)

---

```go
func topKFrequent(words []string, k int) []string {
        freq := make(map[string]int)
        var uniq []string
        for _, w := range words {
                if _, ok := freq[w]; !ok {
                        uniq = append(uniq, w)
                }
                freq[w]++
        }

        sort.SliceStable(uniq, func(i, j int) bool {
                if freq[uniq[i]] == freq[uniq[j]] {
                        return uniq[i] < uniq[j]
                }
                return freq[uniq[i]] > freq[uniq[j]]
        })

        return uniq[:k]
}
```