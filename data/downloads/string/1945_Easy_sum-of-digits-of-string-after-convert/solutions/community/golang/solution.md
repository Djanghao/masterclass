# Golang very straightforward solution using number as a string

**Author:** user2418K
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5733503/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5733503/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func getLucky(s string, k int) int {
    var sr []byte
    for i := 0; i < len(s); i++ {
        sr = append(sr, []byte(fmt.Sprintf("%d", s[i]-'a'+1))...)
    }
    var sum int
    for k > 0 {
        sum = 0
        for i := 0; i < len(sr); i++ {
            sum += int(sr[i]-'0')
        }
        sr = []byte(fmt.Sprintf("%d", sum))
        k--
    }
    return sum
}
```