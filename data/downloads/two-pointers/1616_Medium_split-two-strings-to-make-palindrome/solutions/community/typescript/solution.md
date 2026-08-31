# Two pointers

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4827079/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4827079/)

---

## Intuition

The goal is to determine if it's possible to make a palindrome by taking a prefix from one string and a suffix from another. This problem can be approached by trying to match characters from the start of one string with characters from the end of the other. When a mismatch is encountered, there are two possibilities to explore: either the remaining substring of the first string is a palindrome, or the remaining substring of the second string is a palindrome.

## Approach

1. **Check both combinations:** Since either string can serve as the prefix or the suffix, check both possibilities: `a` as the prefix and `b` as the suffix, and vice versa.
2. **Matching phase:** Compare characters from the beginning of the prefix string with characters from the end of the suffix string. Continue this process until a mismatch is found.
3. **Check for palindrome:** Once a mismatch is encountered, check two possibilities:
   - The substring from the current left index to the right index in the prefix string is a palindrome.
   - The substring from the current left index to the right index in the suffix string is a palindrome.
4. If either condition is true, it's possible to form a palindrome by splitting and combining the two strings accordingly.

## Complexity

- **Time Complexity:** O(n), where `n` is the length of the strings. In the worst case, the algorithm performs a linear scan twice: once for matching characters and once for verifying if the remaining substring is a palindrome.
- **Space Complexity:** O(1). The space used by the algorithm is constant, not counting the input strings, as it only uses a few variables for indices and conditions.

# Code
```
function checkPalindromeFormation(a: string, b: string): boolean {
    return canSplit(a, b) || canSplit(b, a);
}

function isPalindrome(s: string, left: number, right: number) {
    while (left < right) {
        if (s[left++] !== s[right--]) {
            return false;
        }
    }
    return true;
}

function canSplit(prefix: string, suffix: string): boolean {
    let left = 0;
    let right = suffix.length - 1;
    while (left < right) {
        if (prefix[left] !== suffix[right]) {
            break;
        }

        left++;
        right--;
    }

    return (
        isPalindrome(prefix, left, right) || isPalindrome(suffix, left, right)
    );
}
```