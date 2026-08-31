# [c++][greedy][beginner friendly]

**Author:** rajat_gupta_
**Votes:** 164
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1001160/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1001160/)

---

```
class Solution {
public:
    static bool myfunction(vector<int>& a, vector<int>& b){
        return a[1] > b[1];
    }
    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
	    //custom sort (in increasing order of numberOfUnitsPerBox as we have to return  maximum total number of units )
        sort(boxTypes.begin(),boxTypes.end(),myfunction);
		//greedily pick boxes till capacity is full
        int ans=0;
        for(auto box: boxTypes){
            int x=min(box[0],truckSize);  //choose minimum boxes from available boxes and capacity left
            ans+=(x*box[1]);  //adding units in ans
            truckSize-=x;  //reduce the capacity
            if(!truckSize) break;  //capacity full
        }
        return ans;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
