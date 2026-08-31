# Easy Solution with Intuition🔥🔥|| 2 Approaches🚀

**Author:** Aashiq_Edavalapati
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6121992/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/6121992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**Input\uD83D\uDCE5**: `nums` -> *int array*
**Output\uD83D\uDCE4**: `res` -> *int* : Length of longest harmonic subsequence.

> **Harmonic Subsequence:** An array where the difference between its maximum value and its minimum value is exactly `1`

1. Now think what happens if we have more than 2 different numbers in our subsequence? Can it be a harmonic subsequence?
    Ans: Obviously NO. 

*So, we can conclude that our result will have exactly 2 different numbers. 
Also, these 2 numbers are definitely going to be adjacent numbers(Because the difference must be 1).*

2. Does the order matter?
Ans: NO. We are just caring about the length of the subsequence in this problem, so we need not care about the order.

---

# Approach 1 (Sorting):
<!-- Describe your approach to solving the problem. -->
1. How do we get adjacent numbers together if they exist?
    Ans: Sorting?

```
Algorithm findLHS(nums):
    Input: An array nums storing n >= 1 integers
    Output: Length of longest harmonic subsequence

    Sort nums
    l <- 0, r <- 1, res <- 0
    while r < len(nums) do:
        diff <- nums[r] - num[l]
        if diff = 1 do:
            res <- max(res, r - l + 1)
            r <- r + 1
        else if diff < 1 do:
            r <- r + 1
        else do:
            l <- l + 1

    return res
            
```

# Complexity
- Time complexity: $$O(n log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> Please upvote, if you like the explanation
# Code
```Python3 []
class Solution:
    def findLHS(self, nums: List[int]) -> int:
        nums.sort()
        l, r = 0, 1
        length = 0
        while r < len(nums):
            diff = nums[r] - nums[l]
            if diff == 1:
                length = max(length, r - l + 1)
            if diff <= 1:
                r += 1
            else:
                l += 1
        
        return length
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let l = 0, r = 1, res = 0;
    while(r < nums.length) {
        let diff = nums[r] - nums[l];
        if(diff == 1) {
            res = Math.max(res, r - l + 1);
            r++;
        } else if(diff < 1) r++;
        else l++;
    }

    return res;
};
```
```Java []
class Solution {
    public int findLHS(int[] nums) {
        Arrays.sort(nums);
        int l = 0, r = 1, res = 0;
        while(r < nums.length) {
            int diff = nums[r] - nums[l];
            if(diff == 1) res = Math.max(res, r - l + 1);
            if(diff <= 1) r++;
            else l++;
        }

        return res;
    }
}
```
```C []
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int findLHS(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), compare);

    int res = 0, l = 0,r = 1;
    while(r < numsSize) {
        int diff = nums[r] - nums[l];
        if(diff == 1) {
            res = fmax(res, r - l + 1);
            r++;
        } else if(diff < 1) r++;
        else l++;
    }

    return res;
}
```


# Approach 2 (HashMap):
<!-- Describe your approach to solving the problem. -->
```
Algorithm findLHS(nums):

    Input: An array nums storing n \u2265 1 integers.
    Output: The length of the longest harmonious subsequence.

    1. freq \u2190 Empty HashMap
    2. for each num in nums do
        if num exists in freq then
            freq[num] \u2190 freq[num] + 1
        else
            freq[num] \u2190 1
    3. res \u2190 0
    4. for each key in freq.keys() do
        if freq contains (key + 1) then
            res \u2190 max(res, freq[key] + freq[key + 1])
    5. return res
```

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.png](./images/0.png)

# Code
```Python3 []
class Solution:
    def findLHS(self, nums: List[int]) -> int:
        freq = defaultdict(int)
        res = 0
        for num in nums:
            freq[num] += 1
        
        for num in freq:
            if num + 1 in freq:
                res = max(res, freq[num] + freq[num + 1])
        
        return res
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let freq = new Map();
        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        let res = 0;
        for (let [num, count] of freq.entries()) {
            if (freq.has(num + 1)) {
                res = Math.max(res, count + freq.get(num + 1));
            }
        }

        return res;
};
```
```Java []
class Solution {
    public int findLHS(int[] nums) {
        HashMap<Integer, Integer> freq = new HashMap<>();
        for(int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        int res = 0;
        for(int num : freq.keySet()) {
            if(freq.containsKey(num + 1)) 
            res = Math.max(res, freq.get(num) + freq.get(num + 1));
        }

        return res;
    }
}
```
