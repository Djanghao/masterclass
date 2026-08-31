# Typescript solution. Splice to insert. Use initial length to set final length.

**Author:** upikoth
**Votes:** 3
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/1913578/](https://leetcode.com/problems/duplicate-zeros/solutions/1913578/)

---

```typescript
function duplicateZeros(arr: number[]): void {
  const initialLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
    }
  }

  arr.length = initialLength;
};
```
Please upvote if you found the solution useful.