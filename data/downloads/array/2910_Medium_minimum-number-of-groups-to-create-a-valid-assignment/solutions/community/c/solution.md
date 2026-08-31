# Brute-Force

**Author:** votrubac
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194599/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194599/)

---

This solution is much simpler than my original one. 

We count each number, and, instead of sorting, we find the smallest count `g`. 

The largest possible group size is `g + 1`. We start with that, and decrement till we find a valid split.

We then try to split `c` elements of the same value into groups of size `g + 1` (`g1`) and `g`.

We have `group_cnt` of complete groups, and the last (incomplete) group has `last_group` elements.

- If `last_group == 0` or `last_group == g`, we can do the split.
- If `last_group < g` is less than `g`:
	- We can borrow one element from each complete group
		- This will reduce the size of that group from `g1` to `g`, which is okay.
	- Therefore, we can borrow up to `group_cnt` elements.
-  If `last_group + group_cnt < g`  we can do the split.
-  Otherwise, we can't split `c` elements into groups of size `g1` and `g`.

**C++**
```cpp
int split(unordered_map<int, int> &cnt, int g1) {
    int groups = 0, g = g1 - 1;
    for (const auto &[_, c] : cnt) {
        int group_cnt = c / g1, last_group = c % g1;
        if (last_group && last_group + group_cnt < g)
            return INT_MAX;
        groups += group_cnt + (last_group > 0);
    }
    return groups;
}
int minGroupsForValidAssignment(vector<int>& nums) {
    unordered_map<int, int> cnt;
    for (auto n : nums)
        ++cnt[n];
    int g = min_element(begin(cnt), end(cnt), [](const auto &p1, const auto &p2){
        return p1.second < p2.second;})->second;
    for (; split(cnt, g + 1) == INT_MAX; --g) ;
    return split(cnt, g + 1);
}
```