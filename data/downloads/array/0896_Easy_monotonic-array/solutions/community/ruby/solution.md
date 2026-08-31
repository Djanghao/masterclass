# ruby - Time Complexity: (O(n)) & Space Complexity: (O(1))

**Author:** pallavsharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/5203740/](https://leetcode.com/problems/monotonic-array/solutions/5203740/)

---

### Intuition

The problem asks whether the given array `nums` is monotonic. We can approach this by checking if the array is either non-decreasing or non-increasing.

### Approach

1. **Iterate Through the Array**:
   - We iterate through the array `nums` using a loop.

2. **Check Monotonicity**:
   - During each iteration, we compare the current element with the next element to determine if the array is increasing or decreasing.
   - We set the `increasing` flag to `true` if the current element is less than the next element.
   - We set the `decreasing` flag to `true` if the current element is greater than the next element.

3. **Return Result**:
   - After iterating through the array, we return `true` if either `increasing` or `decreasing` is `true`, indicating that the array is monotonic.
   - If neither `increasing` nor `decreasing` is `true`, it means all elements in the array are equal, so we return `true`.
   - Otherwise, we return `false`.

### Complexity

- **Time Complexity**: \\(O(n)\\)
  - We iterate through the array once, comparing adjacent elements to determine if the array is monotonic.
- **Space Complexity**: \\(O(1)\\)
  - The space complexity is constant because we only use a few variables (`increasing`, `decreasing`, and `i`) regardless of the size of the input array.

### Explanation of the Code

1. **Iterate Through the Array**:
   - We use a loop to iterate through the array `nums`.
   - We break out of the loop if there are no more elements to compare (`nums[i+1] == nil`).

2. **Check Monotonicity**:
   - During each iteration, we compare the current element `nums[i]` with the next element `nums[i+1]`.
   - We set the `increasing` flag to `true` if `nums[i] < nums[i+1]`.
   - We set the `decreasing` flag to `true` if `nums[i] > nums[i+1]`.

3. **Return Result**:
   - After iterating through the array, we return `true` if either `increasing` or `decreasing` is `true`.
   - If neither `increasing` nor `decreasing` is `true`, it means all elements in the array are equal, so we return `true`.
   - Otherwise, we return `false`.

# Code
```
# @param {Integer[]} nums
# @return {Boolean}
def is_monotonic(nums)
  increasing = false
  decreasing = false
  i = 0
  loop do
    break if nums[i+1] == nil
    increasing = true if nums[i] < nums[i+1]
    decreasing = true if nums[i] > nums[i+1]
    i += 1
  end
  return ((increasing != decreasing) || increasing == false && decreasing == false) ? true : false
end
```