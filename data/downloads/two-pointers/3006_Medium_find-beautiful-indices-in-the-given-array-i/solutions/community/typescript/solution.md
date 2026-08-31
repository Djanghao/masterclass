# 2 passes O(n)

**Author:** JOlivier92
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/4569693/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/4569693/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
All we need to do is figure out where each word is in the array starts. We start with the first word, and save all of those start indices to `firstWordIdxQueue`.

As we iterate through the second time, we try to find where each `secondWord` starts. Once we hit a second word, we progressively take indices out of the first word queue. We check to see if the two words are close enough, if they are, then great, we add that first word index to our output array then keep checking other first word indices.

Once we hit a first word index that's not beautiful we check to see if we are before or after that index. Since we are just traversing  through the string, we know that the second word index will only increase, so if we are before the first word index, we add it back into the queue at the first position.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n + m) where `n ~= len(s) - len(a)` & `m ~= len(s) - len(b)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function beautifulIndices(s: string, a: string, b: string, k: number): number[] {
    const firstWordIdxQueue = []
    const output = []
    let left = 0
    while (left <= s.length - a.length) {
        const firstWord = s.slice(left,left + a.length)
        if (firstWord === a) {
            firstWordIdxQueue.push(left)
        }
        left++
    }

    left = 0
    while (left <= s.length - b.length) {
        const secondWord = s.slice(left, left + b.length)
        if (secondWord === b) {
            while (firstWordIdxQueue.length) {
                const firstWordIdx = firstWordIdxQueue.shift()
                if (Math.abs(left - firstWordIdx) <= k) {
                    output.push(firstWordIdx)
                } else if (left < firstWordIdx) {
                    firstWordIdxQueue.unshift(firstWordIdx)
                    break
                }
            }
        }
        left++
    }
    return output
};
```