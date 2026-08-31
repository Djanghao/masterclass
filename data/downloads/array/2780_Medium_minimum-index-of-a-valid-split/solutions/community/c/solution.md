# ✅C++ | Easy | Unordered Map | Majority Element

**Author:** Pitbull_45
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771324/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771324/)

---

```
class Solution {
public:
    int minimumIndex(vector<int>& nums) {
     int n = nums.size();
     unordered_map<int, int> freq;
     for (int num : nums) {
        freq[num]++;
    }
    int dominant = -1;
    for (auto& x : freq) {
        if (x.second * 2 > n) {
            dominant = x.first;
            break;
        }
    }
    int count = 0;
    int splitIndex = -1;
    for (int i = 0; i < n - 1; i++) {
        if (nums[i] == dominant){
            count++;
        int count2=freq[dominant]-count;
        if (count * 2 > i + 1 && count2 * 2 > n - i - 1) {
            splitIndex = i;
            break;
          }
        }
    }
    return splitIndex;   
    }
};
```

How to make an API calls ? :-https://leetcode.com/discuss/interview-question/3753307/react-how-to-make-an-api-calls-frontend-interview-questions-very-helpful

useEffect Hooks :- https://leetcode.com/discuss/general-discussion/3753192/react-useeffect-hooks-interview-questions-very-helpful