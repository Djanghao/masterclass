# TypeScript one-liner

**Author:** jamauss
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1482473/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1482473/)

---

```
const squareIsWhite = (coordinates: string): boolean => {

    // the coordinates starting with the letter A works well since the char code
    // for a is 97.  If the result of charCodeAt and the number mod 2 are different
	// like 1 === 0 or 0 === 1 then return true, else return false.
    return coordinates.charCodeAt(0) % 2 !== Number(coordinates[1]) % 2;

};
```
more `TypeScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode