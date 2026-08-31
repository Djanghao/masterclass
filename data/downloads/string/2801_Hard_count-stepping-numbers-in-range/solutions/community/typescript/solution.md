# Digit DP | TypeScript | Beats 100%

**Author:** OddCode
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3866563/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3866563/)

---


# Code
```
const mod = 10 ** 9 + 7;

function dp(
  nums: number[],
  idx: number,
  preDigit: number,
  tightMax: boolean,
  tightLeadingZero: boolean,
  cache: Map<string, number>
): number {
  const key = `${idx}-${preDigit}-${tightMax}-${tightLeadingZero}`;
  if (cache.has(key)) {
    return cache.get(key)!;
  }

  if (idx == nums.length) {
    cache.set(key, 1);
    return 1;
  }
  const max = tightMax ? nums[idx] : 9;
  let ans = 0;
  for (let d = 0; d <= max; d++) {
    const nextTightMax = tightMax && d == max;
    const nextTightLeadingZero = tightLeadingZero && d == 0;
    if (nextTightLeadingZero) {
      ans += dp(nums, idx + 1, -1, nextTightMax, nextTightLeadingZero, cache);
    } else if (preDigit == -1 || Math.abs(preDigit - d) == 1) {
      ans += dp(nums, idx + 1, d, nextTightMax, nextTightLeadingZero, cache);
    }
  }
  cache.set(key, ans % mod);
  return ans % mod;
}

function countSteppingNumbers(low: string, high: string): number {
  let lowNums = (BigInt(low) - BigInt(1))
    .toLocaleString(undefined, { useGrouping: false })
    .split("")
    .map((v) => parseInt(v));
  let highNums = high.split("").map((v) => parseInt(v));

  return (
    (dp(highNums, 0, -1, true, true, new Map()) -
      dp(lowNums, 0, -1, true, true, new Map()) +
      mod) %
    mod
  );
}

```