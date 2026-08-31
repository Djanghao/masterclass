# Simple solution, easy to understand

**Author:** RamonEspinosa
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/4664322/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/4664322/)

---

# Intuition
You need to loop through the array, but you should stop once the concatenation of the first few words has the same (or higher) length than `s` (or when you run out of items). 
# Approach
<!-- Describe your approach to solving the problem. -->
1. Declare an empty string (`concatenation`)
2. Loop through the array. Also check if `concatenation` is shorter than `s`. 
    2.1. Take the next item and append it to `concatenation`.
4. Compare if the string is the same as `s`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```

function isPrefixString(s: string, words: string[]): boolean {
    let concatenation = "";
    for (let i = 0; i < words.length && concatenation.length < s.length; i++) {
        concatenation += words[i];
    }
    return s === concatenation;
};
```