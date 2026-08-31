# TS solution 🤓

**Author:** brudnovskyi
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5211613/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5211613/)

---

```
  function smallestNumber(pattern: string): string {
    let idx = -1;
    const { length } = pattern;
    const nums = Array(length + 1).fill(0).map((_, i) => i + 1);

    const swap = (start: number, end: number, nums: number[]) => {
      for (let i = 0; i < (start - end) / 2; i++) {
        [nums[start - i], nums[end + i]] = [nums[end + i], nums[start - i]];
      }

      idx = -1;
    };

    for (let i = length; i >= 0; i--) {
      if (pattern[i] === "D" && idx === -1) idx = i;
      if (pattern[i] === "I" && idx > -1) swap(idx + 1, i + 1, nums);
      if (i === 0 && pattern[i] === "D" && idx > -1) swap(idx + 1, i, nums);
    }

    return nums.join("");
  }
```