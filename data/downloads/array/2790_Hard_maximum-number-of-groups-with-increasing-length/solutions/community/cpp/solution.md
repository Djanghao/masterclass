# O(nlogn) Binary search, find lower triangular matrix, easy to understand

**Author:** xin88
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3807567/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3807567/)

---

# Intuition
If we can find `m` groups that satisfy the condition, then we can surely find `m-1`that works as well, which leads to the intuition of using binary search.

Moreover, if we can find `m` groups successfully, the elements should form a **lower triangular matrix** of size `m`.

```
x        - group 0
x x      - group 1
x x x    - group 2
...
```


# Approach
Using a binary search, the problem becomes **Given a fixed group num, evaluate if that group num is valid to satisfy all the conditions.**

How can we solve that? Let's take a look at the `usageLimits`

Suppose `usageLimits = [3, 3, 2]`, it means we have 3 numbers for `1, 2` and 2 numbers of `3`. By drawing it as a diagram, we have
```
1 2    
1 2 3
1 2 3
```

If we view it vertically, it is exactly the `usageLimits`.
However, if we view it horizontally, we notice that each **row** may form a group. Moreover, if we find a pattern of **lower triangular matrix** of height `h`, in this diagram, we may say `h` is a valid group num.

In this example, we are lucky because the original diagram already contains a **lower triangular matrix** of size `3`, so `3` is valid group num and the elements of each group is shown below:

```
1      - group 0
1 2    - group 1
1 2 3  - group 2
```

Let's take a look at a more complex example, `usageLimits = [3, 3, 3, 1]`
```
1 2 3
1 2 3
1 2 3 4
```
We now want to check if 4 is a valid group num. At the first glance, there is no **lower triangular matrix** of size 4, as the first column only has 3 elements (gap is `4 - 3 = 1`). However, we have an extra element (3) in the third column, which can be used to **fill the previous gap in the first column**. After using that element to fill the gap, we are now able to find a **lower triangular matrix** of size `4`:

```
[3]           - group 0
 1  2 [ ]     - group 1
 1  2  3      - group 2
 1  2  3  4   - group 3
```

With the idea of **filling the previous gap**, we can come with an algorithm below:
1. sort `usageLimits` from high to low
2. binary search for the group num `groups`, in each step
    a. initialize `gap = 0`, `h = groups`(desired height in the lower triangular matrix)
    b. for each column `i`, update the gap among `usageLimits[i]`, `h` and previous `gap`: `gap = max(h - usageLimits[i] + gap, 0)` and decrease `h`
    c. at the end of the loop, check if `gap` is 0, if yes, it means we are able to find a lower triangular matrix with size `groups`.

Note that we can only fill the gap **backwards**, not forward, otherwise we may contain duplicates. For example, `usageLimits = [5, 3, 1, 1]`

```
1
1
1 2
1 2 
1 2 3 4
```
To form a lower triangular matrix of size `4`, we need to move one `1` to the third column.
```
[ ]
 1            - group 0
 1  2         - group 1
 1  2 [1]     - group 2 (not valid!)
 1  2  3  4   - group 3
```




# Complexity
- Time complexity:
`O(nlogn)`

- Space complexity:
`O(1)`

# Code

```C++
class Solution {
public:
    bool satisfy(int groups, vector<int> &usageLimits) {
        int gap = 0;
        int h = groups;
        for (int i = 0; i < usageLimits.size(); ++i) {
            gap = max(h - usageLimits[i] + gap, 0);
            if (h) h -= 1;
        }
        return gap == 0;
    }
    int maxIncreasingGroups(vector<int>& usageLimits) {
        int n = usageLimits.size();
        sort(usageLimits.begin(), usageLimits.end(), greater<int>());
        int l = 1, r = n;
        int res = 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (satisfy(mid, usageLimits)) {
                res = max(res, mid);
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return res;
        
    }
};
```