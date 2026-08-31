# O(1) extra space

**Author:** binarbaum
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/5530979/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/5530979/)

---

Since input numbers are small and require only 8 bits, we can store number frequencies in the input array itself.

```ruby
def find_matrix(nums)
    max_count = 0
    nums.each do |count_num|
        num = count_num & 0xFF # Clear off the count
        count = (nums[num-1] >> 8) + 1
        nums[num-1] &= 0xFF
        nums[num-1] |= (count << 8)
        max_count = count if max_count < count
    end
    res = Array.new(max_count) { [] }
    nums.each_with_index do |count_num, i|
        count = count_num >> 8
        count.times do |r|
            res[r] << i + 1
        end
    end
    res
end
```