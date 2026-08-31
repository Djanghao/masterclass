# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 💯

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5619642/](https://leetcode.com/problems/snake-in-matrix/solutions/5619642/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-08-11 101806.png](./images/1.png)
```javascript []
//JavaScript Code
/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let c = 0, r = 0;
    for(let st of commands){
        if(st == "UP")
            r--;
        else if(st == "RIGHT")
            c++;
        else if(st == "DOWN")
            r++;
        else
            c--;
    }
    return n * r + c;
};
```
```Python3 []
#Python3 Code
class Solution:
    def finalPositionOfSnake(self, n: int, commands: List[str]) -> int:
        r = c = 0
        for str in commands:
            if str == "UP":
                r -= 1
            elif str == "RIGHT":
                c += 1
            elif str == "DOWN":
                r += 1
            else:
                c -= 1
        return n * r + c
```
```C++ []
//C++ Code

// Start of Template...

#include <bits/stdc++.h>
using namespace std;
using namespace __gnu_pbds;


#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)
#define RepA(ele, nums) for (auto& ele : nums)

// end of  Template
class Solution {
public:
    int finalPositionOfSnake(int n, vector<string>& commands) {
        int row = 0, col = 0;
        RepA(str, commands){
            if(str == "UP")
                row -=1;
            else if(str == "RIGHT")
                col += 1;
            else if(str == "DOWN")
                row += 1;
            else if(str == "LEFT")
                col -= 1;
        }
        return row * n + col;
    }
};
```
```Java []
//Java Code
class Solution {
    public int finalPositionOfSnake(int n, List<String> commands) {
        int r = 0, c = 0;
        for(String st : commands){
            if(st.equals("UP"))
                r--;
            else if(st.equals("RIGHT"))
                c++;
            else if(st.equals("DOWN"))
                r++;
            else if(st.equals("LEFT"))
                c--;
        }
        return r * n + c;
    }
}
```
```C []
//C Code
int finalPositionOfSnake(int n, char** commands, int commandsSize) {
    int r = 0, c = 0;
    for(int s = 0; s < commandsSize; s++){
        if(!strcmp(commands[s], "UP"))
            --r;
        else if(!strcmp(commands[s], "RIGHT"))
            ++c;
        else if(!strcmp(commands[s], "DOWN"))
            ++r;
        else
            --c;
    }
    return n * r + c;
}
```
```Python []
#Python COde
class Solution(object):
    def finalPositionOfSnake(self, n, commands):
        """
        :type n: int
        :type commands: List[str]
        :rtype: int
        """
        r = c = 0
        for st in commands:
            if st == "UP": r -= 1
            elif st == "RIGHT": c += 1
            elif st == "DOWN": r += 1
            else : c -= 1
        
        return (n * r) + c
```
```C# []
//C# Code
public class Solution {
    public int FinalPositionOfSnake(int n, IList<string> commands) {
        int r = 0, c = 0;
        foreach(var st in commands){
            if(st == "UP")
                r--;
            else if(st == "RIGHT")
                c++;
            else if(st == "DOWN")
                r++;
            else
                c--;
        }
        return n * r + c;
    }
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
int finalPositionOfSnake(int n, char** commands, int commandsSize) {
    int r = 0, c = 0;
    for(int s = 0; s < commandsSize; s++){
        if(!strcmp(commands[s], "UP"))
            --r;
        else if(!strcmp(commands[s], "RIGHT"))
            ++c;
        else if(!strcmp(commands[s], "DOWN"))
            ++r;
        else
            --c;
    }
    return n * r + c;
}
```
![th.jpeg](./images/2.jpeg)
