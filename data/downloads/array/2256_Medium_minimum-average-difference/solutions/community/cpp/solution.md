# Prefix Sum | O(1) Space

**Author:** kamisamaaaa
**Votes:** 94
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/1994575/](https://leetcode.com/problems/minimum-average-difference/solutions/1994575/)

---

# C++:
```
class Solution {
public:
    int minimumAverageDifference(vector<int>& nums) {
        
        int n(size(nums)), minAverageDifference(INT_MAX), index;
        
        long long sumFromFront(0), sumFromEnd(0);
        for (auto& num : nums) sumFromEnd += num;
        
        for (int i=0; i<n; i++) {
            sumFromFront += nums[i];
            sumFromEnd -= nums[i];
            int a = sumFromFront / (i+1); // average of the first i + 1 elements.
            int b = (i == n-1) ? 0 : sumFromEnd / (n-i-1); // average of the last n - i - 1 elements.
            
            if (abs(a-b) < minAverageDifference) {
                minAverageDifference = abs(a-b);
                index = i;
            }
        }
        return index;
    }
};
```

# Python:
```

class Solution:
    def minimumAverageDifference(self, nums: List[int]) -> int:

        sumEnd, sumFront, res, diff, n = 0, 0, 0, 1e9, len(nums)
        for num in nums:
            sumEnd += num

        for i in range(n):
            sumFront += nums[i]
            sumEnd -= nums[i]

            avg1 = sumEnd//(n-1-i) if i != n-1 else 0
            avg2 = sumFront//(i+1)

            if abs(avg1-avg2) < diff:
                diff = abs(avg1-avg2)
                res = i
        
        return res
```