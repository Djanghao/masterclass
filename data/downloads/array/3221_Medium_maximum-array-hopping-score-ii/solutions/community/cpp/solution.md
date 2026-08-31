# [C++] Map

**Author:** EricYXing
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5496772/](https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5496772/)

---

# Intuition
Ideally, we should choose the index `j` to the right side of current index `i` with the largest `nums[j]` in each hop. To prove it, suppose we jump to another index `k`:
 - If `k < j`, since `nums[j] > nums[k]`, we have `(k - i) * nums[k] + (j - k) * nums[j] < (k - i) * nums[j] + (j - k) * nums[j] = (j - i) * nums[j]`, i.e. directly jumping from `i` to `j` is better than jumping from `i` to `k` then to `j`;
 - If `k > j`, since `nums[j] > nums[k]`, we have `(k - i) * nums[k] = (k - j) * nums[k] + (j - i) * nums[k] < (k - j) * nums[k] + (j - i) * nums[j]`, i.e. jumping to `j` first is better than directly jumping to `k`;

Therefore, we use a map to record the `nums[j]` and its largest index `j` in descending order, and keep track of the current index `c`. If the largest `nums[j]` has its index `j` greater than `c`, we can jump from `c` to `j`. 

# Complexity
- Time complexity: $$O(nlogn)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
public:
    long long maxScore(vector<int>& nums) {
        map<int, int, greater<int>> m;
        int n = nums.size(), c = 0;
        for (int i = 0; i < n; i++)
            m[nums[i]] = i;
        long long ans = 0;
        for (auto& p : m)
            if (p.second > c)
            {
                ans += (long long)p.first * (p.second - c);
                c = p.second;
            }
        return ans;    
    }
};
```