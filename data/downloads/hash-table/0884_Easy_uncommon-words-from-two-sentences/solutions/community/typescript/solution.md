# Easy aproach with explanation

**Author:** raeezrazz
**Votes:** 4
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5796878/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5796878/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */var uncommonFromSentences = function(s1, s2) {
    // Create a new map to store the frequency of each word.
    let m = new Map()
    
    // Split the first sentence 's1' into an array of words.
    s1 = s1.split(' ')

    // Iterate through each word in the first sentence (s1).
    for (let i = 0; i < s1.length; i++) {
        // If the word already exists in the map, update its frequency (increase count by 1).
        if (m.has(s1[i])) {
            // m.get(s1[i]) returns the current count of the word, and we add 1 to it.
            m.set(s1[i], m.get(s1[i]) + 1)
        } else {
            // If the word doesn't exist in the map, add it with an initial frequency of 1.
            m.set(s1[i], 1)
        }
    }

    // Split the second sentence 's2' into an array of words.
    s2 = s2.split(' ')

    // Iterate through each word in the second sentence (s2).
    for (let i = 0; i < s2.length; i++) {
        // If the word already exists in the map (from s1 or s2), update its frequency.
        if (m.has(s2[i])) {
            // m.get(s2[i]) returns the current count of the word, and we add 1 to it.
            m.set(s2[i], m.get(s2[i]) + 1)
        } else {
            // If the word doesn't exist in the map, add it with an initial frequency of 1.
            m.set(s2[i], 1)
        }
    }

    // Create an empty array to store the result (uncommon words).
    let result = []

    // Iterate through the map to check the frequency of each word.
    for (let [key, val] of m) {
        // If the frequency of the word is exactly 1, it means the word is uncommon.
        if (val === 1) {
            // Add the uncommon word to the result array.
            result.push(key)
        }
    }

    // Return the array of uncommon words.
    return result
};
