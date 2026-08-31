# C#| NlogN - use of Longest Increasing Subsequence

**Author:** bora_marian
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5800330/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5800330/)

---

# Intuition
If we sort the values we can user Longest Increasing Subsequnce.
[300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/description/) - solution in C# https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5800330/c-nlogn-use-of-longest-increasing-subsequence
# Approach
Sort the values on X then descending on Y to avoind computing LIS on values from the same X.

# Complexity
- Time complexity: $$O(NlogN)$$

- Space complexity: $$O(N)$$

# Code
```csharp []
public class Solution {
    public int MaxPathLength(int[][] coordinates, int k) {
        int n = coordinates.Length;
        (int kx, int ky) = (coordinates[k][0], coordinates[k][1]);
        Array.Sort(coordinates, new FirstTwoElementsComparer()); //sort on x and then on y - descending.
        // when computing lis in order to avoid taking into consideration items from the same x
        // is better to sort descending
        List<int> yBeforeK = new List<int>(), yAfterK = new List<int>();
        foreach(var point in coordinates) {
            if (point[0] < kx && point[1] < ky) {
                yBeforeK.Add(point[1]);
            }
            if (point[0] > kx && point[1] > ky) {
                yAfterK.Add(point[1]);
            }
        }
        int lisBeforeK = LengthOfLIS(yBeforeK);
        int lisAfterK = LengthOfLIS(yAfterK);
        return 1 + lisBeforeK + lisAfterK;
    }
    ///solution here https://leetcode.com/problems/longest-increasing-subsequence/solutions/5800138/c-onlogn-build-monotonic-increasing-sequence-instead-of-using-binary-indexed-tree
    private int LengthOfLIS(IList<int> nums) {
        int sz = 0;
        int[] mono = new int[nums.Count];
        foreach(int a in nums) {
           int bsPos = Array.BinarySearch(mono, 0, sz, a);
           //if is not found returns bitwise complement of the index of the first element that is larger than value
           if (bsPos < 0)
           {
                bsPos = ~bsPos;
           }
           mono[bsPos] = a;
           if (bsPos == sz) sz++;
        }
        return sz;
    }
}

public class FirstTwoElementsComparer : IComparer<int[]>
{
    public int Compare(int[] a, int[] b)
    { 
        int firstComparison = a[0] - b[0];   
        if (firstComparison == 0)
            return b[1] - a[1];
        return firstComparison;
    }
}
```