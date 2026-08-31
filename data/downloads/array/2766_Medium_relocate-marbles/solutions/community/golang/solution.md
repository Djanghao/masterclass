# Golang | Runtime beats 100% | Memory beats 88%

**Author:** lynchy
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3838207/](https://leetcode.com/problems/relocate-marbles/solutions/3838207/)

---

# Performance

![Screenshot 2023-07-30 at 9.53.04\u202Fpm.png](./images/0.png)


# Code
```
func relocateMarbles(nums []int, moveFrom []int, moveTo []int) []int {
    marbleMap := make(map[int]bool)

    for _, numsValue := range nums {
        marbleMap[numsValue] = true
    }

    for fromIndex, fromValue := range moveFrom {
        _, ok := marbleMap[fromValue]
        if ok {
            delete(marbleMap, fromValue)
        }
        _, ok = marbleMap[moveTo[fromIndex]]
        if !ok {
            marbleMap[moveTo[fromIndex]] = true
        }
    }

    var result []int
    for key, _ := range marbleMap {
        result = append(result, key)
    }

    sort.Ints(result)

    return result;
}

```