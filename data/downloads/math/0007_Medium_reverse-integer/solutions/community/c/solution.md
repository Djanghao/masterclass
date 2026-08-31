# faster than 100.00% of C++ online submissions

**Author:** nitinkashyap29
**Votes:** 79
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/1054279/](https://leetcode.com/problems/reverse-integer/solutions/1054279/)

---

```
class Solution {
public:
    int reverse(int x) {
        int y=0;
        while(x){
            if(y>INT_MAX/10 || y<INT_MIN/10){
                return 0;
            }else{
                y=y*10 +x%10;
                x=x/10;
            }
        }
        return y;
    }
};
```