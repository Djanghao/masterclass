# C++ 0ms [Short Code+Intuition]

**Author:** Tipra
**Votes:** 3
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/1372227/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/1372227/)

---

There are only 2 ways to make the array zigzag, either take all the odd elements and make them smaller than their neighbours or take all the even elements and make them smaller than their neighbours.

The smaller of these 2 potential solutions is the final ans. Can be done in 2 seperate loops (first consider just the even elements and then the odd ones) or combine for better performance.

At first I was considering a rather complex DP solution which considered the sub problems to the suffixes but that didn't really work and had too many edge cases. This solution is really elegant.
```
class Solution {
public:
    int movesToMakeZigzag(vector<int>& nums) {
        int n=nums.size();
        if(n<=1) return 0;
        const int MAX=numeric_limits<int>::max();
        int ans1=0,ans2=0;
        for(int i=0; i<n; i++){
            int left=(i-1>=0)?nums[i-1]:MAX;
            int right=(i+1<n)?nums[i+1]:MAX;
            int smallest = min(left, right);
            if(i%2 == 0)
                ans1 += max(0, nums[i]-smallest+1);
            else
                ans2 += max(0, nums[i]-smallest+1);    
            
        }

        return min(ans1, ans2);
    }
};
```