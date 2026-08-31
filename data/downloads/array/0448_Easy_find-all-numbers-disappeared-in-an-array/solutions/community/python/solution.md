# C++ Short Solution + Python One-Liner, Explained, No Extra Space

**Author:** YehudisK
**Votes:** 62
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1583652/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1583652/)

---

**Solution I:**
We know that all the numbers are in the range [1, n].
So we mark all the indices of the numbers we saw by making the number negative.
Then, we iterate through the array again and each number that is positive - we know we never saw that index and we can add it to `res`.

**Time Complexity:** O(n)
**Space Complexity:** O(1)
```
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        for (int i = 0; i < nums.size(); i++) 
            nums[abs(nums[i])-1] = -abs(nums[abs(nums[i])-1]);
        
        vector<int> res;
        for (int i = 0; i < nums.size(); i++)
            if (nums[i] > 0) res.push_back(i+1);
        
        return res;
    }
};
```
****
**Solutoin II:**
ONE LINER!
We use simple set subtraction
```
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        return set(range(1, len(nums)+1)) - set(nums)
```
**Like it? please upvote!**