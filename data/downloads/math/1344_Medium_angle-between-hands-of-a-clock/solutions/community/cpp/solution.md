# [C++] 1-line solution | Beats 100% submissions

**Author:** dineshmane
**Votes:** 5
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/2520957/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/2520957/)

---

Hey guys,
Hope you all are doing well!
To be honest, I could have written this code in a single line, but I decided to keep it as simple as possible so that everyone\xA0can\xA0easily grasp the logic behind it.
```
class Solution {
public:
    double angleClock(int hour, int minutes){
        double hh_angle=(60*hour+minutes)*0.5;  
        double mh_angle=minutes*6;
        double ans=abs(hh_angle-mh_angle);     //diff liya hai
        return ans<=180.0 ? ans : 360.0-ans;   //chhote angle ko return kiya hai
    }
};
```
Explaination: 
i) The minute hand moves 360 degrees in 60 minute => 6 degrees in 1 minute.
ii) Hour hand moves 360 degrees in 12 hours => 0.5 degrees in 1 minute. 
iii) In h hours and m minutes, the minute hand would move (h*60 + m)*6 and hour hand would move (h*60 + m)*0.5. 

Please let me know if you have any questions in the comments. I'd be delighted to respond.\xA0
If you found the solution helpful, please vote it up.
Have fun coding.