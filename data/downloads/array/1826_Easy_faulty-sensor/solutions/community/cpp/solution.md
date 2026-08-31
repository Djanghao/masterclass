# C++ STL std::mismatch

**Author:** alexisgoar
**Votes:** 1
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/2842336/](https://leetcode.com/problems/faulty-sensor/solutions/2842336/)

---

# Intuition
std::mismatch returns a pair of iterators for the elements in sensor1 and sensor2 that are not equal to each other. Then use this iterators to check which is the faulty sensor using std::equal
# Code
```cpp
class Solution {
public:
    int badSensor(vector<int>& sensor1, vector<int>& sensor2) {
        auto[it1, it2] = std::mismatch(sensor1.begin(),sensor1.end(),sensor2.begin(),sensor2.end());
        if(it1 == sensor1.end()){
            return -1; 
        }
        if(std::equal(std::next(it1),sensor1.end(),it2,std::prev(sensor2.end()))){
            if(std::equal(std::next(it2),sensor2.end(),it1,std::prev(sensor1.end()))){
                return -1; 
            }
            return 2; 
        }
        return 1; 
        
    }
};
```