# ✅100% || C++ || Binary Search || Easy to Understand || Simple Logic

**Author:** anutripathi107
**Votes:** 29
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/1899223/](https://leetcode.com/problems/split-array-largest-sum/solutions/1899223/)

---

First we need to find the range of Binary Search.....

The **minimum**  value of sum **cannot** be **lower** than the **largest element** of the array nums . This is because even if we split all element into group of size 1, largest element will have the largest sum.

So, this value will be the staring range of Binary Search.

e.g. if nums = [7,2,5,10,8], then sum cannot be lower that 10.

Similarly, the largest possible value of Sum will be when we don't divide the array at all and all elements are in the same group.

**Ending** range of Binary Search will be the **sum** of the whole array **nums**.

We will then calculate mid value of this range and check if We can have atmost **m** subarray groups, such that the sum of each group does **not** exceed **mid**.

To do this, we can take a variable **count** to store the number of paritions needed so that the maximum sum of the nums does not exceed **mid**.

**If** the **total number of groups** after partition is **less than the m**, we can split the any of the current group of size >=2.
This will **not** increase the **maximum sum** and hence our answer will still be **valid**.

```
class Solution {
public:
    bool check(vector<int>& nums, int m, int curr){
        int i=-1, n = nums.size(), count=1;
        
        int sum=0;
        
        while(++i<n && count<=m){
		//if adding the nums[i] does not make the sum greater than curr (mid), we add it to group
            if(sum+nums[i] <= curr) sum += nums[i];  
		// else we can add a new group to store the remaining element.
            else sum=nums[i], count++;
        }
		
		//If the total number of groups is less than the m, we can split the any of the current group of size >=2.
		//this will not increase the maximum sum and hence our answer will still be valid
		
        return count<=m;
    }
    
    int splitArray(vector<int>& nums, int m) {
        int e=0,s=0,mid,ans;
        for(auto x : nums){
			e += x;               //e stores the sum of the nums, upper range of Binary Search
			s=max(s,x);          //s stores the largest element in array nums, lower range of Binary Search
		}	
        ans = e; 
        
        while(s<=e){
            mid = s + (e-s)/2;
            
            if(check(nums,m,mid)){
                ans = min(ans,mid);
                e = mid - 1;
            }
            else s = mid + 1;
        }
        return ans;
    }
};
```