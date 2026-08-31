# Simple and Efficient Solution | Fully Explained 💯 | Beats 99.54% 🔥✨

**Author:** RockAdil
**Votes:** 7
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/4609502/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/4609502/)

---

# Intuition
The intuition behind the solution is to iterate through the digits of the given number and find the first occurrence of the specified digit. Once found, check if the next digit is greater than the specified digit. If it is, remove the digit at the current position; otherwise, continue searching. The goal is to remove the leftmost occurrence of the digit while maintaining the relative order of other digits.

# Approach
1. Initialize a variable `last` to keep track of the last occurrence of the specified digit.
2. Iterate through the digits of the given number.
3. When the specified digit is found, update `last` to the current index.
4. Check if the next digit is greater than the specified digit.
5. If it is, remove the digit at the current position using string slicing.
6. If not, continue searching for the next occurrence of the digit.
7. Finally, return the modified number.

# Complexity
- Time complexity:
O(n), where n is the length of the input number. In the worst case, we may need to iterate through all digits to find and remove the specified digit.

- Space complexity:
O(1), as the algorithm uses a constant amount of extra space regardless of the input size.

# Code
```
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let last;

    for (let i = 0; i < number.length; i++) {
        if (number[i] !== digit) continue;
        last = i;
        if (number[i + 1] <= digit) continue;
        return number.slice(0, i) + number.slice(i + 1);
    }
    return number.slice(0, last) + number.slice(last + 1);
};
```

**Happy Coding :)**

![upvote.jpeg](./images/0.jpeg)
