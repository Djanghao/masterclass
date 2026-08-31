# [C++/Java] Elegant C++ & Java Solutions

**Author:** Xiangcan
**Votes:** 3
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/3646217/](https://leetcode.com/problems/missing-ranges/solutions/3646217/)

---

C++:
```
class Solution {
public:
    vector<vector<int>> findMissingRanges(vector<int>& nums, int lower, int upper) {
        vector<vector<int>> res;
        int left_bound = lower;
        for (int i = 0; i < nums.size(); i++) {
            if (left_bound != nums[i]) res.push_back({left_bound, nums[i] - 1});
            left_bound = nums[i] + 1;
        }
        if (left_bound <= upper) res.push_back({left_bound, upper});
        return res;
    }
};
```

Java:
```
class Solution {
    public List<List<Integer>> findMissingRanges(int[] nums, int lower, int upper) {
        List<List<Integer>> res = new ArrayList<>();
        int leftBound = lower;
        for (int i = 0; i < nums.length; i++) {
            if (leftBound != nums[i]) res.add(Arrays.asList(leftBound, nums[i] - 1));
            leftBound = nums[i] + 1;
        }
        if (leftBound <= upper) res.add(Arrays.asList(leftBound, upper));
        return res;
    }
}
```