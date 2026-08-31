# C++ || Without Sort || Set || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 41
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/722307/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/722307/)

---

***Runtime: 4 ms, faster than 99.56% of C++ online submissions for Can Make Arithmetic Progression From Sequence.
Memory Usage: 9.8 MB, less than 100.00% of C++ online submissions for Can Make Arithmetic Progression From Sequence.***
```
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        unordered_set<int> uset(arr.begin(),arr.end());
        int max = *max_element(arr.begin(),arr.end());
        int min = *min_element(arr.begin(),arr.end());
        int diff = (max-min)/(arr.size()-1);
        for(int i=1;i<arr.size();i++){
            if(!uset.count(min + i * diff)){
                return false;
            }
        }
        return true;
    }
};
```