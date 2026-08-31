# C++ || 100.00% || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 23
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/711490/](https://leetcode.com/problems/day-of-the-year/solutions/711490/)

---

***Runtime: 0 ms, faster than 100.00% of C++ online submissions for Day of the Year.
Memory Usage: 5.9 MB, less than 74.38% of C++ online submissions for Day of the Year.***

```
class Solution {
public:
    int dayOfYear(string date) {
        int yy = stoi(date.substr(0,4));
        int mm = stoi(date.substr(5,2));
        int dd = stoi(date.substr(8,2));
        int result = dd;
        vector<int> month ({31,28,31,30,31,30,
                             31,31,30,31,30,31});
        if(isLeapYear(yy)){
            month[1]=29;
        }
        for(int i=0;i<mm-1;i++){
            result += month[i];
        }
        return result;
    }
    bool isLeapYear(int y){
        if(y%400 == 0 || (y%4 == 0 && y%100 !=0))
            return true;
        return false;
    }
};
```

**Feel free to ask your queries!!!
Please upvote, if you like.**