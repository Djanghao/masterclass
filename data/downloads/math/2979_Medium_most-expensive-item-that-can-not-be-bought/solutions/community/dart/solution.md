# Non Math solution

**Author:** lilyx998
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4475247/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/4475247/)

---

# Intuition

Let `dp[i]` denotes that we can get the item prices at `i`. Then we can easily see

`dp[num] = dp[num - primeOne] || dp[num - primeTwo]`

If we get enough consecutive `num` that Alice can get, then we need to search no more, and we can return the last known unattainable item that Alice couldn't buy.

In the example of `primeOne = 2, primeTwo = 5`, we see that 

```
0 True
1 False
2 True
3 False
4 True
5 True
6 True
7 True
8 True
```

We need to test no further. Because there are `4,5,6,7,8` which are five numbers all `true`. We can guarantee that any number beyond that will all be `true` as well.

# Complexity
- Time complexity: $$O(primeOne * primeTwo)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(max(primeOne, primeTwo))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

C++ vcersion

```c++
class Solution {
 public:
  int mostExpensiveItem(int p1, int p2) {
    if (p1 > p2) return mostExpensiveItem(p2, p1);

    vector<bool> bits(p1, false);
    bits[0] = true;

    auto can = [&](int v) -> bool {
      return (v - p1 >= 0 && bits[v - p1]) || (v - p2 >= 0 && bits[v - p2]);
    };

    int res = p1 - 1;
    for (int i = p1, acc = 0;; i++) {
      if (can(i)) {
        bits.push_back(true);
        if (++acc == p2) return res;
      } else {
        bits.push_back(false);
        res = i;
        acc = 0;
      }
    }
  }
};
```

Dart version
```dart
class Solution {
  int mostExpensiveItem(int primeOne, int primeTwo) {
    if (primeOne > primeTwo) return mostExpensiveItem(primeTwo, primeOne);

    final bits = List.filled(primeOne, false, growable: true);
    bits[0] = true;

    bool can(int v) =>
        (v - primeOne >= 0 && bits[v - primeOne]) || (v - primeTwo >= 0 && bits[v - primeTwo]);

    int res = primeOne - 1;
    for (int i = primeOne, acc = 0;; i++) {
      if (can(i)) {
        bits.add(true);
        if (++acc == primeTwo) return res;
      } else {
        bits.add(false);
        res = i;
        acc = 0;
      }
    }
  }
}
```