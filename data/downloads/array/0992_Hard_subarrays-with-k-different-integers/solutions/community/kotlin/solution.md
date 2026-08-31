# Counting Subarrays with Exactly K Distinct Integers: A Sliding Window Adventure ✅✅✅🔥🔥

**Author:** Hunter_0718
**Votes:** 10
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4945306/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4945306/)

---



**Intuition**

The sliding window technique is a powerful approach for efficiently finding subarrays within a larger array that meet specific criteria. In this case, we're interested in subarrays containing exactly `k` distinct integers.

Here's the basic idea:

1. **Two Pointers (`i` and `j`)** represent the start and end of the current subarray window.
2. **Hashmap (`mp`)** keeps track of the frequency of each element encountered within the window.
3. **Iterate** using `j` to expand the window rightward, adding elements to the hashmap.
4. **Maintain Condition:**
   - If the number of distinct elements in `mp` exceeds `k` (meaning the window contains more than `k` distinct integers), shrink the window by moving `i` forward and removing elements from `mp` until the condition is satisfied.
5. **Count Valid Subarrays:**
   - For each valid subarray with exactly `k` distinct elements (determined by `mp.size()` being equal to `k`), add the window size (`j - i + 1`) to a `count` variable.

**Approach (Breakdown with Images)**

1. **Initialization:**

   - Set `i` and `j` to 0.
   - Initialize `count` to 0.
   - Create an empty hashmap `mp`.

   

2. **Iteration and Window Expansion:**

   - **While `j` is less than the array length `n`:**
     - Increment the frequency of the current element `nums[j]` in the hashmap `mp`.

     

   - **Check for Subarray Validity:**
     - **While `mp.size()` (number of distinct elements) is greater than `k`:**
       - Decrement the frequency of the element at `nums[i]` in `mp`.
       - If the frequency becomes 0, remove the element from `mp` using `mp.erase(nums[i])`.
       - Move `i` forward to shrink the window and maintain the condition.

       

3. **Count Valid Subarrays:**

   - **For each valid subarray:**
     - Add the current window size (`j - i + 1`) to the `count` variable. This represents the number of possible subarrays within the current window that all have exactly `k` distinct elements.

     

   - Move `j` forward to expand the window for the next iteration.

4. **Return the Final Count:**

   - The final `count` variable stores the total number of subarrays in the input array that contain exactly `k` distinct integers.

**Complexity**

- **Time Complexity: O(n)**
  - Both `i` and `j` iterate through the array at most once, resulting in linear time complexity.
- **Space Complexity: O(n)**
  - The hashmap `mp` can potentially store up to `n` distinct elements in the worst case, leading to linear space complexity.


# Code
```C++ []
class Solution {
public:
    int slidingWindow(vector<int>&nums, int k){
        int n = nums.size();
        int i = 0, j = 0, count = 0;
        unordered_map<int,int>mp;
        while(j < n){
            mp[nums[j]]++;
            while(mp.size() > k){
                mp[nums[i]]--;
                if(mp[nums[i]] == 0)
                    mp.erase(nums[i]);
                i++;
            }
            count += j - i + 1;
            j++;
        }
        return count;
    }
    int subarraysWithKDistinct(vector<int>& nums, int k) {
        return slidingWindow(nums,k) - slidingWindow(nums,k-1);
    }
};
```
```Java []
class Solution {
    public int slidingWindow(int[] nums, int k) {
        int n = nums.length;
        int i = 0;
        int j = 0;
        int count = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        
        while (j < n) {
            map.put(nums[j], map.getOrDefault(nums[j], 0) + 1);
            
            while (map.size() > k) {
                map.put(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) == 0)
                    map.remove(nums[i]);
                i++;
            }
            
            count += j - i + 1;
            j++;
        }
        
        return count;
    }
    
    public int subarraysWithKDistinct(int[] nums, int k) {
        return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
    }
}

```
```Python3 []
class Solution:
    def slidingWindow(self, nums: List[int], k: int) -> int:
        n = len(nums)
        i = 0
        j = 0
        count = 0
        mp = {}
        
        while j < n:
            mp[nums[j]] = mp.get(nums[j], 0) + 1
            
            while len(mp) > k:
                mp[nums[i]] -= 1
                if mp[nums[i]] == 0:
                    del mp[nums[i]]
                i += 1
            
            count += j - i + 1
            j += 1
        
        return count
    
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        return self.slidingWindow(nums, k) - self.slidingWindow(nums, k - 1)

```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const slidingWindow = (nums, k) => {
        let i = 0, j = 0, count = 0;
        const map = new Map();
        
        while (j < nums.length) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1);
            
            while (map.size > k) {
                map.set(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) === 0) map.delete(nums[i]);
                i++;
            }
            
            count += j - i + 1;
            j++;
        }
        
        return count;
    };
    
    return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
};

```
```Kotlin []
class Solution {
    fun slidingWindow(nums: IntArray, k: Int): Int {
        var i = 0
        var j = 0
        var count = 0
        val map = HashMap<Int, Int>()
        
        while (j < nums.size) {
            map[nums[j]] = map.getOrDefault(nums[j], 0) + 1
            
            while (map.size > k) {
                map[nums[i]] = map[nums[i]]!! - 1
                if (map[nums[i]] == 0) map.remove(nums[i])
                i++
            }
            
            count += j - i + 1
            j++
        }
        
        return count
    }
    
    fun subarraysWithKDistinct(nums: IntArray, k: Int): Int {
        return slidingWindow(nums, k) - slidingWindow(nums, k - 1)
    }
}

```

