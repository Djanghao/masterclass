# Easy C++ Soln || Floyd's Turtoise and Hare Algo

**Author:** mitedyna
**Votes:** 4
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/1228631/](https://leetcode.com/problems/circular-array-loop/solutions/1228631/)

---

```
class Solution {
public:
    //floyd's turtoise and hare algorithm
    int nextpos(vector<int>& nums, bool dir, int pos){
        int n=nums.size();
        bool dirtmp=nums[pos]>=0;
        if(dirtmp!=dir)return -1;
        int nextind=(pos+nums[pos]%n+n)%n;
        if(nextind==pos)nextind=-1;
        return nextind;
    }
    bool circularArrayLoop(vector<int>& nums) {
        for(int start=0;start<nums.size();start++){
            bool dir=nums[start]>=0?true:false;
            int p1=start,p2=start;     //p1 p2 will be index
            do{
                p1=nextpos(nums,dir,p1);
                p2=nextpos(nums,dir,p2);
                if(p2!=-1){
                    p2=nextpos(nums,dir,p2);
                }
            }
            while(p1!=-1 && p2!=-1 && p1!=p2);
            if(p1!=-1 && p1==p2)return true;
            
        }
        return false;
        
    }
};
```