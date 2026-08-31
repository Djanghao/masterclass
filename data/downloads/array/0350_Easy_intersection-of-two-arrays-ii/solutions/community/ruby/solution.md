# Solution with three follow-ups

**Author:** NikkiNicholas
**Votes:** 56
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/82271/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/82271/)

---

Compared to 349. Intersection of Two Arrays, which uses a hash to flag if element exists, we turn to use a hash to count how many elements exist.

```ruby
  def intersect(nums1, nums2)
    hash = nums1.reduce(Hash.new(0)) {|ha, num| ha[num] += 1; ha }

    nums2.reduce([]) do |ar, num|
      if hash[num] > 0
        hash[num] -= 1
        ar << num
      else
        ar
      end
    end
  end
```

- - -

*Q. What if the given array is already sorted? How would you optimize your algorithm?*

If both arrays are sorted, I would use **two pointers** to iterate, which somehow resembles the `merge` process in merge sort.

*Q. What if nums1's size is small compared to nums2's size? Which algorithm is better?*

Suppose lengths of two arrays are `N` and `M`, the time complexity of my solution is `O(N+M)` and the space complexity if `O(N)` considering the hash. So it's better to use the smaller array to construct the counter hash. 

Well, as we are calculating the intersection of two arrays, the order of array doesn't matter. We are totally free to swap to arrays.

*Q. What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?*

Divide and conquer. Repeat the process frequently: Slice `nums2` to fit into memory, process (calculate intersections), and write partial results to memory.