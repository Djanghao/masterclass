# C++, Full Explanation , O(n) T.C.

**Author:** digital_write
**Votes:** 31
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/912159/](https://leetcode.com/problems/escape-the-ghosts/solutions/912159/)

---

**Note : Any suggestions, improvements are always welcome.**
**Note : Random people downvote without even reading, do read, if helps don't downvote atleast, Thank You!**

**Intution**
1. The **" escape "** here is defined as to reach the target from the starting point (0,0) ( cartesian system ).
2.  So , I would always try to reach target without encountering ghosts at any step, which I can do in two possible manner. ***One is I try to reach every step ( x, y ) such that any ghost reaches their at some number of steps after or before me but not at the same time as me i.e to reach a particular step ( x, y ) the number of moves I will take should be different from any ghost , and this must be satisfied for every position ( x, y ).*   *The other is that I find a way to reach the target much earlier than any of the ghosts, beacause If a ghost can reach the target before me , then even if I optimally try to reach the target I will face him and that implies I must confront him to escape.*** 
3.  Hence, from above analysis we can say that if my initial distance ( not displacement, as only specific up, down, left, right, 1 steps are allowed and not digonal moves ) from target is less than any ghosts distance from the target then it implies that I can reach the target sooner than any ghost with some optimal path selection so no ghost will be present their already => I will escape. ***Secondly if my initial distance from target is less than any ghost , that means if a ghost wants to catch me he must try to catch me inbetween the target and starting point , but that is not possible WHY ? we can easily prove this using contradiction, Suppose a ghost catches us in between then at that point (x,y) my distance from target will be equal to ghosts distance from target => that if  "n" moves have been done and I moved n times , ghost moved n times than initially we both had same distance from target, and that is a cotradiction because we assumed "I initially had lesser distance to target than ghost" .***

**Hence it proves that in both cases the lemma that " If my initial distance from the target is lesser than any ghosts distance from target, I can always reach the target safely, hence escape " holds.**


```
class Solution 
{
public:
    bool escapeGhosts(vector<vector<int>>& ghosts, vector<int>& target)
    {
        int my_distance_from_target = abs(target[0]) + abs(target[1]);
        
        for( auto &g : ghosts )
        {
            if( my_distance_from_target >= ( abs(g[0] - target[0]) + abs(g[1] - target[1])) )return false;
        }
        
        return true;
    }
};
```