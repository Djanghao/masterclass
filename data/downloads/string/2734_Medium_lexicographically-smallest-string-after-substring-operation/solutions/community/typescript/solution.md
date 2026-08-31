# Easy to understand, beats 100%

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/4863857/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/4863857/)

---

## Intuition
The problem is to find the lexicographically smallest string that can be obtained by performing a specific substring operation. The operation allows replacing every character of a chosen non-empty substring by the previous character in the alphabetical order, except for 'a', which can be changed to 'z'. The given solution iteratively searches for the first occurrence of a character that is not 'a', as it represents the starting point for potential transformations. If the entire string consists of 'a's, the solution transforms the last 'a' to 'z' to minimize the string lexicographically. If not, it looks for the position where the next 'a' occurs after the identified start, indicating the end of the substring to transform. The transformation decreases each character's ASCII code by 1, effectively rolling it back in the alphabet.

## Approach
1. Iterate through the string to find the first character that is not 'a'.
2. If the entire string is 'a's, replace the last character with 'z' and return.
3. Find the index of the next 'a' after the initial non-'a' character, indicating the end of the substring to transform.
4. Define a `convert` function that decrements the ASCII code of each character in the substring, rolling it back in the alphabet.
5. Apply the `convert` function to the identified substring and concatenate it with the unchanged parts of the original string.

## Complexity
- **Time Complexity**: O(n) - The algorithm iterates over each character of the string at most twice (once to find the start of the substring to convert and another time during the conversion).
- **Space Complexity**: O(n) - The `convert` function creates a new string which, in the worst case, can be as long as the original string.

# Code
```
function smallestString(s: string): string {
    let i = 0;
    while (i < s.length) {
        if (s[i] !== 'a') {
            break;
        }

        i++;
    }
    if (i === s.length) {
        return s.slice(0, s.length - 1) + 'z';
    }

    const end = s.indexOf('a', i);
    const convert = (str: string) => {
        return str
            .split('')
            .map((char) => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');
    };

    if (end === -1) {
        return s.slice(0, i) + convert(s.slice(i));
    }
    return s.slice(0, i) + convert(s.slice(i, end)) + s.slice(end);
}
```