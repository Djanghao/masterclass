# [Go] 💎 Solution so easy, even a caveman can do it | O(1)

**Author:** poopaloop
**Votes:** 7
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/1513209/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/1513209/)

---

In all honesty, it can be tricky to come up with this. Even I had a hard time thinking about it. What helps is using a large number of examples to help you realize that we can get common prefixes for numbers.

Time: O(logn) - see comments below for explanation.
Space: O(1)

```go
func rangeBitwiseAnd(left int, right int) int {
    // Shift both numbers to the right until you find something in common in the prefix of both numbers
    count := 0
    for left != right {
        left >>= 1
        right >>= 1
        count += 1
    }
    
    return left << count // Shift back to get the prefix in the original bit positions it appeared in
}
```