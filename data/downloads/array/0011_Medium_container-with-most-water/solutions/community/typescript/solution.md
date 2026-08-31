# TypeScript/JavaScript O(n) solution

**Author:** halshar
**Votes:** 7
**Link:** [https://leetcode.com/problems/container-with-most-water/solutions/4081099/](https://leetcode.com/problems/container-with-most-water/solutions/4081099/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxArea(height: number[]): number {
  // we'll use the 2 pointer approach to solve the problem
  // as we need to the maximum amount of water the container
  // can store, we'll have the pointers from 0 till n-1
  let low = 0;
  let high = height.length - 1;
  let ans = 0;

  while (low <= high) {
    // we'll calcuate the length and breadth of the container
    // and then we'll keep track of the highest value

    // as the note in the problem says that we cannot slant
    // the container, so for length we need to take the lowest
    // value else the line will not be parallel to the x-axis
    // and we'll have a slant
    const length = Math.min(height[low], height[high]);

    // for breadth we need to find the distance between the 2 pointers
    const breadth = high - low;
    const area = length * breadth;

    // store the highest value
    ans = Math.max(ans, area);

    // now we need to move either the i pointer or j pointer
    // as we require the container to be max, we need to move
    // the smallest value between low and high pointer
    if (height[low] < height[high]) low++;
    else high--;
  }
  return ans;
};
```