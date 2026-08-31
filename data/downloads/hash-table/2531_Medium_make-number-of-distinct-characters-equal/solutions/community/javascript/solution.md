# Easy Solution: create frequency map, then use nested loops to check if switch can return true

**Author:** Gang-Li
**Votes:** 4
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3016756/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3016756/)

---

# Intuition
1. Create map for word1 and word2, the map is of distinct character to its frequency
2. Use nested loops to go through the 2 maps, check switch character operation will lead to equal map size or NOT, return ture if new size equals
3. Otherwise, return false in the end.


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N), create the map take O(N), the nested loops takes O(26*26), O(N) + O(26*26) = O(N)

- Space complexity:
O(1), 2 * O(26) = O(1)

# Code
```
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  function getMap(word) {
    let map = new Map();
    for (let c of word) {
      let cnt = map.get(c) || 0;
      cnt++;
      map.set(c, cnt);
    }

    return map;
  }

  let m1 = getMap(word1);
  let size1 = m1.size;
  let m2 = getMap(word2);
  let size2 = m2.size;

  let dif = Math.abs(m1.size - m2.size);
  if (dif > 2) return false;
  for (let [char1, cnt1] of m1) {
    for (let [char2, cnt2] of m2) {
      if (char1 === char2) {
        if (size1 === size2) return true;
      } else {
        // char1 !== char2
        let newSize1 = size1;
        if (cnt1 === 1) newSize1--;
        if (!m1.has(char2)) newSize1++;

        let newSize2 = size2;
        if (cnt2 === 1) newSize2--;
        if (!m2.has(char1)) newSize2++;

        if (newSize1 === newSize2) return true;
      }
    }
  }

  return false;
};

```