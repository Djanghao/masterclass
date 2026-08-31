# Rather simple solution which doesn't rely on mathematics

**Author:** umairabid
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/3395214/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/3395214/)

---

# Intuition
The base inituition is based on other solutions, however they all made some mathematical assumptions which I think are personally too hard for me to think during the interview.

The intuition is simple expand middle array as long as possible to calculate all combinations

# Approach

Each iteration gives us the end index of left array i.e. 0..1

Then we need to calculate bounds of middle array j...k

To calculate j we need to calculate sub array after i where sum of array i..j is equal to or greater than 0..i which is `find_j`

Then we calculate start of right array such that if sum of right array is greater or equal to j..k-1. If we found such array we try to short the array through binary search which is `find_k`

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def ways_to_split(nums)
    ans = 0
    prefix_arr = [nums[0]]
    
    for i in (1...nums.size) do
        prefix_arr[i] = nums[i] + prefix_arr[i-1]
    end
    #puts prefix_arr.inspect

    for i in (0...nums.size) do
        j = find_j(prefix_arr, i)
        k = find_k(prefix_arr, i, j)
        #puts "j: #{j}, k: #{k}"
        ans += k - j if k > -1 && j > -1
    end

  
    ans % 1_000_000_007
end
def find_j(prefix_arr, i)
    x = i + 1
    y = prefix_arr.size - 1
    ans = -1
    while x <= y  do
        mid = (x + y) / 2
        left_sum = prefix_arr[i]
        right_sum = prefix_arr[mid] - left_sum
        #puts "mid: #{mid}, right_sum: #{right_sum}, left_sum: #{left_sum}"
        if right_sum >= left_sum
            y = mid - 1
            ans = mid
        else
            x = mid + 1
        end
    end
    ans
end

def find_k(prefix_arr, i, j)
    x = j + 1
    y = prefix_arr.size - 1
    ans = -1
    while x <= y  do
        mid = (x + y) / 2
        left_sum = prefix_arr[mid-1] - prefix_arr[i]
        right_sum = prefix_arr[prefix_arr.size-1] - prefix_arr[mid-1]
        #puts "mid: #{mid}, right_sum: #{right_sum}, left_sum: #{left_sum}"
        if right_sum >= left_sum
            x = mid + 1
            ans = mid
        else
           y = mid - 1
        end
    end
    ans
end
```