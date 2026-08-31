# [C#] DP, Bitmask & Recursion

**Author:** Sh0wM3Th3C0d3
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/2966022/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/2966022/)

---

# Intuition
Ported from Java from: https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1795098/java-200ms-bitmask-dp/

# Approach

In this solution, recursion is used to find all possible brick combinations that satisfy the wall width constraint. In this process, a bitmask is used to keep track of the locations of the inner edges of the bricks.
We can do that because 
1 <= width <= 10
1 <= bricks[i] <= 10

A brick whose width equals the wall width will have bitmask 00000 (no inner edges). A brick wall of width 2 that is built with bricks of width 1, results in the bit mask 010. A brick wall of width 3 that is built with bricks of width 1, results in the bit mask 0110.  A brick wall of width 10 that is built with bricks of width 1, results in the bit mask 01111111110. A brick wall of width N that is built with bricks of width 1, results in the bit mask 0 [N-1]1 0. Since we'd be dealing with a wall whose max width is 10, a 32-bit integer is more than enough for us. 

Good brick combinations are added to the $$validRows$$ list. If we stumble upon an invalid combination, that is simply not recorded and the recursion is stopped.

```
List<int> validRows = new ();
BuildRows(0, width, bricks, 0, validRows);
```
where:
```
void BuildRows(int currWidth, int width, int[] bricks, int rowMask, List<int> r)
{
    foreach(int brick in bricks)
        if(currWidth + brick == width)
        {
            r.Add(rowMask);
        }
        else if(currWidth + brick < width)
        {
            BuildRows(currWidth + brick, width, bricks, rowMask 
            | (1 << (currWidth  + brick)), r);
        }
    }
}
```

Next, by making use of the bitmasks stored in $$validRows$$, we find and store all valid row transitions from/to all valid bitMasks found in the previous step. Any bitmask pair that has no inner overlapping edges is valid, i.e., fromMask & toMask == 0:

```
Dictionary<int, long> memo = new ();
Dictionary<int, List<int>> transitions = new ();
foreach(int row in validRows){
    transitions.Add(row, new List<int>());
    memo.Add(row, 1L);
}
foreach(int from in validRows)
{
    foreach(int to in validRows)
    {
        if((from & to) == 0)
        {
            transitions[from].Add(to);
        }
    }
}
```

Now, using DFS with memoization, i.e., Dynamic Programming, we build all possible sturdy walls that start on $$validRows$$ bitmask configuration:

```
while(--height > 0)
{
    Dictionary<int, long> nextDp = new ();
    foreach(int next in validRows)
    {
        long count = 0;
        foreach(int prev in transitions[next])
        {
            count = (count + memo[prev]) % 1_000_000_007;
        }
        nextDp.Add(next, count);
    }
    memo = nextDp;
}
```
$$memo$$ is a dictionary whose keys are the valid bitmasks found at the beginning of this solution and whose values are the number of sturdy walls that can be built using that bitmask key configuration as the base brick row. $memo$ is initialized with 1 as value for all keys. However during the wile loop above, $memo$ is overriden with $nextDp$ for every iteration. That operation will allow us to weed out the base rows that won't lead to a complete wall; and will update the count of valid walls that can be built from the same starting row.
In the end, we sum all the values of the $$memo$$ dictionary:
```
return (int) (memo.Values.Select(x => (long)x).Sum() % 1_000_000_007
```

# Code
```
public class Solution {
    public int BuildWall(int height, int width, int[] bricks) {
        List<int> validRows = new ();
        BuildRows(0, width, bricks, 0, validRows);
        Dictionary<int, long> memo = new ();
        Dictionary<int, List<int>> transitions = new ();
        foreach(int row in validRows){
            transitions.Add(row, new List<int>());
            memo.Add(row, 1L);
        }
        foreach(int from in validRows)
        {
            foreach(int to in validRows)
            {
                if((from & to) == 0)
                {
                    transitions[from].Add(to);
                }
            }
        }
            
        while(--height > 0)
        {
            Dictionary<int, long> nextDp = new ();
            foreach(int next in validRows)
            {
                long count = 0;
                foreach(int prev in transitions[next])
                {
                    count = (count + memo[prev]) % 1_000_000_007;
                }
                nextDp.Add(next, count);
            }
            memo = nextDp;
        }
        return (int) (memo.Values.Select(x => (long)x).Sum() % 1_000_000_007);
    }

    void BuildRows(int currWidth, int width, int[] bricks, int rowMask, List<int> r)
    {
        foreach(int brick in bricks)
            if(currWidth + brick == width)
            {
                r.Add(rowMask);
            }
            else if(currWidth + brick < width)
            {
                BuildRows(currWidth + brick, width, bricks, rowMask 
                | (1 << (currWidth  + brick)), r);
            }
    }
}
```