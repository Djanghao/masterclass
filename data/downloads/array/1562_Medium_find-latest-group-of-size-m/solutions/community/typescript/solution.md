# O(n) Javascript/Typescript Solution (beats 100%)

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/4024152/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/4024152/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const findLatestStep = (arr: number[], m: number) => {
  let latestStep = -1;
  let numCorrectLength = 0;
  const starts = new Map<number, number>();
  const ends = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    const position = arr[i];
    let start = position;
    if (ends.has(position - 1)) {
      start = ends.get(position - 1);
      if (position - start === m) numCorrectLength--;
      ends.delete(position - 1);
    }
    let end = position;
    if (starts.has(position + 1)) {
      end = starts.get(position + 1);
      if (end - position === m) numCorrectLength--;
      starts.delete(position + 1);
    }
    if (end - start + 1 === m) numCorrectLength++;
    if (numCorrectLength) latestStep = i + 1;
    starts.set(start, end);
    ends.set(end, start);
  }
  return latestStep;
};

```