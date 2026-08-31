# [ faster than 98.41%][easy understanding][c++]

**Author:** rajat_gupta_
**Votes:** 11
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/866661/](https://leetcode.com/problems/teemo-attacking/solutions/866661/)

---

```
class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        int n=timeSeries.size();
		
        if(n==0) return 0;
		
        int sum=0;
        for(int i=0;i<n-1;i++){
            if(timeSeries[i]+duration<=timeSeries[i+1]) sum+=duration;
            else sum+=(timeSeries[i+1]-timeSeries[i]);
        }
		
        return sum+duration;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
