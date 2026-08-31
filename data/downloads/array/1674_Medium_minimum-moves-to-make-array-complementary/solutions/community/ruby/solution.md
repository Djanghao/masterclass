# Difference Array

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/4998922/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/4998922/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums
# @param {Integer} limit
# @return {Integer}
def min_moves(nums, limit)
    
    arr = Array.new(2*limit + 2) { 0 }
    n = nums.size 

    i = 0
    while i < nums.size/2
        l = nums[i]
        r = nums[n - 1 - i]
        arr[0] += 2


        one_move_min = [l,r].min + 1
        arr[one_move_min] -= 1


        no_move = l + r
        arr[no_move] -= 1
        arr[no_move + 1] += 1

        one_move_max = [l,r].max + limit
        arr[one_move_max + 1] += 1

        i += 1
    end

    min_moves = 99999999
    i = 1
    while i < arr.size
        arr[i] += arr[i-1]
        min_moves = [min_moves, arr[i]].min
        i += 1
    end

    min_moves
end
```