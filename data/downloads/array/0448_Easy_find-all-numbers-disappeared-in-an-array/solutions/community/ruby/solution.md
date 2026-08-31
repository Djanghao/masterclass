# One line ruby

**Author:** rega1237
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4488517/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4488517/)

---

# Code
```
def find_disappeared_numbers(nums)
  (1..nums.length).to_a - nums
end
```