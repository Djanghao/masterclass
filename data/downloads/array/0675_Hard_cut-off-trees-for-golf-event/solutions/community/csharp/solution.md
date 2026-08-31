# C#  A* Solution

**Author:** infraredshift
**Votes:** 1
**Link:** [https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2801988/](https://leetcode.com/problems/cut-off-trees-for-golf-event/solutions/2801988/)

---

# Intuition
Couldn't find a C# A* implementation, so decided to make one myself

# Approach
Priority Queue to find target nodes
Then A* search for pathfinding.


# Code
```
public class Solution {
    int ROWS;
    int COLS;
    IList<IList<int>> Forest;
    public int CutOffTree(IList<IList<int>> forest)
    {
        ROWS = forest.Count;
        COLS = forest[0].Count;
        Forest = forest;
        if (Forest[0][0] == 0)
        {
            return -1;
        }
        PriorityQueue<(int, int), int> pQue = new();
        pQue.Enqueue((0, 0), 0);
        for (int i = 0; i < ROWS; ++i)
        {
            for (int j = 0; j < COLS; ++j)
            {
                var current = forest[i][j];
                if (current > 1)
                {
                    pQue.Enqueue((i, j), current);
                }
            }
        }

        if (pQue.Count < 2)
        {
            return 0;
        }
        var answer = 0;
        var currentStep = pQue.Dequeue();

        while (pQue.Count > 0)
        {
            var next = pQue.Dequeue();
            var nextSteps = BFSPath(currentStep, next);
            if (nextSteps == -1)
            {
                return -1;
            }
            answer += nextSteps;
            currentStep = next;
        }

        return answer;
    }

    int BFSPath((int, int) start, (int, int) end)
    {
        Dictionary<int,int> costs = new();
        PriorityQueue<MapNode,int> pQue = new();
        (var endR, var endC) = end;
        (var sr, var sc) = start;
        var steps = -1;
        var fNode = new MapNode(sr, sc, 0);
        pQue.Enqueue(fNode, 0);
        costs[fNode.r * COLS + fNode.c] = 0;
        while (pQue.Count > 0)
        {
            var node = pQue.Dequeue();
            if (node.r == endR && node.c == endC)
            {
                steps = node.depth;
                break;
            }
            var nextNodes = new[] { (node.r + 1, node.c), (node.r - 1, node.c), (node.r, node.c + 1), (node.r, node.c - 1) };
            foreach ((var r, var c) in nextNodes)
            {
                if (r >= 0 && r < ROWS && c >= 0 && c < COLS && Forest[r][c] != 0)
                {
                    var h = Heuristic(r, c, endR, endC);
                    var cost = node.depth + 1 + h;
                    if(costs.TryGetValue(r * COLS + c, out var pcost) && pcost <= cost){
                        continue;
                    }
                    pQue.Enqueue(new MapNode(r, c, node.depth + 1), cost);
                    costs[r * COLS + c] = cost;
                }
            }
        }
        return steps;
    }
    
    int Heuristic(int r, int c, int er, int ec){
        return Math.Abs(r - er) + Math.Abs(c - ec);
    }

    class MapNode
    {
        public int r;
        public int c;
        public int depth;

        public MapNode(int R, int C, int Depth)
        {
            r = R;
            c = C;
            depth = Depth;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(r, c);
        }
    }
}
```