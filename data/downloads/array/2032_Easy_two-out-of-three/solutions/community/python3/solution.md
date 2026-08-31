# Python one line simple solution

**Author:** TovAm
**Votes:** 72
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/1516174/](https://leetcode.com/problems/two-out-of-three/solutions/1516174/)

---

**Python :**

```
def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
	return set(nums1) & set(nums2) | set(nums2) & set(nums3) | set(nums1) & set(nums3)
```

**Like it ? please upvote !**