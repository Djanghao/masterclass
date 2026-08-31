# 2 clean Python linear solutions

**Author:** cthlo
**Votes:** 8
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/1343709/](https://leetcode.com/problems/three-equal-parts/solutions/1343709/)

---

```
class Solution:
    def threeEqualParts(self, arr: List[int]) -> List[int]:
        # count number of ones
        ones = sum(arr)
        if ones % 3 != 0:
            return [-1, -1]
        elif ones == 0:  # special case: all zeros
            return [0, 2]
        
        # find the start index of each group of ones
        c = 0
        starts = []
        for i, d in enumerate(arr):
            if d == 1:
                if c % (ones // 3) == 0:
                    starts.append(i)
                c += 1

        # scan the groups in parallel to compare digits
        i, j, k = starts
        while k < len(arr):  # note that the last/rightmost group must include all digits till the end
            if arr[i] == arr[j] == arr[k]:
                i += 1
                j += 1
                k += 1
            else:
                return [-1, -1]
        return [i-1, j]
```
Runtime: *O(n)*
Space: *O(1)*

```
class Solution:
    def threeEqualParts(self, arr: List[int]) -> List[int]:
        # gather the indices of the ones
        ones = [i for i, d in enumerate(arr) if d == 1]

        if not ones:
            return [0, 2]
        elif len(ones) % 3 != 0:
            return [-1, -1]

        # get the start indices of the 3 groups
        i, j, k = ones[0], ones[len(ones)//3], ones[len(ones)//3*2]

        # calculate the size/length of what each group should be
        length = len(arr) - k  # note that the last/rightmost group must include all digits till the end
                               # so we know that the size of each group is `len(arr) - k` (where `k` is start of third group)

        # compare the three groups
        if arr[i:i+length] == arr[j:j+length] == arr[k:k+length]:
            return [i+length-1, j+length]
        
        return [-1, -1]
```
Runtime: *O(n)*
Space: *O(n)*