# Ruby, Frequency Hash / Tally

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/5368987/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/5368987/)

---

# Code
```
class FindSumPairs
  attr_accessor :nums1, :nums2, :frequencies
  def initialize(nums1, nums2)
    @nums1 = nums1
    @nums2 = nums2
    @frequencies = nums2.tally(Hash.new(0))
  end

  def add(index, val)
    frequencies[nums2[index]] -= 1
    nums2[index] += val
    frequencies[nums2[index]] += 1
  end

  def count(total)
    nums1.sum { |n1| frequencies[total - n1] }
  end
end
```