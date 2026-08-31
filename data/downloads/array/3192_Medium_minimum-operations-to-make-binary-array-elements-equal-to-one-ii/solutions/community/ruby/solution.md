# ✔️ Beats 100% - Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Dart - Traversal

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5353522/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5353522/)

---

# Flipping Bits in a Binary Array
# Problem Statement
Given a binary array nums, the goal is to remove all zeros using the minimum number of operations. Each operation flips the current element and the next two elements. Return the minimum number of operations required to achieve this, or -1 if it's not possible.
# Intuition
The task is to flip elements in a binary array to remove all zeros, using the minimum number of operations. Each operation flips the current element and the next two elements. The aim is to ensure that there are no zeros left by the end of the array traversal.

## Approach
1. **Current State Calculation**: Use a `flipped` counter to keep track of how many flip operations have been performed. The state of an element can be determined by the number of flips performed up to that point:
    - If flipped is even, the element's state is unchanged.
    - If flipped is odd, the element's state is flipped.
2. **Flipping Operation**:Traverse the array, and for each zero found, increment the operations counter and the flipped counter. This indicates that a flip operation has been performed, changing the state of the next two elements as well.
3. **Edge Cases**: If the last zero cannot be flipped because there are not enough elements to perform a flip (the array's length is less than 3), it should be handled separately by returning -1.

## Complexity
- **Time Complexity**: The time complexity is $$O(n)$$ because we are traversing the array linearly.
- **Space Complexity**: The space complexity is $$O(1)$$ since the solution only requires a constant amount of extra space for variables.

# Code
```C++ []
#include <vector>
using namespace std;

class Solution {
public:
    int minOperations(vector<int>& nums) {
        int operations = 0;
        int flipped = 0;
        
        for (int i = 0; i < nums.size(); ++i) {
            // Determine the current state considering the number of flips so far
            int current_state = flipped % 2 == 0 ? nums[i] : 1 - nums[i];
            if (current_state == 0) {
                // Perform a flip operation
                ++operations;
                ++flipped;
            }
        }
        
        return operations;
    }
};


```
```python []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        operations = 0
        flipped = 0

        for i in range(len(nums)):
            current_state = nums[i] if flipped % 2 == 0 else 1 - nums[i]
            if current_state == 0:
                operations += 1
                flipped += 1

        return operations
```
```Java []
public class Solution {
    public int minOperations(int[] nums) {
        int operations = 0;
        int flipped = 0;

        for (int i = 0; i < nums.length; i++) {
            // Determine the current state considering the number of flips so far
            int current_state = (flipped % 2 == 0) ? nums[i] : 1 - nums[i];
            if (current_state == 0) {
                // Perform a flip operation
                operations++;
                flipped++;
            }
        }

        return operations;
    }
}

```

```javascript []

var minOperations = function(nums) {
    let operations = 0;
    let flipped = 0;

    for (let i = 0; i < nums.length; i++) {
        // Determine the current state considering the number of flips so far
        let current_state = (flipped % 2 === 0) ? nums[i] : 1 - nums[i];
        if (current_state === 0) {
            // Perform a flip operation
            operations++;
            flipped++;
        }
    }

    return operations;
};

```
```Dart []
class Solution {
  int minOperations(List<int> nums) {
    int operations = 0;
    int flipped = 0;

    for (int i = 0; i < nums.length; i++) {
      // Determine the current state considering the number of flips so far
      int current_state = (flipped % 2 == 0) ? nums[i] : 1 - nums[i];
      if (current_state == 0) {
        // Perform a flip operation
        operations++;
        flipped++;
      }
    }

    return operations;
  }
}


```
```ruby []
class Solution
  def min_operations(nums)
    operations = 0
    flipped = 0

    nums.each_with_index do |num, i|
      # Determine the current state considering the number of flips so far
      current_state = (flipped % 2 == 0) ? num : 1 - num
      if current_state == 0
        # Perform a flip operation
        operations += 1
        flipped += 1
      end
    end

    operations
  end
end


```
```Go []
package main

func minOperations(nums []int) int {
    operations := 0
    flipped := 0

    for i := 0; i < len(nums); i++ {
        // Determine the current state considering the number of flips so far
        currentState := nums[i]
        if flipped%2 != 0 {
            currentState = 1 - nums[i]
        }
        if currentState == 0 {
            // Perform a flip operation
            operations++
            flipped++
        }
    }

    return operations
}


```
