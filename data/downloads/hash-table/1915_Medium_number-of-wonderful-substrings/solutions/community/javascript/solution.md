# Beats 100% runtime and memory

**Author:** Nbekdev
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090706/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5090706/)

---

image.png\r
![image.png](./images/0.png)\r
\r
# Code\r
```\r
/**\r
 * @param {string} word\r
 * @return {number}\r
 */\r
function wonderfulSubstrings(word) {\r
    let count = 0;\r
    const n = word.length;\r
    const freq = new Array(1024).fill(0); // Array to store frequencies of characters\r
    freq[0] = 1; // Initialize with an empty substring\r
    \r
    let bitmask = 0; // Bitmask to represent frequency of characters\r
    \r
    // Iterate over all characters\r
    for (let i = 0; i < n; i++) {\r
        const charIndex = word.charCodeAt(i) - 'a'.charCodeAt();\r
        bitmask ^= 1 << charIndex; // Toggle the bit for the current character\r
        \r
        // Increase count for wonderful substrings\r
        count += freq[bitmask];\r
        \r
        // Update frequencies array\r
        for (let j = 0; j < 10; j++) {\r
            const newBitmask = bitmask ^ (1 << j);\r
            count += freq[newBitmask];\r
        }\r
        \r
        freq[bitmask]++;\r
    }\r
    \r
    return count;\r
}\r
```