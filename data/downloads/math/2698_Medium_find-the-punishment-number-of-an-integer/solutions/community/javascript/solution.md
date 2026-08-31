# [JavaScript] 2698. Find the Punishment Number of an Integer

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3547553/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3547553/)

---

---

Weekly Contest 346 solutions:
- Q1 - https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/3547566/javascript-2696-minimum-string-length-after-removing-substrings/
- Q2 - https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/3547563/javascript-2697-lexicographically-smallest-palindrome/
- Q3 - https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3547553/javascript-2698-find-the-punishment-number-of-an-integer/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
dfs
calc for all numbers till 1000 only once ( for all tests cases )
1st submission pass


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

1
```
let set

const punishmentNumber = function (n) {

  function generateNumSeq () {

    function isNum (s, i) {
      let yes = 0
      function dfs (start, sum) {
        if (yes) return
        if (start === s.length) {
          if (sum === +i) yes = 1
          return
        }
        for (let i = start + 1; i <= s.length; i++) {
          dfs(i, sum + +s.slice(start, i))
        }
      }
      dfs(0, 0)
      return yes
    }

    set = new Set()
    for (let i = 1; i <= 1000; i++) {
      if (isNum('' + i * i, i)) {
        set.add(i)
      }
    }
  }

  if (!set) {
    generateNumSeq()
  }

  let s = 0
  for (let i = 1; i <= n; i++) {
    if (set.has(i)) {
      s += i * i
    }
  }
  return s
}
```
