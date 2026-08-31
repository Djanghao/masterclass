# Golang | DP

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-integers/solutions/3606728/](https://leetcode.com/problems/count-of-integers/solutions/3606728/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

- Golang implementation of solution from `https://www.youtube.com/watch?v=ZsHbl-DEjX8`

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type State struct {
    isSmaller bool
    index int
    sum int
}

const (
    MOD = 1e9+7
    maxLength = 23
)

func count(num1 string, num2 string, min_sum int, max_sum int) int {
    numGoodInts2 := numGoodIntsLessThan(padLeadingZeros(num2), min_sum, max_sum, make(map[State]int))
    numGoodInts1 := numGoodIntsLessThan(minusOne(padLeadingZeros(num1)), min_sum, max_sum, make(map[State]int))
    return (numGoodInts2 - numGoodInts1 + MOD ) % MOD
}


func padLeadingZeros(num string) []byte {
    out := make([]byte, maxLength)
    for i := range num {
        out[maxLength-len(num)+i] = num[i] - '0'
    }
    return out
}


func minusOne(num []byte) []byte {
    lastNonZeroIndex := len(num)
    for i := len(num)-1; i >= 0; i-- {
        if num[i] > 0 {
            lastNonZeroIndex = i
            break
        }
    }

    num[lastNonZeroIndex]--
    for i := lastNonZeroIndex+1; i < len(num); i++ {
        num[i] = 9
    }
    return num
}


func getNumGoodInts(num []byte, min_sum int, max_sum int, isSmaller bool, index int, sum int, dp map[State]int) int {
    if index == len(num) {
        if min_sum <= sum && sum <= max_sum {
            return 1
        }
        return 0
    }

    if sum > max_sum {
        return 0
    }

    state := State{isSmaller, index, sum}
    if v, ok := dp[state]; ok {
        return v
    }

    endVal := 9
    if !isSmaller {
        endVal = int(num[index])
    }
    count := 0
    for i := 0; i <= endVal; i++ {
        count = (count + getNumGoodInts(num, min_sum, max_sum, isSmaller || i < endVal, index+1, sum+i, dp)%MOD ) % MOD
    }
    dp[state] = count

    return count
}

func numGoodIntsLessThan(num []byte, min_sum int, max_sum int, dp map[State]int) int {
    return getNumGoodInts(num, min_sum, max_sum, false, 0, 0, dp)
}
```