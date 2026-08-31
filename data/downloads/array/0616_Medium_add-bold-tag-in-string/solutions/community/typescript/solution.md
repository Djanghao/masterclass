# 100% | Knuth-Morris-Pratt | Time: O(NW) | Space: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/6031721/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/6031721/)

---

# Complexity

- Time complexity: $$O(NW)$$

- Space complexity: $$O(N)$$

# Code

```typescript []
function addBoldTag(s: string, words: string[]): string {
    const N = s.length;
    const bold = new Array(N+1).fill(0);

    for (const word of words) {
        const lps = getLPSTable(word);
        const W = word.length;

        let j = 0;
        for (let i = 0; i < N; ++i) {
            while (j >= 0 && s[i] != word[j]) {
                j = lps[j];
            }
            if (++j >= W) {
                ++bold[i + 1 - W]; 
                --bold[i + 1];
            }
        }
    }

    let b = 0;
    const sb = s.split("");
    for (let i = 0; i < N; ++i) {
        b += bold[i];
        if (b <= 0) {
            continue;
        }
        if (b <= bold[i]) {
            sb[i] = "<b>" + sb[i];
        }
        if (b <= -bold[i+1]) {
            sb[i] +="</b>";
        }
    }

    return sb.join("");
}

/**
 * Gets the Longest Proper Suffix (LPS) array.
 * Used by the Knuth-Morris-Pratt (KMP) algorithm.
 */
function getLPSTable(s: string): number[] {
    const N = s.length;
    const lps = new Array(N+1).fill(0);
    lps[0] = -1;

    let j = 0;
    for (let i = 1; i < N; lps[++i] = ++j) {
        while (j >= 0 && s[i] != s[j]) {
            j = lps[j];
        }
    }

    return lps;
}
```

```javascript []
/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
function addBoldTag(s, words) {
    const N = s.length;
    const bold = new Array(N+1).fill(0);

    for (const word of words) {
        const lps = getLPSTable(word);
        const W = word.length;

        let j = 0;
        for (let i = 0; i < N; ++i) {
            while (j >= 0 && s[i] != word[j]) {
                j = lps[j];
            }
            if (++j >= W) {
                ++bold[i + 1 - W]; 
                --bold[i + 1];
            }
        }
    }

    let b = 0;
    const sb = s.split("");
    for (let i = 0; i < N; ++i) {
        b += bold[i];
        if (b <= 0) {
            continue;
        }
        if (b <= bold[i]) {
            sb[i] = "<b>" + sb[i];
        }
        if (b <= -bold[i+1]) {
            sb[i] +="</b>";
        }
    }

    return sb.join("");
}

/**
 * Gets the Longest Proper Suffix (LPS) array.
 * Used by the Knuth-Morris-Pratt (KMP) algorithm.
 * 
 * @param {string} s
 * @return {number[]}
 */
function getLPSTable(s) {
    const N = s.length;
    const lps = new Array(N+1).fill(0);
    lps[0] = -1;

    let j = 0;
    for (let i = 1; i < N; lps[++i] = ++j) {
        while (j >= 0 && s[i] != s[j]) {
            j = lps[j];
        }
    }

    return lps;
}
```