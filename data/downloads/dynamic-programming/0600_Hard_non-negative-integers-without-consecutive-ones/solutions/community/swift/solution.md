# Swift solution (DP)

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361862/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/1361862/)

---

Let's define `dp[i][j]` as number of non-negative integers without consecutive ones where `(i + 1)` is number of bits and `j` is highest bit.

Obviously, `dp[0][0] == dp[0][1] == 1` since `dp[0][0]` is zero and `dp[0][1]` is one.

`dp[i][0] == dp[i - 1][0] + dp[i - 1][1]` for `i > 0` since the highest bit is zero and the next bit can be either zero or one.

`dp[i][1] == dp[i - 1][0]` for `i > 0` since the highest bit is one and the next bit can be only zero.

Next, calculate the result using `dp` and the binary representation of `n`.

Time complexity O(log n), space complexity O(log n)
```
class Solution {

    func findIntegers(_ n: Int) -> Int {
        let nBits = num2bits(n), nBitsCount = nBits.count
        var dp = [[Int]](repeating: [Int](repeating: 1, count: 2), count: nBitsCount), result = 0
        for bit in 1..<nBitsCount {
            dp[bit][0] = dp[bit - 1][0] + dp[bit - 1][1]
            dp[bit][1] = dp[bit - 1][0]
        }
        for bit in stride(from: nBitsCount - 1, through: 0, by: -1) where nBits[bit] == 1 {
            result += dp[bit][0] // e.g. 0b1000: + dp[3][0] - 1 (all non-zero integers less than 0b1000) + 1 (0b1000 itself)
            if bit < nBitsCount - 1 && nBits[bit + 1] == 1 { // found consecutive ones
                result -= 1 // e.g. 0b1000: don't count 0b1000 itself
                break
            }
        }
        return result + 1 // don't forget about zero
    }

    func num2bits(_ num: Int) -> [Int] { // 0b11110000 -> [0, 0, 0, 0, 1, 1, 1, 1]
        guard num > 0 else { return [0] }
        var remainder = num, result = [Int]()
        while remainder > 0 {
            result.append(remainder & 1)
            remainder >>= 1
        }
        return result
    }
}
```