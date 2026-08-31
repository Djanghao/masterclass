# ✅Simple C# and Go Solution | O(n) complexity✅

**Author:** shukhratutaboev
**Votes:** 9
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/3411223/](https://leetcode.com/problems/validate-stack-sequences/solutions/3411223/)

---

Create an empty stack and initialize two pointers, p1 and p2, to zero.

Iterate over the pushed slice using p1 as the loop variable.

For each element pushed[p1], push it onto the stack.

After each push operation, check if the top element of the stack matches the current element of the popped array at index p2. If it does, pop the top element of the stack and increment p2.

If the stack becomes empty after a pop operation, stop popping elements and continue pushing elements onto the stack until there are no more elements in the pushed array.

After the loop has finished, if there are no elements left in the stack, return true, indicating that the popped sequence can be obtained by popping elements from the stack in the order specified by the pushed sequence. Otherwise, return false.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g.  -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Go
```
func validateStackSequences(pushed []int, popped []int) bool {
	stack := []int{}
	n := len(pushed)
	var p1, p2 int

	for p1 < n {
		stack = append(stack, pushed[p1])
		p1++
		for p2 < n && len(stack) > 0 && popped[p2] == stack[len(stack)-1] {
			p2++
			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}

```
C#
```
public class Solution {
	public bool ValidateStackSequences(int[] pushed, int[] popped) {
		var stack = new Stack<int>();
		var n = pushed.Length;
		var p1 = 0, p2 = 0;
		
		while (p1 < n) {
			stack.Push(pushed[p1]);
			p1++;
			while (p2 < n && stack.Count > 0 && popped[p2] == stack.Peek()) {
				p2++;
				stack.Pop();
			}
		}
		
		return stack.Count == 0;
	}
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)