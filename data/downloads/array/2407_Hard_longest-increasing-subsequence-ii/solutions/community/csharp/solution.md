# C# solution using a segment tree

**Author:** Obose
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/5277000/](https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/5277000/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I need to find the longest strictly increasing subsequence where the difference between adjacent elements is at most \\( k \\).
# Approach
<!-- Describe your approach to solving the problem. -->
I use a dynamic programming (DP) array to track the longest subsequence lengths ending at each element. A segment tree helps me efficiently query and update these lengths within a given range.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n \\log n)$$ for querying and updating with the segment tree.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$ for the DP array and the segment tree.
# Code
```
public class Solution {
    public int LengthOfLIS(int[] nums, int k) {
        int n = nums.Length;
        
        // Boundary check
        if (n == 0) return 0;
        
        // Create a DP array to store the maximum lengths
        int maxNum = nums.Max();
        int[] dp = new int[maxNum + 1];
        
        // Initialize a segment tree
        SegmentTree segmentTree = new SegmentTree(maxNum + 1);
        
        int maxLength = 1; // since the minimum length is always 1
        
        foreach (var num in nums) {
            int leftBound = Math.Max(1, num - k);
            int currentMax = segmentTree.Query(leftBound, num - 1);
            dp[num] = currentMax + 1;
            segmentTree.Update(num, dp[num]);
            maxLength = Math.Max(maxLength, dp[num]);
        }
        
        return maxLength;
    }
}

class SegmentTree {
    int[] tree;
    int maxSize;

    public SegmentTree(int size) {
        maxSize = size;
        tree = new int[2 * size];
    }

    public void Update(int pos, int value) {
        pos += maxSize;
        tree[pos] = value;
        while (pos > 1) {
            pos /= 2;
            tree[pos] = Math.Max(tree[2 * pos], tree[2 * pos + 1]);
        }
    }

    public int Query(int left, int right) {
        int res = 0; // since we are looking for maximum
        left += maxSize;
        right += maxSize;
        while (left <= right) {
            if (left % 2 == 1) res = Math.Max(res, tree[left++]);
            if (right % 2 == 0) res = Math.Max(res, tree[right--]);
            left /= 2;
            right /= 2;
        }
        return res;
    }
}

```