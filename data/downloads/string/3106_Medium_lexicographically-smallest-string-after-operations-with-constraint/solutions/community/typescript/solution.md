# Greedy Approach using Typescript

**Author:** nikhilvb2
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985977/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4985977/)

---

# Intuition
The problem requires converting a given string s to the lexicographically smallest string while keeping the sum of the characters' ASCII values equal to k. One intuitive approach is to iterate through the string characters and replace them with 'a' if possible to minimize their ASCII values.

# Approach
1. Convert the input string s into an array of characters.
2. Iterate through each character in the array.
3. For each character:
    - Calculate the distance from 'a' (distanceFromA) and its cyclic distance from 'a' (cyclicDistanceFromA).
    - If cyclicDistanceFromA is less than or equal to k, replace the character with 'a' and subtract cyclicDistanceFromA from k.
    - If cyclicDistanceFromA is greater than k, replace the character with a character that has a smaller ASCII value, as close to 'a' as possible.
4. Join the array of characters back into a string and return it.
Complexity

# Complexity
- Time complexity: O(n), where n is the length of the input string s. We iterate through each character in the string once.
- Space complexity: O(n), where n is the length of the input string s. We store the characters of the string in an array.

# Code
```
function getSmallestString(s: string, k: number): string {
    const str: string[] = s.split("");

    for (let i = 0; i < str.length && k >= 0; i++) {
        const distanceFromA: number = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const cyclicDistanceFromA: number = Math.min(distanceFromA, 26 - distanceFromA);
        
        if (cyclicDistanceFromA <= k) {
            str[i] = 'a';
            k -= cyclicDistanceFromA;
        } else {
            str[i] = String.fromCharCode(str[i].charCodeAt(0) - k);
            k = 0;
        }
    }

    return str.join("");
}

```