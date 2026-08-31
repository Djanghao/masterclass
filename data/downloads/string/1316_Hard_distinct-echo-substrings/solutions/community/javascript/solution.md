# 1316. Distinct Echo Substrings Solution

**Author:** jamessalinas
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/6117368/](https://leetcode.com/problems/distinct-echo-substrings/solutions/6117368/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This solution uses a two-loop approach to find all possible echo substrings. The outer loop iterates through possible lengths of substrings (up to half the string length). The inner loop checks each possible starting position for substrings of current length. For each position, compare two adjacent substrings of equal length. If they match, add the substring to a set to track unique occurrences.  

This algorithm efficiently finds all distinct echo substrings in the given text using a two loop approach. 

# Approach
<!-- Describe your approach to solving the problem. -->
Set (n) to 'length of text'. Set (seen) to 'new Set()'. For length from 1 to 'n / 2', for i from 0 to 'n - 2 * length + 1', set (firstHalf) to 'text.slice(i, i + length)'. Set (secondHalf) to 'text.slice(i + length, i + 2 * length)'. If firstHalf is equal to secondHalf, add (firstHalf) to 'seen'. Return 'seen.size'. 

We only need to check lengths up to half the string length since echo substrings must be paired. We use a Set to automatically handle duplicate substrings. We compare We compare adjacent substrings of equal length to find echo patterns. We carefully manage substring positions to avoid out-of-bounds errors. 

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The algorithm has O(n^3) time complexity where n is the length of the text: the outer loop runs 'n / 2' times. The inner loop runs n times. The string comparison takes O(n) time. 

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The algorithm has O(n^2) space complexity to store the unique substrings in the set.

# Code
```javascript []
/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    const n = text.length;
    const seen = new Set();
    
    for (let length = 1; length <= n / 2; length++) {
        for (let i = 0; i < n - 2 * length + 1; i++) {
            const firstHalf = text.slice(i, i + length);
            const secondHalf = text.slice(i + length, i + 2 * length);
            
            if (firstHalf === secondHalf) {
                seen.add(firstHalf);
            }
        }
    }
    
    return seen.size;
};
```