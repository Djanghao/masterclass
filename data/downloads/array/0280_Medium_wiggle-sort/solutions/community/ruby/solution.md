# 2-liners in Ruby (or unclean 1-liner)

**Author:** StefanPochmann
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/71755/](https://leetcode.com/problems/wiggle-sort/solutions/71755/)

---

Order each triple `nums[0..2]`, `nums[2..4]`, etc starting at even indexes so that the first value in the triple is the minimum and the second is the maximum (after sort it's like [1,2,3], then rotate makes it [2,3,1], then reverse makes it [1,3,2]).

    def wiggle_sort(nums)
      i = -2
      nums[i,3] = nums[i,3].sort.rotate.reverse while nums[i += 2]
    end
 
And a 1-liner, although it's not clean because it does return a value (namely `0`). Can be made clean by explicitly returning nil (just write another line containing just "`nil`").

    def wiggle_sort(nums)
      0.step(nums.size, 2) { |i| nums[i,3] = nums[i,3].sort.rotate.reverse }
    end