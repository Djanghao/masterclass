# c++ || o(n)

**Author:** rajat_gupta_
**Votes:** 7
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/1345138/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/1345138/)

---

```
class Solution {
public:
    int addRungs(vector<int>& rungs, int dist){
        int cnt=0;
        for(int i=rungs.size()-1;i>=0;i--){
           int j=(i!=0)?(rungs[i]-rungs[i-1]):rungs[i];
           if(j>dist){
               cnt+=((j-1)/dist);
			   //or
			   //cnt+=(j/dist)-1;
               //if(j%dist > 0) cnt++;
           }
        }
        return cnt;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
