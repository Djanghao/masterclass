# Easy ✅| beats ~100% 🔥🔥| Explanation ✅🔥| Sliding window approach 🔥🔥🔥🔥

**Author:** kmuhammadjon
**Votes:** 8
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/4892387/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/4892387/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Simple understandable solution using dynamic sliding window using 2 pointers

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding window
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity:O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```Go []
func longestOnes(nums []int, k int) int {
    maxWindow := 0
    curSum := 0
    start := 0

    for end := 0; end < len(nums); end++ {
        // that variable is to know how many 1s an 0s we on window
        curSum += nums[end]
        // end-start+1 that is length of the window and by
        //substracting curSum we know exactly how many zeros we
        //have on that window and it can exceed from k cuz we 
        //can turn k 0s to 1
        if end-start+1-curSum <= k {
            maxWindow = max(maxWindow, end-start+1)
        } else {
            // condition doesnt met it is gonna move left 
            //pointer which is start by substracting the value
            //of start from curSum and adding one
            curSum -= nums[start]
            start++
        }
    }
    return maxWindow
}
```
```C []
int max(int a, int b) {
    return (a > b) ? a : b;
}

int longestOnes(int* nums, int numsSize, int k) {
    int maxWindow = 0;
    int curSum = 0;
    int start = 0;

    for (int end = 0; end < numsSize; end++) {
        curSum += nums[end];

        if (end - start + 1 - curSum <= k) {
            maxWindow = max(maxWindow, end - start + 1);
        } else {
            curSum -= nums[start];
            start++;
        }
    }

    return maxWindow;
}
```
```Python []
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        max_window = 0
        cur_sum = 0
        start = 0
        
        for end in range(len(nums)):
            cur_sum += nums[end]
            
            if end - start + 1 - cur_sum <= k:
                max_window = max(max_window, end - start + 1)
            else:
                cur_sum -= nums[start]
                start += 1
        
        return max_window
```
