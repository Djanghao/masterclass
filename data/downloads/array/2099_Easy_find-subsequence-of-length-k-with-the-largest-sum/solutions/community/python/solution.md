# ✅ [Python/C++] From O(nlogn) to O(n) || One-liner || 100% Faster || Detailed Explanation

**Author:** linfq
**Votes:** 25
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623514/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623514/)

---

* The subsequence of length k with the largest sum are composed of the largest k numbers in nums.
* 'sorted(nums, reverse=True)[:k]' can find the  largest k numbers in num, but destroy their original order.
* We can traverse the list again and reconstruct the original order of max_k in the list.

**Python 100% Faster**
```
class Solution(object):
    def maxSubsequence(self, nums, k):
        ret, max_k = [], sorted(nums, reverse=True)[:k]
        for num in nums:
            if num in max_k:
                ret.append(num)
                max_k.remove(num)
                if len(max_k) == 0:
                    return ret
```
**An alternative python solution, maybe a little more pythonic!**
```
class Solution(object):
    def maxSubsequence(self, nums, k):
        # Build a two-keyword(index, num) list and sort by num in reverse order and intercept the top k
        nums_with_idx_topk = sorted(enumerate(nums), reverse=True, key=lambda elem: elem[1])[:k]
        nums_with_idx_topk = sorted(nums_with_idx_topk)  # Sort by index in order
        return [num for i, num in nums_with_idx_topk]
```
**Python, One-liner, 100% Faster, Upvote!**
```
class Solution(object):
    def maxSubsequence(self, nums, k):
        return [n for i, n in sorted(sorted(enumerate(nums), key=lambda e: -e[1])[:k])]
```
**Further More O(n), Using Quick Select**
* The average Time Complexity of Quick Select is O(n), while the worst-case performance is O(n<sup>2</sup>).
	* Note that it is very important to choose the split point randomly.
* Learn more about quick select algorithm: https://en.wikipedia.org/wiki/Quickselect

```
class Solution(object):
    def maxSubsequence(self, nums, k):
        def findKthLargest(nums, k):
            pivot = random.choice(nums)
            less = [num for num in nums if num < pivot]
            equal = [num for num in nums if num == pivot]
            greater = [num for num in nums if num > pivot]

            if len(greater) >= k:
                return findKthLargest(greater, k)
            elif len(greater) + len(equal) < k:
                return findKthLargest(less, k - len(greater) - len(equal))
            else:
                return pivot, k - len(greater)

        kth_largest, kth_largest_equal = findKthLargest(nums, k)
        ans = []
        for num in nums:
            if num > kth_largest:
                ans.append(num)
            elif num == kth_largest and kth_largest_equal:
                ans.append(num)
                kth_largest_equal -= 1
        return ans
```
**If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!**

**C++ 53% Faster**
```
class Solution {
public:
    vector<int> maxSubsequence(vector<int>& nums, int k) {
        vector<int> max_k(nums);
        vector<int> ret;
        sort(max_k.rbegin(), max_k.rend());
        for (int i = 0; i < size(nums); i ++) {
            for (int j = 0; j < k; j ++) {
                if (nums[i] == max_k[j]) {
                    ret.push_back(nums[i]);
                    nums[i] = -1000000;
                    max_k[j] = 1000000;
                    if (size(ret) == k) return ret;
                }
            }
        }
        return ret;
    }
};
```
**If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!**