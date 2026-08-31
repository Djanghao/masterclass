# C++ | Upper Bound start and end of Range

**Author:** big-whoop
**Votes:** 5
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/3733163/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/3733163/)

---

1. Sort the Ages array
2. Find a range of appropriate ages to send requests to. Use *upper bound* flavor of binary search to place a pointer 1 after the first acceptable ages[i], and a pointer 1 position after the current ages[i]
3. Count the size of this range.

```
class Solution {
public:
  int numFriendRequests(vector<int>& ages) {
    std::sort(ages.begin(), ages.end());
    int n = ages.size(), count = 0;

    for (int i = 0; i < n; ++i) {
      int low_index = std::upper_bound(ages.begin(), ages.end(), (ages[i] / 2) + 7) - ages.begin();
      int high_index = std::upper_bound(ages.begin(), ages.end(), ages[i]) - ages.begin();
      count += std::max(high_index - low_index - 1, 0);
    }

    return count;
  }
};


```