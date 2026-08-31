# C++ | Brute & Optimal Approaches ✅

**Author:** prantik0128
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2525203/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2525203/)

---

**C++:** (**Brute Approach**)
```
class Solution {
public:
	bool findSubarrays(vector<int>& nums) {
		int n=nums.size();
		int count=0;
		for(int i=0;i<n-1;i++){
			for(int j=i+1;j<n-1;j++){
				if(nums[j]+nums[j+1]==nums[i]+nums[i+1]) count++;
			}
		}
		return count>=1;
	}
};
```
****
**Time Complexity:** **O(N^2)**
**Space Complexity:** **O(N)**
****
**C++:** (**Hashmap Approach**)
```
class Solution {
public:
    bool findSubarrays(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int,int> mp;
        for(int i=1;i<n;i++){
            int sum = nums[i]+nums[i-1];
            mp[sum]++;
            if(mp[sum]>1) return true;
        }
        return false;
    }
};
```
****
**Time Complexity:** **O(N)**
**Space Complexity:** **O(N)**
****