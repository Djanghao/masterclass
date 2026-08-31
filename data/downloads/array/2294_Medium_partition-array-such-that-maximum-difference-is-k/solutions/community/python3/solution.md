# Python Easy Solution using Sorting

**Author:** MiKueen
**Votes:** 24
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2111923/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2111923/)

---

### Explanation:

Initially I did think it as a DP problem because of the word "**subsequence**" and "**minimum**". But after analysing the array and output I realized we are more concerned about "**at most difference should be K**", and the at most difference is of min element and max element of subsequence, so what's better than sorting? Sorting gives min and max element.

Yes, we are changing the order of elements but it wouldnt matter because we dont need to return the exact subsequences, we need to return the count of subsequences.

**Example:**

*before sort:*
nums -> [3, 6, 1, 2, 5]
subsequences -> [3, 1, 2], [6, 5]
output -> 2

*after sort:*
nums -> [1, 2, 3, 5, 6]
subsequences -> [1, 2, 3], [5, 6]
output -> 2

So the order of elements would change but the elements inside each subsequence would remain same.


```
class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        ans = 1
		# To keep track of starting element of each subsequence
        start = nums[0]
        
        for i in range(1, len(nums)):
            diff = nums[i] - start
            if diff > k:
				# If difference of starting and current element of subsequence is greater
				# than K, then only start new subsequence
                ans += 1
                start = nums[i]
        
        return ans