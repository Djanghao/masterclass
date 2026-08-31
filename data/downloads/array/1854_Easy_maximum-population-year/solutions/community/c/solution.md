# O(n) Line Sweep

**Author:** votrubac
**Votes:** 136
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/1198892/](https://leetcode.com/problems/maximum-population-year/solutions/1198892/)

---

We can mark the start and end of each life as +1 and -1 on the timeline. Then, we go through timeline from 1950 to 2050 and accumulate the current population for each year.

**C++**
```cpp
int maximumPopulation(vector<vector<int>>& logs) {
    int pop[2051] = {}, res = 0;
    for (auto &l : logs) {
        ++pop[l[0]];
        --pop[l[1]];
    }
    for (auto i = 1950; i < 2050; ++i) {
        pop[i] += pop[i - 1];
        res = pop[i] > pop[res] ? i : res;
    }
    return res;
}
```
**Java**
```java
public int maximumPopulation(int[][] logs) {
    int pop[] = new int[2051], res = 0;
    for (var l : logs) {
        ++pop[l[0]];
        --pop[l[1]];
    }
    for (int i = 1950; i < 2050; ++i) {
        pop[i] += pop[i - 1];
        res = pop[i] > pop[res] ? i : res;
    }
    return res;
}
```