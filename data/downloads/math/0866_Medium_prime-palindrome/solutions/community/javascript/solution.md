# [JavaScript] 866. Prime Palindrome

**Author:** pgmreddy
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/4380486/](https://leetcode.com/problems/prime-palindrome/solutions/4380486/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

```
1 Check for these test inputs
       2 3 5 7      11 88     101 102 131 930     100000000

2 Logic
is some what like below

For each number
   reverse it
   Join   number + reverse (cut 1 digit from reverse at begin)
   Check if this concatinated number >=n , and is prime
       If so, this is our answer

```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
var isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function primePalindrome(n) {
  if (n >= 8 && n <= 11) return 11
  const numOfDigits = ('' + n).length
  for (let i = numOfDigits; i < 10 ** numOfDigits; i++) {
    const str = '' + i
    let strReverse = str.split('').reverse().join('')
    const palindromeNum = parseInt(str + strReverse.slice(1))
    if (palindromeNum >= n) {
      if (isPrime(palindromeNum)) {
        return palindromeNum
      }
    }
  }
}
```

---
