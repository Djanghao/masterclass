# JavaScript memo O(zero * one * limit)

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5559346/](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i/solutions/5559346/)

---

# Intuition
Use memo.
# Approach
Alternatively try adding consective 0s or 1s. The length of the consective section goes from 1 to min(limit, count of remaining 0 or 1). And use recursion along with memo.
# Complexity
- Time complexity:
O(zero * one * limit)
- Space complexity:
O(zero * one)
# Code
```
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const modMe = 10 ** 9 + 7

    const rowLen = 1 + one
    const table = new Array(1 + zero)
    for (const i of table.keys()) {
        const row = table[i] = new Array(rowLen)
        for (const j of row.keys())
            row[j] = new Array(3) // 3 channels
    }
    

    function solve(zeroCount, oneCount, channel) {
        if (zeroCount === 0) {
            return Number(oneCount <= limit)
        }
        if (oneCount === 0) {
            return Number(zeroCount <= limit)
        }

        if (
            channel === 0 && oneCount > zeroCount * limit ||
            channel === 1 && oneCount > (1 + zeroCount) * limit ||
            channel === 1 && zeroCount > oneCount * limit ||
            channel === 0 && zeroCount > (1 + oneCount) * limit
        )
            return 0

        let needsZero = true, needsOne = true
        if (channel === 0) {
            needsOne = false
        } else if (channel === 1) {
            needsZero = false
        }

        let existing = table[zeroCount][oneCount][channel]
        if (existing !== undefined) return existing

        let result = 0
        if (needsZero === true) {
            const ub = 1 + Math.min(limit, zeroCount)
            for (let moreZeroes = 1, zeroCountNext = zeroCount - moreZeroes;
                moreZeroes < ub; moreZeroes++, zeroCountNext--) {
                const subresult = solve(zeroCountNext, oneCount, 1)
                result = (result + subresult) % modMe
            }
        }
        if (needsOne === true) {
            const ub = 1 + Math.min(limit, oneCount)
            for (let moreOnes = 1, oneCountNext = oneCount - moreOnes;
                moreOnes < ub; moreOnes++, oneCountNext--) {
                const subresult = solve(zeroCount, oneCountNext, 0)
                result = (result + subresult) % modMe
            }
        }

        return table[zeroCount][oneCount][channel] = result
    }


    const result = solve(zero, one, 2)
    return result
};
```