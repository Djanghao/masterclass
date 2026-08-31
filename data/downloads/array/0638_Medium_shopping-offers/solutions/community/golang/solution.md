# golang solution with dfs & map

**Author:** napoleonwxu
**Votes:** 2
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/300951/](https://leetcode.com/problems/shopping-offers/solutions/300951/)

---

```go
func shoppingOffers(price []int, special [][]int, needs []int) int {
    Map := make(map[[6]int]int)
    return dfs(price, special, needs, Map)
}

func dfs(price []int, special [][]int, needs []int, Map map[[6]int]int) int {
    key := toArray(needs)
    sum, ok := Map[key]
    if ok {
        return sum
    }
    n := len(needs)
    for i := 0; i < n; i++ {
        sum += price[i] * needs[i]
    }
    for _, sp := range special {
        nd := make([]int, n)
        i := 0
        for ; i < n; i++ {
            nd[i] = needs[i] - sp[i]
            if nd[i] < 0 {
                break
            }
        }
        if i == n {
            sum = min(sum, sp[n] + dfs(price, special, nd, Map))
            Map[key] = sum
        }
    }
    return sum
}

func toArray(slice []int) [6]int {
    array := [6]int{}
    for i := 0; i < len(slice); i++ {
        array[i] = slice[i]
    }
    return array
}

func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}
```