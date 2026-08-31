# [C++]fast/easy to understand with explanation no hashmap

**Author:** DEVRAJ_DRS
**Votes:** 34
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1254492/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1254492/)

---

for eg: we have 3 number in array i.e. [1,2,3] 
now we can easily say 3 need 2 step,and 2 need 1 step
so answer=2+1=3;
so start from beginning:
1: smallest number need **0** steps
2:next just greater than smallest need one more step i.e. **1** steps
3:next greater need **2** steps and so on

now look at code given below

```
class Solution {
public:
    int reductionOperations(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int ans=0,j=0;
        for(int i=1;i<nums.size();i++){
			if(nums[i]!=nums[i-1]){  //if number is not equal to previous then we need one more step so we increase j
                j++;
            }
            ans+=j; //count or every number present in array
        }
        return  ans;
    }
};
```
