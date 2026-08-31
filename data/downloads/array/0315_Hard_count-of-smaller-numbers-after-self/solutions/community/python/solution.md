# Mergesort solution

**Author:** StefanPochmann
**Votes:** 641
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/76584/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/76584/)

---

The smaller numbers on the right of a number are exactly those that jump from its right to its left during a stable sort. So I do mergesort with added tracking of those right-to-left jumps.

**Update, new version**

Here I sort `(index, value)` pairs. The value is used for the sorting and the index is used for tracking the jumps.

    def countSmaller(self, nums):
        def sort(enum):
            half = len(enum) / 2
            if half:
                left, right = sort(enum[:half]), sort(enum[half:])
                for i in range(len(enum))[::-1]:
                    if not right or left and left[-1][1] > right[-1][1]:
                        smaller[left[-1][0]] += len(right)
                        enum[i] = left.pop()
                    else:
                        enum[i] = right.pop()
            return enum
        smaller = [0] * len(nums)
        sort(list(enumerate(nums)))
        return smaller

Alternatively, sort only the indexes and look up the actual numbers for the comparisons on the fly. Might be a little easier to understand and to port to other languages:

```
def countSmaller(self, nums):
    def sort(indexes):
        half = len(indexes) / 2
        if half:
            left, right = sort(indexes[:half]), sort(indexes[half:])
            for i in range(len(indexes))[::-1]:
                if not right or left and nums[left[-1]] > nums[right[-1]]:
                    smaller[left[-1]] += len(right)
                    indexes[i] = left.pop()
                else:
                    indexes[i] = right.pop()
        return indexes
    smaller = [0] * len(nums)
    sort(range(len(nums)))
    return smaller
```

---

**Old version**

    def countSmaller(self, nums):
        def sort(enum):
            half = len(enum) / 2
            if half:
                left, right = sort(enum[:half]), sort(enum[half:])
                m, n = len(left), len(right)
                i = j = 0
                while i < m or j < n:
                    if j == n or i < m and left[i][1] <= right[j][1]:
                        enum[i+j] = left[i]
                        smaller[left[i][0]] += j
                        i += 1
                    else:
                        enum[i+j] = right[j]
                        j += 1
            return enum
        smaller = [0] * len(nums)
        sort(list(enumerate(nums)))
        return smaller