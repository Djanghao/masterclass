# Easy Understand | Simple Method | Binary Search + Stack | Java | Python | C++✅

**Author:** CzShippee
**Votes:** 30
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494534/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3494534/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Every time a number is traversed, if:
- If the current number is greater than or equal to the number on the top of the stack, it will be directly pushed onto the stack
- If the current number is less than the number on the top of the stack, use binary search to find the first number in the stack that is greater than the current number and replace it

Then how to consider must choose the i-th obstacle:
Only need to check at the end of each loop, what is the number to be replaced (or added), and then the final result will come out

# Approach
<!-- Describe your approach to solving the problem. -->

# Example
Comsider the example `[1,2,3,1,2,3]`
- Initially `stack` is `[0, 0, 0, 0, 0, 0]` and `res` is `[0, 0, 0, 0, 0, 0]`
- When `i = 0`, `obstacles[i] = 1`
    - `top == -1` and we go to `if` branch
    - `stack[0] = 1`, `res[0] = 1`
- When `i = 1`, `obstacles[i] = 2`
    - `top=0` and stack is `[1, 0, 0, 0, 0, 0]`
    - `obstacles[i] >= stack[top]` and we go to `if` branch
    - `stack[1] = 2`, `res[1] = 2`
- When `i = 2`, `obstacles[i] = 3`
    -  ...
- When `i = 3`, `obstacles[i] = 1` notice!
    - Now stack is `[1, 2, 3, 0, 0, 0]`
    - We go to `else` branch
    - We need use binary search to find the first number that larger than `obstacles[i]` from 0 to top=2 in the stack
    - `r = 1`, `stack[r] = obstacles[i]`, `res[3] = r+1`
- When `i = 4`, `obstacles[i] = 2`
    -  `top=2`, and stack is `[1, 1, 3, 0, 0, 0]`
    - `obstacles[i] < stack[top]` and we go to `else` branch
    - Find first number larger than `obstacles[i]` from 0 to top=2
    - `r = 2`, `stack[r] = obstacles[i]`, `res[4] = r+1`
- Now `stack` is `[1, 1, 2, 0, 0, 0]` and `res` is `[1, 2, 3, 2, 3, 0]`
- When `i = 5`, `obstacles[i] = 3`
    - `obstacles[i] >= stack[top]` and we go to `if` branch
    - `top++=3`, `stack[top] = 3`, `res[5] = top+1`
- Finally, 
    - Stack is `[1, 1, 2, 3, 0, 0]`
    - res is `[1, 2, 3, 2, 3, 4]`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$

# Code
``` java []
class Solution {
    public int[] longestObstacleCourseAtEachPosition(int[] obstacles) {
        int[] stack = new int[obstacles.length];
        int top = -1;
        int[] res = new int[obstacles.length];
        for (int i = 0; i < obstacles.length; i++) {
            if (top == -1 || obstacles[i] >= stack[top]) {
                stack[++top] = obstacles[i];
                res[i] = top + 1;
            } else {
                int l = 0, r = top, m;
                while (l < r) {
                    m = l + (r - l) / 2;
                    if (stack[m] <= obstacles[i]) {
                        l = m + 1;
                    } else {
                        r = m;
                    }
                }
                stack[r] = obstacles[i];
                res[i] = r + 1;
            }
        }
        return res;
    }
}
```
``` python []
class Solution:
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        lst,ans=[],[]
        for i in obstacles:
            b=bisect_right(lst,i)
            if b==len(lst):
                lst.append(i)
            else:
                lst[b]=i
            ans.append(b+1)
        return ans
```
``` C++ []
class Solution 
{
public:
    vector<int> longestObstacleCourseAtEachPosition(vector<int>& obstacles) 
    {
        vector<int> a;
        vector<int> res;
        for (auto x : obstacles)
        {
            int idx = upper_bound(a.begin(), a.end(), x) - a.begin();
            if (idx == a.size())
                a.push_back(x);
            else
                a[idx] = x;
            res.push_back(idx + 1);
        }

        return res;
    }
};
```

**Please upvate if helpful!!**

![image.png](./images/0.png)