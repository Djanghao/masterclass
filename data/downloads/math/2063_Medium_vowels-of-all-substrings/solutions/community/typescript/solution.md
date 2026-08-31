# beats 100% of users with typescripts

**Author:** vgvishesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/5171293/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/5171293/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function countVowels(word: string): number {
    let p = 0;
    let ts: number[] = [];
    let n = word.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
      let numStrings = (n - i) + (p - i);
      ts.push(numStrings);
      p = numStrings;
    }

    for (let i = 0; i < n; i++) {
      if ('aeiou'.includes(word[i])) {
        total += ts[i];
      }
    }

    return total;
};
```