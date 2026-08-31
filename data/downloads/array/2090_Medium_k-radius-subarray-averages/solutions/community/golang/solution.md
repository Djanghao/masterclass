# [ Go Solution ]Great explanation and Full Description

**Author:** sansaian
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3641622/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3641622/)

---

# Intuition
The problem requires us to find the average of a subarray of size `2k + 1` for each element in the array, where `k` is the number of elements on either side of the current element. The twist is that if an element does not have `k` elements on either side, it should be assigned `-1`. 

A direct approach to calculate the average for each position would be to sum all `2k + 1` elements for each position and then divide the sum by `2k + 1`. However, this would involve recalculating the sum of `2k` elements for each position, which is inefficient.

A more efficient way is to use a sliding window approach, where we keep a running sum of the last `2k + 1` elements and slide this window through the array. This way, when we move the window one step to the right, we can update the sum by subtracting the element that is now outside the window on the left and adding the new element from the right. This method requires each element to be processed only twice, which is significantly more efficient for large inputs.

# Approach
We initialize the `div` and `sum` variables to `2k + 1` and `0`, respectively. The `div` variable will be used to divide the sum to calculate the average, while the `sum` variable will be used to store the sum of the current subarray.

We then create a prefix array to store the averages and iterate over `nums`. For each element at index `i`, if `i` is less than `k` or `i` is greater than or equal to the length of `nums` minus `k`, we set the corresponding value in the prefix array to `-1` as it does not have `k` elements on either side.

If the element does have `k` elements on both sides, we check if `sum` is `0`. If it is, we calculate the sum of all elements in the subarray of size `2k + 1` centered on the element. If `sum` is not `0`, it means we have a previous sum. We subtract the first element of the previous subarray and add the last element of the current subarray to `sum`. After that, we divide `sum` by `div` to get the average and store it in the prefix array.

Finally, we return the prefix array which contains the averages for all elements in `nums`.

# Complexity
- Time complexity: The time complexity for this algorithm is O(n), where `n` is the length of the `nums` array. This is because we only calculate the sum of the subarray once and then adjust it for subsequent elements, resulting in a constant time complexity per element.

- Space complexity: The space complexity is O(n), as we create an array of the same size as the `nums` array.

# Code
```go
func getAverages(nums []int, k int) []int {
    if k==0{
        return nums
    }
    div,sum:=2*k+1,0
    
    prefix:=make([]int,len(nums))
    for i:=0;i<len(nums);i++{
        if i<k || i>=len(nums)-k{
            prefix[i]=-1
            continue
        }
        if sum==0{
            for j:=i-k;j<=i+k;j++{
                sum+=nums[j]
            }   
        }else{
            sum-=nums[i-k-1]
            sum+=nums[i+k]
        }
        prefix[i]=sum/div
    }
    return prefix
}
```