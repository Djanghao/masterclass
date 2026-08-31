# C++ Solution along with Explanation and Time Complexity

**Author:** Longhorn_65
**Votes:** 121
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1214105/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1214105/)

---

**AN UPVOTE WOULD BE HIGHLY APPRECIATED !!!**

*Overload the comments section with doubts and praises if you have.!!!*
```
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        map<int, int> m;
        vector<int> vec = nums;
        int n = nums.size();
        
        // Sort vec in ascending order
        // T.C = O(nlogn)
        sort(vec.begin(), vec.end());
        
        // Put the values in hash-map according to their values corresponding to their places in nums 
        // T.C = O(n)
        for(int i=n-1; i>=0; i--) {
            m[vec[i]] = i;
        }
        
        // Saving the result again in nums, b'cos space complexity matters XD
        // T.C = O(n)
        for(int i=0; i<n; i++) {
            nums[i] = m[nums[i]];
        }
        
        return nums;
    }
};
```