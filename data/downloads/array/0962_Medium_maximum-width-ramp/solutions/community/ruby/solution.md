# ✅ Explained step by step | O(n) | ✅ Working 10.10.2024

**Author:** Piotr_Maminski
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-width-ramp/solutions/5893649/](https://leetcode.com/problems/maximum-width-ramp/solutions/5893649/)

---


```python3 []
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        n = len(nums)
        stack = []

        # First pass: Push indices of potential left boundaries into the stack
        # We only push indices where the value is smaller than the previous stack top
        for i in range(n):
            if not stack or nums[stack[-1]] > nums[i]:
                stack.append(i)

        ans = 0

        # Second pass: Iterate from right to left to find the maximum width ramp
        for i in range(n - 1, 0, -1):
            # While the stack is not empty and the current element is greater than or equal to the stack top
            while stack and nums[stack[-1]] <= nums[i]:
                # Calculate the width of the ramp and update the maximum
                ans = max(ans, i - stack[-1])
                # Remove the top element as we've found a valid ramp for it
                stack.pop()

        # Return the maximum width ramp found
        return ans
```
```cpp []
class Solution {
public:
    int maxWidthRamp(vector<int>& nums) {
        //decreasing stack

        int n = nums.size();
        stack<int> st;
        for(int i = 0; i < n; i++){
            if(st.empty() || nums[st.top()] > nums[i]){
                st.push(i);
            }
        }
        int ans = 0;
        for(int i = n-1; i > 0; i--){
            while(!st.empty() && nums[st.top()] <= nums[i]){
                ans = max(ans, i - st.top());
                st.pop();
            }
        }
        return ans;
    }
};
```
```java []
import java.util.Stack;

class Solution {
    public int maxWidthRamp(int[] nums) {
        int n = nums.length;
        Stack<Integer> stack = new Stack<>();

        // First pass: Push indices of potential left boundaries into the stack
        // We only push indices where the value is smaller than the previous stack top
        for (int i = 0; i < n; i++) {
            if (stack.isEmpty() || nums[stack.peek()] > nums[i]) {
                stack.push(i);
            }
        }

        int ans = 0;

        // Second pass: Iterate from right to left to find the maximum width ramp
        for (int i = n - 1; i > 0; i--) {
            // While the stack is not empty and the current element is greater than or equal to the stack top
            while (!stack.isEmpty() && nums[stack.peek()] <= nums[i]) {
                // Calculate the width of the ramp and update the maximum
                ans = Math.max(ans, i - stack.peek());
                // Remove the top element as we've found a valid ramp for it
                stack.pop();
            }
        }

        // Return the maximum width ramp found
        return ans;
    }
}
```
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    public int MaxWidthRamp(int[] nums) {
        int n = nums.Length;
        Stack<int> stack = new Stack<int>();

        // First pass: Push indices of potential left boundaries into the stack
        // We only push indices where the value is smaller than the previous stack top
        for (int i = 0; i < n; i++) {
            if (stack.Count == 0 || nums[stack.Peek()] > nums[i]) {
                stack.Push(i);
            }
        }

        int ans = 0;

        // Second pass: Iterate from right to left to find the maximum width ramp
        for (int i = n - 1; i > 0; i--) {
            // While the stack is not empty and the current element is greater than or equal to the stack top
            while (stack.Count > 0 && nums[stack.Peek()] <= nums[i]) {
                // Calculate the width of the ramp and update the maximum
                ans = Math.Max(ans, i - stack.Peek());
                // Remove the top element as we've found a valid ramp for it
                stack.Pop();
            }
        }

        // Return the maximum width ramp found
        return ans;
    }
}
```
```javascript [JS]
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let stack = [];

    // Build a decreasing stack of indices
    // This stack will contain indices of potential left boundaries of ramps
    for (let i = 0; i < nums.length; i += 1) {
        // Only push an index if the stack is empty or the current number is smaller than the last number in the stack
        // This ensures the stack remains in decreasing order of values
        while (stack.length === 0 || nums[stack.at(-1)] > nums[i]) {
            stack.push(i)
        }
    }

    // Initialize the answer to the smallest possible integer
    let ans = Number.MIN_SAFE_INTEGER;

    // Iterate through the array from right to left
    // This will help us find the widest ramp for each potential right boundary
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        // While the stack is not empty and the current number is greater than or equal to the number at the top of the stack
        while (stack.length > 0 && nums[i] >= nums[stack.at(-1)]) {
            // Pop the index from the stack
            const idx = stack.pop();
            // Update the answer with the maximum width found so far
            ans = Math.max(ans, i - idx);
        }
    }

    // Return the maximum width ramp found
    return ans;
};
```
```typescript [TS]
function maxWidthRamp(nums: number[]): number {
    let stack: number[] = [];

    // Build a decreasing stack of indices
    // This stack will contain indices of potential left boundaries of ramps
    for (let i = 0; i < nums.length; i += 1) {
        // Only push an index if the stack is empty or the current number is smaller than the last number in the stack
        // This ensures the stack remains in decreasing order of values
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Initialize the answer to the smallest possible integer
    let ans = Number.MIN_SAFE_INTEGER;

    // Iterate through the array from right to left
    // This will help us find the widest ramp for each potential right boundary
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        // While the stack is not empty and the current number is greater than or equal to the number at the top of the stack
        while (stack.length > 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            // Pop the index from the stack
            const idx = stack.pop()!;
            // Update the answer with the maximum width found so far
            ans = Math.max(ans, i - idx);
        }
    }

    // Return the maximum width ramp found
    return ans;
}
```
```rust []
impl Solution {
    pub fn max_width_ramp(nums: Vec<i32>) -> i32 {
        // Initialize an empty stack to store indices
        let mut stack = vec![];

        // First pass: build a decreasing stack of indices
        for (i, &x) in nums.iter().enumerate() {
            // Push index if stack is empty or current number is smaller than the last in stack
            if stack.last().map(|&top| nums[top] >= x).unwrap_or(true) {
                stack.push(i);
            }
        }

        // Initialize the maximum width
        let mut ret = 0;

        // Second pass: iterate through the array in reverse order
        for (i, &x) in nums.iter().enumerate().rev() {
            // While the current number is greater than or equal to the number at the top of the stack
            while stack.last().map(|&top| nums[top] <= x).unwrap_or(false) {
                // Pop the top index and update the maximum width
                ret = stack.pop().map_or(ret, |top| ret.max(i - top));
            }
        }

        // Return the maximum width as an i32
        ret as i32
    }
}
```
```ruby []
def max_width_ramp(nums)
  # Initialize a stack with the first index (0)
  stack = [0]

  # Iterate through the array with index
  nums.each_with_index do |num, index|
    # If the current number is less than the number at the last index in the stack
    # Add the current index to the stack
    # This creates a stack of indices where the numbers are in descending order
    if num < nums[stack.last]
      stack << index
    end
  end

  # Initialize the maximum width to 0
  max_width = 0

  # Iterate through the array backwards
  (nums.length - 1).downto(0) do |index|
    # While the stack is not empty and the current number is greater than or equal to
    # the number at the last index in the stack
    while stack.any? && nums[index] >= nums[stack.last]
      # Calculate the width between the current index and the popped stack index
      # Update max_width if this width is larger
      max_width = [max_width, index - stack.pop].max
    end
  end

  # Return the maximum width found
  max_width
end
```
```golang []
func maxWidthRamp(nums []int) int {
    stack := []int{}

    // Create a stack of indices with decreasing values
    for i := 0; i < len(nums); i++ {
        // Add index to stack if it's empty or the current number is smaller than the last one in the stack
        if len(stack) == 0 || nums[stack[len(stack)-1]] > nums[i] {
            stack = append(stack, i)
        }
    }

    answer := 0

    // Iterate through the array from right to left
    for i := len(nums) - 1; i >= 0; i-- {
        // While the stack is not empty and the current number is greater than or equal to the number at the top of the stack
        for len(stack) > 0 && nums[stack[len(stack)-1]] <= nums[i] {
            // Update the answer with the maximum width found so far
            answer = max(answer, i-stack[len(stack)-1])
            // Remove the top element from the stack
            stack = stack[:len(stack)-1]

            // If the current width is equal to the current index, we've found the maximum possible width
            if answer == i {
                return answer
            }
        }
    }

    // Return the maximum width ramp found
    return answer
}

// Helper function to return the maximum of two integers
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```swift []
class Solution {
    func maxWidthRamp(_ nums: [Int]) -> Int {
        let n = nums.count
        var stack: [Int] = []
        
        // First pass: Push indices of potential left boundaries into the stack
        // We only push indices where the value is smaller than the previous stack top
        for i in 0..<n {
            if stack.isEmpty || nums[stack.last!] > nums[i] {
                stack.append(i)
            }
        }
        
        var ans = 0
        
        // Second pass: Iterate from right to left to find the maximum width ramp
        for i in stride(from: n - 1, through: 0, by: -1) {
            // While the stack is not empty and the current element is greater than or equal to the stack top
            while !stack.isEmpty && nums[stack.last!] <= nums[i] {
                // Calculate the width of the ramp and update the maximum
                ans = max(ans, i - stack.last!)
                // Remove the top element as we've found a valid ramp for it
                stack.removeLast()
            }
        }
        
        // Return the maximum width ramp found
        return ans
    }
}
```
## Complexity
- Time complexity: O(n)

- Space complexity: O(n)

## Exmplained step by step

1. We start by defining a class called `Solution` with a method `maxWidthRamp` that takes a list of numbers (`nums`) as input.

2. We get the length of the input list and store it in the variable `n`.

3. We create an empty list called `stack` to store indices.

4. First pass: We go through the list from left to right:

- If the stack is empty or if the current number is smaller than the number at the index on top of the stack, we add the current index to the stack.
- This helps us keep track of potential left boundaries of ramps.
5. We create a variable `ans` to store the maximum width of the ramp, initially set to **0**.

6. Second pass: We go through the list from right to left:

- While the stack is not empty and the current number is greater than or equal to the number at the index on top of the stack:
    - We calculate the width of the ramp (current index minus the index on top of the stack).
    - We update `ans` if this width is larger than the current `ans`.
    - We remove the top index from the stack since we've found a valid ramp for it.
7. Finally, we return `ans`, which now contains the maximum width ramp found.

The key idea here is:

The first pass builds a stack of potential left boundaries (smaller numbers).
The second pass finds the rightmost matching number for each left boundary, calculating the width of the ramp.
By going from right to left in the second pass, we ensure we find the widest ramp for each left boundary.


![image.png](./images/0.png)


