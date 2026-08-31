# Optimized splice Insertion Strategies for Time and Space Efficiency[TypeScript | JavaScript]

**Author:** sameeneeti
**Votes:** 4
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4080538/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/4080538/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intention of the code is to efficiently create the target array by inserting elements at the specified indices, following the given rules, while avoiding unnecessary operations that can degrade performance. However, it's important to note that the use of splice inside the loop can lead to a time complexity of O(n^2) in the worst case, and there's an attempt to optimize this by directly assigning elements to the target array when possible.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Looping through nums and index:**
    The loop iterates over the given arrays nums and index with the aim of creating a target array according to the specified rules.

2. **Target Array (ans) Initialization:**
    The ans array is initialized to an empty array. This array will hold the elements based on their corresponding indices.

3. **Inserting Elements at Specified Indices:**
    For each element in nums, we determine its corresponding index from the index array. We then insert the element into the ans array at that index.

4. **Optimized Insertion:**
    Instead of using the splice method (which can be inefficient), we check if the index is already occupied. If it is, we use splice to make space for the new element. If not, we directly set the element at the index.

5. **Returning the Target Array:**
    Finally, the ans array, which now holds all the elements at their specified indices, is returned as the target array.

# Complexity
- Time complexity: O(n^2) due to the potential O(n) time complexity of the splice() operation within the loop.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function createTargetArray(nums: number[], index: number[]): number[] {
const n = nums.length
const ans:number[] = []

for(let i=0; i<n; i++){
  
  // avoid using splice() inside the loop, as it can be inefficient due to its time   complexity of O(n) for each insertion.
  // Check if the target array has an element at the current index
  // If it does, we shift elements to the right to make space for the new element

    if (ans[index[i]] !== undefined) {
    // use splice() method to add new elements at a specific index
    // array.splice(start, deleteCount, item1, item2, ...)
    // start: index[i] at which to start modifying the array.
    // deleteCount:set to 0, no elements are removed.
    // items-nums[i]: to add to the array at the start index.
      ans.splice(index[i], 0, nums[i]);
    } else {
      ans[index[i]] = nums[i];
    }
  }

return ans

};
```