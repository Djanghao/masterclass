# 🚀🚀🚀 EASY 🔥 STACK 🚀🚀🚀 FRiENDLY EXPLAiNED ✅✅✅

**Author:** prodonik
**Votes:** 356
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/4651723/](https://leetcode.com/problems/daily-temperatures/solutions/4651723/)

---

# Intuition
The goal is to find the number of days one has to wait until a warmer day for each given day's temperature. This can be efficiently solved using a stack.

# Approach
- Initialize an array `results` to store the number of days until a warmer day for each day's temperature.
- Initialize an empty stack to keep track of indices.
- Iterate through each temperature in the array.
  - While the stack is not empty and the current temperature is greater than the temperature at the index on the top of the stack:
    - Update the result for the index at the top of the stack with the difference between the current index and the index on the top of the stack.
    - Pop the index from the stack.
  - Push the current index onto the stack.
- After the iteration, the `results` array contains the number of days until a warmer day for each given day.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of temperatures.
- Space complexity: $$O(n)$$, as the stack can have at most n elements.

![image.png](./images/0.png)

## UPVOTE iF THiS WAS HELPFUL :)

# Code
```java []
class Solution {
    public int[] dailyTemperatures(int[] temps) {
        int[] results = new int[temps.length];
        Stack<Integer> stack = new Stack<>();
        /// UPVOTE !
        for (int i = 0; i < temps.length; i++) {
            while (!stack.isEmpty() && temps[stack.peek()] < temps[i]) {
                results[stack.peek()] = i - stack.pop();
            }
            stack.push(i);
        }

        return results;
    }
}
```
```C++ []
class Solution {
public:
    std::vector<int> dailyTemperatures(std::vector<int>& temps) {
        std::vector<int> results(temps.size());
        std::stack<int> stack;
        /// UPVOTE !
        for (int i = 0; i < temps.size(); i++) {
            while (!stack.empty() && temps[stack.top()] < temps[i]) {
                results[stack.top()] = i - stack.top();
                stack.pop();
            }
            stack.push(i);
        }

        return results;
    }
};
```
```Python []
class Solution:
    def dailyTemperatures(self, temps):
        results = [0] * len(temps)
        stack = []
        # UPVOTE !
        for i, temp in enumerate(temps):
            while stack and temps[stack[-1]] < temp:
                index = stack.pop()
                results[index] = i - index
            stack.append(i)

        return results
```
```C# []
public class Solution {
    public int[] DailyTemperatures(int[] temps) {
        int[] results = new int[temps.Length];
        Stack<int> stack = new Stack<int>();
        /// UPVOTE !
        for (int i = 0; i < temps.Length; i++) {
            while (stack.Count > 0 && temps[stack.Peek()] < temps[i]) {
                int index = stack.Pop();
                results[index] = i - index;
            }
            stack.Push(i);
        }

        return results;
    }
}
```
```Go []
func dailyTemperatures(temps []int) []int {
	results := make([]int, len(temps))
	stack := make([]int, 0)
    /// UPVOTE !
	for i, temp := range temps {
		for len(stack) > 0 && temps[stack[len(stack)-1]] < temp {
			index := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			results[index] = i - index
		}
		stack = append(stack, i)
	}

	return results
}
```
```Ruby []
class Solution
  def daily_temperatures(temps)
    results = Array.new(temps.length, 0)
    stack = []
    # UPVOTE !
    temps.each_with_index do |temp, i|
      while !stack.empty? && temps[stack.last] < temp
        index = stack.pop
        results[index] = i - index
      end
      stack.push(i)
    end

    results
  end
end
```
![image.png](./images/1.png)
