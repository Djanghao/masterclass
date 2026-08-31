# Dart, monotonic stack

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/5067792/](https://leetcode.com/problems/online-stock-span/solutions/5067792/)

---

# Code
```
class StockSpanner {
  List<({int price, int days})> span = [];

  int next(int price) {
    int totalDays = 1;
    while (span.isNotEmpty && span.last.price <= price) {
      totalDays += span.removeLast().days;
    }
    span.add((price: price, days: totalDays));
    return totalDays;
  }
}
```