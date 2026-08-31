# Clean and concise solution with explanation

**Author:** emmakuen
**Votes:** 2
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/3411233/](https://leetcode.com/problems/validate-stack-sequences/solutions/3411233/)

---

# Solution

```javascript []
var validateStackSequences = function (pushed, popped) {
  // Initialize the index of the current value to be popped
  let popIndex = 0;
  // Create an empty array to simulate the stack
  const stack = [];

  // Loop through each value in the 'pushed' array
  for (const pushValue of pushed) {
    
    // Add the value to the top of the stack
    stack.push(pushValue);

    // While the stack is not empty and the top value in the stack matches
    // the current value that needs to be popped:
    while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
      
      // Remove the top value from the stack
      stack.pop();

      // Move to the next value in the 'popped' array
      popIndex++;
    }
  }

  // Return 'true' if the stack is empty, otherwise return 'false'
  return stack.length === 0;
};
```
```rust []
impl Solution {
    pub fn validate_stack_sequences(pushed: Vec<i32>, popped: Vec<i32>) -> bool {
        let mut stack = vec![];
        let mut pop_index = 0;

        for push_value in pushed {
            stack.push(push_value);
            while !stack.is_empty() && stack.last() == popped.get(pop_index) {
                stack.pop();
                pop_index += 1;
            }
        }

        stack.is_empty()
    }
}
```
```Go []
func validateStackSequences(pushed []int, popped []int) bool {
	stack := make([]int, 0)
	popIndex := 0

	for _, pushed_value := range pushed {
		stack = append(stack, pushed_value)
		for len(stack) > 0 && stack[len(stack)-1] == popped[popIndex] {
			stack = stack[:len(stack)-1]
			popIndex++
		}
	}

	return len(stack) == 0
}
```

## Approach

The function validateStackSequences takes in two arrays `pushed` and `popped`, which represent the order of elements pushed onto and popped from a stack, respectively. The goal of the function is to determine whether `pushed` and `popped` represent a valid stack sequence, i.e., whether the elements can be pushed onto and popped from a stack in the order specified by the arrays.

The function first initializes a variable `popIndex` to 0 and an empty array `stack`, which will serve as our simulated stack. We then iterate over each element in `pushed`, pushing the element onto the `stack`. We then enter a `while` loop that checks if the stack is non-empty and the top element of the stack matches the current element of popped at index `popIndex`. If this condition is `true`, we pop the top element from the `stack` and increment `popIndex`.

If the condition in the `while` loop is not `true`, we move on to the next element in `pushed` and push it onto the stack. We then repeat the `while` loop check to see if the top element of the stack matches the current element of `popped` at index `popIndex`. We continue this process until we have checked all the elements in `pushed`.

Finally, we check if the `stack` is empty. If it is, then we have successfully matched all the elements in `pushed` to the elements in `popped` according to the rules of a valid stack sequence, and we return `true`. Otherwise, we return `false`.
