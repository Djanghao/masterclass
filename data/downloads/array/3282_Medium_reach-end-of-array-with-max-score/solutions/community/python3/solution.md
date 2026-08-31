# Simple Solution using Stack

**Author:** user0197ub
**Votes:** 10
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5756803/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5756803/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are given a list of integers nums, and the task is to compute a maximum score based on the elements of nums using a stack-based approach. Specifically, we are iterating from right to left, maintaining a stack to track the largest elements, and calculating a score by multiplying each element's value by the range it influences (based on indices).

# Use of a Stack for Efficient Traversal:

We utilize a stack to maintain the largest elements encountered as we traverse nums from right to left. This helps in finding the maximum element in a range efficiently.
# Score Calculation Logic:

For each element in the stack, we compute its contribution to the overall score. The contribution is calculated as the product of the element\u2019s value and the distance it spans (from its current index to the farthest valid index). This ensures that each element adds to the score based on the portion of the array it dominates.
# Optimization with Stack:

The stack helps in efficiently tracking the largest elements, ensuring we do not recompute overlapping subranges. By removing smaller elements from the stack, we can focus on the most significant contributors to the score.

# Building the Stack:

We traverse the nums array from right to left.
For each element, we check if the current element is larger than the element at the top of the stack.
If it is smaller, we pop elements from the stack. The stack will always contain decreasing elements from right to left (i.e., the largest elements are stored).
Each element in the stack is stored as a pair [value, index].
# Calculating the Score:

Once the stack is built, we traverse through the stack.
For each element in the stack, we calculate its contribution by multiplying its value by the difference between maxind (initially the rightmost index of the array) and its index. This difference represents the span over which the current element is the maximum.
After processing an element, we update maxind to reflect the last processed index, ensuring that subsequent elements only affect the valid range.
# Example Walkthrough:

Suppose we have nums = [4, 2, 3, 5]:

First, we build the stack:

Start with the element 5 at index 3, and add it to the stack.
Then, add 4 at index 0 to the stack (since 4 is greater than 2 and 3).
The stack now looks like this: [[5, 3], [4, 0]].

Now, we calculate the score:

For 5 at index 3, its contribution is 5 * (3 - 3) = 0.
For 4 at index 0, its contribution is 4 * (3 - 0) = 12.
The final result is 12.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```python3 []
class Solution:
    def findMaximumScore(self, nums: List[int]) -> int:
        s=[]
        n=len(nums)
        for i in range(len(nums)-1,-1,-1):
            while s and s[-1][0]<nums[i]:
                s.pop()
            s.append([nums[i],i])
        res=0
        maxind=n-1
        for i in s:
            res+=i[0]*(maxind-i[1])
            maxind=i[1]
        return res


        
```
# Code
```cpp []
class Solution {
public:
    int findMaximumScore(vector<int>& nums) {
        stack<pair<int, int>> stk;
        int n = nums.size();
        int result = 0;
        int maxind = n - 1;

        // Traverse the list from right to left
        for (int i = n - 1; i >= 0; --i) {
            // Maintain a stack of decreasing elements
            while (!stk.empty() && stk.top().first < nums[i]) {
                stk.pop();
            }
            stk.push({nums[i], i});
        }

        // Calculate the result using the stack
        while (!stk.empty()) {
            int value = stk.top().first;
            int index = stk.top().second;
            result += value * (maxind - index);
            maxind = index;
            stk.pop();
        }

        return result;
    }
};

```