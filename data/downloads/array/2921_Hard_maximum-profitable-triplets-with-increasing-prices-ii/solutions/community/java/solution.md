# Segment Tree solution O(n*log(n))

**Author:** whoawhoawhoa
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/solutions/4828121/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/solutions/4828121/)

---

# Intuition
The task boils down to finding maximum profit for each $$prices[j] > prices[i]$$ where $$j > i$$ and maximum profit for each $$prices[k] < prices[i]$$ where $$k < i$$.
So we need to do range queries and updates for each i. Segment tree allows us to do it in $$O(n*log(n))$$ time.

# Approach
We're going to use 2 Segment trees, each one will store maximum profit in range. 
First, we're traversing prices **from left to right** (this way all the values in the tree are for the indices **less** than the current one). Saving the maximum profit for each index.
Second, we're traversing prices **from right to left** (this way all the values in the tree #2 are for the indices **higher** than the current one). Saving the maximum profit for each index.
Then we're just checking the maximum for each index in one more loop.

# Complexity
- Time complexity:
$$O(n * log(n))$$

# Code
```
class Solution {
    public int maxProfit(int[] prices, int[] profits) {
        int min = 5000, max = 0;
        for (int i : prices) {
            if (i > max) {
                max = i;
            }
            if (i < min) {
                min = i;
            }
        }
        min--;
        max++;
        int[] arr = new int[prices.length];
        Node root1 = new Node(-1, min, max), root2 = new Node(-1, min, max);
        for (int i = 0; i < prices.length; i++) {
            int q1 = root1.query(min, prices[i] - 1);
            root1.update(prices[i], profits[i]);
            if (q1 != -1 && arr[i] != -1) {
                arr[i] += q1;
            } else if (q1 == -1) {
                arr[i] = -1; 
            }
            int j = prices.length - 1 - i;
            int q2 = root2.query(prices[j] + 1, max);
            root2.update(prices[j], profits[j]);
            if (q2 != -1 && arr[j] != -1) {
                arr[j] += q2;
            } else if (q2 == -1) {
                arr[j] = -1; 
            }
        }
        int res = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != -1) {
                int tmp = arr[i] + profits[i];
                if (tmp > res) {
                    res = tmp;
                }
            }
        }
        return res;
    }
}

class Node {
    int val;
    int lo;
    int hi;
    int mid;
    Node l, r;
    
    Node(int v, int l, int r) {
        val = v;
        lo = l;
        hi = r;
        mid = lo + (hi - lo) / 2;
    }
    
    void update(int arrIx, int val) {
        if (lo == hi) {
            this.val = Math.max(val, this.val);
            return;
        }
        if (arrIx > mid) {
            if (r == null) {
                r = new Node(-1, mid + 1, hi);
            }
            r.update(arrIx, val);
        } else {
            if (l == null) {
                l = new Node(-1, lo, mid);
            }
            l.update(arrIx, val);
        }
        if (l == null) {
            this.val = r.val;
            return;
        }
        if (r == null) {
            this.val = l.val;
            return;
        }
        this.val = Math.max(l.val, r.val);
    }
    
    int query(long i, long j) {
        if (lo > j || hi < i) {
            return 0;
        }

        if (i <= lo && j >= hi) {
            return val;
        }

        if (i > mid) {
            if (r == null) {
                return -1;
            }
            return r.query(i, j);
        } else if (j <= mid) {
            if (l == null) {
                return -1;
            }
            return l.query(i, j);
        }
        if (r == null && l == null) {
            return val;
        }
        if (r == null) {
            return l.query(i, j);
        }
        if (l == null) {
            return r.query(i, j);
        }
        return Math.max(r.query(i, j), l.query(i, j));
    }
}
```