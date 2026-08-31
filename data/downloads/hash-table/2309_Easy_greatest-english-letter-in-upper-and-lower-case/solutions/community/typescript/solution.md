# Simple iteration from the end of the alphabet checking against input string using a set

**Author:** mnjk
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5941546/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5941546/)

---

# Intuition

We map the string input to a set which'll then check against each letter in the alphabet (both lower and upper case) iterating from the end of the alphabet.

# Approach

We first map the input character string to a set (data structure) and then use it to check against all letters (upper and lower case) in the (English) alphabet.

Since we want to have the *greatest English letter* we need to start from the end (therefore starting at `Z` and `z`).

The first time our if-condition in our loop satisfies this condition, will naturally be the required *greatest English letter*.

# Complexity
- Time complexity:
$$O(n)$$: The lion share is basically done checking the set content against each letter

- Space complexity:
$$O(n)$$: We need to store the number of the input character string (of course, we've also our `2x26` characters for lower and upper case letters, but it's constant)

# Code
```typescript []
function greatestLetter(s: string): string {

  const cs = new Set(s);

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 25; i >= 0; i--) {
    if (cs.has(lower[i]) && cs.has(upper[i])) return upper[i];
  }
    
  return '';
};
```