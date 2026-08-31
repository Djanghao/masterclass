# ✅✔️Clean and Easy to understand Implementation in C++ ✈️✈️✈️✈️✈️

**Author:** ajay_1134
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/3747124/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/3747124/)

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
    int minSumOfLengths(vector<int>& arr, int target) {
        int n = arr.size(), i = 0, sum = 0;

        vector<int>left(n) , right(n);
        int len = INT_MAX;
        for(int j=0; j<n; j++){
            sum += arr[j];
            while(sum > target){
                sum -= arr[i];
                i++;
            }
            if(sum == target){
                len = min(len,j-i+1);
            }
            left[j] = len;
        }

        i = n-1; sum = 0; len = INT_MAX;

        for(int j=n-1; j>=0; j--){
            sum += arr[j];
            while(sum > target){
                sum -= arr[i];
                i--;
            }
            if(sum == target){
                len = min(len,i-j+1);
            }
            right[j] = len;
        }

        int ans = INT_MAX;
        for(int j=1; j<n; j++){
            if(left[j-1] != INT_MAX && right[j] != INT_MAX) ans = min(ans,left[j-1] + right[j]);
        }
        return ans == INT_MAX ? -1 : ans;
    }
};
```