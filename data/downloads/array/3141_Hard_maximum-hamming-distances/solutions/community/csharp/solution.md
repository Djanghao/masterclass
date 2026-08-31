# BFS

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-hamming-distances/solutions/5231953/](https://leetcode.com/problems/maximum-hamming-distances/solutions/5231953/)

---

# Intuition
Finding the number having the **largest** hamming distance to a certain number is the same as finding the number having the `smallest` hamming distance to the **complement of the number** (Set all `0`s in the number to `1` and set all `1`s in the number to `0`. For example, the binary representation of `11` is `1011`, so its complement is `0100`, which is `4`).

# Approach
- For each number `num`, calculate its complement by `~num & ((int)(Math.Pow(2, m) - 1))`.
We may be confused on why do we add `& ((int)(Math.Pow(2, m) - 1))` to the expression. This is because that the `~` operator will revert **all 32 bits** of the 32-bit integer. Say if `num` is positive, its binary representation should be starting with some leading `0`s. After the `~` operation, all there leading `0`s will be the leading `1`s, and the whole result will be a negative number, which is not what we want. So we perform an AND operation on this result and `m` `1`s to keep only the first `m` bits.
- Use this complement to start the BFS to find if there are numbers in the array the same as this complement. If no, we then revert every single bit per time to continue the BFS, until we find a number.

Say we find the number `x` at the `#i` search in BFS (starting frin `0`). So `x` has `i` bits same as the complement of `num`, which means it has `m - i` bits different from `num`, which is the max difference.


# Complexity
- Time complexity:
$$m * O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int[] MaxHammingDistances(int[] nums, int m) {
        var map = new Dictionary<int, int>();
        var set = nums.ToHashSet();
        var res = new int[nums.Length];
        for (var i = 0; i < nums.Length; ++i)
        {
            var num = nums[i];
            if (map.ContainsKey(num))
            {
                res[i] = map[num];
                continue;
            }
            res[i] = BFS(set, num, m);
            map[num] = res[i];
        }
        return res;
    }

    private int BFS(HashSet<int> set, int num, int m)
    {
        var queue = new Queue<int>();
        var visited = new HashSet<int>();
        var complement = ~num & ((int)(Math.Pow(2, m) - 1));
        var same = 0;
        queue.Enqueue(complement);
        visited.Add(complement);

        while (queue.Count != 0)
        {
            var size = queue.Count;
            for (var i = 0; i < size; ++i)
            {
                var cur = queue.Dequeue();
                if (set.Contains(cur)) return m - same;

                for (var j = 0; j < m; ++j)
                {
                    var next = cur ^ (1 << j);
                    if (!visited.Contains(next))
                    {
                        visited.Add(next);
                        queue.Enqueue(next);
                    }
                }
            }
            same++;
        }
        return 0;
    }

}
```