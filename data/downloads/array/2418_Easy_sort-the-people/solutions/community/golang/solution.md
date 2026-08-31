# golang solution 49ms 100%

**Author:** fshiori
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-the-people/solutions/2626127/](https://leetcode.com/problems/sort-the-people/solutions/2626127/)

---

Runtime: 49 ms, faster than 100.00% of Go online submissions for Sort the People.
Memory Usage: 7.4 MB, less than 100.00% of Go online submissions for Sort the People.

```
func sortPeople(names []string, heights []int) []string {
    type people struct {
        name string
        height int
    }
    tmp := make([]people, 0, len(names))
    for i := 0; i < len(names); i++ {
        t := people{
            name: names[i],
            height: heights[i],
        }
        tmp = append(tmp, t)
    }
    sort.Slice(tmp, func(i, j int) bool { return tmp[i].height > tmp[j].height })
    ans := make([]string, 0, len(names))
    for _, t := range tmp {
        ans = append(ans, t.name)
    }
    return ans
}
```