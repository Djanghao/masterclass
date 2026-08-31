# Simple | modified Sliding window |Simple explanation

**Author:** CS_MONKS
**Votes:** 116
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4934950/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4934950/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My first thought when approaching this problem is to use a sliding window technique because we are dealing with finding the longest subarray with a given condition. Since we are required to find the longest subarray with each element's frequency less than or equal to k, we can use a sliding window to efficiently keep track of the frequency of elements within a subarray.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize two pointers, l and r, to mark the left and right boundaries of the current subarray.
2. Initialize an unordered_map to store the frequency of elements within the current subarray.
3. Iterate through the array from left to right using the right pointer r.
4. Increment the frequency of nums[r] in the map.
5. If the frequency of nums[r] exceeds k, we need to shrink the window from the left until the frequency new inserted element decrease by one.
6. Update the maximum length of the good subarray if necessary.
7. Return the maximum length found.
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    int maxSubarrayLength(vector<int>& nums, int k) {
        int ans=0;
        unordered_map<int,int>mp;
        int n=size(nums);

        for(int l=0,r=0;r<n;r++){
            mp[nums[r]]++; //inserting value in window from right 
        //if newly inserted element exceed frequencey poped it out from left   
            if(mp[nums[r]]>k){
                while(nums[l]!=nums[r]){
                    mp[nums[l]]--;
                    l++;
                }
                mp[nums[l]]--;
                l++;
            }
            ans=max(ans,r-l+1);
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        int ans = 0;
        HashMap<Integer, Integer> mp = new HashMap<>();
        int l = 0;

        for (int r = 0; r < nums.length; r++) {
            mp.put(nums[r], mp.getOrDefault(nums[r], 0) + 1);
            while (mp.get(nums[r]) > k) {
                mp.put(nums[l], mp.get(nums[l]) - 1);
                l++;
            }
            ans = Math.max(ans, r - l + 1);
        }

        return ans;
    }
}

```
```python3 []
class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        ans = 0
        mp = {}
        l = 0
        n = len(nums)
        for r in range(n):
            mp[nums[r]] = mp.get(nums[r], 0) + 1
            if mp[nums[r]] > k:
                while nums[l] != nums[r]:
                    mp[nums[l]] -= 1
                    l += 1
                mp[nums[l]] -= 1
                l += 1
            ans = max(ans, r - l + 1)
        return ans

```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let ans = 0;
    let mp = new Map();
    let l = 0;
    const n = nums.length;
    for (let r = 0; r < n; r++) {
        mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);
        if (mp.get(nums[r]) > k) {
            while (nums[l] !== nums[r]) {
                mp.set(nums[l], mp.get(nums[l]) - 1);
                l++;
            }
            mp.set(nums[l], mp.get(nums[l]) - 1);
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};

```
# Modified
```c++ []
class Solution {
public:
    int maxSubarrayLength(vector<int>& nums, int k) {
        int ans=0;
        //fo = first occurence
        unordered_map<int,queue<int>>fo;//store index of nums
        int n=size(nums);
        for(int l=0,r=0;r<n;r++){
            fo[nums[r]].push(r);

            //size of queue is frequency of element
            //if frequency is K+1 remove one
            if(fo[nums[r]].size()==k+1){
                //here l(left) is starting point of window
                //if first occurence is inside window update left (l)
                if(fo[nums[r]].front()>=l){
                    l=fo[nums[r]].front()+1;
                }
                fo[nums[r]].pop();
            }
            ans=max(ans,r-l+1);
        }
        return ans;
    }
};
```
![upvote.jpg](./images/0.jpeg)

