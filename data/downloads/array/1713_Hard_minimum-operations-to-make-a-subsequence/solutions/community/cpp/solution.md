# C++| Simple Solution With Hindi Comments

**Author:** coder3484
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/3971025/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/3971025/)

---

# Code
```
class Solution {
public:
    int minOperations(vector<int>& target, vector<int>& arr) {
        int n = target.size(), ans = 0;
        map<int, int> map; // Storing index of elements of target
        for(int i=0;i<n;i++) map[target[i]] = i;

        vector<int> longSubsq; // Storing longest subsq of target present in arr
        for(int num : arr) {
            // If num is not present in target to iska koi kaam nhi haii 
            if(map.find(num) == map.end()) continue;
            // map[num]=>num ka idx target me,checking ye longSubsq me hai ya nhi 
            auto it = lower_bound(longSubsq.begin(), longSubsq.end(), map[num]);
// Agr num ka index sabse bada hai longSubsq me abhi tak to pushback kar denge 
            if(it == longSubsq.end())
                longSubsq.push_back(map[num]);
//nhi to us idx ki value update kar denge map[num] se taki lis maintain rhe idx-wise
            else *it = map[num];
        }
        return target.size() - longSubsq.size();
    }
};

```