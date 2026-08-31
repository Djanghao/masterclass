# [golang] DP with bitmasking

**Author:** keemzen
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/1118994/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/1118994/)

---

```
func maxScore(nums []int) int {
    n := len(nums) / 2
    
    // pre-calc gcd values for each pair
    gcdValues := make([][]int, 2*n)
    for i := range gcdValues {
        gcdValues[i] = make([]int, 2*n)
        for j := range gcdValues[i] {
            if i == j {
                continue
            }
            if j < i {
                gcdValues[i][j] = gcdValues[j][i]   
            } else {
                gcdValues[i][j] = gcd(nums[i], nums[j])
            }
        }
    }
    
    // create array of length 2^(2*n) to keep calculated values for masks
    maskCnt := 1
    for i := 0; i < 2*n; i++ {
        maskCnt *= 2
    }
    dp := make([]int, maskCnt)

    return solve(n, 0, gcdValues, dp)
}

// Euclidean algorithm
func gcd(a, b int) int {
    for b != 0 {
		t := b
		b = a % b
		a = t
	}
	return a
}

// solve problem for original array excluding positions marked in mask
func solve(opIdx, mask int, gcdValues [][]int, dp []int) int {
    if opIdx == 0 {
        return 0
    }

    var maxScore, score, newMask int
    n := len(gcdValues) / 2
    
    // bruteforce each possible pair
    for i := 0; i < 2 * n - 1; i++ {
        if (mask >> i) & 1 != 0 { // i-th element is already used
            continue
        }
        for j := i + 1; j < 2 * n; j++ {
            if (mask >> j) & 1 != 0 { // j-th element is already used
                continue
            }
            
            // mark i-th and j-th elements as used
            newMask = (1 << i) | mask
            newMask = (1 << j) | newMask
            
            // solve problem for remaining subset
            if dp[newMask] == 0 {
                dp[newMask] = solve(opIdx - 1, newMask, gcdValues, dp)
            }

            // save max score
            score = opIdx * gcdValues[i][j] + dp[newMask]
            if score > maxScore {
                maxScore = score
            }
        }
    }

    return maxScore
}
```