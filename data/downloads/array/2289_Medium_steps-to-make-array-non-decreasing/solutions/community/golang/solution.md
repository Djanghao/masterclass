# C++ | Golang | Monotonic Stack + DP

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/3327178/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/3327178/)

---

# Code
```
// C++
class Solution {
public:
    int totalSteps(vector<int>& nums) {
        int n = nums.size();
        vector<int> DP(n, 0);
        stack<int> Stack;
        int ans = 0;
        for(int i = nums.size() - 1; i >= 0; i--) {
            while(!Stack.empty() && nums[Stack.top()] < nums[i]) {
                DP[i] = max(DP[Stack.top()], DP[i] + 1);
                Stack.pop();
            }
            ans = max(ans, DP[i]);
            Stack.push(i);
        }
        return ans;
    }
};


// Golang
func max(a, b int) int {
    if a > b {return a}
    return b
}

func totalSteps(nums []int) int {
    n := len(nums)
    DP := make([]int, n)
    Stack := make([]int, 1e5)
    top := -1
    ans := 0
    for i := n - 1; i >= 0; i-- {
        for top != -1 && nums[Stack[top]] < nums[i] {
            DP[i] = max(DP[Stack[top]], DP[i] + 1)
            top--
        }
        ans = max(ans, DP[i])
        top++
        Stack[top] = i
    }
    return ans
}
```