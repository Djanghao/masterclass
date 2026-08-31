# C++ | Explanation | Line Sweep

**Author:** aman282571
**Votes:** 8
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/2135282/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/2135282/)

---

**Explanation**
1. For any ```nums[i] ``` how many shifts are required to get one point ??
2. ```Low ``` and ```high``` are min and max shifts required to get one point.
3. If ```nums[i]``` is already satisfying the condition then ```low=0 and high =i-nums[i]``` shifts are required.
4. If ```nums[i]``` is satisfying or not satisfying the condition then our ```low=i+1(to shift it to last index) and high=i+len(nums)-nums[i]```
5. Use line sweep to calculate max points after ```i``` shifts

**TC:- O(n),Sc:-O(n)**

```
class Solution {
public:
    int bestRotation(vector<int>& nums) {
        int sz=nums.size();
        vector<int>pointsForIShifts(2*sz+1,0);
        for(int i=0;i<sz;i++){
            int l=0,h=0;
            if(nums[i]<=i){
                l=0;h=i-nums[i];
                pointsForIShifts[l]+=1;pointsForIShifts[h+1]-=1;
            }
            l=i+1;h=i+sz-nums[i];
            pointsForIShifts[l]+=1;pointsForIShifts[h+1]-=1;            
        }
        int maxP=pointsForIShifts[0],k=0;
        for(int i=1;i<pointsForIShifts.size();i++){
            pointsForIShifts[i]+=pointsForIShifts[i-1];
            if(pointsForIShifts[i]>maxP){
                maxP=pointsForIShifts[i];
                k=i;
            }
        }
        return k;
    }
};
```
Do **UPVOTE** if it helps :)