# ruby 1-liner

**Author:** _-k-
**Votes:** 1
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4735860/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4735860/)

---

```
def find_least_num_of_unique_ints(arr, k) =

  arr.tally.values.sort.count{ 0>k-=_1 }
```
or

```
def find_least_num_of_unique_ints(arr, k) =

  arr.sort.sort_by(&arr.tally).drop(k).uniq.size
```