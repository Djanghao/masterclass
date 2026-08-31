# 6 lines O(log(min(m,n))) Ruby

**Author:** StefanPochmann
**Votes:** 57
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2579/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2579/)

---

**For non-Rubyists:** My first line just calls the shorter array `a` and the longer array `b`. It doesn't merge and sort the arrays like some people's thus invalid solutions. Also, you might have trouble reading  the code, but I think the explanation is understandable for non-Rubyists as well.

Update: I wrote a [Python version](https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2755/9-lines-O(log(min(mn)))-Python) as well.

---

Solution
---

    def find_median_sorted_arrays(nums1, nums2)
      a, b = [nums1, nums2].sort_by(&:size)
      m, n = a.size, b.size
      after = (m + n - 1) / 2
      i = (0...m).bsearch { |i| after-i-1 < 0 || a[i] >= b[after-i-1] } || m
      nextfew = (a[i,2] + b[after-i,2]).sort
      (nextfew[0] + nextfew[1 - (m+n)%2]) / 2.0
    end

---

Explanation
---

Let's do an example: `a = [2,3,6,8]` and `b = [1,4,5,7,9]`.

Merged, they'd be `[1,2,3,4,5,6,7,8,9]`. I can't afford to actually merge, because of the O(log(m+n)) requirement, but imagine we'd merge. The usual way. Then after the first four numbers, the next one is the median.

What could the status of the merging be after having merged the first four numbers? We'd have used `i` numbers from `a` and `4-i` numbers from `b`. The five candidate statuses are:

         Remaining    Remaining     Last used    Last used
    i    a[i, ...]   b[4-i, ...]    from b       from a
    
    0    [2,3,6,8]           [9]    7            None
    1      [3,6,8]         [7,9]    5            2
    2        [6,8]       [5,7,9]    4            3
    3          [8]     [4,5,7,9]    1            6
    4           []   [1,4,5,7,9]    None         8

To be possible, a status must obey two rules:

1. The last number used from `b` can't be larger than the next remaining number in `a` (because it would've been a mistake to use it first).
2. The last number used from `a` can't be larger than the next remaining number in `b`.

You can see that only the first two statuses (`i=0` and `i=1`) violate rule 1. And of course with growing `i`, the last-used `b`-number shrinks and the next remaining `a`-number grows. So it's monotone - from small to large `i`, first you have the rule-1-violaters and then you have the rule-1-obeyers. And for rule 2 it's the other way around.

Of course after merging the first four numbers, we must be in **some** status. So there must be some status that obeys both rules. And we can simply take the first one that obeys rule 1. And we can use binary search to find it. In the code, for a given `i`, the next remaining number in `a` is `a[i]` and the last-used number from `b` is `b[after-i-1]`, and my `bsearch` simply tests rule 1.

So in our example we get that after merging four numbers, we'd have [6,8] and [5,7,9] left to merge. What I do is I take the next (up to) two numbers from each, and sort that. So the next few numbers in the imagined merge would be [5,6,7,8]. Now if I overall have an odd number of numbers, I could just take the first number, the 5. And if I overall have an even number of numbers (like if `a` had an additional 10), I take the mean of the first two numbers, (5+6)/2.0. For slightly simpler code, I unify the two cases: Instead of taking the 5, I compute (5+5)/2.0.