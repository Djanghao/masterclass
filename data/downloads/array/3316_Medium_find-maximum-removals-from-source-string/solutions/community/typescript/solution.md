# Typescript Approach [O(n+m) Time, O(n+p) Space]

**Author:** kyratzakos
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5903911/](https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5903911/)

---

# Intuition
We want to maximize the number of removable characters from `source` at specific indices while ensuring `pattern` remains a subsequence. We track minimal removals required at each step, using dynamic programming to efficiently manage the conditions.

# Approach
1. Use a map to store each character\u2019s indices in `pattern`, reversed for efficient DP updates.
2. Iterate through `source`, updating the minimum removals needed to maintain `pattern` as a subsequence after removing characters at `targetIndices`.
3. Use a DP map to track the minimum removals per prefix of `pattern`, ultimately yielding the maximum removable characters.

# Complexity
- Time complexity:
$O(m+n)$, where $m$ is the length of `source` and $n$ is the length of `pattern`, due to character mappings and DP updates.

- Space complexity:
$O(n+p)$, where $p$ is the number of `targetIndices`, for the DP map and pattern mappings.

# Code
```typescript []
function maxRemovals(source: string, pattern: string, targetIndices: number[]): number {
    const targetIndicesSet = new Set(targetIndices)

    const patternIndexes = new Map<string, number[]>()
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        if (!patternIndexes.has(char)) {
            patternIndexes.set(char, [])
        }
        patternIndexes.get(char)!.push(i)
    }

    for (const indexes of patternIndexes.values()) {
        indexes.reverse()
    }

    const dp = new Map<number, number>([[0, 0]])

    for (let i = 0; i < source.length; i++) {
        const char = source[i]
        const iIsRemoved = targetIndicesSet.has(i) ? 1 : 0

        if (patternIndexes.has(char)) {
            for (const j of patternIndexes.get(char)!) {
                const prev = dp.get(j)
                if (prev === undefined) {
                    continue
                }
                dp.set(j + 1, Math.min(dp.get(j + 1) ?? Infinity, prev + iIsRemoved))
            }
        }
    }

    return targetIndices.length - (dp.get(pattern.length) ?? 0)
}
```