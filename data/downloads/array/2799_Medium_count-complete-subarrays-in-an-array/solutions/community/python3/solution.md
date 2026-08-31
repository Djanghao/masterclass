# 🧮 100% Sliding Window [VIDEO] Counting Complete Subarrays Good Approach

**Author:** vanAmsen
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3839312/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/3839312/)

---

# Intuition
When I first read the problem, I noticed that we are dealing with subarrays and distinct elements. This suggested a possible sliding window approach. A sliding window is an abstract concept commonly used in array/string problems. A window is a range of elements in an array/string which usually defined by the start and end indices, i.e., [i, j) (left-closed, right-open). A sliding window is a window "slides" its two boundaries to a certain direction.

https://youtu.be/O1g6hx4w4FU

# Approach
1. **Initialize Variables:** First, we initialize several variables:
    - `n`: The length of the input array `nums`.
    - `distinct_elements`: The number of distinct elements in the array `nums`.
    - `count`: A counter to keep track of the number of complete subarrays found.
    - `left` and `right`: The left and right boundaries of the sliding window.
    - `counter`: A counter (in the form of a dictionary) to keep track of the number of occurrences of each number in the current sliding window.

2. **Start Sliding Window:** We start a while loop that continues as long as `right` is less than `n`. This loop iterates over the array from left to right.

3. **Update Counter:** For each `right`, we increment the count of `nums[right]` in the counter by 1.

4. **Check for Complete Subarrays:** We start another while loop that continues as long as the number of distinct elements in the current window (i.e., the length of the counter) is equal to `distinct_elements`. 

5. **Update Counter and Left Boundary:** Within this inner loop, we decrement the count of `nums[left]` in the counter by 1. If this count becomes 0, we remove `nums[left]` from the counter. Then we increment `left` by 1. 

   This process shrinks the window from the left until the number of distinct elements in the window is less than `distinct_elements`. In other words, the window is no longer a complete subarray.

6. **Update Count:** Still within the inner loop, we increment `count` by `n - right`. This is because for each `right`, every subarray that starts at an index between `left` and `right` (inclusive) and ends at `right` is a complete subarray. The number of such subarrays is `n - right`.

7. **Update Right Boundary:** Finally, after the inner loop, we increment `right` by 1 to expand the window to the right.

8. **Return Count:** After the outer loop, we return `count`, which is the total number of complete subarrays in `nums`.

The key idea here is to maintain a sliding window that always contains a complete subarray, and to count all possible subarrays that end at each `right` and contain a complete subarray.

# Complexity
- Time complexity: \\(O(n)\\)  
The time complexity of this solution is \\(O(n)\\), where \\(n\\) is the number of elements in the array. This is because we need to iterate over the entire array once.

- Space complexity: \\(O(n)\\)  
The space complexity is also \\(O(n)\\). In the worst-case scenario, all elements are distinct, and we end up creating a counter with \\(n\\) distinct keys.

In the code below, we start by initializing a counter to keep track of the number of occurrences of each number. We then iterate through the array, adding each element to the counter. If the size of the counter equals the number of distinct elements in the entire array, we increment the left boundary and the count by the size of the array minus the right boundary.

# Code
```Python []
class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        n = len(nums) 
        distinct_elements = len(set(nums)) 
        count = 0 
        left = 0 
        right = 0 
        counter = Counter() 

        while right < n: 
            counter[nums[right]] += 1 
            while len(counter) == distinct_elements: 
                counter[nums[left]] -= 1 
                if counter[nums[left]] == 0: 
                    del counter[nums[left]] 
                left += 1 
                count += n - right 
            right += 1 

        return count                                  
```
``` C++ []
class Solution {
public:
    int countCompleteSubarrays(vector<int>& nums) {
        int n = nums.size();
        int distinct_elements = unordered_set<int>(nums.begin(), nums.end()).size();
        int count = 0;
        int left = 0;
        int right = 0;
        unordered_map<int, int> counter;

        while (right < n) {
            counter[nums[right]]++;
            while (counter.size() == distinct_elements) {
                if (--counter[nums[left]] == 0) {
                    counter.erase(nums[left]);
                }
                left++;
                count += n - right;
            }
            right++;
        }
        return count;        
    }
};
```
``` Java []
class Solution {
    public int countCompleteSubarrays(int[] nums) {
        int n = nums.length;
        Set<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        int distinct_elements = set.size();
        int count = 0;
        int left = 0;
        int right = 0;
        Map<Integer, Integer> counter = new HashMap<>();

        while (right < n) {
            counter.put(nums[right], counter.getOrDefault(nums[right], 0) + 1);
            while (counter.size() == distinct_elements) {
                counter.put(nums[left], counter.get(nums[left]) - 1);
                if (counter.get(nums[left]) == 0) {
                    counter.remove(nums[left]);
                }
                left++;
                count += n - right;
            }
            right++;
        }
        return count;        
    }
}
```
``` C# []
public class Solution {
    public int CountCompleteSubarrays(int[] nums) {
        int n = nums.Length;
        HashSet<int> set = new HashSet<int>(nums);
        int distinct_elements = set.Count;
        int count = 0;
        int left = 0;
        int right = 0;
        Dictionary<int, int> counter = new Dictionary<int, int>();

        while (right < n) {
            if (!counter.ContainsKey(nums[right])) {
                counter[nums[right]] = 0;
            }
            counter[nums[right]]++;
            while (counter.Count == distinct_elements) {
                counter[nums[left]]--;
                if (counter[nums[left]] == 0) {
                    counter.Remove(nums[left]);
                }
                left++;
                count += n - right;
            }
            right++;
        }
        return count;        
    }
}
```
``` JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let n = nums.length;
    let distinct_elements = new Set(nums).size;
    let count = 0;
    let left = 0;
    let right = 0;
    let counter = new Map();

    while (right < n) {
        counter.set(nums[right], (counter.get(nums[right]) || 0) + 1);
        while (counter.size === distinct_elements) {
            counter.set(nums[left], counter.get(nums[left]) - 1);
            if (counter.get(nums[left]) === 0) {
                counter.delete(nums[left]);
            }
            left++;
            count += n - right;
        }
        right++;
    }
    return count;    
};
```
