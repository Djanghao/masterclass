# JavaScript Solution for maxSubstringLength. Documented thoroughly

**Author:** tjreese90
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-self-contained-substring/solutions/5879770/](https://leetcode.com/problems/find-longest-self-contained-substring/solutions/5879770/)

---

# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
// Time Complexity: O(n) \u2014 We use a sliding window approach with constant time checks.
var maxSubstringLength = function(s) {
        const ALPHABET_SIZE = 26; // Total number of letters in the alphabet
        const OFFSET = 'a'.charCodeAt(0); // Offset for 'a' to map characters to 0-based index
        const INF = Number.POSITIVE_INFINITY; // Represent infinity
        
        // Step 1: Initialize frequency and position arrays
        const occurrences = new Array(ALPHABET_SIZE).fill(0); // Track the count of each character
        const pos = Array.from({ length: ALPHABET_SIZE }, () => [INF, -INF]); // Store min/max positions for each character

        // Step 2: Populate occurrences and pos arrays by iterating over the string
        for (let i = 0; i < s.length; i++) {
            const letterInd = s.charCodeAt(i) - OFFSET; // Convert char to 0-25 index
            occurrences[letterInd]++; // Count occurrences of the character
            pos[letterInd][0] = Math.min(i, pos[letterInd][0]); // Update min position
            pos[letterInd][1] = Math.max(i, pos[letterInd][1]); // Update max position
        }

        // Step 3: Create prefix frequency array
        const prefix = [occurrences.slice()]; // Prefix stores cumulative counts of characters from the start
        for (let i = 0; i < s.length; i++) {
            const currentCharIndex = s.charCodeAt(i) - OFFSET;
            const newPrefix = prefix[prefix.length - 1].slice(); // Copy the previous prefix array
            newPrefix[currentCharIndex]--; // Decrement the count of the current character
            prefix.push(newPrefix); // Push the updated prefix
        }

        let maxLen = -1; // Track the maximum length of a self-contained substring

        // Step 4: Iterate over each pair of characters to find valid substrings
        for (let i = 0; i < ALPHABET_SIZE; i++) {
            for (let j = 0; j < ALPHABET_SIZE; j++) {
                const l = pos[i][0]; // Leftmost position of character `i`
                const h = pos[j][1]; // Rightmost position of character `j`

                // Skip if the positions are invalid or if the substring spans the entire string
                if (l > h || (l === 0 && h === s.length - 1)) continue;

                const start = prefix[l]; // Prefix before the substring
                const stop = prefix[h + 1]; // Prefix after the substring
                const diffs = []; // Store characters that are different inside the substring
                let isValid = true; // Flag to check if the substring is valid

                // Step 5: Check the differences between `start` and `stop` for validity
                for (let k = 0; k < ALPHABET_SIZE; k++) {
                    if (start[k] !== stop[k]) {
                        if (stop[k] !== 0) { // If a character appears in the substring and after it
                            isValid = false;
                            break;
                        }
                        diffs.push(k); // Track the character that is different
                    }
                }

                // Step 6: Validate if the differing characters only appear inside the substring
                if (isValid) {
                    for (let k of diffs) {
                        if (start[k] !== prefix[0][k]) { // Check if the different character appears at the start
                            isValid = false;
                            break;
                        }
                    }
                }

                // Step 7: If the substring is valid, update the max length
                if (isValid) {
                    maxLen = Math.max(maxLen, h + 1 - l);
                }
            }
        }

        return maxLen; // Return the maximum length of the self-contained substring
    }



// Intial Approach:
// Sliding Window Approach: We will use a sliding window to check each substring for the self-contained property.

// Track Frequency: As we move the window, we need to count the frequency of characters inside and outside the substring.

// Check Condition: For each window, if every character in the substring exists only inside and not outside, we consider it a valid self-contained substring.

// Return the Longest: Finally, return the length of the longest valid self-contained substring or -1 if no such substring exists.
```