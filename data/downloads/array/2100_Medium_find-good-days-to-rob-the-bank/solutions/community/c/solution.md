# C++ | prefix & suffix array | with explanation

**Author:** aman282571
**Votes:** 107
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623329/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623329/)

---

**Explanation:-**
1. For every index we will find number of ```previous elements``` that follows this pattern ```security[i - time] >= security[i - time + 1]```  and it's easy to find you can see in the code and we store this info in ```prefix array```.
2.  For every index we will find number of ``` elements that are ahead of current element``` which follows this pattern ```security[i + time - 1] <= security[i + time]```  and it's easy to find you can see in the code and we store this info in ```suffix array```.
3.  To find ```good days``` just traverse the array and check this condition ```pre[i]-1>=time && suf[i]-1>=time```.
4.  **Note:-** I am subtracting 1 in above line because i have included current element in ```cnt```.
5.  If you want, you can avoid to use ```prefix array``` and can calculate when you are calculating answer.

```
class Solution {
public:
    vector<int> goodDaysToRobBank(vector<int>& s, int time) {
        int size=s.size(),cnt=1;
        vector<int>pre(size,0),suf(size,0);
        pre[0]=1;
        for(int i=1;i<size;i++){
            if(s[i]<=s[i-1])
                cnt++;
            else
                cnt=1;
             pre[i]=cnt;
        }
        suf[size-1]=1;cnt=1;
        for(int i=size-2;i>=0;i--){
            if(s[i]<=s[i+1])
                cnt++;
            else
                cnt=1;
            suf[i]=cnt; 
        }
        vector<int>ans;
        for(int i=0;i<size;i++)
            if(pre[i]-1>=time && suf[i]-1>=time)
                ans.push_back(i);
        return ans;
    }
};
```

**As people are asking about intuition behind this,so i am adding the same here.**
1. Let's say i am looking at index =2 and time =2 so to be a good day it should follow this pattern ```security[0] >= security[1] >= security[2] <= security[3] <= security[4]```.
2. So i thought for i=3  to be a good day it should follow ```security[1] >= security[2] >= security[3] <= security[4] <= security[5]```
3. So you can see above we are recalculating ```security[1] >= security[2] >= security[3] <= security[4] ``` this. so i got the intuition that if for every ```index``` ,if i store the ```cnt``` of previous elements and ```cnt``` of ahead elements  that follow this pattern then i can know in ```O(1)``` whether this day is good or not.
This is what i thought during contest.
I hope it will help.


Do **UPVOTE** if it helps:)