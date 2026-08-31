# Three Python Solutions

**Author:** latnokz
**Votes:** 311
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/82247/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/82247/)

---

**two pointers:**

    class Solution(object):
        def intersect(self, nums1, nums2):

            nums1, nums2 = sorted(nums1), sorted(nums2)
            pt1 = pt2 = 0
            res = []

            while True:
                try:
                    if nums1[pt1] > nums2[pt2]:
                        pt2 += 1
                    elif nums1[pt1] < nums2[pt2]:
                        pt1 += 1
                    else:
                        res.append(nums1[pt1])
                        pt1 += 1
                        pt2 += 1
                except IndexError:
                    break

            return res

**use `dictionary` to count:**

    class Solution(object):
        def intersect(self, nums1, nums2):

            counts = {}
            res = []

            for num in nums1:
                counts[num] = counts.get(num, 0) + 1

            for num in nums2:
                if num in counts and counts[num] > 0:
                    res.append(num)
                    counts[num] -= 1

            return res

**use `Counter` to make it cleaner:**

    class Solution(object):
        def intersect(self, nums1, nums2):
    
            counts = collections.Counter(nums1)
            res = []

            for num in nums2:
                if counts[num] > 0:
                    res += num,
                    counts[num] -= 1

            return res