# Python concise solution with dictionary.

**Author:** OldCodingFarmer
**Votes:** 366
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/61375/](https://leetcode.com/problems/contains-duplicate-ii/solutions/61375/)

---

        
    def containsNearbyDuplicate(self, nums, k):
        dic = {}
        for i, v in enumerate(nums):
            if v in dic and i - dic[v] <= k:
                return True
            dic[v] = i
        return False