# Easy solution with each steps

**Author:** shamnad_skr
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/6109902/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/6109902/)

---

# Intuition
To solve this problem, we need to identify the longest word in the array that can be built incrementally by adding one character at a time, using the other words in the array as "building blocks." If there is a tie, we choose the lexicographically smallest word.

# Approach

1. Sort the words array:
    - Primarily by length in ascending order.
    - For words of the same length, by lexicographical order.
    - This ensures shorter prefixes are processed first.
2. Use a Set for Tracking Valid Words:

     - Use a Set to store valid prefixes that can form the words.
    - Start with an empty word "" as a valid prefix.

3. Iterate Through Words:

    - For each word in the sorted list:
    - Check if removing the last character (i.e., word.slice(0, word.length - 1)) is a valid word in the set.
    - If yes, add the current word to the set.
4. Keep Track of the Longest Word:

    - Update the result with the current word if it is longer than the previous result or is lexicographically smaller in case of ties.
5. Return the Result:
    - After iterating through all words, return the longest valid word.

# Complexity
- Time complexity:O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n*m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function longestWord(words: string[]): string {

    // Sort words by length and lexicographical order
    words.sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length);
    
    let validWords = new Set([""]); // Initialize with an empty string
    let result = "";
    
    for (let word of words) {
        
        // Check if the word's prefix is in the valid set
        if (validWords.has(word.slice(0, word.length - 1))) {
            validWords.add(word); // Add the word to the valid set
            // Update result if this word is longer or lexicographically smaller
            if (word.length > result.length || (word.length === result.length && word < result)) {
                result = word;
            }
        }
    }

    
    return result;
    
};
```