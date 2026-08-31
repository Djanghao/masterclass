# First Dart Solution

**Author:** MC91
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3454516/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3454516/)

---

# Intuition
As per the problem, the maximum number of total calls of `popSmallest` and `addBack` does not exceed 1000, thus using 1000-element int Set is good enough.

# Approach
I have used Dart's extension to define a `min()` method for Set class, as Dart does not have a built-in method for that. Then just implement `popSmallest` and `addBack` using built-in methods and my Kek extension.

# Complexity
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(N)$$

# Code
```
class SmallestInfiniteSet {
  final Set<int> smallSet =
      Set.from(Iterable.generate(1000, (int index) => index + 1));
  SmallestInfiniteSet();

  int popSmallest() {
    final minEl = smallSet.min();
    smallSet.remove(minEl);
    return minEl;
  }

  void addBack(int num) => smallSet.add(num);
}

extension Kek on Set<int> {
  int min() {
    final List<int> dummyList = toList();
    dummyList.sort();
    return dummyList.removeAt(0);
  }
}

```