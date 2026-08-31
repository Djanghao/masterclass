# Using Disjoint Set

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/6001547/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/6001547/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the connections by Cost, then start adding the connections to the Union Set, if it reduces the Disjoint sets, then it is requied, we can include the cost of that connection.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MinimumCost(int n, int[][] connections) {
        Union u = new Union(n);
        Array.Sort(connections, (int[] a, int[] b) => {
            return a[2].CompareTo(b[2]);
        });
        int cost = 0;
        for(int i=0; i<connections.Length; i++)
        {
            if (u.Connect(connections[i][0], connections[i][1]))
            {
                cost += connections[i][2];
            }
        }
        if (u.Sets > 1)
        {
            return -1;
        }
        return cost;
    }
}

public class Union
{
    int n = 0;
    int[] root = null;
    int[] connections;
    public int Sets {get; private set;}
        public Union(int x)
        {
            n = x;
            root = new int[n+1];
            connections = new int[n+1];
            for(int i=0; i<=n; i++)
            {
                root[i] = i;
            }
            Sets = n;
        }

        public int Find(int x)
        {
            if (root[x] == x)
            {
                return x;
            }
            return Find(root[x]);
        }

        public bool Connect(int x, int y)
        {
            int a = Find(x);
            int b = Find(y);
            if ( a == b)
            {
                return false;
            }
            Sets--;
            //Console.WriteLine(Sets);
            if (connections[a] > connections[b])
            {
                root[b] = a;
                connections[a] +=1;
            } else {
                root[a] = b;
                connections[b] +=1;
            }
            return true;
        }
    }
```