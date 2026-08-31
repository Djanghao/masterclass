# Beats 100% ➡️Full Explained ➡️[Java/C++/C#/Python3/JavaScript/Go]

**Author:** Shivansu_7
**Votes:** 11
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4935326/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4935326/)

---

# Intuition
For each index j, find the rightmost index i >= j such that the frequency of each element in the subarray [j, i] is at most k.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialization**:
   - Initialize variables `i` and `j` to 0. These variables represent the left and right pointers of the current subarray being considered.
   - Initialize `n` to the length of the input array `nums`.
   - Initialize `ans` to 1. This variable will store the maximum length found so far.
   - Create a HashMap named `map` to store the frequency of elements encountered in the current subarray.

2. **Sliding Window Technique**:
   - Iterate through the array using the variable `i` as the right pointer.
   - For each element `nums[i]`, update the frequency count in the HashMap `map`.
   - Check if the frequency count of `nums[i]` exceeds the given threshold `k`. If it exceeds, move the left pointer `j` until the frequency count becomes valid again.
   - While adjusting the left pointer `j`, update the frequency count in the HashMap `map`.
   - Calculate the length of the current subarray (`i - j + 1`) and update the maximum length `ans`.
   - Move the right pointer `i` to the next element.

3. **Return Result**:
   - Once the iteration through the array is complete, return the maximum length `ans`.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        int i = 0;
        int j = 0;
        int n = nums.length;
        int ans = 1;
        HashMap<Integer, Integer> map = new HashMap<>();

        while(i < n) {
            map.put(nums[i], map.getOrDefault(nums[i], 0)+1);
            while(map.get(nums[i]) > k) {
                map.put(nums[j], map.get(nums[j])-1);
                j++;
            }
            ans = Math.max(ans, i- j + 1);
            i++;
        }
        return ans;
    }
}
```
```C++ []
class Solution {
public:
    int maxSubarrayLength(vector<int>& nums, int k) {
        int i = 0;
        int j = 0;
        int n = nums.size();
        int ans = 1;
        unordered_map<int, int> map;

        while (i < n) {
            map[nums[i]]++;
            while (map[nums[i]] > k) {
                map[nums[j]]--;
                j++;
            }
            ans = std::max(ans, i - j + 1);
            i++;
        }
        return ans;
    }
};
```
```C# []
public class Solution {
    public int MaxSubarrayLength(int[] nums, int k) {
        int i = 0;
        int j = 0;
        int n = nums.Length;
        int ans = 1;
        Dictionary<int, int> map = new Dictionary<int, int>();

        while (i < n) {
            if (map.ContainsKey(nums[i]))
                map[nums[i]]++;
            else
                map[nums[i]] = 1;
            
            while (map[nums[i]] > k) {
                map[nums[j]]--;
                j++;
            }
            ans = System.Math.Max(ans, i - j + 1);
            i++;
        }
        return ans;
    }
}
```
```Python3 []
class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        i = j = 0
        n = len(nums)
        ans = 1
        map = {}

        while i < n:
            map[nums[i]] = map.get(nums[i], 0) + 1
            while map[nums[i]] > k:
                map[nums[j]] -= 1
                j += 1
            ans = max(ans, i - j + 1)
            i += 1
        return ans
```
```Go []
func maxSubarrayLength(nums []int, k int) int {
    i := 0
    j := 0
    n := len(nums)
    ans := 1
    mp := make(map[int]int)

    for i < n {
        mp[nums[i]]++
        for mp[nums[i]] > k {
            mp[nums[j]]--
            j++
        }
        if i-j+1 > ans {
            ans = i - j + 1
        }
        i++
    }
    return ans
}
```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let i = 0;
    let j = 0;
    let n = nums.length;
    let ans = 1;
    let map = new Map();

    while (i < n) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        while (map.get(nums[i]) > k) {
            map.set(nums[j], map.get(nums[j]) - 1);
            j++;
        }
        ans = Math.max(ans, i - j + 1);
        i++;
    }
    return ans;
};
```

---


---
![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)
