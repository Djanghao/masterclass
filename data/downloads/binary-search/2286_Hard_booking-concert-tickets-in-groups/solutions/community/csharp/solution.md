# 100% C# Segment Tree-based solution

**Author:** nikola-edn
**Votes:** 0
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/4017243/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/4017243/)

---

# Intuition
The problem is about efficiently allocating seats in a concert hall with ***n*** rows and ***m*** seats per row. We have two types of seat allocations to handle:

- **Gather**: Allocate ***k*** contiguous seats in a row for a group, within a given ***maxRow***.
- **Scatter**: Allocate ***k*** seats (not necessarily contiguous or in the same row) for a group, within a given ***maxRow***.

We're looking for an efficient way to handle these seat allocations.

# Approach
We use a segment tree to keep track of the maximum available contiguous seats and the total available seats for each segment (or range of rows). The segment tree allows us to efficiently query and update these values.

The Gather operation queries the segment tree to find the first row with enough contiguous seats. If found, it then updates the segment tree to reflect the booked seats.

The Scatter operation queries the segment tree to find if there are enough total seats available. If yes, it then updates the segment tree to reflect the booked seats.

# Complexity
- Time complexity:
    - Building the segment tree takes ***O(nlog\u2061n)***
    - Each query and update operation takes ***O(log\u2061n)***
- Space complexity:
    - The segment tree takes ***O(n)*** space

# Code
```
public class BookMyShow
{
    private int rowCount;
    private int seatCount;
    private Tuple<long, long>[] treeData;

    public BookMyShow(int n, int m)
    {
        rowCount = n;
        seatCount = m;

        int treeSize = 1;
        while (treeSize < 2 * n)
            treeSize *= 2;

        treeData = new Tuple<long, long>[treeSize];
        BuildTree(0, 0, n - 1);
    }

    private void BuildTree(int node, int start, int end)
    {
        if (start == end)
        {
            treeData[node] = Tuple.Create((long)seatCount, (long)seatCount);
            return;
        }
        int mid = (start + end) / 2;
        BuildTree(2 * node + 1, start, mid);
        BuildTree(2 * node + 2, mid + 1, end);
        treeData[node] = Tuple.Create((long)seatCount, (long)(end - start + 1) * seatCount);
    }

    public int[] Gather(int k, int maxRow)
    {
        var result = QueryMax(0, 0, rowCount - 1, k, maxRow);
        if (result != null)
        {
            UpdateMax(0, 0, rowCount - 1, result[0], k);
            return result;
        }
        return new int[0];
    }

    private int[] QueryMax(int node, int start, int end, int k, int maxRow)
    {
        if (start > maxRow || treeData[node].Item1 < k)
            return null;
        if (start == end)
            return new int[] { start, seatCount - (int)treeData[node].Item1 };

        int mid = (start + end) / 2;
        var leftResult = QueryMax(2 * node + 1, start, mid, k, maxRow);
        if (leftResult != null)
            return leftResult;

        return QueryMax(2 * node + 2, mid + 1, end, k, maxRow);
    }

    private void UpdateMax(int node, int start, int end, int row, int k)
    {
        if (start > row || end < row)
            return;
        if (start == end)
        {
            treeData[node] = Tuple.Create(treeData[node].Item1 - k, treeData[node].Item2 - k);
            return;
        }

        int mid = (start + end) / 2;
        UpdateMax(2 * node + 1, start, mid, row, k);
        UpdateMax(2 * node + 2, mid + 1, end, row, k);
        treeData[node] = Tuple.Create(Math.Max(treeData[2 * node + 1].Item1, treeData[2 * node + 2].Item1), treeData[node].Item2 - k);
    }

    public bool Scatter(int k, int maxRow)
    {
        long totalSeats = QuerySum(0, 0, rowCount - 1, maxRow);
        if (totalSeats < k)
            return false;
        UpdateSum(0, 0, rowCount - 1, k, maxRow);
        return true;
    }

    private long QuerySum(int node, int start, int end, int maxRow)
    {
        if (start > maxRow)
            return 0;
        if (end <= maxRow)
            return treeData[node].Item2;

        int mid = (start + end) / 2;
        return QuerySum(2 * node + 1, start, mid, maxRow) + QuerySum(2 * node + 2, mid + 1, end, maxRow);
    }

    private void UpdateSum(int node, int start, int end, int k, int maxRow)
    {
        if (start > maxRow)
            return;

        if (start == end)
        {
            treeData[node] = Tuple.Create(treeData[node].Item1 - k, treeData[node].Item2 - k);
            return;
        }

        int mid = (start + end) / 2;
        treeData[node] = Tuple.Create(treeData[node].Item1, treeData[node].Item2 - k);

        if (treeData[2 * node + 1].Item2 >= k)
        {
            UpdateSum(2 * node + 1, start, mid, k, maxRow);
        }
        else
        {
            int remaining = k - (int)treeData[2 * node + 1].Item2;
            UpdateSum(2 * node + 1, start, mid, (int)treeData[2 * node + 1].Item2, maxRow);
            UpdateSum(2 * node + 2, mid + 1, end, remaining, maxRow);
        }

        treeData[node] = Tuple.Create(Math.Max(treeData[2 * node + 1].Item1, treeData[2 * node + 2].Item1), treeData[node].Item2);
    }
}

```