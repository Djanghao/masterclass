# ✅ 1 Simplest Solution 100% (Loop each character)

**Author:** mlajkim
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/3051917/](https://leetcode.com/problems/palindrome-permutation/solutions/3051917/)

---



# Code (Loop each character)
- Here N is the length of given string
    - \u2605 Time Complexity O(N)
    - \u2606 Space Complexity O(1)
    - Explanation
        - Create an array with the length of 26 (# of alphabets)
        - Loop each character of the given string and flip true/false if found.
```
function canPermutePalindrome(s: string): boolean {
    const arr = Array(26).fill(false) // \u2606 O(26) or O(1)
    for (const c of s) {
        const index = c.charCodeAt(0) - "a".charCodeAt(0)
        arr[index] = !arr[index] 
    }

    // If 0, the length of the string is even & palindrome
    // If 1, the length of the string is odd & palindrome
    // If 2 or more, it is not palindrome
    // // \u2605 O(26) or O(1)
    return arr.filter(el => el === true).length <= 1
};
```

# Thank you

Upvote if you like \u2B06\uFE0F
Let me know if you have any questions on the comment section.