# [C++] Segment tree with illustration/explanation

**Author:** ayman_eltemmsahy
**Votes:** 119
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/2560010/](https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/2560010/)

---

We use a segment tree to keep track of the max length of all the valid numbers that can come before this one.
For example, if `k = 3` and the current number is `5`, then the valid numbers before it are `2, 3, 4`. We query the segment tree in `O(logM)` to get the longest sequence out of the 3 numbers and we add `1` to it.

#### Example
```
nums = [4,2,1,4,3,4,5,8], k = 3
```
1. `index=0`, `val = 4`
get the max sequence length from `[1, 2, 3]`.
`max value = 0`
`current value = 0 + 1 = 1`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|***0***|***0***|***0***|0|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|0|0|0|***1***|0|0|0|0|


2. `index=1`, `val = 2`
get the max sequence length from `[1]`.
`max value = 0`
`current value = 0 + 1 = 1`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|***0***|0|0|1|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|0|***1***|0|1|0|0|0|0|


3. `index=2`, `val = 1`
nothing can come before it
`max value = 0`
`current value = 0 + 1 = 1`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|0|1|0|1|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|***1***|1|0|1|0|0|0|0|


4. `index=3`, `val = 4`
get the max sequence length from `[1, 2, 3]`.
`max value = 1`
`current value = 1 + 1 = 2`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|***1***|***1***|***0***|1|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|1|0|***2***|0|0|0|0|


5. `index=4`, `val = 3`
get the max sequence length from `[1, 2]`.
`max value = 1`
`current value = 1 + 1 = 2`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|***1***|***1***|0|2|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|1|***2***|2|0|0|0|0|


6. `index=5`, `val = 4`
get the max sequence length from `[1, 2, 3]`.
`max value = 2`
`current value = 2 + 1 = 3`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|***1***|***1***|***2***|2|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|1|2|***3***|0|0|0|0|


7. `index=6`, `val = 5`
get the max sequence length from `[2, 3, 4]`.
`max value = 3`
`current value = 3 + 1 = 4`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|***1***|***2***|***3***|0|0|0|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|1|2|3|***4***|0|0|0|

8. `index=7`, `val = 8`
get the max sequence length from `[5, 6, 7]`.
`max value = 4`
`current value = 4 + 1 = 5`

_Tree_ (before)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|1|2|3|***4***|***0***|***0***|0|

_Tree_ (after)
|num|1|2|3|4|5|6|7|8|
|-|-|-|-|-|-|-|-|-|
|max|1|1|2|3|4|0|0|***5***|

#### Complexity:
```
Time : O(NlogN)
Space: O(N)
```

#### Code

```c++
class MaxSegmentTree {
 public:
  int n;
  vector<int> tree;
  MaxSegmentTree(int n_) : n(n_) {
    int size = (int)(ceil(log2(n)));
    size = (2 * pow(2, size)) - 1;
    tree = vector<int>(size);
  }
  
  int max_value() { return tree[0]; }

  int query(int l, int r) { return query_util(0, l, r, 0, n - 1); }

  int query_util(int i, int qL, int qR, int l, int r) {
    if (l >= qL && r <= qR) return tree[i];
    if (l > qR || r < qL) return INT_MIN;

    int m = (l + r) / 2;
    return max(query_util(2 * i + 1, qL, qR, l, m), query_util(2 * i + 2, qL, qR, m + 1, r));
  }

  void update(int i, int val) { update_util(0, 0, n - 1, i, val); }
  void update_util(int i, int l, int r, int pos, int val) {
    if (pos < l || pos > r) return;
    if (l == r) {
      tree[i] = max(val, tree[i]);
      return;
    }

    int m = (l + r) / 2;
    update_util(2 * i + 1, l, m, pos, val);
    update_util(2 * i + 2, m + 1, r, pos, val);
    tree[i] = max(tree[2 * i + 1], tree[2 * i + 2]);
  }
};

class Solution {
 public:
  int lengthOfLIS(vector<int>& nums, int k) {
    MaxSegmentTree tree(1e5 + 1);
    for (int i : nums) {
      int lower = max(0, i - k);
      int cur = 1 + tree.query(lower, i - 1);
      tree.update(i, cur);
    }

    return tree.max_value();
  }
};
```

**Upvote if you find it helpful :)**