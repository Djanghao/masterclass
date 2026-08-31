# Greedy C++ O(n) time O(1) space

**Author:** zhongzeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/2129552/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/2129552/)

---

Greedy, 1 catch left-most 0
O(n) time (two pass), O(1) space 
O(n) time (one pass), O(n) space is also possible 

```
class Solution {
public:
    int catchMaximumAmountofPeople(vector<int>& team, int dist) {
        int i=findNext(team,-1,1), j=findNext(team,-1,0), cat=0;
        
        while( i<team.size()&&j<team.size() ){
            if(j<i-dist){
                j=findNext(team,j,0);
            }else if(i+dist<j){
                i=findNext(team,i,1);
            }else{
                cat++;
                i=findNext(team,i,1);
                j=findNext(team,j,0);
            }
        }
        
        return cat;
    }
    
protected:
    int findNext( vector<int>& team, int i, int t ){
        i++;
        while( i<team.size()&&team[i]!=t)   i++;
        return i;
    }
};
```