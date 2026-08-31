# Explained - Sort & positive sum count || Very simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 21
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286459/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286459/)

---

# Approach 
Here we need to check for the total prefix sum > 0.
To do this all the positive number should be at the begining
so that the total possible sum must be maximum and after that we need to remove the -ve numbers from the smaller ones. 

So we need to just sort it and start adding the elements and counting it 
untill we get the sum as -ve or zero.

# Code
```
    int maxScore(vector<int>& nums) {
        long long ans = 0, sum = 0;
        sort(nums.begin(), nums.end());
        for(int i = nums.size()-1; i >= 0; --i){
            sum += nums[i];
            if(sum > 0) ans++;
            else break;
        }
        return ans;
    }
```