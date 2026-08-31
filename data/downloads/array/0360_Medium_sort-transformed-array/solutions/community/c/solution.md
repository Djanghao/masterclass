# C++ two pointers (Time 100%, Space 99.7%)

**Author:** JanzenLiu
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/1903840/](https://leetcode.com/problems/sort-transformed-array/solutions/1903840/)

---

```
class Solution {
public:
    vector<int> sortTransformedArray(vector<int>& nums, int a, int b, int c) {
        for (int i = 0; i < nums.size(); ++i) {
            int x = nums[i];
            nums[i] = a * x * x + b * x + c;
        }
        if (a > 0) { return handlePositiveA(nums); }
        else if (a < 0) { return handleNegativeA(nums); }
        else if (b < 0) { reverse(nums.begin(), nums.end()); }
        return nums;
    }
    
private:
    vector<int> handlePositiveA(const vector<int>& nums) {
        int minIndex = std::distance(nums.begin(), std::min_element(nums.begin(), nums.end()));
        
        int n = nums.size();
        vector<int> result(n);
        result[0] = nums[minIndex];
        for (int i = 1, l = minIndex-1, r = minIndex+1; i < n; ++i) {
            if (l < 0) { result[i] = nums[r++]; }
            else if (r >= n) { result[i] = nums[l--]; }
            else if (nums[l] <= nums[r]) { result[i] = nums[l--]; }
            else { result[i] = nums[r++]; }
        }
        return result;
    }
    
    vector<int> handleNegativeA(const vector<int>& nums) {
        int maxIndex = std::distance(nums.begin(), std::max_element(nums.begin(), nums.end()));
        
        int n = nums.size();
        vector<int> result(n);
        result[n-1] = nums[maxIndex];
        for (int i = n-2, l = maxIndex-1, r = maxIndex+1; i >= 0; --i) {
            if (l < 0) { result[i] = nums[r++]; }
            else if (r >= n) { result[i] = nums[l--]; }
            else if (nums[l] >= nums[r]) { result[i] = nums[l--]; }
            else { result[i] = nums[r++]; }
        }
        return result;
    }
};
```