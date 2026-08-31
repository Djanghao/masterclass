# C++ 100% Fast Short And Concise Code

**Author:** SM3210
**Votes:** 19
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/1150079/](https://leetcode.com/problems/robot-return-to-origin/solutions/1150079/)

---

**PLZ UPVOTE IF YOU LIKED IT**

```
class Solution {
public:
    bool judgeCircle(string moves) {
        int x=0;
        int y=0;
        
        for(int i=0;i<moves.size();i++){
            if(moves[i]=='U')x++;
            if(moves[i]=='D')x--;
            if(moves[i]=='R')y++;
            if(moves[i]=='L')y--;
        }
        
        return (x==0 && y==0);
    }
};