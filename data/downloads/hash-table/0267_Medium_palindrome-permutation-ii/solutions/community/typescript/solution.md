# Backtracking - Typescript

**Author:** jbernier
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/5090523/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/5090523/)

---

# Intuition

We'll use backtracking to generate all palindrome permutations. In each iteration, we'll wrap the current string combination with two of the same letters, while keeping track of a frequency counter of the current combination.

# Approach

First we'll create a frequency map of every character in the string.

If there is more than one character with an odd number of occurences, then it is not possible to generate any palindromes.

The backtracking function will start with any character that has an odd number of occurences, otherwise with an empty string.

Each iteration of the backtracking function will slowly wrap the string combination in more letters until we've used up all letters. We'll use a frequency counter to keep track of the remaining characters in the existing combination.

So for example, a permutatoin for the input string `"axbab` might be generated like this:

- `"x"` (since `"x"` occurs an odd number of times in the input string)
- `"axa"` - Wrap `"x"` with two `"a"` letters, and decrement `freqCounter`
- `"baxab"` - Wrap `"axa"` with two `"b"` letters.



# Complexity
- Time complexity: $$O(N!)$$

- Space complexity: $$O(N)$$

# Code
```
function generatePalindromes(s: string): string[] {
    // Map each letter to # of occurences
    const freqMap = new Map<string, number>();
    for (const ch of s) {
      freqMap.set(ch, (freqMap.get(ch) ?? 0) + 1);
    }
    // Letter with odd # of occurences
    let oddChar : string | null = null;
    for (const [ch, val] of freqMap) {
      if (val % 2 === 1) {
        // There cannot be more than one letter with odd # of occurences
        if (oddChar != null) return [];
        oddChar = ch;
      }
    }

    const ans: string[] = [];

    const getPermutations = (combination: string, freqMap: Map<string, number>) => {
      if (combination.length === s.length) {
        ans.push(combination);
        return;
      }
      for (const [ch, val] of freqMap) {
        if (val <= 0) continue;
        const freqMapClone = new Map(freqMap);
        // We're going to add two letters to the palindrome
        freqMapClone.set(ch, freqMapClone.get(ch) - 2);
        // Surround previous combination with two letters
        getPermutations(ch + combination + ch, freqMapClone)
      }
    }

    // If we have an odd letter, we'll start with that letter in
    // the center of the initial combination so decrement by 1
    if (oddChar != null) {
      freqMap.set(oddChar, freqMap.get(oddChar) - 1)
    }

    getPermutations(oddChar ?? '', freqMap);

    return ans;
};
```