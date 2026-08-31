# Sort + on linear iteration T:O(nlogn) S:O(1)

**Author:** EXisTAnZ
**Votes:** 1
**Link:** [https://leetcode.com/problems/happy-students/solutions/4057115/](https://leetcode.com/problems/happy-students/solutions/4057115/)

---

# Intuition
If we sort the original array, the solution comes by itself.

# Approach
Let's look at the second testcase: `[6,0,3,3,6,7,2,7]`
After we sort it: `[0,2,3,3,6,6,7,7]`
If there is a student with number 0, then we are must to select him. If next student has number less or equal to his index we must select him with previous i.e. this case will be included in the previous way.
If we have student with number greater than index, and previous student has number that less this index we need to add new way of creating group.
If a student with number x is selected, all the students with number <= x must be selected. If a student with number x is not selected, all the students with number >= x must be deselected.
Folow by constraints `nums[i] < nums.length` we allways can form plus one group with all students.


# Complexity
- Time complexity: for sorting O(nlogn) and one linear iteration

- Space complexity: O(1)

# Code
```
function countWays(nums: number[]): number {
  nums.sort((a,b) => a-b);
  let res = nums[0]==0 ? 0 : 1;
  for (let i = 1; i <= nums.length; i++) {
    if((i > nums[i-1]) &&
      ((i < nums.length && i < nums[i]) ||
      (i == nums.length)))
      res++;
  }
  return res;
};
```