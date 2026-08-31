# Typescript Approach Z-Algorithm [O(n+m) Time/Space]

**Author:** kyratzakos
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844623/](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844623/)

---

# Intuition
The Z-function is a powerful tool in pattern matching. It computes an array `z` where `z[i]` is the length of the longest substring starting from `s[i]` that is also a prefix of the string `s`. This is useful for various string algorithms, especially when we need to find patterns in strings.

The task is to find the minimum starting index where a pattern matches (almost) in a given string `s`. The matching is flexible, allowing for a mismatch or a partial match.

# Approach
1. Construct a Concatenated String: For pattern matching, we concatenate the `pattern`, a separator (`#`), and the string `s` into one long string. This allows us to compute the Z-function for pattern matching efficiently.
2. Compute the Z-function: We compute the Z-function for both the forward concatenation (`pattern + # + s`) and the reverse concatenation (`s + # + pattern`). The reverse concatenation helps in dealing with possible mismatches or partial matches.
3. Sliding the Window: As we slide through the string s, we use the Z-function results to check whether the pattern matches starting at a certain index. If a match or an acceptable mismatch is found, we return that starting index. Otherwise, we continue sliding the window.

# Complexity
- Time complexity:
$O(n + m)$, where $n$ is the length of the string `s` and $m$ is the length of the `pattern`.

- Space complexity:
$O(n + m)$, where $n$ is the length of the string `s` and $m$ is the length of the `pattern`.

# Code
```typescript []
function minStartingIndex(s: string, pattern: string): number {
    const n = s.length
    const m = pattern.length

    const a = pattern + '#' + s
    const b = s + '#' + pattern
    const reversedB = b.split('').reverse().join('')

    const zForward = zFunction(a)
    const zBack = zFunction(reversedB)

    for (let i = m + 1; i < n + m + 1; i++) {
        if (i + m > n + m + 1) {
            break
        }

        const id = i - m - 1
        let x = zForward[i]
        if (x >= m - 1) {
            return id
        }

        x++
        const req = m - x
        let newId = id + m - 1
        newId = n - 1 - newId
        newId = m + 1 + newId

        if (zBack[newId] >= req) {
            return id
        }
    }

    return -1

}

function zFunction(s: string): number[] {
    const n = s.length
    const z: number[] = new Array(n).fill(0)
    let l = 0, r = 0

    for (let i = 1; i < n; i++) {
        if (i < r) {
            z[i] = Math.min(r - i, z[i - l])
        }
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
            z[i]++
        }
        if (i + z[i] > r) {
            l = i
            r = i + z[i]
        }
    }
    return z
}

```