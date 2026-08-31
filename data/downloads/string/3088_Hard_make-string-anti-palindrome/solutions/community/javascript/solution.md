# JavaScript | Greedy

**Author:** costa73
**Votes:** -1
**Link:** [https://leetcode.com/problems/make-string-anti-palindrome/solutions/4903513/](https://leetcode.com/problems/make-string-anti-palindrome/solutions/4903513/)

---

# Approach
```
function makeAntiPalindrome(s) {
    const MIDDLE = s.length / 2;

    const count = countChars(s);

    // If any of the characters occupies more than half of the string
    // it is not possible to balance it
    if (Math.max(...count) > MIDDLE) return "-1";
    
    const result = [];

    // Fill in the resulting array in lexicollogical order
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 26; j++) {
            // If this character was used up -> check next one
            if (!count[j]) continue;
    
            // If this character matches its pair (s[i] == s[n - i - 1]) -> check next character
            if (result[s.length - i - 1] == j) continue;

            count[j]--;
            result.push(j);
            break;
        }
    }

    return result.map(v => String.fromCharCode(v + 97)).join('');
};

function countChars(s) {
    const result = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i) - 97;
        result[charCode]++;
    }

    return result;
}
```

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$
