# 🚀 Easy 💡 solution with each steps  🤾

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/6079871/](https://leetcode.com/problems/shortest-completing-word/solutions/6079871/)

---

# Intuition
1. Extract only the letters from licensePlate, ignoring numbers and spaces, and count the frequency of each letter.
2. Treat the letters as case-insensitive.
3. For each word in words, check if it contains all the letters with the required frequency.
4. Return the shortest word that satisfies the conditions.

# Approach
1. Normalize the license plate:
    - Extract only the alphabetic characters and convert them to lowercase.
    - Count the frequency of each letter using a frequency map.
2. Check words against the frequency map:
    - For each word, create a frequency map.
    - Verify if the word contains all the required characters with at least the same frequency.
3. Find the shortest completing word:

    - Iterate through words and keep track of the shortest valid word.
4. Return the shortest valid word. If multiple words have the same length, the first one encountered is returned.

# Complexity
- Time complexity:
O(m+n\u22C5k)where:
m is the length of licensePlate.
n is the number of words in words.
k is the average length of a word in words.

- Space complexity:
O(1)

# Code
```typescript []
function shortestCompletingWord(licensePlate: string, words: string[]): string {
    

     // Function to count frequency of letters in a string
    function countFrequency(str: string): Record<string, number> {
        const frequency: Record<string, number> = {};

        for (const char of str) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        return frequency;
    }

    // keep only letters and convert to lowercase
    const normalizedPlate = licensePlate
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    // Count frequency of letters in the license plate
    const plateFreq = countFrequency(normalizedPlate);

    // Function to check if a word meets the requirements
    function isCompletingWord(word: string): boolean {
        const wordFreq = countFrequency(word);

        for (const [char, count] of Object.entries(plateFreq)) {
            if ((wordFreq[char] || 0) < count) return false;
        }
        
        return true;
    }

    // Find the shortest completing word
    let result = "";
    for (const word of words) {
        if (
            isCompletingWord(word) &&
            (result === "" || word.length < result.length)
        ) {
            result = word;
        }
    }

    return result;
};
```