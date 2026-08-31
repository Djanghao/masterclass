# ✅ Easy to understand Approach

**Author:** lebon
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309860/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309860/)

---

# Intuition
The goal is to make all elements in the array `nums` unique with the least number of increments. If an element is already unique, it doesn't need to be changed. However, if a duplicate exists, it needs to be incremented to the next available unique value. By using **a union-find (or _disjoint-set_)** data structure** with **path compression, we can efficiently track and find the next available unique position for each element.

# Approach
1. **Initialization**:
   - Create a dictionary `root` to store the next available unique position for each element encountered.

2. **Iterate through the Array**:
   - For each element `number` in the array `nums`, use a helper function `find` to determine the next available unique position for `number`.
   - Increment the result by the difference between the found position and the original `number`.

3. **Helper Function `find`**:
   - This function recursively finds the next available unique position for a given element `x`.
   - If `x` is already in the `root` dictionary, it means `x` is taken, so recursively find the next available position for `root[x] + 1`.
   - Use path compression to update the `root` dictionary with the new position to speed up future queries.

4. **Return Result**:
   - After processing all elements, the accumulated result represents the total number of increments needed to make all elements in the array unique.

# Complexity
- **Time Complexity**: 
  - The time complexity is $$O(n \\log n)$$ in the average case due to the amortized time complexity of the union-find operations with path compression. This assumes `find` operations are nearly constant time.
  - In the worst case, the complexity can be higher but is generally efficient due to path compression.

- **Space Complexity**:
  - The space complexity is $$O(n)$$ due to the space required to store the `root` dictionary, which may contain up to `n` elements.
# Code
Here's the Swift code implementing this approach:

```swift []
class Solution {
    var root: [Int: Int] = [:]  // Dictionary to store the root of each element
    
    func minIncrementForUnique(_ nums: [Int]) -> Int {
        var result = 0  // Variable to store the total increments needed
        for number in nums {
            result += find(number) - number  // Add the difference between the found position and the original number
        }
        return result
    }
    
    func find(_ x: Int) -> Int {
        if let nextPosition = root[x] {
            // If the position is already in the root dictionary, find the next available position
            let newPosition = find(nextPosition + 1)
            root[x] = newPosition  // Update the root dictionary with the new position
            return newPosition
        } else {
            // If the position is not in the root dictionary, it means it's available
            root[x] = x
            return x
        }
    }
}
```

In Summary, we leverage ***union-find*** with **path compression** to efficiently handle the task of making all elements in the array unique by minimal increments.