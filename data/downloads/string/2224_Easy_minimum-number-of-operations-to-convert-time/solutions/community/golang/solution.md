# Solution in 6 languages | O(1) Time and O(1) Space Complexity |0ms | implementation |

**Author:** harishdatla
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1929316/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1929316/)

---

**Pls upvote(\uD83E\uDD7A\uD83D\uDE48\uD83D\uDE0C). If you found it useful**

Just convert time of the day to minutes and iterate over 60,15,5,1 minutes to get the number of ops.

Please suggest any improvements language wise or algorithmwise, im only well verse in c++,golang. I use the rest of languages on need by basis at work.

Please comment if u have any doubts, will be happy to reply

C++
```
class Solution {
public:
    int HHMMToMinutes(string s){
        return stoi(s.substr(0,2))*60 + stoi(s.substr(3,2));
    }
    int convertTime(string current, string correct) {
        int diff = - HHMMToMinutes(current) +  HHMMToMinutes(correct);
        vector<int> order = {60,15,5,1};
        int i = 0;
        int ans = 0;
        while(i < 4){
            ans+=(diff/order[i]);
            diff%=order[i];
            i++;
        }
        
        return ans;
    }
};
```
Java

```
class Solution {
    public int  HHMMToMinutes(String s){
        return Integer.parseInt(s.substring(0,2))*60 + Integer.parseInt(s.substring(3,5)) ;
    }
    public int convertTime(String current, String correct) {
        int diff =  HHMMToMinutes(correct) -  HHMMToMinutes(current);
        int[] order = {60,15,5,1};
        int i = 0;
        int ops = 0;
        while(i < 4){
            ops+=(diff/order[i]);
            diff%=order[i];
            i++;
        }
        return ops;
    }
}
```
Python
```
class Solution:
    def HHMMToMinutes(self, s: str) -> int:
        return int(s[0:2])*60 + int(s[3:5])
    def convertTime(self, current: str, correct: str) -> int:
        diff = self.HHMMToMinutes(correct) - self.HHMMToMinutes(current)
        order = [60,15,5,1]
        ops = 0
        for i in range(0,4):
            ops+=int(diff/order[i])
            diff%=order[i]
        return ops
```
Javascript

```
var getTime = function(time){
    var [hrs,mins] = time.split(":");
    return parseInt(hrs)*60 + parseInt(mins);
}


var convertTime = function(current, correct) {
    var diff = getTime(correct) - getTime(current);
    var order = [60,15,5,1];
    var ops = 0;
    order.forEach(val =>{
        ops+=Math.floor((diff/val));
        diff%=val;
    })
    return ops;
};
```

Golang
```
import "strconv"
func HHMMToMinutes(s string) int{
    sr := strings.Split(s,":")
    hrs,_ := strconv.Atoi(sr[0])
    minutes,_ := strconv.Atoi(sr[1]) 
    return  hrs*60 + minutes 
}
func convertTime(current string, correct string) int {
    diff := HHMMToMinutes(correct) - HHMMToMinutes(current)
    order := [4]int{60,15,5,1}
    ops := 0
    for i := 0 ; i < 4 ; i++ {
        ops+=(diff/order[i])
        diff%=order[i]
    }
    return ops
}
```

Kotlin
```
class Solution {
    fun HHMMToMinutes(s: String): Int{
        return Integer.parseInt(s.subSequence(0,2).toString())*60+Integer.parseInt(s.subSequence(3,5).toString())
    }
    fun convertTime(current: String, correct: String): Int {
        var diff = HHMMToMinutes(correct) - HHMMToMinutes(current)
        var ops = 0
        val order = intArrayOf(60,15,5,1)
        println(diff)
        for(i in 0..3){
            ops+=(diff/order[i])
            diff%=order[i]
        }
        return ops
    }
}
```

