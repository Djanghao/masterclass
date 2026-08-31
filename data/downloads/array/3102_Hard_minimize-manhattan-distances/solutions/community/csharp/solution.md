# 🔥🔥 Beats 100% -  Simple greedy approach with detailed explanation

**Author:** itsluminous
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-manhattan-distances/solutions/4950773/](https://leetcode.com/problems/minimize-manhattan-distances/solutions/4950773/)

---

# Intuition
1. We have to somehow avoid comparing every point with every other point.
2. While calculating manhattan distance between two points `(x1, y1)` and `(x2, y2)`, we can have only 4 possibilities:
    1. `x1 >= x2` & `y1 >= y2`, then distance = `x1-x2 + y1-y2`
    2. `x1 < x2` & `y1 >= y2`, then distance = `x2-x1 + y1-y2`
    3. `x1 >= x2` & `y1 < y2`, then distance = `x1-x2 + y2-y1`
    4. `x1 < x2` & `y1 < y2`, then distance = `x2-x1 + y2-y1`
3. Now, if you look closely, these 4 outcomes can be simplified to be either of these two
`(x1+y1) - (x2+y2)`
`(x1-y1) - (x2-y2)`
4. Of course the left & right side of `-` can be changed, but that will not be relevant once we put absolute value in picture
5. So, ultimately, for every point we need `(x+y)` and `(x-y)` value

# Approach
1. Store (x + y) in list `plus`  & (x - y) in list `minus `for every point
2. Sort the `plus` and `minus` list, because max distance will always be between points at extreme left & extreme right of list
3. Now loop through all points one by one
    1. Figure out what is the biggest value in `plus` list, after ignoring point at idx i
    2. Figure out what is the smallest value in `plus` list, after ignoring point at idx i
    3. Figure out what is the biggest value in `minus` list, after ignoring point at idx i
    4. Figure out what is the smallest value in `minus` list, after ignoring point at idx i
    5. Going by intuition, max distance between all points after removing one is going to be either `(maxPlus - minPlus)` or `(maxMinus - minMinus)`
    6. Update min value in final answer
4. Return the smallest of the largest distance

# Complexity
- Time complexity: `O(n log(n))` because we are sorting once
- Space complexity: `O(n)`

# Code
```java []
class Solution {
    public int minimumDistance(int[][] points) {
        int n = points.length;
        int minimumVal = Integer.MAX_VALUE;

        // we ideally need to store just the sum/diff
        // but we are storing index also to handle case where sum/diff of two points is same
        List<ValueIndex> plus = new ArrayList<>(), minus = new ArrayList<>();

        // for each point, store (x+y) and (x-y)
        for (int i = 0; i < n; i++) {
            int[] point = points[i];
            plus.add(new ValueIndex(point[0] + point[1], i));
            minus.add(new ValueIndex(point[0] - point[1], i));
        }

        Collections.sort(plus, (a, b) -> Integer.compare(a.val, b.val));
        Collections.sort(minus, (a, b) -> Integer.compare(a.val, b.val));

        // now one by one remove each point and compute answer
        for (int i = 0; i < n; i++) {
            // now we need to find the extreme values from points array after removing point i
            int maxPlus = plus.get(n - 1).idx == i ? plus.get(n - 2).val : plus.get(n - 1).val;
            int minPlus = plus.get(0).idx == i ? plus.get(1).val : plus.get(0).val;
            int maxMinus = minus.get(n - 1).idx == i ? minus.get(n - 2).val : minus.get(n - 1).val;
            int minMinus = minus.get(0).idx == i ? minus.get(1).val : minus.get(0).val;

            // maximum manhattan distance after removing point i
            int maxAfterRemovingOne = Math.max(maxPlus - minPlus, maxMinus - minMinus);

            // update final answer
            minimumVal = Math.min(minimumVal, maxAfterRemovingOne);
        }

        return minimumVal;
    }
}

class ValueIndex {
    public int val;
    public int idx;

    public ValueIndex(int v, int i) {
        val = v;
        idx = i;
    }
}
```
```csharp []
public class Solution {
    public int MinimumDistance(int[][] points) {
        var n = points.Length;
        var minimumVal = int.MaxValue;

        // we ideally need to store just the sum/diff
        // but we are storing index also to handle case where sum/diff of two points is same
        List<ValueIndex> plus = new List<ValueIndex>(), minus = new List<ValueIndex>();

        // for each point, store (x+y) and (x-y)
        for(var i=0; i<n; i++){
            var point = points[i];
            plus.Add(new ValueIndex(point[0] + point[1], i));
            minus.Add(new ValueIndex(point[0] - point[1], i));
        }

        plus.Sort((a, b) => a.val.CompareTo(b.val));
        minus.Sort((a, b) => a.val.CompareTo(b.val));
        
        // now one by one remove each point and compute answer
        for (var i=0; i<n; i++) {
            // now we need to find the extreme values from points array after removing point i
            var maxPlus = plus[n-1].idx == i ? plus[n-2].val : plus[n-1].val;
            var minPlus = plus[0].idx == i ? plus[1].val : plus[0].val;
            var maxMinus = minus[n-1].idx == i ? minus[n-2].val : minus[n-1].val;
            var minMinus = minus[0].idx == i ? minus[1].val : minus[0].val;

            // maximum manhattan distance after removing point i
            var maxAfterRemovingOne = Math.Max(maxPlus - minPlus, maxMinus - minMinus);

            // update final answer
            minimumVal = Math.Min(minimumVal, maxAfterRemovingOne);
        }

        return minimumVal;
    }
}

public class ValueIndex{
    public int val;
    public int idx;

    public ValueIndex(int v, int i){
        val = v;
        idx = i;
    }
}
```
```python []
class Solution:
    def minimumDistance(self, points: List[List[int]]) -> int:
        n = len(points)
        minimumVal = float('inf')

        plus = []
        minus = []

        # for each point, store (x+y) and (x-y)
        for i,point in enumerate(points):
            plus.append(ValueIndex(point[0] + point[1], i))
            minus.append(ValueIndex(point[0] - point[1], i))

        plus.sort(key=lambda x: x.val)
        minus.sort(key=lambda x: x.val)

        # now one by one remove each point and compute answer
        for i in range(n):
            # now we need to find the extreme values from points array after removing point i
            maxPlus = plus[-2].val if plus[-1].idx == i else plus[-1].val
            minPlus = plus[1].val if plus[0].idx == i else plus[0].val
            maxMinus = minus[-2].val if minus[-1].idx == i else minus[-1].val
            minMinus = minus[1].val if minus[0].idx == i else minus[0].val

            # maximum manhattan distance after removing point i
            maxAfterRemovingOne = max(maxPlus - minPlus, maxMinus - minMinus)

            # update final answer
            minimumVal = min(minimumVal, maxAfterRemovingOne)

        return minimumVal


class ValueIndex:
    def __init__(self, v, i):
        self.val = v
        self.idx = i
```