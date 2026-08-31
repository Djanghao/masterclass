# O(n+m) solution using Racket

**Author:** nikhilvb2
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/4851586/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/4851586/)

---

# Intuition
We need to find the intersection of two arrays while ensuring uniqueness of elements in the resulting array.
1. We can accomplish this by converting both arrays nums1 and nums2 into sets, as sets only contain unique elements.
2. Once we have sets representing both arrays, we can find their intersection using set operations.
3. Finally, we'll convert the resulting set back into a list to match the expected output format.
# Approach
To solve this problem, we can use sets to store unique elements from both arrays. We'll convert both arrays nums1 and nums2 into sets, then find the intersection of these sets. Finally, we'll convert the resulting set back into a list and return it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n+m)$$, where $n$ is the number of elements in `nums1` and $m$ is the number of elements in `nums2`. Converting arrays to sets and finding the intersection can be done in linear time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n+m)$$, where $n$ is the number of elements in `nums1` and $m$ is the number of elements in `nums2`. We use extra space to store elements in sets.

# Code
```
(define/contract (intersection nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))
  (let ((set1 (list->set nums1))
        (set2 (list->set nums2)))
    (set->list (set-intersect set1 set2))))

```