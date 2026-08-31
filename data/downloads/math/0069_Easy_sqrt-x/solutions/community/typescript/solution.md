# TypeScript/JavaScript O(logN) Solution

**Author:** halshar
**Votes:** 6
**Link:** [https://leetcode.com/problems/sqrtx/solutions/4085111/](https://leetcode.com/problems/sqrtx/solutions/4085111/)

---

# Complexity
- Time complexity: $$O(logN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function mySqrt(x: number): number {
  // as per the constrain x lies from 0 - 2^31-1
  let low = 0;

  // to calculate square root of number means
  // we need to find the square of that function
  // meaning if 4 is the target then 2 will be it's
  // input as 2 x 2 == 4
  // meaning the square will always be smaller than
  // the squareroot i.e 4 > 2
  // so high pointer will be the number itself as
  // the higher we go the further away we go from
  // the square of the that target
  let high = x;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const square = mid * mid;

    // now if square is equal to or less than
    // our target then we've found the square
    // root, so we can directly return the mid pointer
    // OR our square is lesser than the x
    // we need to move to right, as the right we
    // go the smaller the greater the square becomes
    // so move right and discard left section
    if (square <= x) low = mid + 1;
    // else we need to move to left as our
    // square is greater than x
    else high = mid - 1;
  }

  // at the end of the iteration our high
  // pointer will point to the correct number
  return high;
}
```