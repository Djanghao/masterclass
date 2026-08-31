# Greedy

**Author:** votrubac
**Votes:** 197
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/1268473/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/1268473/)

---

Consider only triplets that do not exceed the target in any dimension. 
 
Greedily apply the operation using all those triplets. That way, `res` will get as close to a target as possible.

**C++**
```cpp
bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& t) {
    vector<int> res(3);
    for (auto &s : triplets)
        if (s[0] <= t[0] && s[1] <= t[1] && s[2] <= t[2])
            res = { max(res[0], s[0]), max(res[1], s[1]), max(res[2], s[2]) };
    return res == t;
}
```
**Java**
```java
public boolean mergeTriplets(int[][] triplets, int[] t) {
    int[] res = new int[3];
    for (var s : triplets)
        if (s[0] <= t[0] && s[1] <= t[1] && s[2] <= t[2])
            res = new int[]{ Math.max(res[0], s[0]), Math.max(res[1], s[1]), Math.max(res[2], s[2]) };
    return Arrays.equals(res, t);
}
```
#### Alternative Solution
Another way to look at the solution above; could be easier to reason about.
 
As before, we exclude 'toxic' triplets. For the rest, we find triplets where any number matches the target. If we can find all three matching numbers, we can combine the corresponding triplets (no more than three needed) to get to the target. 

**C++**
```cpp
bool mergeTriplets(vector<vector<int>>& triplets, vector<int>& t) {
    bool res[3] = {};
    for (auto &s : triplets)
        if (s[0] <= t[0] && s[1] <= t[1] && s[2] <= t[2]) {
            res[0] |= s[0] == t[0];
            res[1] |= s[1] == t[1];
            res[2] |= s[2] == t[2];
        }
    return res[0] && res[1] && res[2];
}
```