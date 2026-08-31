# simple cpp solution using stack

**Author:** manishadhukiya14
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/3995788/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/3995788/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maxSumMinProduct(vector<int>& nums) {
        int n = nums.size();
        vector<long long> sum(n);
        sum[0] = nums[0];

        // Calculate the prefix sum of the input array
        for (int i = 1; i < n; i++) {
            sum[i] = sum[i - 1] + nums[i];
        }

        vector<int> left(n);
        vector<int> right(n);

        stack<int> st;

        // Calculate the left boundary for each element
        for (int i = 0; i < n; i++) {
            while (!st.empty() && nums[st.top()] >= nums[i]) {
                st.pop();
            }
            left[i] = st.empty() ? 0 : st.top() + 1;
            st.push(i);
        }

        // Clear the stack for reuse
        while (!st.empty()) {
            st.pop();
        }

        // Calculate the right boundary for each element
        for (int i = n - 1; i >= 0; i--) {
            while (!st.empty() && nums[st.top()] >= nums[i]) {
                st.pop();
            }
            right[i] = st.empty() ? n - 1 : st.top() - 1;
            st.push(i);
        }

        long long res = 0;
        const int MOD = 1e9 + 7;

        // Calculate the maximum min-product
        for (int i = 0; i < n; i++) {
            long long a = left[i];
            long long b = right[i];
            
            // Calculate the sum of the subarray [left[i], right[i]]
            long long subarray_sum = sum[b] - (a > 0 ? sum[a - 1] : 0);
            
            // Calculate the min-product for the current subarray
            long long min_product = nums[i] * subarray_sum;
            
            // Update the result
            res = max(res, min_product);
        }

        return res % MOD;
    }
};

```