# C++  Traverse from Right  | Beats 100 % ✅   | O(n) time O(1) Space  ✅

**Author:** Deepikak7
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6172883/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6172883/)

---

```
class Solution {
public:
    int minimumOperations(vector<int>& nums) {
        vector<int>count(101,0);
        for(int i=nums.size()-1;i>=0;i--)   {
            if((count[nums[i]]++) > 0)  return (i/3 + 1);
		}
        return 0;
    }
};
```