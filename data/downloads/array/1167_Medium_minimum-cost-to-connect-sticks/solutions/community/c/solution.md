# [C++] Greedy approach using priority-queue (with explanation)

**Author:** mhelvens
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/365836/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/365836/)

---

A greedy approach will work here. Always take the cheapest operation possible, because the earlier a stick is combined, the more often its length will factor into the total cost.

Simply sorting the list beforehand is not enough. You must insert each newly created stick into its proper place in the order. So we use a min-heap (`std::priority_queue`).

```C++
int connectSticks(vector<int>& sticks) {
  priority_queue<int, vector<int>, greater<int>> qu(sticks.begin(), sticks.end());
  int result = 0;
  while (qu.size() > 1) {
    int a = qu.top(); qu.pop();
    int b = qu.top(); qu.pop();
    result += a + b;
    qu.push(a + b);
  }
  return result;
}
```