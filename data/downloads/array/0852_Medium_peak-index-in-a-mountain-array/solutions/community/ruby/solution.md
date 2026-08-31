# Yet another Ruby one-liner

**Author:** ChengSeng
**Votes:** 2
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3347112/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3347112/)

---

Since its guaranteed that it will be a mountain array, its safe to check the next num directly in the block. As such, all that left is to find the first num that started decreasing.
```ruby
def peak_index_in_mountain_array(arr)
  (0...arr.length).bsearch { |index| arr[index] > arr[index + 1] }
end
```