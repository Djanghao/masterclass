# C# faster than 100%

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-iii/solutions/4342261/](https://leetcode.com/problems/the-maze-iii/solutions/4342261/)

---

# Code
```
public class Solution {
    public string FindShortestWay(int[][] maze, int[] ball, int[] hole) {
        var r = maze.Length;
        var c = maze[0].Length;

        var target = Hash(c, hole);

        var next = new HashSet<int>();
        var startHash = Hash(c, ball);
        next.Add(startHash);
        var res = int.MaxValue;
        var resStr = "impossible";
        var map = new Dictionary<int, (int, string)>();
        map[startHash] = (0, "");

        while (next.Count > 0)
        {
            var newNext = new HashSet<int>();
            foreach (var hash in next)
            {
                var (dist, str) = map[hash];
                var i = hash / c;
                var j = hash % c;

                var ii = i;
                while (ii < r && maze[ii][j] == 0)
                {
                    if (j == hole[1] && ii == hole[0] + 1) break;
                    ii++;
                }
                if (--ii > i)
                {
                    Process(c * ii + j, dist + ii - i, str, "d");
                }
                
                while (ii >= 0 && maze[ii][j] == 0)
                {
                    if (j == hole[1] && ii == hole[0] - 1) break;
                    ii--;
                }
                if (++ii < i)
                {
                    Process(c * ii + j, dist + i - ii, str, "u");
                }
                

                var jj = j;
                while (jj < c && maze[i][jj] == 0)
                {
                    if (i == hole[0] && jj == hole[1] + 1) break;
                    jj++;
                }
                if (--jj > j)
                {
                    Process(c * i + jj, dist + jj - j, str, "r");
                }

                while (jj >= 0 && maze[i][jj] == 0)
                {
                    if (i == hole[0] && jj == hole[1] - 1) break;
                    jj--;
                }
                if (++jj < j)
                {
                    Process(c * i + jj, dist + j - jj, str, "l");
                }
            }
            next = newNext;

            void Process(int newHash, int newDist, string str, string d)
            {
                if (newHash == target)
                {
                    if (res > newDist || (res == newDist && resStr.CompareTo(str) > 0))
                    {
                        res = newDist;
                        resStr = str + d;
                    }
                }
                else if (!map.ContainsKey(newHash) || map[newHash].Item1 >= newDist)
                {
                    var newStr = str + d;
                    if (map.ContainsKey(newHash) && map[newHash].Item1 == newDist && map[newHash].Item2.CompareTo(newStr) < 0) newStr = map[newHash].Item2;
                    map[newHash] = (newDist, newStr);
                    newNext.Add(newHash);
                }
            }
        }

        return resStr;
    }

    private int Hash(int c, int[] point) => point[0] * c + point[1];
}
```