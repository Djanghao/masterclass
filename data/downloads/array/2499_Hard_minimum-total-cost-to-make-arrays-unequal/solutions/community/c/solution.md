# Majority Element

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2934975/](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/solutions/2934975/)

---

The intuition is tricky; I needed a bit of whiteboarding to figure out #4 below.

1. We check for equal elements. If `n1[i] == n2[i]`, we will need to move it, so we just add `i` to the result.
2. We use hashmap to count equal elements for each value.
3. The best strategy is to rearrange equal elements only - it will not require any additional cost.
4. We can always rearrange equal elements if there is no majority element. 
	- In other words, we do not have a value that accounts for more than a half of equal elements.
	- If the number of equal elements is odd, the last once can be swapped with the first element for zero cost.
		- We can always make this last swap since we have several values to choose from.
> Say, for example, we have equal elements `2, 2, 2, 3, 3, 4, 4` (odd total number). We can swap: 
> (2, 3), (2, 3), (2, 4), then (x, 4) - x is the first element.
> (2, 4), (2, 4), (2, 3), then (x, 3).
> (2, 3), (2, 4), (3, 4), then (x, 2).
5. If we have a majority element `n` appearing `n_cnt` times.
	- We can swap `equal - n_cnt` equal elements for no extra cost.
	- Plus, we need to swap `2 * n_cnt - equal` equal with some non-equal elements for a cost.
6. We scan the array left-to-right (to minimize cost), do swaps if we can, and add indexes to the cost.
7. If we are able to do all swaps, return cost (and `-1` otherwise).

**C++**
```cpp
long long minimumTotalCost(vector<int>& n1, vector<int>& n2) {
    long long res = 0, cnt = 0, sz = n1.size();
    unordered_map<int, int> m{{0,0}}; // sentinel
    for (int i = 0; i < sz; ++i)
        if (n1[i] == n2[i]) {
            res += i;
            ++m[n1[i]];
            ++cnt;
        }
    const auto &[n, n_cnt] = *max_element(begin(m), end(m), 
        [](const auto &a, const auto &b){ return a.second < b.second; });
    int swaps = 2 * n_cnt - cnt;
    for (int i = 0; swaps > 0 && i < sz; ++i)
        if (n1[i] != n2[i] && n1[i] != n && n2[i] != n) {
            res += i;
            --swaps;
        }
    return swaps > 0 ? -1 : res;
}
```