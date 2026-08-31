# Simple yield

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/generate-circular-array-values/solutions/3694605/](https://leetcode.com/problems/generate-circular-array-values/solutions/3694605/)

---

# Code
```
/**
 * @param {Array<number>} arr
 * @param {number} startIndex
 * @yields {number}
 */
function* cycleGenerator(arr, startIndex) {
  let index = startIndex;
  while (true) {
    const jump = yield arr[index]
    index = (index + arr.length + jump % arr.length) % arr.length;
  }

}

/**
 *  const gen = cycleGenerator([1,2,3,4,5], 0);
 *  gen.next().value  // 1
 *  gen.next(1).value // 2
 *  gen.next(2).value // 4
 *  gen.next(6).value // 5
 */
```