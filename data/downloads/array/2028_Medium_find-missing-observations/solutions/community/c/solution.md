# C++ | easy | with explanation

**Author:** aman282571
**Votes:** 35
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/1500152/](https://leetcode.com/problems/find-missing-observations/solutions/1500152/)

---

**Explanation:-**
1. Find the sum of missing observation,that is = ``` mean*(n+rolls.size())-sum(rolls). ```
2. If ``` missingSum < 'n' or missingSum>6*n ``` then we cannot create the array so return empty array.
3. After this we only have to distribute missingSum to ``` n ``` elements.So i used below method:-
4. Assign  ```missingSum/n``` to every element of new array.
5. if missingSum%n is not zero then after assigning ```missingSum/n```to every element we will left with ```missingSum%n```.So assign 1 to  ```missingSum%n``` elements of new array .
6. That's it, You can use your own way to assign values. 

```
class Solution {
public:
    vector<int> missingRolls(vector<int>& rolls, int mean, int n) {
        int size=rolls.size(),sum=accumulate(rolls.begin(),rolls.end(),0),missingSum=0;
         missingSum=mean*(n+size)-sum;
        if(missingSum<n || missingSum>6*n)
            return {};
         int rem=missingSum%n;
         vector<int>ans(n,missingSum/n);
        for(int i=0;i<rem;i++)
            ans[i]+=1;
        return ans;   
    }
};
```
Do **UPVOTE** if it helps :)
If you have any question or suggestion then please mention in comment section.
Thanks