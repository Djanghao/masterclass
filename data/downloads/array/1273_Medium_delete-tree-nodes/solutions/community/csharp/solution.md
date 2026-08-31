# Two recusions with cache

**Author:** user8975aB
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/4118550/](https://leetcode.com/problems/delete-tree-nodes/solutions/4118550/)

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
    private Dictionary<int, int> cache = new Dictionary<int, int>();

    public int DeleteTreeNodes(int nodes, int[] parent, int[] value) {
        int res = countChildren(0, parent, value);
        Console.WriteLine(cache.Count);
        return res;
    }

    private int countChildren(int current, int[] parent, int[] value){        
        int sumCh = sumChildren(current, parent, value);
        if(sumCh == 0){
            return 0;
        }

        int result = 1; // current node
        int lastIndex = 0;
        while ((lastIndex = Array.IndexOf(parent, current, lastIndex)) != -1)
        {
            result += countChildren(lastIndex, parent, value);
            lastIndex++;
        }
        return result;
    }

    private int sumChildren(int current, int[] parent, int[] value){
        int cached;
        if(cache.TryGetValue(current, out cached)){
            return cached;
        }
        int sum = value[current];
        int lastIndex = 0;
        while ((lastIndex = Array.IndexOf(parent, current, lastIndex)) != -1)
        {
            sum += sumChildren(lastIndex, parent, value);
            lastIndex++;
        }
        cache[current] = sum;
        return sum;
    }
}
```