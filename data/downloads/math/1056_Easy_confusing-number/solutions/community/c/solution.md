# C++ Easy understanding solution

**Author:** wfystx
**Votes:** 2
**Link:** [https://leetcode.com/problems/confusing-number/solutions/320065/](https://leetcode.com/problems/confusing-number/solutions/320065/)

---

```
class Solution {
public:
    bool confusingNumber(int N) {
        int n = 0, origin = N;
        while(N != 0){
            int tmp = N % 10;
            if(tmp == 0 || tmp == 8 || tmp == 1) tmp = tmp;
            else if(tmp == 6) tmp = 9;
            else if(tmp == 9) tmp = 6;
            else return false;
            n = n * 10 + tmp;
            N /= 10;
        }
        return origin != n;
        
    }
};
```