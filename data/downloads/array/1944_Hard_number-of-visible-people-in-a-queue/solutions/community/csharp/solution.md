# Number of Visible People in a Queue Using Stack Data Structure

**Author:** ash1w1n
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/3132261/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/3132261/)

---

# Introduction
My solution to the Number of Visible People in a Queue question.

# Intuition
This question is very difficult in my opinion as a programmer but the minions made me happy and motivated me to answer it. At first glance, I can see the requirement of finding the number of minions each minion can see in a row of minions with different heights.

# Approach
My solution uses a stack (grouping) to keep track of the minions' indices (positions) in the queue. The steps are as per the following:

For each minion, the approach will compare their height with the minions before them in the stack. 

If a minion's height is greater than or equal to the minion before them, their count of visible minions will be incremented by one and that minion's index will be removed from the stack. 

This process continues until the stack is empty or the current minion's height is less than the minion before them. 

Finally, the current minion's index will be added to the stack. This process repeats for all minions in the queue and the final answer will be the number of visible minions for each minion.

# Complexity
Both the time and space complexities are O(n), where n is the number of minions in the queue.

# Code

## Pseudocode

We can first write a pseudocode to understand the structure and logic of the code. 

Note that the pseudocode uses Persons instead of Minions for brevity.
```
function canSeePersonsCount(heights: array of integers): array of integers
    ans = array of integers with size = length of heights, filled with 0
    stack = empty array of integers
    for i = 0 to length of heights - 1
        height = heights at index i
        while stack is not empty and heights at index stack[size of stack - 1] <= height
            ans at index stack.pop() += 1
        end while
        if stack is not empty
            ans at index stack[size of stack - 1] += 1
        end if
        stack.push(i)
    end for
    return ans
end function
```
We can then refer to the pseudocode to write our final answers. I have written five answers in the programming languages that I am proficient at.

## C++
The base of my coding knowledge
```
class Solution {
public:
    std::vector<int> canSeePersonsCount(std::vector<int>& heights) {
        std::vector<int> ans(heights.size(), 0);
        std::stack<int> stack;

        for (int i = 0; i < heights.size(); i++) {
            int height = heights[i];
            while (!stack.empty() && heights[stack.top()] <= height) {
                ans[stack.top()] += 1;
                stack.pop();
            }
            if (!stack.empty()) {
                ans[stack.top()] += 1;
            }
            stack.push(i);
        }
        return ans;
    }
};
```

## C#
Used in .NET development
```
public class Solution {
    public int[] CanSeePersonsCount(int[] heights) {
        int[] ans = new int[heights.Length];
        Stack<int> stack = new Stack<int>();
        for (int i = 0; i < heights.Length; i++) {
            int height = heights[i];
            while (stack.Count != 0 && heights[stack.Peek()] <= height) {
                ans[stack.Pop()] += 1;
            }
            if (stack.Count != 0) {
                ans[stack.Peek()] += 1;
            }
            stack.Push(i);
        }
        return ans;
    }
}
```

## JavaScript
My most commonly used programming language
```
/**
 * @param {number[]} heights
 * @return {number[]}
 */
let canSeePersonsCount = function(heights) {
      let ans = Array(heights.length).fill(0);
      let stack = [];

      for (let i = 0; i < heights.length; i++) {
         let height = heights[i];
         while (stack.length && heights[stack[stack.length - 1]] <= height) {
            ans[stack.pop()] += 1;
         }
         if (stack.length) {
            ans[stack[stack.length - 1]] += 1;
         }
         stack.push(i);
      }
      return ans;
};
```

## Kotlin
Hobbyist coding
```
class Solution {
    fun canSeePersonsCount(heights: IntArray): IntArray {
        val ans = IntArray(heights.size) { 0 }
        val stack = mutableListOf<Int>()
        for (i in heights.indices) {
            val height = heights[i]
            while (stack.isNotEmpty() && heights[stack.last()] <= height) {
                ans[stack.removeAt(stack.lastIndex)] += 1
            }
            if (stack.isNotEmpty()) {
                ans[stack.last()] += 1
            }
            stack.add(i)
        }
        return ans
    }
}
```

## Python
Hobbyist coding
```
class Solution(object):
    def canSeePersonsCount(self, heights):
        ans = [0 for i in range(len(heights))]
        stack = []
        for i in range(len(heights)):
            height = heights[i]
            while stack and heights[stack[-1]] <= height:
                ans[stack.pop()] += 1
            if stack:
                ans[stack[-1]] += 1
            stack.append(i)
        return ans
```

# Conclusion
This is a very challenging question but with a lot of thinking, it is possible to solve. Plan properly, devise a pseudocode and then write your proper answers.

Hope this helps. Happy coding everyone and thank you :)

Edit 1: Simplified explanations and spelling corrections.