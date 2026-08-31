# Simple Javascript/Typescript Solution

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/4020133/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/4020133/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const shortestSequence = (rolls: number[], k: number): number => {
  const possibleRolls = Array.from({ length: k }, (_el, i) => i + 1);
  const needToRoll = new Set(possibleRolls);
  let shortest = 1;
  for (const roll of rolls) {
    needToRoll.delete(roll);
    if (needToRoll.size === 0) {
      shortest++;
      for (const roll of possibleRolls) needToRoll.add(roll);
    }
  }
  return shortest;
};

```