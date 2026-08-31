# 💥[EXPLAINED] Runtime beats 94.50%

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/5676464/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/5676464/)

---

# Intuition
Sliding Window: Efficiently checks substrings of the required length.


Hash Maps: Quickly verify if substring matches the concatenation of words.


# Approach
Preprocess: Calculate wordLength, totalLength, and create a frequency map of words.


Sliding Window: Slide a window of totalLength over s, checking word counts against the frequency map.


# Complexity
- Time complexity:
O(n * m), where n is the length of s and m is the product of the number of words and the length of each word.


- Space complexity:
O(m), used for the frequency map of words.


# Code
```typescript []
function findSubstring(s: string, words: string[]): number[] {
    const wordLength = words[0].length;
    const numberOfWords = words.length;
    const totalLength = wordLength * numberOfWords;
    const wordCount: Map<string, number> = new Map();
    const result: number[] = [];

    // Create frequency map for words
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    // Check for each possible starting point of the window
    for (let i = 0; i < wordLength; i++) {
        const seenWords: Map<string, number> = new Map();
        let left = i;
        let right = i;
        let count = 0;

        while (right + wordLength <= s.length) {
            // Get the word from the right end of the window
            const word = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordCount.has(word)) {
                seenWords.set(word, (seenWords.get(word) || 0) + 1);
                count++;

                // If the word is more than expected, move left pointer
                while (seenWords.get(word)! > wordCount.get(word)!) {
                    const leftWord = s.substring(left, left + wordLength);
                    seenWords.set(leftWord, seenWords.get(leftWord)! - 1);
                    count--;
                    left += wordLength;
                }

                // Check if all words are matched
                if (count === numberOfWords) {
                    result.push(left);
                }
            } else {
                // Reset if the word is not in the frequency map
                seenWords.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
}

// Example usage:
const s1 = "barfoothefoobarman";
const words1 = ["foo", "bar"];
console.log(findSubstring(s1, words1)); // Output: [0, 9]

const s2 = "wordgoodgoodgoodbestword";
const words2 = ["word", "good", "best", "word"];
console.log(findSubstring(s2, words2)); // Output: []

const s3 = "barfoofoobarthefoobarman";
const words3 = ["bar", "foo", "the"];
console.log(findSubstring(s3, words3)); // Output: [6, 9, 12]

```