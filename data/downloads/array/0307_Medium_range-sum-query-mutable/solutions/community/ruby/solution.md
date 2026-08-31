# Ruby Solution - Segment Tree

**Author:** NikkiNicholas
**Votes:** 6
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/75757/](https://leetcode.com/problems/range-sum-query-mutable/solutions/75757/)

---

The first thing coming into my mind was RMQ. After some googling, I found this wonderful article.

+ [Range Minimum Query and Lowest Common Ancestor](https://www.topcoder.com/community/data-science/data-science-tutorials/range-minimum-query-and-lowest-common-ancestor/) by [danielp](https://www.topcoder.com/member-profile/danielp) (Note there are some typos or mistakes about the index)

Other useful references:

+ [LeetCode Solution of 307. Range Sum Query - Mutable](https://leetcode.com/articles/range-sum-query-mutable/)
+ [A Recursive Approach to Segment Trees, Range Sum Queries & Lazy Propagation](https://leetcode.com/articles/recursive-approach-segment-trees-range-sum-queries-lazy-propagation/)

Here is a summary about RMQ problems

![0_1477451301199_upload-27fe6d52-3531-482b-a71e-67ba1be4c241](/uploads/files/1477451302993-upload-27fe6d52-3531-482b-a71e-67ba1be4c241.png) 

I use **Segment Tree** to pass the problem, which has a good support on updating.

```ruby
require 'minitest/autorun'
require 'minitest/focus'

class NumArray
  attr_reader :tree

  def initialize(nums)
    @tree = SegmentTree.new(nums)
  end

  def update(i, val)
    tree.update(i, val)
  end

  def sum_range(i, j)
    tree.query(i, j)
  end
end

# Your NumArray object will be instantiated and called as such:
# num_array = NumArray.new(nums)
# num_array.sum_range(0, 1)
# num_array.update(1, 10)
# num_array.sum_range(0, 2)

# This is a segment tree recording range sum as value
class SegmentTree
  attr_reader :value, :data

  def initialize(data)
    @data = data.empty? ? [0] : data.clone
    node_count = 2 * 2**( Math.log(@data.count,2).to_i + 1 )
    @value = [0]*node_count

    build(1, 0, @data.count-1)
  end

  def query(i, j)
    recur_query(1, 0, data.count-1, i, j)
  end

  def update(i, val)
    # puts "i: #{i} val: #{val} value: #{value.join(',')}"
    gap = val - data[i]
    data[i] = val

    node = 1
    b, e = 0, data.count-1
    loop do
      value[node] += gap

      break if b == e && b == i

      mid = (b+e)/2

      if i <= mid
        e = mid
        node = 2*node
      else
        b = mid + 1
        node = 2*node + 1
      end
    end
  end

  private

    def build(node, b, e)
      # puts "node: #{node} b: #{b} e: #{e}"

      if b == e
        return value[node] = data[b]
      end

      mid = (b+e)/2

      value[node] = build(2*node, b, mid) + build(2*node+1, mid+1,  e)
    end

    def recur_query(node, b, e, i, j)
      # if the current interval doesnot interset with the query interval
      if i > e or j < b
        return 0
      end

      # if the current interval is included in the query interval
      if i <= b && e <= j
        return value[node]
      end

      # compute the minimum position in the left and right part of current interval
      mid = (b+e)/2
      left  = recur_query(2*node,   b,      mid,  i, j)
      right = recur_query(2*node+1, mid+1,  e,    i, j)

      left + right
    end
end

class SegmentTreeTest < Minitest::Test
  attr_reader :data, :tree

  def setup
    @data = [2,4,3,1,6,7,8,9,1,7]
    @tree = SegmentTree.new(@data)
  end

  def test_query
    assert_equal data[0..1].reduce(:+), tree.query(0, 1)
    assert_equal data[1..5].reduce(:+), tree.query(1, 5)
    assert_equal data[7..9].reduce(:+), tree.query(7, 9)
  end

  def test_update
    tree.update(1, 10)
    assert_equal 12, tree.query(0, 1)
    assert_equal 27, tree.query(1, 5)

    tree.update(9, 10)
    assert_equal 20, tree.query(7, 9)
  end
end

class NumArrayTest < Minitest::Test
  attr_reader :num_array
  def setup
    @num_array = NumArray.new( [2,4,3,1,6,7,8,9,1,7] )
  end

  def test_run
    assert_equal 6,   num_array.sum_range(0, 1)
    assert_equal 21,  num_array.sum_range(1, 5)
    assert_equal 17,  num_array.sum_range(7, 9)

    num_array.update(1, 10)
    assert_equal 12, num_array.sum_range(0, 1)
    assert_equal 27, num_array.sum_range(1, 5)

    num_array.update(9, 10)
    assert_equal 20, num_array.sum_range(7, 9)
  end

  def test_empty_data
    assert_equal 0, NumArray.new( [] ).sum_range(0,1)
  end

  def test_wa_case
    num_array = NumArray.new([0,9,5,7,3])
    assert_equal 3,   num_array.sum_range(4,4)
    assert_equal 15,  num_array.sum_range(2,4)
    assert_equal 7,   num_array.sum_range(3,3)
    num_array.update(4,5)
    num_array.update(1,7)
    num_array.update(0,8)
    assert_equal 12,  num_array.sum_range(1,2)
    num_array.update(1,9)
    assert_equal 5,   num_array.sum_range(4,4)
    num_array.update(3,4)
  end
end
```