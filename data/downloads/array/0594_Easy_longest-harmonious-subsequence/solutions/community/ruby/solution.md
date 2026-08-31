# Two Pointer O(n log n):O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/4780692/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/4780692/)

---

\r
# Code\r
```\r
# @param {Integer[]} nums\r
# @return {Integer}\r
def find_lhs(nums)\r
    nums.sort!\r
    low = nums[0]\r
    low_index = 0\r
    high = nil\r
    high_index = nil\r
    max_count = 0\r
    nums[1..-1].each_with_index do |num, i|\r
        if num > low and high == nil \r
            if (low + 1 == num)\r
                high = num\r
                high_index = i  + 1\r
            else\r
                low = num\r
                low_index = i + 1\r
            end\r
        elsif high and num != high\r
            count = i - low_index + 1\r
            max_count = [max_count, count].max\r
            if high + 1 == num\r
                low = high\r
                low_index = high_index\r
                high = num\r
                high_index = i + 1\r
            else\r
                low = num\r
                low_index = i + 1\r
                high = nil\r
                high_index = nil\r
            end\r
        end\r
    end\r
\r
    if low and high\r
        count = nums.size - low_index \r
        max_count = [max_count, count].max\r
    end\r
\r
\r
    max_count\r
    \r
end\r
```