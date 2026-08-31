# DFS + DP

**Author:** harishkumarn
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3396520/](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/solutions/3396520/)

---

# Java\r
```\r
class Solution {\r
    int[][] colorFreq ;\r
    ArrayList<Integer>[] adjList ;\r
    boolean[] visited ;\r
    boolean[] cycleMap;\r
    int largestFCount = 0;\r
    int n ;\r
    String colors ;\r
    private int[] dfs(int i ){\r
        if(visited[i]) return colorFreq[i];\r
        visited[i] = true;\r
        cycleMap[i] = true;\r
        if(adjList[i] != null){\r
            for(Integer next : adjList[i]){\r
                if(cycleMap[next]) return null;\r
                int[] nextArr = dfs(next);\r
                if(nextArr == null) return null;\r
                for(int k = 0 ;k < 26;++k){\r
                    colorFreq[i][k] =  Math.max(nextArr[k],colorFreq[i][k]);\r
                }\r
            }\r
        }\r
        colorFreq[i][colors.charAt(i) - 'a']++;\r
        largestFCount = Math.max(largestFCount, colorFreq[i][colors.charAt(i) - 'a']);\r
        cycleMap[i] = false; \r
        return colorFreq[i];\r
    }\r
    public int largestPathValue(String colors, int[][] edges) {\r
        n = colors.length();\r
        this.colors = colors;\r
        adjList = new ArrayList[n];\r
        for(int i = 0;i < edges.length;++i){\r
            if(adjList[edges[i][0]] == null){\r
                adjList[edges[i][0]]  = new ArrayList<Integer>();\r
            } \r
            adjList[edges[i][0]].add(edges[i][1]);\r
        }\r
        visited = new boolean[n];\r
        cycleMap = new boolean[n];\r
        colorFreq = new int[n][26];\r
        for(int i = 0;i < n;++i){\r
            if(!visited[i] && dfs(i) == null){\r
                return -1;\r
            }\r
        }\r
        return largestFCount;\r
    }\r
}\r
```\r
\r
# Scala\r
```\r
import scala.collection.mutable.ArrayBuffer;\r
import scala.util.control.Breaks._;\r
object Solution {\r
    class Solve(val colors: String, val edges: Array[Array[Int]]){\r
        val colorFreq : Array[Array[Int]] = Array.ofDim(colors.length,26);\r
        val visited : Array[Boolean] = new Array[Boolean](colors.length);\r
        val cycleMap : Array[Boolean] = new Array[Boolean](colors.length);\r
        val adjList : Array[ArrayBuffer[Int]] = new Array[ArrayBuffer[Int]](colors.length);\r
        var answer : Int = 0;\r
        val n = colors.length;\r
        def init():Unit={\r
            for(pair <- edges){\r
                if(adjList(pair(0)) == null) adjList(pair(0)) = new ArrayBuffer[Int]();\r
                adjList(pair(0)) += pair(1);\r
            }\r
        }\r
        def dfs(i : Int):Option[ Array[Int] ] ={\r
            if(visited(i)) return Some(colorFreq(i));\r
            visited(i) = true;\r
            cycleMap(i) = true;\r
            if(adjList(i) != null){\r
                for(next <- adjList(i)){\r
                    if(cycleMap(next)) return None;\r
                    dfs(next) match {\r
                        case Some(nextArr) => {\r
                            for(k <- 0 until 26){\r
                                colorFreq(i)(k) = Math.max(colorFreq(i)(k) ,nextArr(k));\r
                            }\r
                        }\r
                        case _ => return None;\r
                    }\r
                }\r
            }\r
            colorFreq(i)(colors(i)-'a') += 1;\r
            answer = Math.max(answer,colorFreq(i)(colors(i)-'a'));\r
            cycleMap(i) = false;\r
            return Some(colorFreq(i));\r
        }\r
        def solve():Unit={\r
            breakable{\r
                for(i <- 0 until colors.length){\r
                    if(!visited(i)){\r
                        dfs(i) match {\r
                            case None => {\r
                                answer = -1;\r
                                break;\r
                            };\r
                            case _ => 42;\r
                        }\r
                    }\r
                }\r
            }\r
        }\r
        init();\r
        solve();\r
    }\r
    def largestPathValue(colors: String, edges: Array[Array[Int]]): Int = {\r
        return new Solve(colors,edges).answer;\r
    }\r
}\r
```