# 💥Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/5950690/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/5950690/)

---

# Intuition
Swap elements in an array based on their greatest common divisor (GCD). If two elements can be swapped, it means they belong to the same connected component, allowing us to potentially rearrange them freely within that group. The goal is to determine whether we can sort the entire array by performing these swaps.

# Approach
Use a union-find data structure to group indices of numbers that can be swapped based on their GCD, sort the numbers within each group, and check if the entire array becomes sorted after these operations.

# Complexity
- Time complexity:
O(n log n + m log m), where \uD835\uDC5B n is the length of the input array and \uD835\uDC5A m is the maximum number in the array (due to the sieve and sorting operations).

- Space complexity:
\uD835\uDC42 ( \uD835\uDC5B + \uD835\uDC5A ) O(n+m), where \uD835\uDC5B n is for the union-find structure and \uD835\uDC5A m is for storing primes and components.

# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Linq;

class UnionFind
{
    private int[] parent; // Array to store the parent of each node
    private int[] size;   // Array to store the size of each set

    // Constructor to initialize the Union-Find structure
    public UnionFind(int n)
    {
        parent = new int[n];
        size = new int[n];

        // Initialize parent to -1 and size to 1
        for (int i = 0; i < n; i++)
        {
            parent[i] = -1;
            size[i] = 1;
        }
    }

    // Find the root of the set that contains u
    public int Find(int u)
    {
        if (parent[u] == -1)
            return u; // u is the root of its set
        return parent[u] = Find(parent[u]); // Path compression
    }

    // Union by size of two sets containing u and v
    public bool UnionBySize(int u, int v)
    {
        u = Find(u);
        v = Find(v);

        // If they are in different sets, union them
        if (u != v)
        {
            if (size[u] < size[v]) // Ensure u is the larger set
                (u, v) = (v, u);
            parent[v] = u; // Make u the parent of v
            size[u] += size[v]; // Update size
            return true;
        }

        return false; // u and v are already in the same set
    }
}

class Solution
{
    public bool GcdSort(int[] nums)
    {
        // Create a map to store the index of each element
        Dictionary<int, int> mp = new Dictionary<int, int>();
        UnionFind uf = new UnionFind(nums.Length);

        // Connect elements with the same value
        for (int i = 0; i < nums.Length; i++)
        {
            if (mp.ContainsKey(nums[i]))
            {
                uf.UnionBySize(i, mp[nums[i]]);
            }
            mp[nums[i]] = i; // Store the latest index of the number
        }

        // Find the largest number in nums
        int maxNum = nums.Max();

        // Sieve of Eratosthenes to find prime numbers
        bool[] isPrime = new bool[maxNum + 1];
        for (int i = 2; i <= maxNum; i++)
            isPrime[i] = true;

        isPrime[0] = false; // 0 is not a prime
        isPrime[1] = false; // 1 is not a prime

        for (int i = 2; i <= maxNum; i++)
        {
            if (isPrime[i])
            {
                int num = i;

                // Connect multiples of the prime number
                for (int j = 2 * i; j <= maxNum; j += i)
                {
                    if (mp.ContainsKey(num) && mp.ContainsKey(j))
                    {
                        uf.UnionBySize(mp[num], mp[j]);
                    }
                    else if (!mp.ContainsKey(num))
                    {
                        num = j; // Update num to the next multiple
                    }
                }
            }
        }

        // Find the components
        Dictionary<int, List<int>> comps = new Dictionary<int, List<int>>();

        for (int i = 0; i < nums.Length; i++)
        {
            int root = uf.Find(i);
            if (!comps.ContainsKey(root))
                comps[root] = new List<int>();
            comps[root].Add(i);
        }

        // Sort the numbers in each component
        foreach (var pair in comps)
        {
            List<int> indices = pair.Value;
            List<int> arr = new List<int>();

            // Store the numbers of the component
            foreach (int index in indices)
            {
                arr.Add(nums[index]);
            }

            // Sort the array for this component
            arr.Sort();

            // Place sorted numbers back into their original indices
            for (int i = 0; i < indices.Count; i++)
            {
                nums[indices[i]] = arr[i];
            }
        }

        // Check if the array is sorted
        for (int i = 1; i < nums.Length; i++)
        {
            if (nums[i] < nums[i - 1])
                return false; // Not sorted
        }

        return true; // The array is sorted
    }
}

```