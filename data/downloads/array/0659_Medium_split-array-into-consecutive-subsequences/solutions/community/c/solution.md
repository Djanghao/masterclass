# C++ very ez priority queue method

**Author:** zl4334
**Votes:** 89
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2628950/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2628950/)

---

```
class Solution {
public:
    class comparasion {
        public:
        bool operator()(pair<int, int>& a, pair<int, int>& b) {//always put the smallest and shortest sequence on the top of the heap
            if(a.first == b.first) return a.second > b.second;
            return a.first > b.first;
        };
    };
    bool isPossible(vector<int>& nums) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, comparasion> qe;
        int i = 0;
        while(i < nums.size()) {
            if(qe.empty()) {
                qe.push({nums[i], 1});
                i++;
            }
            else {
                pair<int, int> tmp = qe.top();
                if(nums[i] == tmp.first) {
                    qe.push({nums[i], 1});//add a new sequence
                    i++;
                }
                else if(nums[i] == tmp.first + 1) {
                    qe.pop();
                    qe.push({nums[i], tmp.second + 1});//update the top of the heap
                    i++;
                }
                else {
                    if(tmp.second < 3) {//false
                        return false;
                    }
                    qe.pop();
                }
            }
        }
        while(!qe.empty()) {
            if(qe.top().second < 3) {
                return false;
            }
            qe.pop();
        }
        return true;
    }
};
```