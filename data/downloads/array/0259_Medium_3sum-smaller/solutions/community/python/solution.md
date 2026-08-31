# Python solution with comments.

**Author:** OldCodingFarmer
**Votes:** 222
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/68881/](https://leetcode.com/problems/3sum-smaller/solutions/68881/)

---

        
    # O(n*n) time
    def threeSumSmaller(self, nums, target):
        count = 0
        nums.sort()
        for i in xrange(len(nums)):
            j, k = i+1, len(nums)-1
            while j < k:
                s = nums[i] + nums[j] + nums[k]
                if s < target:
                    # if (i,j,k) works, then (i,j,k), (i,j,k-1),..., 
                    # (i,j,j+1) all work, totally (k-j) triplets
                    count += k-j
                    j += 1
                else:
                    k -= 1
        return count