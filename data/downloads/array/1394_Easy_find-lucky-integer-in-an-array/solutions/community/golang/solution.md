# Go solutions using array or map: 4 ms, 3.1 MB

**Author:** vashik
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/824972/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/824972/)

---

```
func findLucky(arr []int) int {
    frq := make(map[int]int)
    for i := 0; i < len(arr); i++ {
        frq[arr[i]]++
    }
    maxLucky := -1
    for k, v := range frq  {
        if k == v && k > maxLucky  {
            maxLucky = k
        }
    }
    return maxLucky
}
```
As `arr[i]` is small we can use array instead of map. I could potentially rely on the constraint for `arr[i]` and declare frq as `[501]int`, but prefer to finding maximum in `arr` instead:
```
func findLucky(arr []int) int {
    var max int
    for i := 0; i < len(arr); i++ {
        if max < arr[i] {
            max = arr[i]
        }
    }
    frq := make([]int, max+1)
    for i := 0; i < len(arr); i++ {
        frq[arr[i]]++
    }
    for i := max; i > 0; i--  {
        if i == frq[i]  {
            return i
        }
    }
    return -1
}
```