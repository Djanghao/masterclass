# Golang Solution with Good Explanation

**Author:** sansaian
**Votes:** 5
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/3609874/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/3609874/)

---

# Intuition
The problem asks for the number of contiguous subarrays where the product of all the elements in the subarray is less than `k`. A brute force solution could calculate the product for each subarray and increment a counter if the product is less than `k`. However, this would result in a time complexity of O(n^2), which might be too inefficient for large inputs. Instead, we can use a sliding window approach to solve this problem in linear time.

# Approach
We initialize two pointers at the beginning of the array and a `curr` variable as 1. `curr` will hold the product of the elements in our current subarray. We iterate over the array with the right pointer `r` and for each element, we multiply `curr` by the current element.

If the `curr` is equal to or larger than `k`, we increment the left pointer `l` and divide the `curr` by the value of the element at index `l`, until `curr` is less than `k` again. 

Finally, we add the length of the current window `(r - l + 1)` to our `result` variable. This is because for each `r`, there are exactly `(r - l + 1)` subarrays ending at `r` with product less than `k`.

# Complexity
- Time complexity: The time complexity for this algorithm is O(n), where `n` is the length of the `nums` array. Each element in the `nums` array is accessed at most twice, once by the right pointer `r` and once by the left pointer `l`.

- Space complexity: The space complexity is O(1), as no extra space is used that scales with input size.


# Code
```
func numSubarrayProductLessThanK(nums []int, k int) int {
    var l,result int
    curr:=1
    for r:=0;r<len(nums);r++{
        curr*=nums[r]
        for l <= r && curr>=k{
            curr/=nums[l]
            l++
        }
        result+=r-l+1
    }
    return result
}
```