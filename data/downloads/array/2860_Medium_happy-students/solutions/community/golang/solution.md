# O(nlogn) approach with sorting and 3 condition check

**Author:** DeepakTripathi1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-students/solutions/4061936/](https://leetcode.com/problems/happy-students/solutions/4061936/)

---

# Intuition
After sorting array we need to check 3 conditions

# Approach
First sort the array this way we can assure that after selecting i students
whether the ith student and i-1th student will be happy or not

Condition 1:
If no student selected that means 0 so student will be happy if I am not selecting the first student in my sorted array that means 
`0 > nums[0]` if it is true that means first student is happy if not selected and will count in our total.

Condition 2:
If all students are selected that means if we have n students then
happiness criteria is determined by checking if each student is happy or not.
every student will be happy if their value is less than n.
so instead of checking with every value we have sorted the array so we will check with the last value i.e 
`n>nums[n-1]` if this is true then we will take this in our count.

condition 3:
Now we can select students from 1 to n-1 and to check if the student will be happy with this we will check like this

If we select k students that means to check for happiness we can check
that if Kth student is happy or not as well as (k+1)th student is happy or not.
`nums[k-1] < k < nums[k]` this checks that student previous to k are also happy and after k are also happy so we will take this into our count.


# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(1)


# Code
```
import "sort"

func countWays(nums []int) int {
    sort.Ints(nums)
    l := len(nums)
    tot := 0
    // not selecting any one that means 0 < nums[0] then 1 else 0
    if 0 < nums[0] {
        tot += 1
    }
    // if selecting one then that means 1 > [nums till 1 index] 
    // if selecting n then that means n > [nums till n index] or better
    // we can check n>index(n-1) and n<index(n)
    for i:=1;i<l;i++{
        if i>nums[i-1] && i<nums[i]{
            tot += 1
        }
    }
    if l>nums[l-1]{
        tot += 1
    }
    return tot
}
```