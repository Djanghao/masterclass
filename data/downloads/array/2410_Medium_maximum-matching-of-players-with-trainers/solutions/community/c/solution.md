# Greedy

**Author:** votrubac
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2589677/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2589677/)

---

We are matching trainers with players in order of the training capacity.

Since capacity is non-decreasing, we can pick any player with ability less than the current capacity. To make it simple, we pick a player with the smallest ability.

If the problem would require maximizing players' ability, we would sort capacities and abilities in the descending order.

**C++**
```cpp
int matchPlayersAndTrainers(vector<int>& p, vector<int>& t) {
    sort(begin(p), end(p));
    sort(begin(t), end(t));
    int j = 0;
    for (int i = 0; i < t.size() && j < p.size(); ++i)
        j += p[j] <= t[i];
    return j;
}
```