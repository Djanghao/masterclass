# Ruby solution

**Author:** ozovalihasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/3624872/](https://leetcode.com/problems/snapshot-array/solutions/3624872/)

---

# Code
```ruby []
class SnapshotArray

=begin
  :type length: Integer
=end
  def initialize(length)
    @current_snapshot_id = 0
    @arr = Array.new(length) { [[-1, 0]]}
  end


=begin
  :type index: Integer
  :type val: Integer
  :rtype: Void
=end
  def set(index, val)
    @arr[index] << [@current_snapshot_id, val]
  end


=begin
  :rtype: Integer
=end
  def snap()
    @current_snapshot_id += 1
    @current_snapshot_id - 1
  end


=begin
  :type index: Integer
  :type snap_id: Integer
  :rtype: Integer
=end
  def get(index, snap_id)
    snap_index = (@arr[index].bsearch_index {|saved_snapshot_id, _| saved_snapshot_id > snap_id } || @arr[index].size) - 1
    @arr[index][snap_index].last
  end


end

# Your SnapshotArray object will be instantiated and called as such:
# obj = SnapshotArray.new(length)
# obj.set(index, val)
# param_2 = obj.snap()
# param_3 = obj.get(index, snap_id)
```