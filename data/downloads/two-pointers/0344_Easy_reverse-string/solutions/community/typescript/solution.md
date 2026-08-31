# ⟡ Two pointers / TS, JS

**Author:** denys-karakuta
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-string/solutions/4445697/](https://leetcode.com/problems/reverse-string/solutions/4445697/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    // Initialize pointers for the beginning and end of the string
    let start = 0;
    let end = s.length - 1;

    // Continue swapping characters until the pointers meet or cross
    while (start <= end) {
        // Swap the characters at the current start and end positions
        [s[start], s[end]] = [s[end], s[start]];

        // Move the pointers towards the middle of the string
        start++;
        end--;
    }
};
```