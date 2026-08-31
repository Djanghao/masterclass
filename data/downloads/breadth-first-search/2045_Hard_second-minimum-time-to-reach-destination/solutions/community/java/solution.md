# No Dijkstra: (n + 1) or (n + 2)

**Author:** votrubac
**Votes:** 88
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/1525154/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/1525154/)

---

Since the transition time is the same, and all nodes change the light at the same time, we can talk in terms of the number of steps.

> `change` and `time` does not affect the algorithm, so we calculate time it in the end (`stepsTime`).

> Update: since the time is the same for the same number of steps, we do not need Dijkstra. I updated the solution below; I posted the original Dijkstra-based solution in the comments for your referece.

If the minimum number of steps is `n`, then the second minimum time is either `n + 1` (we take a detour) or `n + 2` (we go back-and-forth once).

We can run BFS, but if we go back-and-forth, the number of paths will get too large (TLE). So, we will only allow going through the node again if the number of steps is the same or one step more than the first time (`minSteps`). 

If we find the second best time, we have `n + 1` situation. If not, we add two more steps to the best time (`n + 2`).

Few optimizations:
- Our heap can have duplicates, so we remove them first.
- If the current step is larger than `minSteps[n] + 1`, we should not continue - it's `n + 2` case.

**C++**
```cpp
int stepsTime(int steps, int time, int change) {
    int res = 0;
    while (--steps) {
        res += time;
        if ((res / change) % 2)
            res = (res / change + 1) * change;
    }
    return res + time;
}
int secondMinimum(int n, vector<vector<int>>& edges, int time, int change) {
    vector<vector<int>> al(n + 1);
    vector<int> minSteps(n + 1, 10001);
    for (auto &e : edges) {
        al[e[0]].push_back(e[1]);
        al[e[1]].push_back(e[0]);
    }
    int step = -1;
    vector<int> q({1});
    while (!q.empty() && ++step <= minSteps[n] + 1) {
        vector<int> q1;
        for (int i : q) {
            if (step == minSteps[i] || step > minSteps[i] + 1)
                continue;
            minSteps[i] = min(minSteps[i], step);
            if (i == n && step > minSteps[n])
                return stepsTime(step, time, change);
            for (int j : al[i])
                q1.push_back(j);
        }
        swap(q, q1);
    }
    return stepsTime(minSteps[n] + 2, time, change);
}   
```
**Java**
```java
int stepsTime(int steps, int time, int change) {
    int res = 0;
    while (--steps > 0) {
        res += time;
        if ((res / change) % 2 == 1)
            res = (res / change + 1) * change;
    }
    return res + time;
}    
public int secondMinimum(int n, int[][] edges, int time, int change) {
    List<List<Integer>> al = new ArrayList<List<Integer>>();
    int[] minSteps = new int[n + 1];
    Arrays.fill(minSteps, 10001);
    for (int i = 0; i <= n; ++i)
        al.add(new ArrayList<Integer>());
    for (var e : edges) {
        al.get(e[0]).add(e[1]);
        al.get(e[1]).add(e[0]);
    }
    int step = -1;
    List<Integer> q = new ArrayList<>(List.of(1));
    while(!q.isEmpty() && ++step <= minSteps[n] + 1) {
        List<Integer> q1 = new ArrayList<>();
        for (int i : q) {
            if (step == minSteps[i] || step > minSteps[i] + 1)
                continue;
            minSteps[i] = Math.min(minSteps[i], step);
            if (i == n && step > minSteps[n])
                return stepsTime(step, time, change);
            for (int j : al.get(i))
                q1.add(j);
        }
        q = q1;
    }
    return stepsTime(minSteps[n] + 2, time, change);
}
```