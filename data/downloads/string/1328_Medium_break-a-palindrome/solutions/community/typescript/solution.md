# Optimally Breaking a Palindrome to Achieve the Lexicographically Smallest String

**Author:** hackpoint
**Votes:** 0
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/5398082/](https://leetcode.com/problems/break-a-palindrome/solutions/5398082/)

---

# Intuition
My first thought was that since a palindrome reads the same forwards and backwards, changing any character symmetrically should break the palindrome. To make the smallest lexicographical change, the best strategy is to replace the leftmost non-'a' character with 'a'. If the palindrome consists entirely of 'a's, the smallest change would be to replace the last character with 'b'.

# Approach
Check if the palindrome's length is 1. If so, return an empty string since it's impossible to make a non-palindromic string with a single character.
Traverse the string from the start to the middle.
Look for the first character that is not 'a'. Replace this character with 'a' and return the new string immediately.
If all characters in the first half of the string are 'a', then change the last character to 'b' to make the smallest lexicographical non-palindromic string.

Time complexity:
*O(n)*, where n is the length of the palindrome. This is because, in the worst case, we might need to traverse half of the string.

Space complexity:
*O(1)*, since we are modifying the string in place and not using any extra space proportional to the input size.

# Code
```
function breakPalindrome(palindrome: string): string {
     const len = palindrome.length;

    // Check if the palindrome is of length 1
    if (len === 1) {
        return ""; // Cannot form a non-palindromic string
    }

    // Traverse the string from left to right up to the middle
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (palindrome[i] !== 'a') {
            // Replace the first non-'a' character with 'a'
            return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);
        }
    }

    // If all characters are 'a', change the last character to 'b'
    return palindrome.substring(0, len - 1) + 'b';
};
```