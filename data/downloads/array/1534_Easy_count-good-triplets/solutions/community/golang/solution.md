# 4 ms, 2.2 mb

**Author:** vashik
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/796705/](https://leetcode.com/problems/count-good-triplets/solutions/796705/)

---

```
func abs(n int) int {
    if n < 0 {
        return -n
    }
    return n
}

func countGoodTriplets(arr []int, a int, b int, c int) int {
    cnt := 0
    for i := 0; i < len(arr) - 2; i++ {
        for j := i + 1; j < len(arr) - 1; j++ {
            if abs(arr[i] - arr[j]) <= a {
                for k := j + 1; k < len(arr); k++ {
                    if  abs(arr[j] - arr[k]) <= b && abs(arr[i] - arr[k]) <= c {
                        cnt++
                    }    
                }
            }
        }
    }
    return cnt
}
```