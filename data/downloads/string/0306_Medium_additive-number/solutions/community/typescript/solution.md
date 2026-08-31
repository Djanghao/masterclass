# TypeScript solution with a simple explanation and comments

**Author:** THammami01
**Votes:** 0
**Link:** [https://leetcode.com/problems/additive-number/solutions/4881347/](https://leetcode.com/problems/additive-number/solutions/4881347/)

---

# Approach
- If we can identify the first and second sub-numbers, we can then calculate the total number just using origin's length. e.g.: Given `199100199`, if we can identify the two firt number `1` and `99`, then we can calculate the rest; `1` + `99` = `100`, `99` + `100` = `199`, etc. The concatenation of those number here should be  `199100199` which is equal to the original one, so we can confirm that it is additive.
- We should ensure that the first sub-number is either zero, or doesn't start with zero if it is bigger than `9`, same for the second.

# Complexity
- Time complexity: O(n^3) \u2014 `n` is the length of `num`
- Space complexity: O(n) \u2014 `n` is the length of `num`

# Code
```
const getAdditiveNumberBasedOnLen = (firstNb: string, secondNb: string, nbLen: number): string => {
    let subNbs = [firstNb, secondNb]; // ARRAY CONTAINING SUB-NUMBERS
    let tempLen = subNbs[0].length + subNbs[1].length; // LENGTH OF THE SUB-NUMBERS IF CONCATENATED

    while (tempLen < nbLen) {
        const beforeLastNum = Number(subNbs[subNbs.length - 2]); // BEFORE LAST SUB-NUMBER
        const lastNum = Number(subNbs[subNbs.length - 1]); // LAST SUB-NUMBER

        subNbs.push(String(beforeLastNum + lastNum)); // PUSH THEIR SUM

        tempLen += subNbs[subNbs.length - 1].length; // ADD THE SUM'S LENGTH TO `tempLen`
    }

    return subNbs.join(""); // JOIN ALL SUB-NUMBERS AND RETURN IT AS A STRING
};

const isAdditiveNumber = (num: string) => {
  // startIdx AND endIdx REPRESENT THE START AND END INDICES OF THE SECOND SUB-NUMBER
  for (let startIdx = 1; startIdx < num.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx < num.length; endIdx++) {
      // HANDLING THE CASE OF 'Numbers in the additive sequence cannot have leading zeros'
      // IF THE SECOND SUB-NUMBER HAS LEADING ZEROS AND IS BIGGER THAN 9, BREAK, INCREMENT START INDEX, AND CHECK THE NEXT SECOND SUB-NUMBER
      if (num[startIdx] === "0" && endIdx - startIdx > 1) break;

      const firstNb = num.slice(0, startIdx);
      const secondNb = num.slice(startIdx, endIdx);
      // UP UNTIL HERE, THE PURPOSE IS TO GET THE FIRST AND SECOND SUB NUMBERS

      // GIVEN THE FIRST AND SECOND SUB NUMBERS, GET THE ADDITIVE NUMBER BASED ON `num.length`
      const additiveNbBasedOnLen = getAdditiveNumberBasedOnLen(
        firstNb,
        secondNb,
        num.length
      );

      // IF THE PARAM AND CALCULATED ADDITIVE NUMBERS ARE EQUAL, RETURN TRUE
      if (additiveNbBasedOnLen === num) return true;
    }

    if(num[0] === '0') return false; // IF THE FIRST SUB-NUMBER'S LENGTH IS GREATER THAN ONE AND ITS FIRST DIGIT IS ZERO, RETURN FALSE
  }

  return false; // NO VALID ADDITIVE NUMBER FOUND
};

```