# JavaScript O(n)

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equal-count-substrings/solutions/5633867/](https://leetcode.com/problems/number-of-equal-count-substrings/solutions/5633867/)

---

# Intuition
Save states for each index in s.
# Approach
1. As we go thru s, we save states for the freqs of each letter.
2. When we have reached an index i, we try factor = 1, 2, 3, ... 26, and look back to the indices i - count, i - 2 * count, i - 3 * count, ... i - 26 * count. If the previous index is valid (at least -1), we extract the diff between the two states.
3. For each letter in the diff, its freq must be either 0 or count. If so, it represents a eligible substring, and we increase result by 1.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```
/**
 * @param {string} s
 * @param {number} count
 * @return {number}
 */
var equalCountSubstrings = function(s, count) {
    const size = 26, aCode = 97, len = s.length

    // save states for each index in s
    const stateInitial = new Array(size).fill(0)
    const states = new Array(len)
    states[-1] = stateInitial

    
    let result = 0
    for (let i = 0; i < len; i++) {
        // maintain states
        const letter = -aCode + s.charCodeAt(i)
        const state = [...states[i - 1]]
        state[letter]++
        states[i] = state

        // factor: how many letters in the substring
        forEachFactor: // there at most 26 values for factor
        for (let factor = 1; factor <= size; factor++) {
            const iPrev = i - factor * count
            if (iPrev < -1) break

            const statePrev = states[iPrev]
            for (let letter = 0; letter < size; letter++) {
                const diff = state[letter] - statePrev[letter]
                if (diff !== 0) {
                    if (diff !== count) { // doesn't match
                        continue forEachFactor
                    }
                }
            }

            result++
        }
    }

    
    return result
};
```