# Easy C++ code with explanation

**Author:** venkatasaitanish
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1693110/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1693110/)

---

We solve the problem in reverse manner. We move from target to 1, because in this way you get more utlilization  of maxDoubles, as a result we can minimise the moves.
When target is an even number we can decrease the target by half if maxDoubles are available.
When target is odd we just decrease the target by 1.
After the maxDoubles are finished, we just decrease each time by 1. (i.e. target-1 times).

```
class Solution {
public:
    int minMoves(int target, int maxDoubles) {
        int cnt = 0;
        while(target>1 && maxDoubles>0){
            if(target%2==0){
                cnt++;
                maxDoubles--;
                target = target/2;
            }
            else{
                cnt++;
                target--;
            }
        }
        return cnt + (target-1);
    }
};
```
**Upvote if it helps!**