# Typescript Approach [O(n) Time/Space]

**Author:** kyratzakos
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844393/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844393/)

---

# Intuition
The task is to find a valid sequence of indices from `word1` such that it can match `word2` by changing at most one character. To achieve this, we look for a subsequence in `word1` that matches `word2` either exactly or with a single modification.

The goal is to first check from the end of `word1` if the remaining characters can still match the remaining part of `word2`. This helps us decide if we can afford a mismatch while still being able to complete the sequence. The covers array helps track this information.

# Approach
1. Calculate the covers array: `covers[i]` stores how many characters of `word2` (from `j` onwards) can still be matched starting from index `i` of `word1`. It is built by scanning `word1` from right to left. If `word1[i] == word2[j]`, we increment `covers[i]` based on the subsequent positions. This allows us to know, for any index `i`, whether the remaining portion of `word2` can still be matched if we skip a character in `word1`.
2. First Pass to Attempt a Match: We attempt to match the characters of `word2` from left to right with `word1`. If a mismatch occurs, we check if we can afford this mismatch using the `covers` array (i.e., whether the remaining part of `word1` can still cover the rest of `word2`). If a mismatch is allowed, we mark that spot (`victory`) and try to complete the sequence from there.
3. Second Pass After a Mismatch: If the sequence was interrupted by a mismatch, we attempt to finish matching the remaining characters of `word2` starting from the `victory` index. This second pass ensures that we can complete the sequence even after one character was mismatched.
4. Result Check: If the `result` size matches the length of `word2`, we return the indices. If we couldn\u2019t complete the sequence, return an empty array.

# Complexity
- Time complexity:
The total time complexity is $O(n)$, where $n$ is the length of `word1`.

- Space complexity:
$O(n)$, due to the `covers` array.

# Code
```typescript []
function validSequence(word1: string, word2: string): number[] {
    const n = word1.length
    const m = word2.length
    const covers: number[] = new Array(n).fill(0)
    let j = m - 1

    for (let i = n - 1; i >= 0; i--) {
        if (j >= 0 && word1[i] === word2[j]) {
            covers[i] = i === n - 1 ? 1 : covers[i + 1] + 1
            j--
        } else {
            covers[i] = i === n - 1 ? 0 : covers[i + 1]
        }
    }

    j = 0
    const result: number[] = []
    let victory = -1

    for (let i = 0; i < n; i++) {
        if (word1[i] === word2[j]) {
            result.push(i)
            j++
            if (j === m) {
                break
            }
        } else {
            if ((i === n - 1 ? 0 : covers[i + 1]) >= m - j - 1) {
                result.push(i)
                j++
                victory = i + 1
                break
            }
        }
    }

    if (result.length === m) {
        return result
    }

    if (victory === -1) {
        return []
    }

    for (let i = victory; i < n; i++) {
        if (word1[i] === word2[j]) {
            result.push(i)
            j++
        }
        if (j === m) {
            break
        }
    }

    return result.length === m ? result : []
}
```