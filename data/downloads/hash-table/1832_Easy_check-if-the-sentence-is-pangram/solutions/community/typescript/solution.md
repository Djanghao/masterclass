# JS/TS one-liner using Set || Beats 94%

**Author:** cimbraien
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/3189427/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/3189427/)

---

# Intuition
Javascript's set contains only unique values, and total of lowercase english alphabet is 26.

# Approach
1. We split the characters in the sentence into an array.
2. Convert the array into a set.
3. Check if the set's size is equal to 26.

# Complexity
- Time complexity:
$$O(n)$$

# Code
```
function checkIfPangram(sentence: string): boolean {
    return new Set(sentence.split("")).size == 26;
};
```