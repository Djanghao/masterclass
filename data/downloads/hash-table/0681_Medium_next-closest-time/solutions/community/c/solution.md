# Constant time, simple solution with explanation.

**Author:** alfaz
**Votes:** 5
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/922480/](https://leetcode.com/problems/next-closest-time/solutions/922480/)

---

```
class Solution {
public:

    int justGreater(vector<int>& nums, int idx) {
        int val = nums[idx];
        int res = INT_MAX;
        for (int i = 0; i < 4; ++i) {
            if (i ==idx) { continue; }
            if (nums[i] > val) { res = min(res, nums[i]); }
        }
        return res;
    }
    string toTimeString(const vector<int>& arr) {
        string str;
        for (int i = 0; i < 4; ++i) {
            str += '0' + arr[i];
            if(i == 1) { str.append(":");}
        }
        return str;
    }
    string nextClosestTime(string time) {
        vector<int> nums(4,-1);
        nums[0] = time[0] - '0'; //h1
        nums[1] = time[1] - '0'; //h2
        nums[2] = time[3] - '0'; //m1
        nums[3] = time[4] - '0'; //m2
        
        auto minNumItr = std::min_element(nums.begin(), nums.end());
        int minNum = *minNumItr;
        //check m2, if we have a digit just greater than m2, we replace it and we're done!
        int v = justGreater(nums, 3);
        if (v != INT_MAX) {
            nums[3] = v;
            return toTimeString(nums);
        }
        //check m1, we need a digit just greater than m1 and also it can be at max 5
        // if we can get a such a digit, we replace and make the m2 to be minimum digit possible.
        v = justGreater(nums, 2);
        if (v != INT_MAX && v < 6) {
            nums[2] = v;
            nums[3] = minNum;
            return toTimeString(nums);
        }
        //check h2, we need a digit just greater than h2. Also check if h1 is 1 or zero
        // we can have any digit as this digit, otherwise if h1 is 2, we need a digit less than 4, as 23 is max h1h2
        // if we can get a such a digit, we replace and make the m1 and m2 to be minimum digit possible.
        v = justGreater(nums, 1);
        if (v != INT_MAX && (nums[0] < 2 || v < 4) ){
            nums[1] = v;
            nums[2] = minNum;
            nums[3] = minNum;
            return toTimeString(nums);
        }
        //check h1, need a digit just greater than h1, also it needs to be less than 3.
        v = justGreater(nums, 0);
        if (v != INT_MAX && v < 3) {
            nums[0] = v;
            nums[1] = minNum;
            nums[2] = minNum;
            nums[3] = minNum;
            return toTimeString(nums);
        }
        
        //no rule matched, next day minimum time should only consist of minimum digit
        nums[0] = minNum;
        nums[1] = minNum;
        nums[2] = minNum;
        nums[3] = minNum;
        return toTimeString(nums);
    }
};
```