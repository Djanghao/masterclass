# Simple Hashing | O(N)

**Author:** bitmasker
**Votes:** 11
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2388309/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2388309/)

---

<br/>
<i><b>j - i != nums[j] - nums[i]</b></i> can be converted to <i><b>nums[i] - i != nums[j] - j</b></i>.

So, this problem can be converted to <b>count number of pairs such that difference between the number and it's index is not equal.</b>

Counting pairs with equal difference between number and it's index is comparatively easier task. So our answer can be 
<b>total pairs - pairs with equal difference between number and index</b>

```
class Solution {
public:
    long long countBadPairs(vector<int>& nums) {
        unordered_map<int, long long> count;
        long long n = nums.size(), equal = 0;
        for(int i = 0; i < n; ++i) count[nums[i]-i]++;
        
		// counting pairs with equal difference between number and it's index
		// ex. if count[4] = 6, then there will be total (6 * 5) / 2  = 15 unique pairs
        for(auto& it: count) equal += ((it.second * (it.second-1)) / 2);
        
		// total possible pairs in array
        long long total = (n * (n-1)) / 2;
		
		// not equal = total - equal
        return total - equal;
    }
};
```