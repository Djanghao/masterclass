# Very Easy || 100% || Fully Explained || Java, C++, Python, Javascript, Python3 (Using HashSet)

**Author:** PratikSen07
**Votes:** 227
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/2463150/](https://leetcode.com/problems/contains-duplicate-ii/solutions/2463150/)

---

# **Java Solution (Using HashSet):**
```
// Time Complexity : O(n)
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // Base case...
        if(nums == null || nums.length < 2 || k == 0)
            return false;
        int i = 0;
        // Create a Hash Set for storing previous of k elements...
        HashSet<Integer> hset = new HashSet<Integer>();
        // Traverse for all elements of the given array in a for loop...
        for(int j = 0; j < nums.length; j++) {
            // If duplicate element is present at distance less than equal to k, return true...
            if(!hset.add(nums[j])){
                return true;
            }
            // If size of the Hash Set becomes greater than k...
            if(hset.size() >= k+1){
                // Remove the last visited element from the set...
                hset.remove(nums[i++]);
            }
        }
        // If no duplicate element is found then return false...
        return false;
    }
}
```
--------------------------------------------------------------------------------------------------
# **C++ Solution:**
```
// Time Complexity : O(n)
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        // Create a Set for storing previous of k elements...
        unordered_set<int> hset;
        // Traverse for all elements of the given array in a for loop...
        for(int idx = 0; idx < nums.size(); idx++) {
            // Check if set already contains nums[idx] or not...
            // If duplicate element is present at distance less than equal to k, return true...
            if(hset.count(nums[idx]))
                return true;
            // Otherwise, add nums[idx] to the set...
            hset.insert(nums[idx]);
            // If size of the set becomes greater than k...
            if(hset.size() > k)
                // Remove the last visited element from the set...
                hset.erase(nums[idx - k]);
        }
        // If no duplicate element is found then return false...
        return false;
    }
};
```
---------------------------------------------------------------------------------------------------
# **Python/Python3 Solution:**
```
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # Create hset for storing previous of k elements...
        hset = {}
        # Traverse for all elements of the given array in a for loop...
        for idx in range(len(nums)):
            # If duplicate element is present at distance less than equal to k, return true...
            if nums[idx] in hset and abs(idx - hset[nums[idx]]) <= k:
                return True
            hset[nums[idx]] = idx
        # If no duplicate element is found then return false...
        return False
```
-----------------------------------------------------------------------------------------------------
# **JavaScript Solution:**
```
// Time Complexity : O(n)
// Space Complexity : O(n)
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        // Check if the difference betweend duplicates is less than k
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**