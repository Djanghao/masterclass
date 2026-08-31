# Unique solution, Easy to understand. C++

**Author:** Metacresol
**Votes:** 153
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/622060/](https://leetcode.com/problems/valid-perfect-square/solutions/622060/)

---

This solution makes use of the fact that all square numbers are sum of odd numbers starting from 1.
For ex :
1 = 1
1+3 = 4
1 + 3 + 5 = 9
1 + 3 + 5 + 7 = 16
.... and so on
So i keep subtracting odd numbers from the given number, starting from 1. If the number eventually reaches 0, it is a perfect square. If it reaches a negative number without reaching 0 it is not a perfect square.
So the code goes like :
```
class Solution {
public:
    bool isPerfectSquare(int num) {
        int i=1;
        while(num>0){
            num -= i;      //Subtracting odd number from num and updating num
            i +=2;         // Updating i to the next odd number
            if(!num) return true;
        }
        return false;
    }
};
```