# Easy to understand TypeScript solution

**Author:** VERSAYANA
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/2888533/](https://leetcode.com/problems/longest-palindrome/solutions/2888533/)

---

First, we create a map to store the frequency of each character

For characters with even frequency, we can use all instances of them because we can split them evenly on either side of the string

We can only use all instances of one character with odd frequency in the middle, so if we have more than one character with odd frequency, we use one less instance of each.


# Code
```
function longestPalindrome(s: string): number {
  let result = 0;
  // Create a map to store the frequency of each character
  const characterToFrequency = new Map<string, number>();
  for (const c of s) {
    const currentFrequency = characterToFrequency.get(c);
    if (currentFrequency === undefined) {
      characterToFrequency.set(c, 1);
    } else {
      characterToFrequency.set(c, currentFrequency + 1);
    }
  }

  let isThereAnyOddFrequencies = 0;
  for (const [_, frequency] of characterToFrequency) {
    if (frequency % 2 === 0) {
      // For characters with even frequency, we can use all instances of them
      // because we can split them evenly on either side of the string
      result += frequency;
    } else {
      // We can only use all instances of one character with odd frequency in the middle,
      // so if we have more than one character with odd frequency, we use one less instance of each.
      result += frequency - 1;
      isThereAnyOddFrequencies = 1;
    }
  }

  return result + isThereAnyOddFrequencies;
}
```