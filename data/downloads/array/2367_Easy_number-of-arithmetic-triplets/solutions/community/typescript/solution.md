# TypeScript/JavaScript O(n) Solution

**Author:** halshar
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4078014/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4078014/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function arithmeticTriplets(nums: number[], diff: number): number {
  const hash = new Set<number>();
  let ans = 0;

  // what we need to find are the triplets
  // let's say if 1,4,7 are the triplets and
  // the diff is 3, so we need to find 3 numbers
  // who have difference of 3 between them
  // let's assume we're on number 7, so we would
  // neet to find 4(num-diff) and 1(num - diff - diff)
  // if we find both the numbers then increment the count
  // else we add the current number in the hash
  for (const num of nums) {
    if (hash.has(num - diff) && hash.has(num - diff * 2)) ans++;
    hash.add(num);
  }
  return ans;
}
```