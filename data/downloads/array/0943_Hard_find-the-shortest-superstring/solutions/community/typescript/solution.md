# 💥 TypeScript | Runtime beats 100.00%, Memory beats 75.00% [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/5768039/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/5768039/)

---

# Intuition
I need to form the shortest string containing all given words by overlapping them as much as possible. It's like fitting words together with maximum overlap to minimize the total length.


# Approach
Each bit in the mask tracks which words are included. I calculate the overlap between every word pair and use DP to combine words in the most efficient order. Then, I reconstruct the shortest superstring from the DP results.


# Complexity
- Time complexity:
O(n^2 * 2^n * l), where n is the number of words and l is the average word length.


- Space complexity:
O(n * 2^n) for storing DP and paths.


# Code
```typescript []
function shortestSuperstring(words: string[]): string {
    const n = words.length;
    
    // Step 1: Calculate the overlap between each pair of words
    const overlap: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                overlap[i][j] = getOverlap(words[i], words[j]);
            }
        }
    }

    // Step 2: Initialize DP and parent tables
    const dp: number[][] = Array.from({ length: 1 << n }, () => Array(n).fill(Infinity));
    const parent: number[][] = Array.from({ length: 1 << n }, () => Array(n).fill(-1));

    for (let i = 0; i < n; i++) {
        dp[1 << i][i] = words[i].length;
    }

    // Step 3: Fill DP table using bitmasking
    for (let mask = 1; mask < (1 << n); mask++) {
        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) === 0) continue;  // skip if word `i` is not in the mask
            const prevMask = mask ^ (1 << i);  // remove the current word from mask
            for (let j = 0; j < n; j++) {
                if ((prevMask & (1 << j)) === 0) continue;  // skip if word `j` is not in the mask
                const newLength = dp[prevMask][j] + overlap[j][i];
                if (newLength < dp[mask][i]) {
                    dp[mask][i] = newLength;
                    parent[mask][i] = j;
                }
            }
        }
    }

    // Step 4: Find the minimum length superstring
    let lastWord = -1;
    let minLength = Infinity;
    const finalMask = (1 << n) - 1;

    for (let i = 0; i < n; i++) {
        if (dp[finalMask][i] < minLength) {
            minLength = dp[finalMask][i];
            lastWord = i;
        }
    }

    // Step 5: Reconstruct the shortest superstring
    let mask = finalMask;
    const sequence: number[] = [];

    while (mask > 0) {
        sequence.push(lastWord);
        const prev = lastWord;
        lastWord = parent[mask][lastWord];
        mask ^= (1 << prev);  // remove the last word from the mask
    }

    sequence.reverse();  // reverse the sequence to get the correct order

    // Step 6: Build the superstring using the sequence and overlaps
    let result = words[sequence[0]];
    for (let i = 1; i < sequence.length; i++) {
        const overlapLen = overlap[sequence[i - 1]][sequence[i]];
        result += words[sequence[i]].substring(words[sequence[i]].length - overlapLen);
    }

    return result;
}

// Helper function to calculate the overlap between two words
function getOverlap(a: string, b: string): number {
    for (let len = Math.min(a.length, b.length); len > 0; len--) {
        if (a.endsWith(b.substring(0, len))) {
            return b.length - len;
        }
    }
    return b.length;
}

```