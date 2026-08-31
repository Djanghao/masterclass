# JavaScript O(1) Solution (1-line) w/ Explanation

**Author:** ahhreggi
**Votes:** 7
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1155744/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1155744/)

---

```
/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = (coordinates) => {
    return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
}
```

Explanation:

The "eveness" or "oddness" of a letter or number in the coordinate is represented by 0 (even) or 1 (odd).
For a letter, this is calculated using the Unicode code point % 2 (this works out since "a" = 97, "b" = 98, ...).
For a number, this is simply number % 2.

If the "evenness" of both the letter and number are the same (even/even or odd/odd), false is returned.
Otherwise, if the "evenness" of the letter and number are different (even/odd or odd/even), true is returned.