# ✔️ Beats 100% - Detailed  Explanation - C++/Java/Python/JS/Ruby/Go/Dart - Greedy , Bit Manipulation

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5353410/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5353410/)

---

## Intuition
The goal is to flip bits in an array such that no zeroes are left in the final array. The flip operation toggles three consecutive bits. We need to determine the minimum number of such operations required or return `-1` if it's not possible to remove all zeros.

## Approach
1. **Traversal**: Iterate through the array. When a `0` is found at index `i`, perform the flip operation on the elements at indices `i`, `i+1`, and `i+2`.
2. **Edge Cases**: After the main loop, check the last two elements of the array. If either is still `0`, return `-1` as it\u2019s impossible to flip them.
3. **Count Operations**: Track the number of flip operations performed.

## Complexity
- **Time Complexity**: The time complexity is $$O(n)$$ because we are traversing the array linearly.
- **Space Complexity**: The space complexity is $$O(1)$$ since the solution only requires a constant amount of extra space for variables.

# Code
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int n = nums.size();
        int operations = 0;

        // Traverse through the array
        for (int i = 0; i < n - 2; ++i) {
            if (nums[i] == 0) {
                // Perform the flip operation at index i
                nums[i] ^= 1;
                nums[i + 1] ^= 1;
                nums[i + 2] ^= 1;
                ++operations;
            }
        }

        // Check the last two elements
        if (nums[n - 2] == 0 || nums[n - 1] == 0) {
            return -1;
        }

        return operations;
    }
};
```
```python []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        operations = 0
        
        # Traverse through the array
        for i in range(n - 2):
            if nums[i] == 0:
                # Perform the flip operation at index i
                nums[i] ^= 1
                nums[i + 1] ^= 1
                nums[i + 2] ^= 1
                operations += 1
        
        # Check the last two elements
        if nums[n - 2] == 0 or nums[n - 1] == 0:
            return -1
        
        return operations
```
```java []
public class Solution {
    public int minOperations(int[] nums) {
        int n = nums.length;
        int operations = 0;

        // Traverse through the array
        for (int i = 0; i < n - 2; i++) {
            if (nums[i] == 0) {
                // Perform the flip operation at index i
                nums[i] ^= 1;
                nums[i + 1] ^= 1;
                nums[i + 2] ^= 1;
                operations++;
            }
        }

        // Check the last two elements
        if (nums[n - 2] == 0 || nums[n - 1] == 0) {
            return -1;
        }

        return operations;
    }
}

```

```javascript []
var minOperations = function(nums) {
    let n = nums.length;
    let operations = 0;

    // Traverse through the array
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] === 0) {
            // Perform the flip operation at index i
            nums[i] ^= 1;
            nums[i + 1] ^= 1;
            nums[i + 2] ^= 1;
            operations++;
        }
    }

    // Check the last two elements
    if (nums[n - 2] === 0 || nums[n - 1] === 0) {
        return -1;
    }

    return operations;
};

```
```Go []
package main

func minOperations(nums []int) int {
    n := len(nums)
    operations := 0

    // Traverse through the array
    for i := 0; i < n-2; i++ {
        if nums[i] == 0 {
            // Perform the flip operation at index i
            nums[i] ^= 1
            nums[i+1] ^= 1
            nums[i+2] ^= 1
            operations++
        }
    }

    // Check the last two elements
    if nums[n-2] == 0 || nums[n-1] == 0 {
        return -1
    }

    return operations
}

```
```ruby []
class Solution
  def min_operations(nums)
    n = nums.length
    operations = 0

    # Traverse through the array
    (0..n - 3).each do |i|
      if nums[i] == 0
        # Perform the flip operation at index i
        nums[i] ^= 1
        nums[i + 1] ^= 1
        nums[i + 2] ^= 1
        operations += 1
      end
    end

    # Check the last two elements
    if nums[n - 2] == 0 || nums[n - 1] == 0
      return -1
    end

    return operations
  end
end

```
```Dart []
class Solution {
  int minOperations(List<int> nums) {
    int n = nums.length;
    int operations = 0;

    // Traverse through the array
    for (int i = 0; i < n - 2; i++) {
      if (nums[i] == 0) {
        // Perform the flip operation at index i
        nums[i] ^= 1;
        nums[i + 1] ^= 1;
        nums[i + 2] ^= 1;
        operations++;
      }
    }

    // Check the last two elements
    if (nums[n - 2] == 0 || nums[n - 1] == 0) {
      return -1;
    }

    return operations;
  }
}

```
