# Go | O(log n) | one liner

**Author:** tucux
**Votes:** 1
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/3811437/](https://leetcode.com/problems/h-index-ii/solutions/3811437/)

---

```
func hIndex(citations []int) int {
    return sort.Search(len(citations), func(i int) bool { return citations[len(citations) - 1 - i] <= i })
}
```