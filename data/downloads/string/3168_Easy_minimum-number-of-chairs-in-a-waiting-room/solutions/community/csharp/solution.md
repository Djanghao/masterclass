# Easy Solution - C#

**Author:** Yogesh_555
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5365849/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5365849/)

---



# Code
```
public class Solution {
    public int MinimumChairs(string s) {
        int chairsInWaitingroom=0;
        int avialableChairs=0;
        int minimumChairs=0;
        for(int i=0;i<s.Length;i++){
             if(s[i]=='E'){ 
                if(avialableChairs>=1) avialableChairs--;
                else { minimumChairs++; chairsInWaitingroom++; }
             }
             else{
                avialableChairs++;
             }
        }
        return minimumChairs;
    }
}
```