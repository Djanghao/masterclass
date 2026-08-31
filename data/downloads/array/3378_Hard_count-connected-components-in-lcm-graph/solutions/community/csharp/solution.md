# C# UnionFind

**Author:** justunderdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6124438/](https://leetcode.com/problems/count-connected-components-in-lcm-graph/solutions/6124438/)

---

# Complexity
- Time complexity: $$O(n * log(threshold))$$

- Space complexity: $$O(n + threshold)$$

# Code
```csharp []
public class Solution
{
    public int CountComponents(int[] nums, int threshold)
    {
        int n = nums.Length;
        //Array.Sort(nums);

        int[] table = new int[threshold + 1];
        Array.Fill(table, -1);

        var uf = new UnionFind(n);

        for (int i = 0; i < n; i++)
        {
            if (nums[i] > threshold)
            {
                continue;
            }

            for (int lcm = nums[i]; lcm <= threshold; lcm += nums[i])
            {
                if (table[lcm] >= 0)
                {
                    uf.Union(table[lcm], i);
                }

                table[lcm] = i;
            }
        }

        return uf.Count;
    }

    public class UnionFind
    {
        private int size;
        private int[] root;
        private int[] rank;

        private int count;

        public UnionFind(int size)
        {
            this.size = size;

            root = new int[size];
            rank = new int[size];
            for (int i = 0; i < size; i++)
            {
                root[i] = i;
                rank[i] = 1;
            }

            count = size;
        }

        public int Count => count;

        #region Methods

        public int Find(int x)
        {
            if (x == root[x])
            {
                return x;
            }

            return root[x] = Find(root[x]);
        }

        public bool IsConnected(int x, int y)
        {
            int rootX = Find(x);
            int rootY = Find(y);

            return rootX == rootY;
        }

        public void Union(int x, int y)
        {
            int rootX = Find(x);
            int rootY = Find(y);

            if (rootX != rootY)
            {
                if (rank[rootX] > rank[rootY])
                {
                    root[rootY] = rootX;
                }
                else if (rank[rootX] < rank[rootY])
                {
                    root[rootX] = rootY;
                }
                else
                {
                    root[rootY] = rootX;
                    rank[rootX]++;
                }

                count--;
            }
        }

        #endregion
    }
}
```