# SortedList and Binary Search

**Author:** PHmOxuR7VS
**Votes:** 0
**Link:** [https://leetcode.com/problems/block-placement-queries/solutions/5442991/](https://leetcode.com/problems/block-placement-queries/solutions/5442991/)

---

# Approach
Best possible approach might be using Segment Tree, but we attempt to do it here using SortedList and Binary Search.

* We hold a SortedList of all the obstacle indices and the max possible gap up to that point
* We iterate over the queries list, and:
  * If it is an obstacle, we add it to the SortedList and update the max Gap from that point and beyond.
  * If it is a block, we do some basic checks to determine if a result could be determined without a search, and if not we find the nearest obstacle to the `x` range of the block and determine the max gap around it.

# Complexity
- Time complexity:
  - PlaceObstacle would iterate over the obstacles list in worst case, so it would take O(n)
  - TryPlaceBlock uses Binary Search, so it would take O(log n)

  <br />
  Overall: O(n + log(n))

<br/>

- Space complexity:
O(n)

# Code
```
// Best possible approach might be using Segment Tree
// But we attempt to do it here using SortedList and Binary Search.
public class Solution
{
    private readonly SortedList<int, int> _obstaclesWithMaxGap = new SortedList<int, int>();

    public IList<bool> GetResults(int[][] queries)
    {
        List<bool> results = new List<bool>();

        foreach (int[] query in queries)
        {
            if (query[0] == 1)
            {
                // Handle obstacle
                PlaceObstacle(query[1]);
            }
            else if (query[0] == 2)
            {
                // Check if block can be placed
                bool result = TryPlaceBlock(query[2], query[1]);
                results.Add(result);
            }
            else
            {
                throw new ArgumentException("Invalid query type received. Query type should be either 1 or 2");
            }
        }

        return results;
    }

    private void PlaceObstacle(int x)
    {
        _obstaclesWithMaxGap.Add(x, x);

        // Update max gap of recently added obstacle
        int indexOfObstacle = _obstaclesWithMaxGap.IndexOfKey(x);
        if (indexOfObstacle > 0)
        {
            int previousObstacle = _obstaclesWithMaxGap.Keys[indexOfObstacle - 1];
            int currentMaxGap = _obstaclesWithMaxGap.Values[indexOfObstacle - 1];
            _obstaclesWithMaxGap[x] = Math.Max(currentMaxGap, x - previousObstacle);
        }
        for (int i = indexOfObstacle + 1; i < _obstaclesWithMaxGap.Count; i++)
        {
            int newMax = Math.Max(_obstaclesWithMaxGap.Values[i - 1], _obstaclesWithMaxGap.Keys[i] - _obstaclesWithMaxGap.Keys[i - 1]);
            if (_obstaclesWithMaxGap.Values[i] != newMax)
            {
                _obstaclesWithMaxGap.SetValueAtIndex(i, newMax);
            }
            else
            {
                // If the previous gap is already the max gap, then no need to update further - this is an important optimization
                break;
            }
        }
    }

    private bool TryPlaceBlock(int size, int maxX, int startingIndex = 0)
    {
        if (startingIndex + size > maxX)
        {
            return false;
        }

        if (!_obstaclesWithMaxGap.Any())
        {
            // first obstacle is beyond range - block can be added
            return true;
        }

        // It is important to not use First() and Last() methods of SortedList as they are O(n) operations and will cause an iteration over the list
        var firstObstacle = _obstaclesWithMaxGap.Keys[0];
        var lastObstacle = _obstaclesWithMaxGap.Keys[_obstaclesWithMaxGap.Count - 1];
        var lastObstacleMaxGap = _obstaclesWithMaxGap.Values[_obstaclesWithMaxGap.Count - 1];
        if (startingIndex == 0 && firstObstacle >= maxX)
        {
            return true;
        }
        else if (maxX < firstObstacle)
        {
            return maxX >= size;
        }
        else if (maxX > lastObstacle)
        {
            return lastObstacleMaxGap >= size || maxX - lastObstacle >= size;
        }
        else
        {
            int nearestObstacle = BinarySearchNearestObstacleFromX(maxX, lastObstacle);
            if (nearestObstacle < maxX)
            {
                return _obstaclesWithMaxGap[nearestObstacle] >= size || maxX - nearestObstacle >= size;
            }
            else
            { // nearestObstacle > maxX
                return _obstaclesWithMaxGap[nearestObstacle] - (nearestObstacle - maxX) >= size;
            }
        }
    }

    private int BinarySearchNearestObstacleFromX(int x, int lastObstacle)
    {
        if (x >= lastObstacle)
        {
            return lastObstacle;
        }

        int start = 0;
        int end = _obstaclesWithMaxGap.Count();
        int middle = (start + end) / 2;

        while (start <= end)
        {
            if (_obstaclesWithMaxGap.Keys[middle] == x)
            {
                return x;
            }
            else if (_obstaclesWithMaxGap.Keys[middle] < x)
            {
                start = middle + 1;
            }
            else
            { // _obstaclesWithMaxGap.Keys[middle] > x
                end = middle - 1;
            }
            middle = (start + end) / 2;
        }

        return _obstaclesWithMaxGap.Keys[middle];
    }
}
```