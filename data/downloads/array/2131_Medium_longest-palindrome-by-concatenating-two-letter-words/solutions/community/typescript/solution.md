# TypeScript one pass with a map

**Author:** innkya
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/3506406/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/3506406/)

---

# Approach

Greedily build up the palindrome as words are added to the map. There are only 2 common cases and 1 special case to consider:
1. The current word is "XX": whenever the count reaches an even number, increase the total length by 4.
2. The current word is "XY": check if the count of "XY" (at least 1 because we are looking at it right now) is smaller than or equal to "YX", if so, it means the current "XY" can form a palindrome a previous visited "YX", thus increase the total length by 4.

Special case: at most 1 orphan "XX" word can be placed in the middle to increase the total length by 2. We just need a counter to keep track of orpahn "XX"-style words.

# Code
```
function longestPalindrome(words: string[]): number {
    const map = new Map();
    let result = 0, orphanXXCount = 0;

    for (let i = 0; i < words.length; i ++) {
        const reverseWord = `${words[i][1]}${words[i][0]}`;
        const count = (map.get(words[i]) ?? 0) + 1;
        map.set(words[i], count);

        // Case 1: words in the form of "XX"
        if (words[i] === reverseWord) {
            // Got a new pair, increase count.
            // Since the orphan formed a pair, decrease the orphan count
            if (count % 2 === 0) {
                result += 4;
                orphanXXCount--;
            } else {
                orphanXXCount++;
            }
        }
        // Case 2: words in the form of "XY"/"YX"
        // If the count of XY is catching up with YX, that means a new pair is formed
        else if (count <= map.get(reverseWord)) {
            result += 4;
        }
    }

    // Only 1 orphan "XX" word can be placed in the middle
    if (orphanXXCount > 0) {
        result += 2;
    }

    return result;
};
```