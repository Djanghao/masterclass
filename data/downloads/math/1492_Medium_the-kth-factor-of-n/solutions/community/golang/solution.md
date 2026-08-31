# Golang O(sqrt(n)) solution

**Author:** YuanRuQian
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/3919225/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/3919225/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(\\sqrt{n})$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func kthFactor(n int, k int) int {
    s := int(math.Sqrt(float64(n)))

    count := 0 

    for i := 1; i <= s; i++ {
        if n%i == 0 {
            count++
        }

        if count == k {
            return i
        }
    }

    total := count * 2

    if s * s == n {
        total--
        count--
    }

    if k > total {
        return -1
    }

    for i := s; i>=1; i-- {
        if n%i == 0 {
            count++
        }

        if count == k {
            return n / i
        }
    }

    return -1
}

```