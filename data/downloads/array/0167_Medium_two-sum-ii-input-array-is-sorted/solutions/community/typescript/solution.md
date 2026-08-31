# TypeScript/JavaScript O(N) Solution

**Author:** halshar
**Votes:** 5
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4097982/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4097982/)

---



# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function twoSum(numbers: number[], target: number): number[] {
  // set low and high pointers to 0 and length of array
  let low = 0;
  let high = numbers.length - 1;

  // iterate till the pointers overlap
  while (low <= high) {
    // as the array is sorted, we can make use of this
    // if the sum of i and j pointer is greater than target
    // then we need to decrease the j pointer as the array is
    // sorted so the righter we go the more value will increase and
    // as the sum is greater we need to go to left so decrement j pointer
    // else if the sum is less then we need to go more right so incrment
    // the low pointer else the sum is equal to target so return the
    // indexes but as per the testcases, we need to increment the indexes
    // by 1 before returning the solution
    if (numbers[low] + numbers[high] > target) high--;
    else if (numbers[low] + numbers[high] < target) low++;
    else return [low + 1, high + 1];
  }
  
  // we'll never reach here, so return empty array to avoid
  // compiler warning
  return [];
};
```