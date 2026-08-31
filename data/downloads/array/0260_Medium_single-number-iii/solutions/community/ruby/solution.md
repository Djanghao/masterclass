# 3 lines Ruby, 4 lines C++

**Author:** StefanPochmann
**Votes:** 28
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/68924/](https://leetcode.com/problems/single-number-iii/solutions/68924/)

---

Based on [Nakagawa_Kanon's solution/explanation](https://leetcode.com/discuss/52369/c-o-n-time-o-1-space-7-line-solution-with-detail-explanation).

**Ruby**

    def single_number(nums)
      a = nums.reduce(:^)
      b = nums.select { |n| n & a & -a > 0 }.reduce(:^)
      [a ^ b, b]
    end

Or:
    
    def single_number(nums)
      a = b = nums.reduce(:^)
      nums.each { |n| b ^= n if n & a & -a > 0 }
      [a ^ b, b]
    end

**C++**

    vector<int> singleNumber(vector<int>& nums) {
        int a = 0, b = 0;
        for (int n : nums)                 a ^= n;
        for (int n : nums) if (n & a & -a) b ^= n;
        return {a ^ b, b};
    }