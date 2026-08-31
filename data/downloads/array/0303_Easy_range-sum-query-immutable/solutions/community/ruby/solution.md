# A Ruby Solution

**Author:** StefanPochmann
**Votes:** 4
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/75326/](https://leetcode.com/problems/range-sum-query-immutable/solutions/75326/)

---

    class NumArray
    
      def initialize(nums)
        @sum = [s = 0] + nums.map { |n| s += n }
      end
    
      def sum_range(i, j)
        @sum[j + 1] - @sum[i]
      end
    
    end