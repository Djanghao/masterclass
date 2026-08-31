# Javascriptc | Monotonic Stack with explanation | Time O(n) | Space O(n)

**Author:** bahoang3105
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/3386657/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/3386657/)

---

# Intuition
Traverse the array from left to right, an element need to be arrange if there exists at least one element before it that greater than it. They have to be in the same chunk.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let stack = [arr[0]]; // stack[i] is the maximum element of chunk i
  for (let i = 1; i < arr.length; i++) {

    // if arr[i] greater than the last item in stack then arr[i] is a chunk.
    if (arr[i] > stack[stack.length - 1]) { 
      stack.push(arr[i]);
    } 

    // else arr[i] is a part of the chunk which is made up of all chunks whose maximum element is greater than arr[i]
    else { 
      let maxElementOfAllChunks = stack[stack.length - 1];
      while (arr[i] < stack[stack.length - 1]) {
        stack.pop();
      }
      stack.push(maxElementOfAllChunks);
    }
  }
  return stack.length
};
```