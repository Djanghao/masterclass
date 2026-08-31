# C#, no tree construction

**Author:** marien
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/5711009/](https://leetcode.com/problems/path-sum-iv/solutions/5711009/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Let's construct max possible tree. To do this let's create an input array:
```
[113,215,221,312,324,336,347,418,429,430,441,452,463,474,485]
```
Each number constructs from 3 items: node depth, position on level, node value.

Let's see how the tree will look like:
```
485 |       |       |
    | 347   |       |
474 |       |       |
    |       |221    |
463 |       |       |
    | 336   |       |
452 |       |       |
    |       |       |113
441 |       |       |
    | 324   |       |
430 |       |       |
    |       |215    |
429 |       |       |
    | 312   |       |
418 |       |       |
```

It can be noticed the dependency of positions between layers:
children position is twice bigger. So, we can construct first 2 digits of parent node for current node. For example, level and position of node 347 can be calculated as level - 1 and position / 2 rounded up from its children: nodes 485 and 474. 

Also, if construct sums, we can see that items repeats through path. For example,
5 -> 7 -> 1 -> 3
4 -> 7 -> 1 -> 3.

So, we can use coefficient (multiplier) to each parent based to amount of leaves.

To keep nodes sum and coeficients needed, I use map, where key is level and position of parent nodes (zero for tree root) and pair of sum and coeficient.

# Code
```csharp []
public class Solution {
    public int PathSum(int[] nums) {
        var sum = 0;
        var map = new Dictionary<int, (int sum, int koef)>();
        for (var i = nums.Length - 1; i >= 0; i--)
        {
            var val = nums[i] % 10;
            var level = nums[i] / 100;
            var position = (nums[i] / 10) % 10;
            var mapKey = nums[i] / 10;

            var childrenSum = 0;
            var currkoef = 1;
            
            if (map.ContainsKey(mapKey))
            {
                childrenSum = map[mapKey].sum;
                currkoef = map[mapKey].koef;
            }

            var parentMapKey = level == 1 ? 0 : 
                (level - 1) * 10 + (int)Math.Ceiling(position / 2.0);
            var currSum = val * currkoef + childrenSum;
            if (!map.TryAdd(parentMapKey, (currSum, currkoef)))
            {
                map[parentMapKey] = (
                    map[parentMapKey].sum + currSum,
                    map[parentMapKey].koef + currkoef
                );
            }
        }

        sum = map.ContainsKey(0) ? map[0].sum : 0;
        return sum;
    }
}
```