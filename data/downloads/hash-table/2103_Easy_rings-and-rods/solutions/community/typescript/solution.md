# Fastest O(n) TypeScript Solution with Map() & Set()

**Author:** mirzaianov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/6094651/](https://leetcode.com/problems/rings-and-rods/solutions/6094651/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Using a Map() we store colors of each bar in a Set() and finally count sets with the size of 3.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
const countPoints = (rings: string): number => {
  const map = new Map<string, Set<string>>();

  for (let i = 0; i < rings.length; i += 2) {
    const color: string = rings[i];
    const bar: string = rings[i + 1];

    if (map.get(bar)) {
      map.set(bar, map.get(bar)!.add(color));
    } else {
      map.set(bar, new Set<string>(color));
    }
  }

  let count = 0;

  for (const [, value] of map) {
    if (value.size === 3) count += 1;
  }

  return count;
};
```