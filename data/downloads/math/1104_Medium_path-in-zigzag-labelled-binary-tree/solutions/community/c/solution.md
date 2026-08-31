# Invert Labels

**Author:** votrubac
**Votes:** 107
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/323293/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/323293/)

---

#### Intuition
If the tree is numbered left-to-right (not zigzag), the parent's label can be always determined as ```label / 2```. For zigzag, we need to "invert" the parent label.

#### Simplified Solution
The idea is the same as for the original solution below, but I hope this one is a bit easier to understand. We first build the path from label to the root (by dividing the label by two).

Then, we go thougth the path, and invert odd labels.

**C++**
```cpp
vector<int> pathInZigZagTree(int label) {
    vector<int> res;
    for (; label > 0; label /= 2)
        res.push_back(label);
    for (int i = res.size() - 1; i >= 0; --i)
        if (i % 2 == 1)
            res[i] = (1 << (res.size() - i - 1)) * 3 - res[i] - 1;
    return vector<int>(rbegin(res), rend(res));
}
```

#### Original Solution
Determine the tree ```level``` where our value is located. The maximum label in the level is ```1 << level - 1```, and minimum is ```1 << (level - 1)```. We will use this fact to "invert" the parent label.

**C++**
```cpp
vector<int> pathInZigZagTree(int label, int level = 0) {
  while (1 << level <= label) ++level;
  vector<int> res(level);
  for(; label >= 1; label /= 2, --level) {
    res[level - 1] = label;
    label = (1 << level) - 1 - label + (1 << (level - 1));
  }
  return res;
}
```
#### Complexity Analysis
Runtime: *O(log n)*
Memory: *O(1)* or *O(log n)* if we consider the memory required for the result.