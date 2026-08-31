# Prefix Sum + Binary Search

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/4885276/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/4885276/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaximumWhiteTiles(int[][] tiles, int carpetLen) {
        Array.Sort(tiles, Compare);
        int n = tiles.Length;
        int[] prefix = new int[n];
        int sum = 0;
        for(int i=0; i<n;i++)
        {
            prefix[i] = sum;
            sum += tiles[i][1]-tiles[i][0]+1;
        }
        int maxCount = 0;
        for(int i=0; i<n; i++)
        {
            int start = tiles[i][0];
            int end = start + carpetLen-1;
            int index = Find(tiles, end, n);
            int tileCount = prefix[index] - prefix[i];
            if (end >= tiles[index][1])
            {
                tileCount += tiles[index][1] - tiles[index][0]+1;
            } else {
                tileCount += end - tiles[index][0]+1;
            }
            maxCount = Math.Max(tileCount, maxCount);
        }
        return maxCount;
    }

    public int Find(int[][] tiles, int val, int n)
    {
        int s = 0;
        int e = n-1;
        while(s <= e)
        {
            int m = s + (e-s)/2;
            if (tiles[m][0] <= val && tiles[m][1] >= val)
            {
                return m;
            }
            if (m < n-1 && tiles[m][1] < val && tiles[m+1][0] > val)
            {
                return m;
            }
            if (m == n-1 && val > tiles[m][1])
            {
                return m;
            }
            if (val > tiles[m][1])
            {
                s = m+1;
            } else {
                e = m-1;
            }
        }
        return -1;
    }

    public int Compare(int[] a, int [] b)
    {
        if (a[0] < b[0])
        {
            return -1;
        }
        if (a[0] > b[0])
        {
            return 1;
        }
        if (a[1] < b[1])
        {
            return -1;
        }
        return 1;
    }
}
```