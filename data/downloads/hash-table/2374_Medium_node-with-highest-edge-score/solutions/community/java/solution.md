# Java / C++ One pass

**Author:** FLlGHT
**Votes:** 12
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/2427781/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/2427781/)

---

#### Java
```java
public int edgeScore(int[] edges) {
        Map<Integer, Integer> scores = new HashMap<>();
        int highestScoreNode = 0;
        for (int i = 0; i < edges.length; i++) {
            scores.put(edges[i], scores.getOrDefault(edges[i], 0) + i);
            int lastScore = scores.get(edges[i]), highestScore = scores.getOrDefault(highestScoreNode, 0);
            if (lastScore > highestScore)
                highestScoreNode = edges[i];
            else if (lastScore == highestScore)
                highestScoreNode = Math.min(edges[i], highestScoreNode);
        }
        return highestScoreNode;
    }
```

#### C++
```c++
public:
    int edgeScore(vector<int>& edges) {
        unordered_map<int, long> scores;
        int highestScoreNode = 0;
        for (int i = 0; i < edges.size(); i++) {
            scores[edges[i]] += i;
            int lastScore = scores[edges[i]], highestScore = scores[highestScoreNode];
            if (lastScore > highestScore)
                highestScoreNode = edges[i];
            else if (lastScore == highestScore)
                highestScoreNode = min(edges[i], highestScoreNode);
        }
        return highestScoreNode;
    }
```