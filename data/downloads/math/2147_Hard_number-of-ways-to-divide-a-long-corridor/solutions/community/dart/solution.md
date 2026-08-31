# Sliding Window | O(1) Space

**Author:** itsTowhid
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338449/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4338449/)

---

Simple Sliding Window approach
# C++
```
int numberOfWays(string corridor) {
    long mod = 1e9 + 7;
    int ans = 1;
    int seats = 0;
    for (int l = 0, r = 0; r < corridor.size(); r++) {
        if (corridor[r] == 'P') continue;
        seats++;
        if (seats < 2) continue;
        if (seats % 2 == 0) l = r;
        else ans = (ans * (r - l)) % mod;
    }
    if (seats < 2 || seats % 2 == 1) return 0;
    return ans;
}
```
# Python
```
def numberOfWays(self, corridor: str) -> int:
    mod = 1000000007
    ans = 1
    seats, l = 0, 0
    for r in range(len(corridor)):
        if corridor[r] == 'P': continue
        seats += 1
        if seats < 2: continue
        if seats % 2 == 0: l = r
        else: ans = (ans * (r - l)) % mod
    if seats < 2 or seats % 2 == 1: return 0
    return ans
```
# Dart
```
class Solution {
  int numberOfWays(String corridor) {
    final mod = 1000000007;
    int ans = 1, seats = 0;
    for(int l = 0, r = 0; r < corridor.length; r++) {
      if(corridor[r] == 'P') continue;
      seats++;
      if(seats < 2) continue;
      if(seats % 2 == 0) l = r;
      else ans = (ans * (r - l)) % mod;
    }
    if(seats < 2 || seats % 2 == 1) return 0;
    return ans;
  }
}
```