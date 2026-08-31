# Beats 100% (Performance): Simple Top-Down DP Approach

**Author:** funkeyfreak
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/4708330/](https://leetcode.com/problems/paint-fence/solutions/4708330/)

---

There are two ways that I solved this problem. The first is a solution I wrote during an interview. The second is one I wrote exactly 10 minutes after said interview. GL, HF!

# Code
```

import "fmt"
func numWaysHelper(n, k, idx int, m map[int]int) int {
    if idx == 1  {
        return k
    } else if idx == 2 {

        return k*k 
    }
    
    if found, ok := m[idx]; ok {
        return found
    }

    res := 0

    res += (k - 1) * (numWaysHelper(n, k, idx - 1, m) + numWaysHelper(n, k, idx - 2, m))

    m[idx] = res
    
    return res
}

func numWays(n int, k int) int {

    m := make(map[int]int)
    return numWaysHelper(n, k, n, m)
}
```

But, we can do better. You may have noticed that this is basically a fib sequence...

```go
func numWays(n int, k int) int {
    if n == 1 {
        return k
    }

    a := k
    b := k*k
    for i := 0;  i < n -2; i++ {
        c := (k-1) * (a + b)
        a = b
        b = c
    }

    return b
}
```