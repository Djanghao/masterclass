# [DP] Straightforward Javascript / Typescript solution with memoization

**Author:** milind905
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/3437384/](https://leetcode.com/problems/valid-palindrome-iii/solutions/3437384/)

---

# Approach
Given a string, recursively check the ends to see if they match. There are a few cases: 
1. String ends match -> no deletion required, continue checking by moving inwards from both the front and end (p1 += 1, p2 -= 1)
2. String ends don't match -> need to check the string with both the front character removed and then the string with the last character removed.
 - Check: (p1+1, p2) and (p1, p2-1)
3. String is of size 1 (p1 === p2) -> base case: string of size 1 is always a palindrome
4. String is of size 2 (p2-p1 === 1) -> base case where the string ends can be compared directly to see if the whole string is a palindrome or not (i.e the string is a palindrom if s[p2] === s[p1])

Every time we recurse down, we store how many deletions or "mistakes" are needed to make the string a palindrome. We can then memoize and reuse that solution so we're not checking the same combination of p1,p2 over and over again. 

Each recursive level returns the *minimum* number of deletions required to make the current string a palindrome. 

At the end we check to see if the minimum number of deletions <= K. 


# Complexity
- Time complexity: O(n^2) - with caching, there are only n^2 possible combinations call checkPalindrome on (n values for p1, n values for p2)
- Space complexity: O(n^2) - from caching solutions

# Code
```

function isValidPalindrome(s: string, k: number): boolean {
  let memo: number[][] = Array(s.length).fill(null).map( val => Array(s.length).fill(null) )

  const checkPalindrome = (p1: number, p2: number): number => {
    if(memo[p1][p2] !== null) return memo[p1][p2]

    let mistakes = 0
    if(p1 === p2) mistakes = 0
    else if (p2 - p1 === 1) mistakes = s[p1] === s[p2] ? 0 : 1
    else if(s[p1] === s[p2]) mistakes = checkPalindrome(p1+1, p2-1)
    else mistakes = 1 + Math.min(checkPalindrome(p1+1, p2), checkPalindrome(p1, p2-1))
    
    memo[p1][p2] = mistakes
    return mistakes
  }

  return checkPalindrome(0, s.length-1) <= k
};

```