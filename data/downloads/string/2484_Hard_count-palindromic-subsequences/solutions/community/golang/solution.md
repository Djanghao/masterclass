# Go Solution [DP O(n)]

**Author:** jhonwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-palindromic-subsequences/solutions/3239760/](https://leetcode.com/problems/count-palindromic-subsequences/solutions/3239760/)

---

# Intuition
The solution uses a dynamic programming approach to count the number of palindromic subsequences of length 5 in the given input string s.

# Approach
The solution first calculates the count of right palindromic subsequences of length 3 for each digit from 0 to 9, by iterating over the string from right to left. For each digit encountered, the solution updates the count of that digit in the right half of the subsequence and updates the count of all pairs of digits that can form a palindrome with that digit in the right half of the subsequence.

Next, the solution iterates over the string from left to right and simultaneously calculates the count of left palindromic subsequences of length 3 and the total count of palindromic subsequences of length 5. For each digit encountered, the solution updates the count of that digit in the left half of the subsequence and updates the count of all pairs of digits that can form a palindrome with that digit in the left half of the subsequence. It also calculates the contribution of each pair of digits to the total count of palindromic subsequences of length 5 by multiplying the corresponding counts of left and right palindromic subsequences of length 3.

Finally, the solution returns the total count of palindromic subsequences of length 5 modulo 10^9 + 7.

# Complexity
- Time complexity:
The time complexity of the given solution is O(n), where n is the length of the input string s.
The solution performs a single pass through the string s from right to left to calculate the count of right palindromic subsequences of length 3, and then performs another pass from left to right to calculate the count of left palindromic subsequences of length 3 and simultaneously count the total number of palindromic subsequences of length 5. The loops over the digits 0 to 9 inside the two passes each have a constant upper bound of 10, so they do not contribute to the time complexity.
Thus, the overall time complexity is O(n), making the solution efficient enough to handle the given constraints of 1 <= s.length <= 10^4.

- Space complexity:
The space complexity of the given solution is O(1), as the amount of memory used by the program does not depend on the length of the input string s. The solution only uses a fixed-size array of length 10 for each of the left and right counts, and two fixed-size 2D arrays of size 10x10 for each of the left and right counts of each pair of digits. Thus, the space used by the program remains constant regardless of the length of the input string.

# Code
```
func countPalindromes(s string) int {
    n := len(s)
    left, right := make([]int, 10), make([]int, 10)
    cntLeft, cntRight := make([][]int, 10), make([][]int, 10)
    for i := range cntLeft {
        cntLeft[i], cntRight[i] = make([]int, 10), make([]int, 10)
    }
    M := int(1e9) + 7
    for i := n - 2; i >= 2; i-- {
        right[s[i+1]-'0']++
        d := s[i] - '0'
        for j := 0; j < 10; j++ {
            cntRight[d][j] += right[j]
        }
    }
    ans := 0
    for i := 2; i < n-2; i++ {
        // update left
        left[s[i-2]-'0']++
        // update cntLeft
        d := s[i-1] - '0'
        for j := 0; j < 10; j++ {
            cntLeft[j][d] += left[j]
        }
        // update cntRight
        d = s[i] - '0'
        for j := 0; j < 10; j++ {
            cntRight[d][j] -= right[j]
        }
        // update ans
        for j := 0; j < 10; j++ {
            for k := 0; k < 10; k++ {
                ans += cntLeft[j][k] * cntRight[k][j]
                ans %= M
            }
        }
        // update right
        right[s[i+1]-'0']--
    }
    return ans
}

```