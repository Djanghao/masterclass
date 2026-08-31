# DP + memo in Golang

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/4399175/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solutions/4399175/)

---

# Intuition & Approach

Greedy permutations + memo.

# Complexity
- Time complexity:
$$O(2^(log_nx))$$ \u2014 this is rather "top" estimate

- Space complexity:
$$O(n)$$ \u2014 for pows and memo

# Code
```
func numberOfWays(n int, x int) int {
    powx := func(b, x int) int {
        switch (x) {
            case 1: return b
            case 2: return b*b
            case 3: return b*b*b
            case 4: return b*b*b*b
            case 5: return b*b*b*b*b
        }
        return 1
    }

    var pows []int
    current := 1
    currentPow := 1
    for currentPow <= n {
        pows = append(pows, currentPow)
        current++
        currentPow = powx(current, x)
    }

    type Tuple struct {
        left, ind int
    }

    memo := map[Tuple/* leftover and ind */]int/*amount of time it can be expressed*/{}

    modulo := 1000000007

    var perm func(int, int) int
    perm = func(left, ind int) int {
        if v, ok := memo[Tuple{left, ind}]; ok {
            return v
        }

        if left == 0 {
            return 1
        }

        if ind >= len(pows) {
            return 0
        }

        var ans int

        if pows[ind] <= left {
            ans += perm(left-pows[ind], ind+1) % modulo
        }
        ans += perm(left, ind+1) % modulo
        ans %= modulo

        memo[Tuple{left, ind}] = ans

        return ans 
    }

    return perm(n, 0)    
}
```