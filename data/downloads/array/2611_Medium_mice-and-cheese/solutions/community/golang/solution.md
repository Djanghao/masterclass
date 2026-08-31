# [GoLang] Greedy, Sorting

**Author:** dkochetov
**Votes:** 2
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3369041/](https://leetcode.com/problems/mice-and-cheese/solutions/3369041/)

---

# Intuition
It requires greedy approach. DP hits the time limit.

# Approach
Sort both lists so that:
```
reward1[i]-reward2[i] > reward1[i+1]-reward2[i+1]
```
Now the left part of `reward1` have the best rewards if the first mouse eats the cheese.
Take the first `k` elements from `reward1`, and last remaining `n-k` elements from `reward2`.

# Complexity
- Time complexity: $$O(nlogn)$$
Sorting lists

- Space complexity: $$O(1)$$

# Code
```
type S struct {
    reward1, reward2 []int
}
func (s S) Len() int {
    return len(s.reward1)
}
func (s S) Swap(i, j int) {
    s.reward1[i], s.reward1[j] = s.reward1[j], s.reward1[i]
    s.reward2[i], s.reward2[j] = s.reward2[j], s.reward2[i]
}
func (s S) Less(i, j int) bool {
    return s.reward1[i] - s.reward2[i] > s.reward1[j] - s.reward2[j]
}

func miceAndCheese(reward1 []int, reward2 []int, k int) int {
    sort.Sort(S{reward1, reward2})

    result := 0
    for _, r := range reward1[:k] {
        result += r
    }
    for _, r := range reward2[k:] {
        result += r
    }
    return result
}

```