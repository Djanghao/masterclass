# seats

**Author:** shahinurcoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5735758/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5735758/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int maxDistToClosest(List<int> seats) {
    
  int n = seats.length;
  int maxDist = 0;
  int lastOccupied = -1;

  for (int i = 0; i < n; i++) {
    if (seats[i] == 1) {
      if (lastOccupied == -1) {
        
        maxDist = i;
      } else {
     
        int dist = (i - lastOccupied) ~/ 2;
        maxDist = dist > maxDist ? dist : maxDist;
      }
      lastOccupied = i;
    }
  }

 
  if (seats[n - 1] == 0) {
    int dist = n - 1 - lastOccupied;
    maxDist = dist > maxDist ? dist : maxDist;
  }

  return maxDist;
    
  }
}
```