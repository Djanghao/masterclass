# C++ | Golang | Greedy | Sorting

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/3331576/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/3331576/)

---

# Code
```
// C++
class Solution {
public:
    long long minimalKSum(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        long long sum = 0;
        for(int i = 0; i < n; i++) {
            while(i < n - 1 && nums[i] == nums[i + 1]) i++;
            if(nums[i] <= k) {
                k++;
                sum += nums[i];
            }
        }
        return k * 1L * (k + 1) / 2 - sum;
    }
};


// Golang
func minimalKSum(nums []int, k int) int64 {
    sort.Ints(nums)
    var n int = len(nums)
    var sum int64 = 0
    for i := 0; i < n; i++ {
        for i < n - 1 && nums[i] == nums[i + 1] {i++}
        if nums[i] <= k {
            k++
            sum += int64(nums[i])
        }
    }
    return int64(k * (k + 1)) / 2 - sum
}
```