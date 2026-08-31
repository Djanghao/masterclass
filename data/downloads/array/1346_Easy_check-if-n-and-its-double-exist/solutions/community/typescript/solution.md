# TypeScript/JavaScript O(N) Solution with proper explanation

**Author:** halshar
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/4108575/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/4108575/)

---



# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function checkIfExist(arr: number[]): boolean {
  // we'll check whether the half of number or
  // double of the number exists in the set
  // is yes then we return true else we at
  // end of iteration return false

  // as the array is not sorted we need to perform
  // the divide operation, as the greater number
  // be available at the start of the array
  // e.g [10,2,5,3], here for 10 we'll check
  // whether (10/2) or (10*2) exists in the array
  // if yes then we return true else we add it
  // inside the set, next element we get is 2
  // so we'll check if (2/2) or (2*2) exists
  // none exists then we add the num to set
  // next num is 5 and (5/2) or (5*2), here
  // 10 exists so we return true
  // i.e a = 2*b <===> a/2 ===b

  const numSet = new Set();
  for (const elem of arr) {
    if (numSet.has(elem / 2) || numSet.has(elem * 2)) return true;
    else numSet.add(elem);
  }

  // at the end of the iteration if we never
  // returned true then no such pair exists
  // so we return false
  return false;
}

```