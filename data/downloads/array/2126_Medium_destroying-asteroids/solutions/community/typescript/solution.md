# 🚀🚀🚀 magic of buckets || O(n) time || Bucket Sort

**Author:** xkatianx
**Votes:** 1
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/5758396/](https://leetcode.com/problems/destroying-asteroids/solutions/5758396/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort `asteroids` to `bucket[i]` where `i` is the minimum integer satisfying
 `asteroid <= mass * 2^i`.

And then for each bucket in order, we can absorb all or nothing.
(can absorb one `x` -> mass at least `2x` -> can absorb all)

If `i >= n` we early stop to ensure that the time complexity is linear.
(You need at least `1, 2, 4, 8, 16, 32, ...` to return `true` so `i < n`.)

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function asteroidsDestroyed(
  mass: number,
  asteroids: number[]
): boolean {
  const n = asteroids.length;

  const bucket = asteroids.map(() => [] as number[]);
  for (const v of asteroids) {
    const power = Math.log2(v / mass);
    const i = power < 0 ? 0 : Math.ceil(power);
    if (i >= n) return false;
    bucket[i].push(v);
  }

  return bucket.every((arr) => {
    if (arr.length === 0) return true;
    if (mass < Math.min(...arr)) return false;
    mass += sum(arr);
    return true;
  });
}

function sum(arr: number[]) {
  return arr.reduce((a, b) => a + b);
}

```
```python []
class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        n = len(asteroids)

        bucket = [[] for _ in range(n)]
        for v in asteroids:
            power = log2(v / mass)
            i = 0 if power < 0 else ceil(power)
            if i >= n:
                return False
            bucket[i].append(v)

        for arr in bucket:
            if arr and mass < min(arr):
                return False
            mass += sum(arr)
        
        return True

```