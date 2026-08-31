# C# with separation of concerns

**Author:** JayBr321
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/5276921/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/5276921/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Find the lowest common ancestor of each query and calculate the sum of the paths to the lca for each node plus 1 for the added edge.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(mn)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
public class Solution {
    public int[] CycleLengthQueries(int n, int[][] queries) //Iterates over O(m) number of queries * complexity of CalculateCycleLength (O(n)) = O(mn) where m = number of queries and the complexity is O(n) 
    {
        //Get the length of the queries and create an array to return of that length
        int lengthQueries = queries.Length;
        int[] result = new int[lengthQueries];

        for(int i = 0; i < lengthQueries; i++)
        {
            result[i] = CalculateCycleLength(queries[i][0], queries[i][1]);
        }

        return result;
    }

    private int CalculateCycleLength(int ai, int bi) //O(LCA) + O(PATH) + O(PATH) = O(n) * 3 = O(n)
    {
        int lca = FindLca(ai, bi);
        int lengthPathA = FindPathLength(ai, lca);
        int lengthPathB = FindPathLength(bi, lca);

        return lengthPathA + lengthPathB + 1;
    }
    
    //Finds the lowest common ancestor of the two given nodes of a binary tree.
    private int FindLca(int ai, int bi) //O(log(2^n)) = O(n) where n = depth of tree
    {
        HashSet<int> ancestors = new HashSet<int>();
        
        //Traverse the ai path to the root and add every parent node
        while (ai > 0) //O(log ai)
        {
            ancestors.Add(ai);
            ai /= 2;
        }

        //Traverse the bi path until we find the first ancestor that is common with ai
        while(bi > 0) //O(log bi)
        {
            if(ancestors.Contains(bi))
            {
                return bi;
            }

            bi /= 2;
        }

        return 1;
    }

    private int FindPathLength(int node, int lca) //O(n)
    {
        int length = 0;

        while(node != lca) //O(log node)
        {
            node /= 2;
            length++;
        }

        return length;
    }

}
```