# Easy soln in C++|Python3|Python|C

**Author:** leet49471
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5519178/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5519178/)

---

C++
```
class Solution {
public:
    string losingPlayer(int x, int y) {
        int a = min(x,y/4);
            if(a%2 == 0){
                    return "Bob";
            }
            else{
                    return "Alice";
            }
    }
};
```
Python3
```
class Solution:
    def losingPlayer(self, x: int, y: int) -> str:
        x = min(x,y//4)
        if(x%2 == 0):
                return "Bob"
        else:
                return "Alice"
```
Python
```
class Solution(object):
    def losingPlayer(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: str
        """
        x = min(x,y//4)
        if(x%2 == 0):
                return "Bob"
        else:
                return "Alice"
```
C
```
char* losingPlayer(int x, int y) {
    int a;
        if(x>y/4){
                a = y/4;
        }
        else{
                a = x;
        }
        if(a%2 == 0){
                    return "Bob";
            }
            else{
                    return "Alice";
            }
}
```