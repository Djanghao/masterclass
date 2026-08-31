# Checksum using char differences

**Author:** SirensOfTitan
**Votes:** 0
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/4787112/](https://leetcode.com/problems/group-shifted-strings/solutions/4787112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function checksum(str: string): string {
  const xs = [];
  for (let i = 0; i < str.length - 1; i += 1) {
    const st = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
    const end = str[i + 1].charCodeAt(0) - 'a'.charCodeAt(0);

    const diff = end - st;
    xs.push(diff < 0 ? 26 + diff : diff);
  }

  return xs.join(":");
}

function groupStrings(strings: string[]): string[][] {
  const grouped = _.groupBy(strings, checksum);
  return Object.values(grouped);
};
```