# $O(n \sqrt{n})$ Solution

**Author:** TheAnyKey
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/solutions/4427037/](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/solutions/4427037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use static array to reduce allocation time. Sum up the elements in nums from back, so no further calculations needed.

# Complexity
- Time complexity:
$O(n \\sqrt{n})$

- Space complexity:
$O(n \\sqrt{n})$

# Code
```
class Solution {
public:
    int buf[256][50001];
    vector<int> solve(vector<int>& nums, vector<vector<int>>& queries) {
        const int M = 1e9+7;
        const int B = sqrt(nums.size());
        vector<int> res(queries.size());
        

        for( int b=B-1;b>0;--b ) {
            for( int i=nums.size()-b;i<nums.size();++i ) {
                buf[b][i] = nums[i];
            }
            for( int i=nums.size()-b-1;i>=0;--i ) {
                buf[b][i] = buf[b][i+b] + nums[i];
                buf[b][i] %= M;
            }
        }

        for( int q=0;q<queries.size();++q ) {
            if( queries[q][1]>=B ) {
                for( int j=queries[q][0];j<nums.size();j+=queries[q][1] ) {
                    res[q] += nums[j];
                    res[q] %= M;
                }
            } else {
                res[q] = buf[queries[q][1]][queries[q][0]];
            }
        }

        return res;
    }
};
```