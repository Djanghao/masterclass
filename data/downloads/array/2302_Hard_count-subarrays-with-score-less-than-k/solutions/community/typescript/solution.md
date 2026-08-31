# 2 pointer Approach(sliding Window)

**Author:** chayatorn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/4933527/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/4933527/)

---

# Approach


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
function countSubarrays(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let sum = 0;
    let count =0
    while(right<nums.length)
    {
        sum   +=nums[right];
        while(sum*(right-left+1)>=k){
                sum -=nums[left]
                left++
        }
        count +=right-left+1;
        right++
    }
return count
};












































    // while(right<nums.length)
    // {
    //     while (right < nums.length && sum*(right-left)<k) {
    //         sum +=nums[right];
    //         count += right-left;
    //         right++;
    //     }
    //     while(left < right && sum*(right-left)>=k ){
    //         sum -=nums[left];
    //         left++;
    //     } 
    // }
    // count +=right-left
    // return count



```