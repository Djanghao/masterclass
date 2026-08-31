# Python Solution using dictionary and SortedList

**Author:** dazh5587
**Votes:** 2
**Link:** [https://leetcode.com/problems/beautiful-pairs/solutions/3386919/](https://leetcode.com/problems/beautiful-pairs/solutions/3386919/)

---

Intuition, for each index j we're at, we want to get the smallest i (for i < j) such that at the current j, we have the smallest beautiful pair. For the current index j, to get those closest possible points, we have 2 options: either we can take the closest value in nums1 to current nums1[j] and make the respective nums2[j] fit, or we take the closest value in nums2 to current nums2[j] and make the respective nums1[j] fit. I need dictionaries to store the indicies for nums1 and nums2 for each value that we've seen (since we want the smallest beautiful pair, not all of them)

```
from sortedcontainers import SortedList
class Solution:
    def beautifulPair(self, nums1: List[int], nums2: List[int]) -> List[int]:
        def getClosest(arr,num):
            index = bisect_left(arr,num)
            if index == 0:
                return arr[0]
            if index == len(arr):
                return arr[-1]
            op1 = abs(num-arr[index-1])
            op2 = abs(num-arr[index])
            if op1 < op2:
                return arr[index-1]
            return arr[index]
        n1 = SortedList([nums1[0]])
        n2 = SortedList([nums2[0]])
        dict1 = {nums1[0]:[0]}
        dict2 = {nums2[0]:[0]}
        smallest = float('inf')
        res = None
        if len(set(nums1)) == 1 and len(set(nums2)) == 1:
            return [0,1]
        for j in range (1, len(nums1)):
            f1 = getClosest(n1,nums1[j])
            f2 = getClosest(n2,nums2[j])
            dist1 = abs(nums1[j]-f1)
            dist2 = abs(nums2[j]-f2)
            s1 = [float('inf'),None]
            for i in dict1[f1]:
                cand1 = [dist1+abs(nums2[i]-nums2[j]),i]
                if cand1[0] <= s1[0]:
                    if cand1[0] == s1[0]:
                        s1[1] = min(s1[1],i)
                    else:
                        s1 = cand1
            s2 = [float('inf'),None]
            for i in dict2[f2]:
                cand2 = [dist2+abs(nums1[i]-nums1[j]),i]
                if cand2[0] <= s2[0]:
                    if cand2[0] == s2[0]:
                        s2[1] = min(s2[1],i)
                    else:
                        s2 = cand2
            if s1[0]==s2[0]:
                if s1[1]<=s2[1]:
                    best = s1
                else:
                    best = s2
            elif s1[0]<s2[0]:
                best = s1
            else:
                best = s2
            val,i = best
            #print (i,j,val)
            if val <= smallest:
                if val == smallest:
                    if i <= res[0]:
                        if i == res[0]:
                            res1 = min(res[1],j)
                        else:
                            res = [i,j]
                else:
                    smallest = val
                    res = [i,j]
            n1.add(nums1[j])
            if nums1[j] not in dict1:
                dict1[nums1[j]] = [j]
            else:
                dict1[nums1[j]].append(j)
            n2.add(nums2[j])
            if nums2[j] not in dict2:
                dict2[nums2[j]] = [j]
            else:
                dict2[nums2[j]].append(j) 
        return res
	