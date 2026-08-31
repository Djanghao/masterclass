# O(1) Space || MAP || C++

**Author:** khud_gye_guru
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3014918/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3014918/)

---

# Implementation Based || O(1) Space
# **C++**
```
class DataStream {
    int val, size, l = 0, check;
public:
    DataStream(int value, int k) {
        val = value, size = check = k;
    }
    
    bool consec(int num) {
        if(num == val)      check--;          // if same value occurs     
        else                check = size;     // if stream breaks intialize it back to original Size
        
        // If there are less than k integers, the condition does not hold true 
        // For the 1st K calls return False (as specified in the Question)
        if(++l < size)      return 0;         
        // if same value occurs k time then check==0 and if it occurs more then k then check<0
        return check<=0;               
    }
};
```
# Using **MAP**
```
class DataStream {
    map<int, int> m1;
    int val, size;
public:
    DataStream(int value, int k) {
        val = value, size = k;
        m1[value] = k;
    }
    
    bool consec(int num) {
        if(num==val)    m1[val]--;
        else            m1[val] = size;
        return m1[val]<=0;
    }
};
```