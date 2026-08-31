# C# Readable fenwick tree.......

**Author:** murh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/5486743/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/5486743/)

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

public class Solution
{
     public int MaxProfit(int[] prices, int[] profits)
    {
        int maxPrice = 0;
        int n = prices.Length;

        // Find the maximum price
        foreach (int p in prices)
        {
            maxPrice = Math.Max(maxPrice, p);
        }

        // Initialize Fenwick Trees
        FenwickTree fwtLeft = new FenwickTree(maxPrice);
        FenwickTree fwtRight = new FenwickTree(maxPrice);

        int[] maxLeft = new int[n];

        // Calculate maxLeft array
        for (int i = 0; i < n; i++)
        {
            fwtLeft.Update(prices[i], profits[i]);
            maxLeft[i] = fwtLeft.Get(prices[i] - 1);
        }

        int res = -1;

        // Calculate the result using maxLeft and fwtRight
        for (int i = n - 1; i >= 0; i--)
        {
            int comp = maxPrice + 1 - prices[i];
            int maxRight = fwtRight.Get(comp - 1);

            if (maxLeft[i] > 0 && maxRight > 0)
            {
                res = Math.Max(res, maxLeft[i] + profits[i] + maxRight);
            }

            fwtRight.Update(comp, profits[i]);
        }

        return res;
    }

    public class FenwickTree
    {
        private int[] tree;

        public FenwickTree(int size)
        {
            tree = new int[size + 1];
        }

        // Update the tree with the maximum value at index i
        public void Update(int index, int value)
        {
            for (int i = index; i < tree.Length; i += i & -i)
            {
                tree[i] = Math.Max(tree[i], value);
            }
        }

        // Get the maximum value in the range [1, index]
        public int Get(int index)
        {
            int max = 0;
            for (int i = index; i > 0; i -= i & -i)
            {
                max = Math.Max(max, tree[i]);
            }
            return max;
        }
    }
}
```