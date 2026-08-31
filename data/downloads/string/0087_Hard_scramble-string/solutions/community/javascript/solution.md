# Simple recursive solution + 3D array solution with detailed comments

**Author:** emmakuen
**Votes:** 5
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3358626/](https://leetcode.com/problems/scramble-string/solutions/3358626/)

---

## Simpler, recursive solution (cache + pruning)
```
// helper function that checks if the two strings have the same characters
const hasSameChars = (word1, word2) => {
  // If the two words have different lengths, they can't have the same characters
  if (word1.length !== word2.length) return false;

  // Create an object to keep track of the count of each character in the two words
  const charCount = {};

  // Loop through each character in the two words and update the character count
  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    charCount[char1] = char1 in charCount ? charCount[char1] + 1 : 1;
    charCount[char2] = char2 in charCount ? charCount[char2] - 1 : -1;
  }

  // If any character count is not zero, the two words don't have the same characters
  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};

var isScramble = function (s1, s2, memo = {}) {
  // Create a key for the memoization object
  const key = `${s1}-${s2}`;

  // If the result for this key has already been calculated, return it
  if (key in memo) return memo[key];

  // If the two strings are equal, s1 can be scrambled to get s2
  if (s1 === s2) return true;

  // If the two strings don't have the same characters, s1 can't be scrambled to get s2
  if (!hasSameChars(s1, s2)) {
    memo[key] = false;
    return false;
  }

  // Try all possible splits of s1 and s2 and recursively check if the resulting substrings can be scrambled
  const length = s1.length;

  for (let i = 1; i < length; i++) {
    if (
      (isScramble(s1.slice(0, i), s2.slice(0, i), memo) &&
        isScramble(s1.slice(i), s2.slice(i), memo)) ||
      (isScramble(s1.slice(0, i), s2.slice(length - i), memo) &&
        isScramble(s1.slice(i), s2.slice(0, length - i), memo))
    ) {
      memo[key] = true;
      return true;
    }
  }

  // If none of the splits worked, s1 can't be scrambled to get s2
  memo[key] = false;
  return false;
};
```
The time complexity of this solution is not optimal, and it's possible to solve this problem more efficiently using dynamic programming. The basic idea is to use a 3D array to store the intermediate results of the recursive calls, so that we can avoid repeating the same computation multiple times.

## Dynamic Programming Solution
```
var isScramble = function (s1, s2) {
  const totalLength = s1.length;

  // Initialize a 3D array to store the intermediate results
  const canScramble = new Array(totalLength + 1)
    .fill(null)
    .map(() =>
      new Array(totalLength)
        .fill(null)
        .map(() => new Array(totalLength).fill(false))
    );

  // Initialize the base case where the two strings have length 1
  for (let i = 0; i < totalLength; i++) {
    for (let j = 0; j < totalLength; j++) {
      canScramble[1][i][j] = s1[i] === s2[j];
    }
  }

  // Solve the subproblems in a bottom-up manner
  for (let len = 2; len <= totalLength; len++) {
    for (let i = 0; i <= totalLength - len; i++) {
      for (let j = 0; j <= totalLength - len; j++) {
        for (let k = 1; k < len; k++) {
          // Partition s1[0,len] into two parts: s1[0,k] and s1[k,len]
          // Check if s1[0,k] can be scrambled to get s2[0,k]
          const canScrambleLeft = canScramble[k][i][j];
          // Check if s1[k,n] can be scrambled to get s2[k,n]
          const canScrambleRight = canScramble[len - k][i + k][j + k];
          // Check if s1[0,k] can be scrambled to get s2[len-k,n]
          const canScrambleLeftReverse = canScramble[k][i][j + len - k];
          // Check if s1[k,n] can be scrambled to get s2[0,len-k]
          const canScrambleRightReverse = canScramble[len - k][i + k][j];

          // Check if s1[0,k] can be scrambled to get s2[0,k] and s1[k,n] can be scrambled to get s2[k,n]
          // OR if s1[0,k] can be scrambled to get s2[len-k,n] and s1[k,n] can be scrambled to get s2[0,len-k]
          if (
            (canScrambleLeft && canScrambleRight) ||
            (canScrambleLeftReverse && canScrambleRightReverse)
          ) {
            // If either case is true, s1[0,len] can be scrambled to get s2[0,len]
            canScramble[len][i][j] = true;
            break;
          }
        }
      }
    }
  }

  // The answer is stored in canScramble[n][0][0]
  return canScramble[totalLength][0][0];
};
```
This solution uses a dynamic programming approach to solve the problem of determining whether one string can be scrambled into another. The idea behind dynamic programming is to solve a problem by breaking it down into smaller subproblems and storing the results of these subproblems in memory so that we can avoid recalculating them.

To solve this problem, we create a 3D boolean array called canScramble to store intermediate results. canScramble[k][i][j] represents whether the substring of s1 starting at index i and of length k can be scrambled into the substring of s2 starting at index j and of length k.

The base case for our dynamic programming approach is when both strings have length 1. In this case, we simply compare the two characters at the same index in both strings and store the result.

Next, we solve the subproblems in a bottom-up manner. We start by looking at substrings of length 2, then length 3, and so on, until we reach the length of the entire string. For each substring of length len, we consider all possible ways to split the substring into two parts, with lengths k and len - k. We then check if the two parts of s1 can be scrambled into the corresponding parts of s2. We do this by checking the following conditions:

1) The first part of s1 can be scrambled into the first part of s2 and the second part of s1 can be scrambled into the second part of s2.
2) The first part of s1 can be scrambled into the second part of s2 and the second part of s1 can be scrambled into the first part of s2.

If any of these conditions is true, then we can scramble the substring of s1 into the substring of s2. We store the result in canScramble[len][i][j].

Finally, we return the value of canScramble[n][0][0], which represents whether the entire s1 can be scrambled into s2.
