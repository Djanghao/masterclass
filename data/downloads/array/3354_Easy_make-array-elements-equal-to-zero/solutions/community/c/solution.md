# C++ | Brute and Optimized | 2 Approaches ✅🧑🏻‍💻

**Author:** anubhvshrma18
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053415/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053415/)

---

#### Brute Force
*`For each zero element check if you can go right and make it whole zero or go to left and check the same whichever way is possible, add 1 to the no of ways.`*

***Time Complexity - O(N^2)***
```
class Solution {
public:
    int countValidity(vector<int> nums, int start, bool rdir) {
        int idx = start;
        while(idx >=0 && idx<nums.size()) {
            if(nums[idx]==0) {
                idx += (rdir==true)?1 : -1;
            } else {
                nums[idx]--;
                rdir = !rdir;
                idx += (rdir==true)?1 : -1;
            }
        }
        for(auto a:nums) 
            if (a!=0) return 0;
        
        return 1;
    }
    int countValidSelections(vector<int>& nums) {
        int n = nums.size();
        int cnt=0;
        for(int i=0;i<n;i++) {
            if(nums[i]==0) {
                cnt += countValidity(nums, i, true) + countValidity(nums, i, false);
            }
        }
        
        return cnt;
        
    }
};
```


### Better Approach
Time Complexity. - O(N)
```
class Solution {
public:
    int countValidSelections(vector<int>& nums) {
        int n = nums.size();
        int cnt=0, lsum=0, rsum=0;
        rsum = accumulate(begin(nums), end(nums),0);
        for(int i=0;i<n;i++) {
            if(nums[i]==0) {
                if(lsum==rsum) {
                    cnt+=2;
                } else if(abs(lsum-rsum)==1) {
                    cnt+=1;
                }
            }
            lsum+=nums[i];
            rsum-=nums[i];
        }
        
        return cnt;
        
    }
};
```