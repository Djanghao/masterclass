# Simple Hashmap approach || Beats 100% || O(n)

**Author:** sonuola
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5731626/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5731626/)

---

# Intuition
The problem is to find the smallest non-negative integer x such that x % value occurs the least frequently in the given array nums. If multiple integers have the same frequency, the smallest one should be returned.

# Approach
1. Initialize Frequency Array:
    Create an array v of size value initialized to zeros. This array will store the frequency of each remainder when elements of nums are divided by value.

2. Calculate Frequencies:
    Iterate through each element in nums, compute the remainder x when the element is divided by value, adjust x if it's negative, and increment the corresponding index in v.
3. Find the Minimum Frequency:
    Iterate through the frequency array v to find the smallest frequency. The answer will be the value value * minFrequency + i, where i is the index with the minimum frequency in v.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```golang []
func findSmallestInteger(nums []int, value int) int {
    v := []int {}
    for i := 0 ; i < value ; i++ {
        v = append(v,0);
    }

    for i := 0 ; i < len(nums) ; i++ {
        x := nums[i] % value;
        if x < 0 {
            x += value
        }
        v[x]++;
    }

    mini := 1000000000;
    ans := 0;
    for i := 0 ; i < len(v) ; i++ {
        if v[i] < mini {
            mini = v[i];
            ans = value * v[i] + i;
        }
    }
    return ans;
}
```