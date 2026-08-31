# Typescript sliding window solution

**Author:** antkhnvsk
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/3922530/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/3922530/)

---

# Intuition
- We should find the possible smallest substrings contained `a`,`b` and `c`. Then count all possible combinations counting all symbols on the left and right.

# Approach
- Create hash object to calculate every char occurances `{ a: 0, b: 0, c: 0 }`
- Find the possible smallest substrings contained `a`,`b` and `c`.
  <pre>
  cb<strong>bca</strong>
  -----
  c      { a: 0, b: 0, c: 1 }
  cb     { a: 0, b: 1, c: 1 }
  cbb    { a: 0, b: 2, c: 1 }
  cbbc   { a: 0, b: 2, c: 2 }
  cbbca  { a: 1, b: 2, c: 2 }
  </pre>
  - Using sliding window approach we're moving the right pointer.
- We captured <code>cb<strong>bca</strong></code>, but the min nice substring of it is <code><strong>bca</strong></code>. We starting move the left pointer until we didn't meet min nice substring.
- For a smallest substring, we should count the symbols to the left and right of it.
  <pre>
  cb<strong>bca</strong>c   
  cbbca   <- l: 2 r: 0
   bbca   <- l: 1 r: 0      
    bca   <- l: 0 r: 0      
  cbbcac  <- l: 2 r: 1  |  
   bbcac  <- l: 1 r: 1  | left * right
    bcac  <- l: 0 r: 1  |  
  </pre>
  - Each expanding symbol to the left and right of the min substring gives us a new combination.
  - We couldn't just sum left and right symbols - we had to multiply them for all combinations.
  - Multiplication is done by: 
    - incremeting left pointer in a while cycle
    - sum right symbols for every left pointer position
    - until we didn't meet min nice substring
- For a non-first substring, we shouldn't count substrings that have already been counted.
  <pre>
  1. <strong>acb</strong>bcac
     ...
     acbbca    <- first occurrence  
  2. acb<strong>bca</strong>c
     acbbca    <- second occurrence (already counted)
  </pre>
  - This is done as we use left pointer which don't move backwards.

# Code
```
function numberOfSubstrings(s: string): number {
  let count = 0;
  let chars = { a: 0, b: 0, c: 0 };
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    chars[s[right]]++;
    
    while (chars.a && chars.b && chars.c) {
      count += s.length - right;
      chars[s[left++]]--;
    }      
  }
  
  return count;
};
```