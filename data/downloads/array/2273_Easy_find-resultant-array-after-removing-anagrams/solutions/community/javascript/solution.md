# ✅🌵Easy Javascript solution. Time: O(N), Space: O(1)

**Author:** alxn_tarasiuk
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4338303/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/4338303/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  for (let i = 1; i < words.length;) {
    const countWord = words[i].split('').sort().join()
    const prevWord = words[i - 1].split('').sort().join()

    countWord === prevWord ? words.splice(i, 1) : i++
  }

  return words
};
```