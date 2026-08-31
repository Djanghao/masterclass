# Constant space solution

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/5010432/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/5010432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Do simple math to generate `ith` palindrome with length `l`

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func kthPalindrome(queries []int, intLength int) []int64 {
    ans := make([]int64, 0, len(queries))
    for _, query := range queries {
        ans = append(ans, ithPalindrome(intLength, query))
    }
    return ans
}

func ithPalindrome(intLength int, pos int) int64 {
    var ans int64 = 1
    for i := 0; i < (intLength-1)/2; i++ {
        ans *= 10
    }
    if int64(pos) > 9*ans {
        return -1
    }
    ans += int64(pos-1)
    tmp := ans
    if intLength % 2 == 1 {
        tmp /= 10
    }

    for tmp != 0 {
        ans = ans*10 + tmp%10
        tmp /= 10
    }

    return ans
}
```