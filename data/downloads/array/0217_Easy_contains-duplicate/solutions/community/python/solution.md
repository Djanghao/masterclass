# Very Easy || 100% || Fully Explained || C++, Java, Python, Javascript, Python3 (Creating Set)

**Author:** PratikSen07
**Votes:** 757
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/2459020/](https://leetcode.com/problems/contains-duplicate/solutions/2459020/)

---

# **C++ Solution (Using Set / Sort & Find Approach)**
```
/** Approach : Using Set **/
// Time Complexity: O(n)
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Create a set...
        unordered_set<int> hset;
        // Traverse all the elements through the loop...
        for(int idx = 0; idx < nums.size(); idx++) {
            // Searches set. if present, it contains duplicate...
            if(hset.count(nums[idx]))
                return true;
            // insert nums[i] in set...
            hset.insert(nums[idx]);
        }
        return false;
    }
};
------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**   Approach : Sort & Find Duplicates **/
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Sort the nums...
        sort(nums.begin(), nums.end());
        // Traverse all the elements through the loop...
        for(int idx = 0; idx < nums.size() - 1; idx++) {
            // Check the duplicate element...
            if(nums[idx] == nums[idx + 1])
                return true;
        }
        // Otherwise return false...
        return false;
    }
};
```

# **Java Solution (Using Hashset):**
```
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Create a hashset...
        HashSet<Integer> hset = new HashSet<Integer>();
        // Traverse all the elements through the loop...
        for (int idx = 0; idx < nums.length; idx ++){
            // Searches hashset. if present, it contains duplicate...
            if (hset.contains(nums[idx])){
                return true;
            }
            // if not present it will update hashset...
            hset.add(nums[idx]);
        }
        // Otherwise return false...
        return false;
    }
}
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Time complexity: O(n)
// Space complexity: O(n)
class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Base case...
        if(nums==null || nums.length==0)
            return false;
        // Create a hashset...
        HashSet<Integer> hset = new HashSet<Integer>();
        // Traverse all the elements through the loop...
        for(int idx: nums){
            // If it contains duplicate...
            if(!hset.add(idx)){
                return true;
            }
        }
        // Otherwise return false...
        return false;
    }
}
```

# **Python / Python3 Solution (Creating a Set):**
```
# Time complexity: O(n)
# Space complexity: O(n)
class Solution(object):
    def containsDuplicate(self, nums):
        hset = set()
        for idx in nums:
            if idx in hset:
                return True
            else:
                hset.add(idx)
```
                    
# **JavaScript Solution (Creating a Set):**
```
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};
```

**I am working hard for you guys...
Please upvote if you found any help with this code...**