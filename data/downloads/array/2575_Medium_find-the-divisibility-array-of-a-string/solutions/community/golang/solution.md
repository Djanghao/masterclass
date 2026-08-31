# Math solution in go

**Author:** CharryLee0426
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/4833921/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/4833921/)

---

# Intuition
I remembered what I learned in undergraduate:

$$
(a+b) \\mod\u2009\u2009c=(a \\mod\u2009\u2009c+b \\mod\u2009\u2009c) \\mod\u2009\u2009c \\\\ 
(a \u2217 b) \\mod\u2009\u2009c=(a \\mod\u2009\u2009c \u2217 b \\mod\u2009\u2009c) \\mod\u2009\u2009c
$$
Therefore, the problem in fact can be converted to a dp problem.

# Approach
I use a dp array to store the remainder of integer a[0]...a[i-1] at dp[i]. Also, I use res array to store the final result.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
 $$O(2n)$$

# Code
```
func divisibilityArray(word string, m int) []int {
    // (a + b) mod c == (a mod c + b mod c) mod c
    // (a * b) mod c == (a mod c * b mod c) mod c
    // so i think this problem can be converted to a dp problem

    dp := make([]int, len(word)+1)
    res := make([]int, len(word))

    for i := 0; i < len(word); i++ {
        dp[i+1] = ((dp[i] * 10) % m + int(word[i] - '0') % m) % m

        if dp[i+1] == 0 {
            res[i] = 1
        }
    }

    return res
}
```