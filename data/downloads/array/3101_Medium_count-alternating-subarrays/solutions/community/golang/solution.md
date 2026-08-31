# Fastest and Easiest Answer with Explanation || Dynamic Programming || Beats 98.92% of users

**Author:** Saidakbar_Zokirovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/5045702/](https://leetcode.com/problems/count-alternating-subarrays/solutions/5045702/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Solving the problem by using Dynamic Programming
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// Use Dynamic Programming to solve the problem
// Make a grid like this
// nums = [0,1,1,1]
//
//  |   | 0 | 1 | 1 | 1 |
//  ---------------------
//  | 0 |   |   |   |   |
//  ---------------------
//  | 1 |   |   |   |   |
//  ---------------------
//  | 1 |   |   |   |   |
//  ---------------------
//  | 1 |   |   |   |   |

// Then you should iterate from begin to the end of the list
// And check if the letter before the corrent digit is not
// the same digit do that add one to the count of the current 
// subarray and put into the index [i][i] of the grid
// If it is not do that put 1 into the index [i][i] of the grid

//  |   | 0 | 1 | 1 | 1 |
//  ---------------------
//  | 0 | 1 |   |   |   |
//  ---------------------
//  | 1 |   | 2 |   |   |
//  ---------------------
//  | 1 |   |   | 1 |   |
//  ---------------------
//  | 1 |   |   |   | 1 |

// each index of the grid tells how many alternating subarray
// you can make by using this number which is in the index of
// nums. For example: in second column there is 2. It means
// alternating subarray by using the number 1: 0,1 and 1.

// After filling the grid, return sum of the number of 
// alternating subarray by using the number which is in the index of nums.


func countAlternatingSubarrays(nums []int) int64 {
    numberOfSubarray := 1
    sizeOfLastSabarray := 1
    for i := 1; i < len(nums); i++ {
        // Ckeck alternating or not
        if nums[i] != nums[i-1] {
            sizeOfLastSabarray += 1
        }else {
            sizeOfLastSabarray = 1
        }
        // Add the number of alternating subarray 
        // by using the number which is in the index of nums
        numberOfSubarray += sizeOfLastSabarray
    }

    return int64(numberOfSubarray)
}
```