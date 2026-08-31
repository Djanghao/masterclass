# Simple Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/4254436/](https://leetcode.com/problems/seat-reservation-manager/solutions/4254436/)

---

# Code
```
import 'dart:collection';
class SeatManager {
  final availables = SplayTreeSet<int>();
  SeatManager(int n) {
    for (int i = 1; i <= n; i++) availables.add(i);
  }
  int reserve() {
    final seat = availables.first;
    availables.remove(seat);
    return seat;
  }
  void unreserve(int seatNumber) {
    availables.add(seatNumber);
  }
}
```