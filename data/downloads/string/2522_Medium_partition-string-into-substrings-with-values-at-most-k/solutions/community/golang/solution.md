# Recursive with memo

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/4659892/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/4659892/)

---

# Intuition & Approach

Recursive with memo.

# Complexity
- Time complexity:
$$O(n)$$ \u2014 for each position we will compute the ending only once

- Space complexity:
$$O(n)$$

# Code
```
func minimumPartition(s string, k int) int {
    // Convert s into array of int
    runes := []rune(s)
    ints := make([]int, len(runes))
    for i, v := range runes {
        ints[i] = int(v - '0')
    }

    memo := make(map[int]int)

    var dfs func(int) int
    var notFound bool
    dfs = func(pos int) int {
        if ans, ok := memo[pos]; ok {
            return ans
        }

        if pos >= len(ints) {
            return 0
        }

        ans := math.MaxInt
        total := 0
        i := 0
        for total <= k && pos+i < len(ints) {
            total *= 10
            total += ints[pos+i]
            i++
            if total <= k {
                opt := 1 + dfs(pos+i)
                if opt < ans {
                    ans = opt
                }
            }
        }
        if ans == math.MaxInt {
            notFound = true
        }
        memo[pos] = ans
        return ans
    }

    ans := dfs(0)
    
    if notFound {
        return -1
    }

    return ans   
}
```