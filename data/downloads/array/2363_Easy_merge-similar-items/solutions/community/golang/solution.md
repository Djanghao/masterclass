# 33ms(40%) | Go solution

**Author:** kitanoyoru_
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2900219/](https://leetcode.com/problems/merge-similar-items/solutions/2900219/)

---

```
func mergeSimilarItems(items1 [][]int, items2 [][]int) (ans [][]int) {
  hm := make(map[int]int)

  for _, item := range items1 {
    hm[item[0]] += item[1]
  }
  for _, item := range items2 {
    hm[item[0]] += item[1]
  }

  for k, v := range hm {
    ans = append(ans, []int{k, v})
  }

  sort.Slice(ans, func(i, j int) bool {
    return ans[i][0] < ans[j][0]
  })

  return
}
```