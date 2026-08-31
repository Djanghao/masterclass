# TypeScript fast near O(1) solution - 100%

**Author:** NamesMT
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/5580556/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/5580556/)

---

# Complexity
`d` is the numbers of digit in the given range, a.k.a `log10n` for decimal

- Time complexity: O(d)

- Space complexity: O(d)

# Code
```
function numberOfPowerfulInt(start: number, finish: number, limit: number, suffix: string): number {
  const powerfulIntsUpToFinish = getPowerfulInt(String(finish), limit, suffix)
  const powerfulIntsBeforeStart = getPowerfulInt(String(start - 1), limit, suffix)
  return powerfulIntsUpToFinish - powerfulIntsBeforeStart
};

function getPowerfulInt(from: string, limit: number, suffix: string) {
  // #### Fail fast optimizes
  if (from.length < suffix.length)
    return 0

  if (from.length === suffix.length)
    return +from >= +suffix ? 1 : 0
  // ####

  let ans = 0

  // Numbers of digits count (length) difference of from and suffix
  const fsDigitDiff = from.length - suffix.length

  for (const i of range(fsDigitDiff)) {
    // If current digit is larger than limit then we can take all remaining combinations with pow(limit+1, digits)
    if (limit < +from[i]) {
      ans += (limit + 1) ** (fsDigitDiff - i)
      return ans
    }
    // Else, we process each digit down until we reach 0 digit diff level, then we compare the suffix outside of the loop
    ans += +from[i] * ((limit + 1) ** (fsDigitDiff - 1 - i))
  }

  // Get last suffix.length digits of from
  // E.g: from: '13579', suffix: '123': compareSuffix = '579'
  const compareSuffix = from.slice(-suffix.length)
  if (compareSuffix >= suffix)
    ++ans

  return ans
}

function range(amount: number) {
  return Array.from({ length: amount }, (_, i) => i)
}

```