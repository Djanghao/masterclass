# [ruby] Using stack and accumulated sum

**Author:** tuang3142
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/1199300/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/1199300/)

---

*[Thanks hiepit for the original solution.](https://leetcode.com/problems/maximum-subarray-min-product/discuss/1198718/JavaPython-Stack-keeps-index-of-elements-less-than-numsi-O(N)) I am meerly providing my understanding and the ruby code.*

**Idea**

- Treat each number in the array as the smallest number in a sub-array, then we can scan thru the array and find the best result.
- The problem transforms to: for each `nums[i]`, maximize the length of the sub-array in which `nums[i]` is the smallest number. How?
  - Using `stack`, go from left to right. For each `nums[i]`, find the farthest number to the left of `i` which is no less than `nums[i]`, then store them to a  `left_bound` array.
  - First, construct and empty stack `st`
  - For each `nums[i]`:
	  - while the top of the `st` no less than `nums[i]`, pop it
	  - if `st` is not empty, then the top of the stack marks the farest point which is smaller than `nums[i]`. store it to `left_bound[i]`
	  - if `st` is empty, which means `nums[i]` is the smallest number so far from left to right, then `left_bound[i]=0`
	  - push `i` to `st`
   - Do the same from right to left and construct the `right_bound` array

**Complexity**

- with `n = nums.length`
- Time: `0(n)`. Althought, in the code below, we include a while loop inside a for loop, the size of the stack will never exceed n.
- Space: `0(n)`

**Code**

```ruby
def max_sum_min_product(nums)
  n = nums.length

  # calc left bound
  left_bound = [0] * n
  st = []
  0.upto n-1 do |i|
    st.pop while !st.empty? && nums[st[-1]] >= nums[i]
    left_bound[i] = st.empty? ? 0 : st[-1] + 1
    st.append i
  end

  # calc right bound
  right_bound = [0] * nums.length
  st = []
  (n-1).downto 0 do |i|
    st.pop while !st.empty? && nums[st[-1]] >= nums[i]
    right_bound[i] = st.empty? ? n-1 : st[-1] - 1
    st.append i
  end

  # calc accumulated sum & get the range
  pre_sum = []
  nums.each_with_index do |val, i|
    if i == 0
      pre_sum.append(val)
    else
      pre_sum.append(pre_sum[-1] + val)
    end
  end

  def get_sum_range(i, j, sum)
    return sum[j] if i == 0

    sum[j] - sum[i - 1]
  end

  nums.each_with_index.map do |val, i|
    val * get_sum_range(left_bound[i], right_bound[i], pre_sum)
  end.max % 1_000_000_007
end
```
