# C++ | Golang | Map

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/3326014/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/3326014/)

---

# Code
```
// C++
class Solution {
public:
    vector<int> arrayChange(vector<int>& nums, vector<vector<int>>& operations) {
        unordered_map<int, int> Map;
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            Map[nums[i]] = i;
        }
        for(vector<int> op: operations) {
            Map[op[1]] = Map[op[0]];
            nums[Map[op[0]]] = op[1];
        }
        return nums;
    }
};


// Golang
func arrayChange(nums []int, operations [][]int) []int {
    Map := make(map[int]int)
    n := len(nums)
    for i := 0; i < n; i++ {
        Map[nums[i]] = i
    }
    for _, op := range operations {
        Map[op[1]] = Map[op[0]]
        nums[Map[op[0]]] = op[1]
    }
    return nums
}
```