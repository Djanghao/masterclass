# TypeScript: O(n), O(n)

**Author:** vxxcko
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/3901387/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/3901387/)

---

# Code
```
function subArrayRanges(nums: number[]): number {
  let totalMin = 0;
  let totalMax = 0;
  const stack = [];
  // Calculate Min;
  for(let right = 0; right < nums.length; right++) {
    while(stack.length > 0 && nums[right] <= nums[stack[stack.length - 1]]) {
      const mid = stack.pop();
      const subArrayCount = countSubArrays(getLeft(stack), mid, right)
      const min = nums[mid] * subArrayCount
      totalMin = totalMin + min;
    }
    stack.push(right)
  }
  while(stack.length > 0) {
    const mid = stack.pop();
    const subArrayCount = countSubArrays(getLeft(stack), mid, nums.length)
    const min = nums[mid] * subArrayCount
    totalMin = totalMin + min;
  }

  for(let right = 0; right < nums.length; right++) {
    while(stack.length > 0 && nums[right] >= nums[stack[stack.length - 1]]) {
      const mid = stack.pop();
      const subArrayCount = countSubArrays(getLeft(stack), mid, right)
      const max = nums[mid] * subArrayCount
      totalMax = totalMax + max;
    }
    stack.push(right)
  }
  while(stack.length > 0) {
    const mid = stack.pop();
    const subArrayCount = countSubArrays(getLeft(stack), mid, nums.length)
    const max = nums[mid] * subArrayCount
    totalMax = totalMax + max;
  }

  return totalMax - totalMin;
};

function countSubArrays(leftExclusive: number, mid: number, rightExclusive: number) {
  const leftSubArrayStartIndex = leftExclusive + 1;
  const leftSubArrayCount = mid - leftSubArrayStartIndex + 1
  const rightSubArrayEndingIndex = rightExclusive - 1;
  const rightSubArrayCount = rightSubArrayEndingIndex - mid + 1
  // for each left sub array there are right sub arrays
  return leftSubArrayCount * rightSubArrayCount;
}

function getLeft(stack) {
  return stack.length > 0 ? stack[stack.length - 1] : -1
}
```