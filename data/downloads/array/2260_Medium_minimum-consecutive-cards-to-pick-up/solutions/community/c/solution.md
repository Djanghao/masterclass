# Track Last

**Author:** votrubac
**Votes:** 54
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/1996243/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/1996243/)

---

We need to find the minimum distance between any two matching cards.

For that, we can strore the `last` position of a card. If we find the matching card, we use the `last` position to find out the distance.

**C++**
Since the `last` array is initialized with zeros, we need to do `i + 1`.

```cpp
int minimumCardPickup(vector<int>& cards) {
    int last[1000001] = {}, res = INT_MAX;
    for (int i = 0; i < cards.size(); ++i) {
        if (last[cards[i]])
            res = min(res, i - last[cards[i]] + 2);
        last[cards[i]] = i + 1;
    }
    return res == INT_MAX ? -1 : res;
}
```