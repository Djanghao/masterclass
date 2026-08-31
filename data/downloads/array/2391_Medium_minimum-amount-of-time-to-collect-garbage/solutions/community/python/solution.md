# [Java/C++/Python] Explanation with Observations

**Author:** lee215
**Votes:** 176
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2492774/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2492774/)

---

# **Intuition**
Observation 1:
"While one truck is driving or picking up garbage, the other two trucks cannot do anything."
We can simply sum up the total running time for each truck,
they don't affect each other.


Observation 2:
"Picking up one unit of any type of garbage takes 1 minute."
We don't care how many units for each type,
we only care the total amount.

Observation 3:
"however, they do not need to visit every house."
We only care the position of the last garbage for each type
<br>

# **Explanation**
1. Firstly sum up the amount of gabages in total.
2. Second find up the last position for each type.
3. Calculate the prefix sum array of the travel distance.
3. Sum up the distance for each type of garbage.
<br>

# **Complexity**
Time `O(garbage + travel)`
Space `O(1)`
<br>

**Java**
```java
    public int garbageCollection(String[] garbage, int[] travel) {
        int last[] = new int[128], res = 0;
        for (int i = 0; i < garbage.length; ++i) {
            res += garbage[i].length();
            for (int j = 0; j < garbage[i].length(); ++j)
                last[garbage[i].charAt(j)] = i;
        }
        for (int j = 1; j < travel.length; ++j)
            travel[j] += travel[j - 1];
        for (int c : "PGM".toCharArray())
            if (last[c] > 0)
                res += travel[last[c] - 1];
        return res;
    }
```

**C++**
```cpp
    int garbageCollection(vector<string>& garbage, vector<int>& travel) {
        int last[128] = {}, res = 0;
        for (int i = 0; i < garbage.size(); ++i) {
            res += garbage[i].size();
            for (char c : garbage[i])
                last[c] = i;
        }
        for (int j = 1; j < travel.size(); ++j)
            travel[j] += travel[j - 1];
        for (int c : "PGM")
            if (last[c])
                res += travel[last[c] - 1];
        return res;
    }
```

**Python**
```py
    def garbageCollection(self, A: List[str], travel: List[int]) -> int:
        last = {c: i for i,pgm in enumerate(A) for c in pgm}
        dis = list(accumulate(travel, initial = 0))
        return sum(map(len, A)) + sum(dis[last.get(c, 0)] for c in 'PGM')
```
