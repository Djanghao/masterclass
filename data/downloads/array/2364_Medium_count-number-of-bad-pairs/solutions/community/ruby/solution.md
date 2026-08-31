# Ruby solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/3130848/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/3130848/)

---

# Approach

1) Find the count of good pairs
2) Get the difference between the count of all pairs and the count of good pairs

## 1) Find the count of good pairs.
Let me explain this part with an example. 
`nums = [2, 3, 7, 5]`

Let's define what a good pair is;
-> A pair of indices `(i, j)` is a bad pair if `i < j` and `j - i == nums[j] - nums[i]` 

Let's manipulate it;
-> A pair of indices `(i, j)` is a bad pair if `i < j and nums[i] - i == nums[j] - j`

It means that if all nums are updated by finding the difference between a num and its index, the elements having the same value can be a good pair.

So, `updated_nums = [2, 2, 5, 2]`. There are 3 `2`s, and 1 `5`.

The count of good pairs of `2`s is `3 * (3 - 1) / 2 => 3`.
The count of good pairs of `5`s is `1 * (1 - 1) / 2 => 0`.

## 2) Get the difference between the count of all pairs and the count of good pairs

The count of all pairs is `4 * (4 - 1) / 2 => 6`.

As a result, the count of bad pairs is `6 - (3 + 0) => 3`
# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def count_bad_pairs(nums)
  nums.map!.with_index do |num, index|
    num - index
  end

  good_pairs_count = nums.tally.values.sum {|value| count_pairs(value)}
  all_pairs_count = count_pairs(nums.size)
  
  all_pairs_count - good_pairs_count
end

def count_pairs(size)
  size * (size - 1) / 2
end
```