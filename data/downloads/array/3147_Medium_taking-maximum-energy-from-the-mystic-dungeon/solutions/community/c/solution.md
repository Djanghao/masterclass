# Modulo Kadane

**Author:** votrubac
**Votes:** 15
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5145579/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5145579/)

---

We just ran Kadane for `k` subarrays.

**C++**
```cpp
int maximumEnergy(vector<int>& e, int k) {
    vector<int> res(k, -1000);
    for (int i = 0; i < e.size(); ++i)
        res[i % k] = max(e[i], res[i % k] + e[i]);
    return *max_element(begin(res), end(res));
}
```