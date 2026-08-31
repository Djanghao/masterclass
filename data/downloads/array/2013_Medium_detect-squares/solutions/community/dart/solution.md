# Very Easy 💕💕

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-squares/solutions/5531718/](https://leetcode.com/problems/detect-squares/solutions/5531718/)

---


# Code
```
class DetectSquares {
  // S\u1EED d\u1EE5ng Map \u0111\u1EC3 l\u01B0u tr\u1EEF c\xE1c \u0111i\u1EC3m v\xE0 s\u1ED1 l\u1EA7n xu\u1EA5t hi\u1EC7n c\u1EE7a ch\xFAng
  final Map<int, Map<int, int>> pointsCount;

  DetectSquares() : pointsCount = {};

  // Ph\u01B0\u01A1ng th\u1EE9c \u0111\u1EC3 th\xEAm m\u1ED9t \u0111i\u1EC3m m\u1EDBi
  void add(List<int> point) {
    int x = point[0];
    int y = point[1];
    if (!pointsCount.containsKey(x)) {
      pointsCount[x] = {};
    }
    if (!pointsCount[x]!.containsKey(y)) {
      pointsCount[x]![y] = 0;
    }
    pointsCount[x]![y] = pointsCount[x]![y]! + 1;
  }

  // Ph\u01B0\u01A1ng th\u1EE9c \u0111\u1EC3 \u0111\u1EBFm s\u1ED1 h\xECnh vu\xF4ng c\xF3 th\u1EC3 t\u1EA1o th\xE0nh v\u1EDBi \u0111i\u1EC3m truy v\u1EA5n
  int count(List<int> point) {
    int x = point[0];
    int y = point[1];
    int count = 0;

    if (!pointsCount.containsKey(x)) {
      return 0;
    }

    // Duy\u1EC7t qua t\u1EA5t c\u1EA3 c\xE1c \u0111i\u1EC3m c\xF3 c\xF9ng ho\xE0nh \u0111\u1ED9 x
    for (int y2 in pointsCount[x]!.keys) {
      if (y == y2) continue; // B\u1ECF qua n\u1EBFu tr\xF9ng v\u1EDBi \u0111i\u1EC3m truy v\u1EA5n
      int sideLength = (y - y2).abs(); // Chi\u1EC1u d\xE0i c\u1EA1nh c\u1EE7a h\xECnh vu\xF4ng

      // Ki\u1EC3m tra hai \u0111i\u1EC3m \u0111\u1ED1i di\u1EC7n c\u1EE7a h\xECnh vu\xF4ng
      // (x + sideLength, y) v\xE0 (x + sideLength, y2)
      if (pointsCount.containsKey(x + sideLength)) {
        int count1 = pointsCount[x]![y2]!;
        int count2 = pointsCount[x + sideLength]![y2] ?? 0;
        int count3 = pointsCount[x + sideLength]![y] ?? 0;
        count += count1 * count2 * count3;
      }

      // Ki\u1EC3m tra hai \u0111i\u1EC3m \u0111\u1ED1i di\u1EC7n c\u1EE7a h\xECnh vu\xF4ng
      // (x - sideLength, y) v\xE0 (x - sideLength, y2)
      if (pointsCount.containsKey(x - sideLength)) {
        int count1 = pointsCount[x]![y2]!;
        int count2 = pointsCount[x - sideLength]![y2] ?? 0;
        int count3 = pointsCount[x - sideLength]![y] ?? 0;
        count += count1 * count2 * count3;
      }
    }

    return count;
  }
}
```