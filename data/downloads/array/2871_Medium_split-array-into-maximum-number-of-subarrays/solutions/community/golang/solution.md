# Proof of zero count

**Author:** nacoward
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4115482/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4115482/)

---

# Intuition
This is a mathematical question.

Firstly, let's review `AND` operator:
0 & 1 = 0
1 & 0 = 0
0 & 0 = 0
1 & 1 = 1
And for number `A=3` and `B=5`,
A&B = 3 & 5 = 011b & 101b = (0&1)*2^2 + (1&0)*2^1 + (1&1)&2^0 = 1
It can be deduced that:
**A & B <= A,
A & B <= B**

Then let's look at the second condition described by the subject:
> The sum of scores of the subarrays is the minimum possible.

Imagine `Z` is the value of all elem's `AND` in the array nums, 
Z = nums[0] & nums[1] & ... & nums[n-1]
So **Z must be the minimum score**

Imagine the array can be splited to two subarrays, which is Z1 and Z2,
Z = Z1 & Z2, so Z <= Z1, Z<=Z2
And if Z = Z1 + Z2,
It can be deduced that Z==0, Z1==0, Z2==0
And it is the same with if Z can be splited into three subarrays, or more, it will be Z==0, Z1 == Z2 == ... == Zn == 0 

So the problem became:
1, if the minimum score Z != 0, there can be only one array can get the minimum socre, which is the whole array;

2, if the minimum score Z == 0, it is equal to count how many subarray's `AND` is zero

# Code
```
func maxSubarrays(nums []int) int {
    ans, val := 0, 0
    for _, num := range nums {
        if val == 0 {
            val = num
        } else {
            val &= num
        }
        if val == 0 {ans++}
    }
    if ans == 0 {return 1}
    return ans
}
```