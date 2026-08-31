# ✅💯🔥 Very Clean Code Monotonic Stack append array twice, Python, Java, Javascript, go, type  ✅💯🔥

**Author:** niyodilxwes
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/5910024/](https://leetcode.com/problems/next-greater-element-ii/solutions/5910024/)

---

# Intuition
The problem asks us to find the next greater element for each number in a circular array. The challenge here is that, after reaching the end of the array, we need to continue searching for the next greater element from the beginning. My first thought was to simulate the circular nature by traversing the array twice, using a stack to track the indices of elements and checking for the next greater element.

# Approach
1. **Simulate Circular Array**: Since the array is circular, we can loop through the array twice (i.e., from 0 to `2 * length of array`) using modulo arithmetic to wrap around.
2. **Stack for Indices**: We use a stack to keep track of indices where we haven't found the next greater element yet. For each new element, we pop from the stack while the current element is greater than the element at the index stored in the stack.
3. **Result Array**: We initialize a result array filled with `-1` (for elements that do not have a next greater element) and update it during the stack operations when a greater element is found.

# Complexity
- Time complexity: `O(n)`, where `n` is the length of the input array. We process each element twice but only push and pop each element once from the stack.
- Space complexity: `O(n)` for the stack and the result array.

# Code

## Scala
```scala
object Solution {
  def nextGreaterElements(nums: Array[Int]): Array[Int] = {
    val res = Array.fill(nums.length)(-1)  // Initialize result array with -1
    val stack = scala.collection.mutable.Stack[Int]() // Stack to store indices

    // Loop through the array twice to simulate the circular array
    for i <- 0 until nums.length * 2 do
      val index = i % nums.length  // Use modulo to wrap around circularly

      // Pop elements from the stack while the current num is greater than the top of the stack
      while stack.nonEmpty && nums(stack.head) < nums(index) do
        res(stack.pop()) = nums(index)  // Update the result array for the popped index

      // Only push the index onto the stack in the first pass
      if i < nums.length then
        stack.push(index)

    // The result array `res` is already filled with -1 for elements that have no greater element
    res
  }
}
```
```python
## Python
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        res = [-1] * len(nums)
        stack = []

        for i in range(len(nums) * 2):
            index = i % len(nums)

            while stack and nums[stack[-1]] < nums[index]:
                res[stack.pop()] = nums[index]

            if i < len(nums):
                stack.append(index)

        return res

```

```java
### Java
import java.util.Stack;

class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        Stack<Integer> stack = new Stack<>();
        
        // Initialize result array with -1
        for (int i = 0; i < n; i++) {
            res[i] = -1;
        }

        // Traverse twice to simulate circular array
        for (int i = 0; i < 2 * n; i++) {
            int index = i % n;
            while (!stack.isEmpty() && nums[stack.peek()] < nums[index]) {
                res[stack.pop()] = nums[index];
            }
            if (i < n) {
                stack.push(index);
            }
        }
        return res;
    }
}

```

```c++
###  C++
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        vector<int> res(n, -1); // Initialize result array with -1
        stack<int> st;

        // Loop through the array twice to simulate the circular array
        for (int i = 0; i < 2 * n; ++i) {
            int index = i % n;

            // Pop elements from the stack while the current num is greater than the top of the stack
            while (!st.empty() && nums[st.top()] < nums[index]) {
                res[st.top()] = nums[index];
                st.pop();
            }

            // Only push the index onto the stack in the first pass
            if (i < n) {
                st.push(index);
            }
        }

        return res;
    }
};

```

```typescript
### tyepscript
function nextGreaterElements(nums: number[]): number[] {
    const res: number[] = Array(nums.length).fill(-1); // Initialize result array with -1
    const stack: number[] = [];

    for (let i = 0; i < nums.length * 2; i++) {
        const index = i % nums.length;

        while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
            res[stack.pop()!] = nums[index];
        }

        if (i < nums.length) {
            stack.push(index);
        }
    }

    return res;
}

```
```javascript
### javascript
var nextGreaterElements = function(nums) {
    const res = new Array(nums.length).fill(-1);  // Initialize result array with -1
    const stack = [];

    for (let i = 0; i < nums.length * 2; i++) {
        const index = i % nums.length;

        while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
            res[stack.pop()] = nums[index];
        }

        if (i < nums.length) {
            stack.push(index);
        }
    }

    return res;
};

```

```go
### Go
func nextGreaterElements(nums []int) []int {
    n := len(nums)
    res := make([]int, n)
    for i := range res {
        res[i] = -1
    }

    stack := []int{}

    for i := 0; i < 2*n; i++ {
        index := i % n
        for len(stack) > 0 && nums[stack[len(stack)-1]] < nums[index] {
            res[stack[len(stack)-1]] = nums[index]
            stack = stack[:len(stack)-1]
        }
        if i < n {
            stack = append(stack, index)
        }
    }

    return res
}

```
```
### 
```




