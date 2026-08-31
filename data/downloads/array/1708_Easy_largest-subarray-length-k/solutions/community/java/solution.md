# Java Duval Followup Two Pointers O(N) Time / O(K) Space

**Author:** REED_W
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/994709/](https://leetcode.com/problems/largest-subarray-length-k/solutions/994709/)

---


Followup:
Similar to LC1163, LC899, use Duval algo.
```
    public int[] sln2(int[] nums, int k){
        int l = 0; int r = 1;
        int n = nums.length;
        int m = 0;
        while(r+k-1<n && r+m<n){
            if(nums[l+m]==nums[r+m]){
                m++;
            }else if(nums[l+m] > nums[r+m]){
                r = r+m+1;
                m=0;
            }else{
                l = Math.max(l+m+1, r);
                r = l+1;
                m=0;
            }
        }
        int[] res = new int[k];
        for(int i =0;i<k;i++ ) res[i] = nums[l+i];
        return res;
    }
	
	update: thanks for @flyingpenguin finding the bug. Updated to code to cover missed corner cases.