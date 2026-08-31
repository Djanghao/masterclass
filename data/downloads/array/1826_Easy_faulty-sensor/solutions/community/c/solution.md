# C++ | 2 Pass with explanation | time O(N), space O(1)

**Author:** milochen
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/2943021/](https://leetcode.com/problems/faulty-sensor/solutions/2943021/)

---

The idea is the function 
`int wellPair(vector<int>& correct, vector<int>& incorrect) `
It will	return drtopped index if the following two condition satisfied.
**(1)the first argument is correct sensor**
**(2)the second argument is incorrect sensor** 
When we have this function, the problem can be solve easily as you can see 
in the following source code. 
# Solution
```C++
class Solution {
public:
    int badSensor(vector<int>& sensor1, vector<int>& sensor2) {
        if(sensor1==sensor2) return -1;
        int n = sensor1.size();
        int wellPair12=wellPair(sensor1, sensor2), wellPair21=wellPair(sensor2, sensor1);
        if(wellPair12<0 && wellPair21<0) return -1;
        if(wellPair12>=0 && wellPair21>=0) return -1;
        if(wellPair12>=0) return 2;
        if(wellPair21>=0) return 1;
        return -1;
    }
    int wellPair(vector<int>& correct, vector<int>& incorrect) {
        int n = correct.size();
        int i = 0; 
        while(correct[i]==incorrect[i])i++;
        int dropped_idx = i;//the index of dropped value in correct[]
        while(i+1<n && correct[i+1]==incorrect[i]) i++;
        if(i+1!=n) return -1;
        if(correct[dropped_idx] == incorrect[n-1])return -1;
        return dropped_idx;
    }
};
```