# C# | Segment Tree approach

**Author:** zkamil
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/6002202/](https://leetcode.com/problems/make-array-empty/solutions/6002202/)

---

# Intuition
Don't delete actually anything, just mark item as deleted in segment tree.

# Approach
1. Sort the array
2. Take one by one items in sorted list and check their index in original array
3. Calculate how many items between current and previous item (try on paper, 2 cases here)
4. Substract from that number of elements the ones that were already marked as deleted in Segment Tree (s[i] = 1, if deleted, s[i] = 0 if not)
5. Sum that result
6. Enjoy submission that is accepted

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public long CountOperationsToEmptyArray(int[] nums) {
        var n = nums.Length;

        var indicies = new Dictionary<int, int>();
        for (var i = 0; i < n; i++)
        {
            indicies[nums[i]] = i;
        }

        var sortedNums = (int[])nums.Clone();
        Array.Sort(sortedNums);

        var sortedIndicies = new int[n];
        for (var i = 0; i < n; i++)
        {
            sortedIndicies[i] = indicies[sortedNums[i]]; // index of sorted array => index in original array
        }

        var s = new SegmentTree(new int[n]);
        var result = 0L;

        var prevIndex = -1; // previously removed item index
        for (var i = 0; i < n; i++)
        {
            var index = sortedIndicies[i];
            var dist = 0;
            if (index > prevIndex) {
                var numberOfRemoved = s.Query(prevIndex + 1, index);
                dist = index - prevIndex - 1 - numberOfRemoved; // and substract number of removed elements between prevIndex + 1 and index
            } else {
                var numberOfRemoved = s.Query(0, index) + s.Query(prevIndex + 1, n-1);
                dist = index + n - 1 - prevIndex - numberOfRemoved;// and substract number of removed elements between 0 and index and prevIndex + 1.. n - 1
            }
            result += dist + 1;
            // mark index as removed
            s.Update(index, 1);
            prevIndex = index;
        }
        return result;
    }
}

public class SegmentTree 
{
    private int[] tree;
    private int n;
    public SegmentTree(int[] arr)
    {
        this.n = arr.Length;
        this.tree = new int[2 * this.n];
        this.Build(arr);
    }

    private void Build(int[] arr)  
    {  
        for (int i = 0; i < this.n; i++)  
            tree[this.n + i] = arr[i]; 
          
        for (int i = this.n - 1; i > 0; --i)  
            this.tree[i] = this.tree[i << 1] + 
                       this.tree[i << 1 | 1];  
    }

    public void Update(int p, int value)  
    {  
        this.tree[p + n] = value; 
        p = p + this.n; 
          
        for (int i = p; i > 1; i >>= 1) 
            this.tree[i >> 1] = this.tree[i] + this.tree[i^1]; 
    } 

    // l, r inclusive  
    public int Query(int l, int r)  
    {  
        l += this.n;
        r += this.n;

        int res = 0; 
        while (l <= r)
        {
            if ((l % 2) == 1)
            {
                res += this.tree[l];
                l++;
            }
            if ((r % 2) == 0)
            {
                res += this.tree[r];
                r--;
            }
            l /= 2;
            r /= 2;
        }
        return res;
    }
}
```