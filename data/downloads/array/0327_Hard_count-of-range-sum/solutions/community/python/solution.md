# Short & simple O(n log n)

**Author:** StefanPochmann
**Votes:** 240
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/77991/](https://leetcode.com/problems/count-of-range-sum/solutions/77991/)

---

    def countRangeSum(self, nums, lower, upper):
        first = [0]
        for num in nums:
            first.append(first[-1] + num)
        def sort(lo, hi):
            mid = (lo + hi) / 2
            if mid == lo:
                return 0
            count = sort(lo, mid) + sort(mid, hi)
            i = j = mid
            for left in first[lo:mid]:
                while i < hi and first[i] - left <  lower: i += 1
                while j < hi and first[j] - left <= upper: j += 1
                count += j - i
            first[lo:hi] = sorted(first[lo:hi])
            return count
        return sort(0, len(first))

First compute the prefix sums: `first[m]` is the sum of the first `m` numbers.  
Then the sum of any subarray `nums[i:k]` is simply `first[k] - first[i]`.  
So we just need to count those where `first[k] - first[i]` is in `[lower,upper]`.

To find those pairs, I use mergesort with embedded counting. The pairs in the left half and the pairs in the right half get counted in the recursive calls. We just need to also count the pairs that use both halves.

For each `left` in `first[lo:mid]` I find all `right` in `first[mid:hi]` so that `right - left` lies in `[lower, upper]`. Because the halves are sorted, these fitting `right` values are a subarray `first[i:j]`. With increasing `left` we must also increase `right`, meaning must we leave out `first[i]` if it's too small and and we must include `first[j]` if it's small enough.

Besides the counting, I also need to actually merge the halves for the sorting. I let `sorted` do that, which uses [Timsort](https://en.wikipedia.org/wiki/Timsort) and takes linear time to recognize and merge the already sorted halves.