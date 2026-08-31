# Dfs with memo + bitmask for right state

**Author:** patutinskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/2915301/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/2915301/)

---

Big thanks to the @hjscoder [solution](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/855352/the-idea-is-brute-force-dfs/).
# Code
```
public class Solution {
    private int[] _dp;
    private int[][] _memo;
    private IList<IList<int>> _cost;

    public int ConnectTwoGroups(IList<IList<int>> cost) {
        _cost = cost;
        CalculateMinCostForEachRightComponent();
        InitCacheArray();
        return Recurse(0, 0);
    }

    private void CalculateMinCostForEachRightComponent()
    {
        _dp = new int[_cost[0].Count];
        Array.Fill(_dp, int.MaxValue);
        for(var j = 0; j < _dp.Length; j++)
        {
            for (var i = 0; i < _cost.Count; i++)
            {
                _dp[j] = Math.Min(_dp[j], _cost[i][j]);
            }
        }
    }

    private void InitCacheArray()
    {
        _memo = new int[_cost.Count + 1][];

        var length = (1 << _cost[0].Count);
        for (var i = 0; i < _memo.Length; i++)
        {
            _memo[i] = new int[length];
            Array.Fill(_memo[i], -1);
        }
    }

    private int Recurse(int left, int right)
    {
        if (_memo[left][right] != -1)
            return _memo[left][right];

        if (left == _cost.Count)
        {
            // Here we state that all components from left are connected. 
            // Then we need to sum all minimal costs of the right elements that have not been considered yet in the "right" state
            // That is why we check the states to be 0, not 1
            var sum = 0;
            for (var j = 0; j < _dp.Length; j++)
            {
                if (((1 << j) & right) == 0)
                    sum += _dp[j];
            }
            return _memo[left][right] = sum;
        }
        
        var result = int.MaxValue;
        // Traverse all states and try to include them in the final result
        for (var j = 0; j < _dp.Length; j++)
        {
            var newState = (1 << j) | right;
            result = Math.Min(result, _cost[left][j] + Recurse(left + 1, newState));
        }

        // Save the achieved result 
        return _memo[left][right] = result;
    }
}
```