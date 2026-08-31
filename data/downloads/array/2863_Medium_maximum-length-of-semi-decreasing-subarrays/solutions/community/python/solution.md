# Linear time solution in C++, Java & python

**Author:** cpcs
**Votes:** 41
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4070047/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/4070047/)

---

# Intuition
If we select nums[i] and nums[j] as the end points of a subarray, with i < j && nums[i] > nums[j], to keep length = j - i + 1 as large as possible there should be no j' > j such that nums[j'] <= nums[j] (otherwise (i, j') is better than (i, j)) and there should be no i' < i such that nums[i'] > nums[i].

So we can keep all the feasible j values in an array (or a stack).
The nums[j] in the stack from top to bottom should be strictly increasing.
Then we can try all the feasible i's (that keeps nums[i] strictly increasing too). For each feasible i value, find the j in the stack. It's a version of 2-pointers.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
public:
    int maxSubarrayLength(vector<int>& nums) {
        stack<int> s;
        const int n = nums.size();
        for (int i = n - 1; i >= 0; --i) {
            if (s.empty() || nums[i] < nums[s.top()]) {
                s.push(i);
            }
        }
        int r = 0;
        for (int i = 0, m = INT_MIN; !s.empty() && i < n; ++i) {
            while (!s.empty() && s.top() <= i) {
                s.pop();
            }
            if (nums[i] > m) {
                for (m = nums[i]; !s.empty() && nums[s.top()] < m; r = max(r, s.top() - i + 1), s.pop())
                ;
            }
        }
        return r;
    }
};
```

Java
```
public class Solution {
    public int maxSubarrayLength(int[] nums) {
        Stack<Integer> stack = new Stack<>();
        int n = nums.length;

        for (int i = n - 1; i >= 0; i--) {
            if (stack.isEmpty() || nums[i] < nums[stack.peek()]) {
                stack.push(i);
            }
        }

        int r = 0;
        int m = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && stack.peek() <= i) {
                stack.pop();
            }

            if (nums[i] > m) {
                m = nums[i];

                while (!stack.isEmpty() && nums[stack.peek()] < m) {
                    r = Math.max(r, stack.peek() - i + 1);
                    stack.pop();
                }
            }
        }

        return r;
    }
}
```

Python
```
class Solution:
    def maxSubarrayLength(self, nums: List[int]) -> int:
        stack = []
        n = len(nums)
        
        for i in range(n - 1, -1, -1):
            if not stack or nums[i] < nums[stack[-1]]:
                stack.append(i)
        
        r = 0
        m = float('-inf')
        
        for i in range(n):
            while stack and stack[-1] <= i:
                stack.pop()
            
            if nums[i] > m:
                m = nums[i]
                
                while stack and nums[stack[-1]] < m:
                    r = max(r, stack[-1] - i + 1)
                    stack.pop()
        
        return r

```

