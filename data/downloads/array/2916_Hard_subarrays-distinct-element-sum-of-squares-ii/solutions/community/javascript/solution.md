# ✅☑[C++/Java/Python/JavaScript] || Beats 98% || Tree || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4218877/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4218877/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. This code implements a segment tree with lazy propagation to efficiently handle updates and queries on a range of elements.
1. The `build` function constructs the segment tree by recursively dividing the array into segments and calculating the sum of elements in each segment.
1. The `update` function updates the segment tree with lazy propagation to handle range updates efficiently. It updates both the sum and the sum of squares for each segment.
1. The `sumCounts` function is the main logic for finding the sum of counts. It iterates through the input array in reverse order, updating the segment tree based on the last seen index of each number.
1. The variable `ans` accumulates the answer as we iterate through the array.



# Complexity
- *Time complexity:*
   $$O(logn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
#define N       100005
#define ll      long long
#define hell    1000000007

class Solution {
public:
    
    ll int a[N];
    ll int seg[4*N], segsq[4*N], lazy[4*N];

    // Build the segment tree.
    void build(int node, ll int start, ll int end) {
        if (start == end) {
            seg[node] = a[start];
            segsq[node] = (a[start] * a[start]) % hell;
            return;
        }
        ll int mid = (start + end) >> 1;
        build(node << 1, start, mid);
        build(node << 1 | 1, mid + 1, end);
        seg[node] = (seg[node << 1] + seg[node << 1 | 1]) % hell;
        segsq[node] = (segsq[node << 1] + segsq[node << 1 | 1]) % hell;
    }

    // Update the segment tree and handle lazy propagation.
    void update(int node, ll int start, ll int end, int l, int r, int val) {
        if (lazy[node] != 0) {
            segsq[node] += ((end - start + 1) * (lazy[node] * lazy[node]) % hell) % hell + (2 * lazy[node] * seg[node]) % hell;
            segsq[node] %= hell;
            seg[node] += ((end - start + 1) * lazy[node]) % hell;
            seg[node] %= hell;
            if (start != end) {
                lazy[node << 1] += lazy[node];
                lazy[node << 1 | 1] += lazy[node];
            }
            lazy[node] = 0;
        }
        if (start > end || start > r || end < l) return;
        if (l <= start && end <= r) {
            segsq[node] += ((end - start + 1) * (val * val) % hell) % hell + (2 * val * seg[node]) % hell;
            segsq[node] %= hell;
            seg[node] += ((end - start + 1) * val) % hell;
            seg[node] %= hell;
            if (start != end) {
                lazy[node << 1] += val;
                lazy[node << 1 | 1] += val;
            }
            return;
        }
        ll int mid = (start + end) >> 1;
        update(node << 1, start, mid, l, r, val);
        update(node << 1 | 1, mid + 1, end, l, r, val);
        seg[node] = (seg[node << 1] + seg[node << 1 | 1]) % hell;
        segsq[node] = (segsq[node << 1] + segsq[node << 1 | 1]) % hell;
    }

    // Main function to find the sum of counts.
    int sumCounts(vector<int>& nums) {
        int n = nums.size();
        
        // Initialize the array 'a' with 0 values.
        for (int i = 1; i <= n; i++) {
            a[i] = 0;
        }
        
        // Build the segment tree.
        build(1, 1, n);
        
        // Use a map to store the last seen index of each number.
        unordered_map<int, int> prev_seen_at;
        
        ll int ans = 0;
        
        for (int i = n - 1; i >= 0; i--) {
            if (prev_seen_at.find(nums[i]) == prev_seen_at.end()) {
                update(1, 1, n, i + 1, n, 1);
            }
            else {
                update(1, 1, n, i + 1, prev_seen_at[nums[i]] - 1, 1);
            }
            
            prev_seen_at[nums[i]] = i + 1;
            
            ans = (ans + segsq[1]) % hell;
        }
        
        return ans;
    }
};


```

```C []

#include <stdio.h>

#define N       100005
#define hell    1000000007

long long a[N];
long long seg[4*N], segsq[4*N], lazy[4*N];

// Build the segment tree.
void build(int node, long long start, long long end) {
    if (start == end) {
        seg[node] = a[start];
        segsq[node] = (a[start] * a[start]) % hell;
        return;
    }
    long long mid = (start + end) >> 1;
    build(node << 1, start, mid);
    build(node << 1 | 1, mid + 1, end);
    seg[node] = (seg[node << 1] + seg[node << 1 | 1]) % hell;
    segsq[node] = (segsq[node << 1] + segsq[node << 1 | 1]) % hell;
}

// Update the segment tree and handle lazy propagation.
void update(int node, long long start, long long end, int l, int r, int val) {
    if (lazy[node] != 0) {
        segsq[node] += ((end - start + 1) * (lazy[node] * lazy[node]) % hell) % hell + (2 * lazy[node] * seg[node]) % hell;
        segsq[node] %= hell;
        seg[node] += ((end - start + 1) * lazy[node]) % hell;
        seg[node] %= hell;
        if (start != end) {
            lazy[node << 1] += lazy[node];
            lazy[node << 1 | 1] += lazy[node];
        }
        lazy[node] = 0;
    }
    if (start > end || start > r || end < l) return;
    if (l <= start && end <= r) {
        segsq[node] += ((end - start + 1) * (val * val) % hell) % hell + (2 * val * seg[node]) % hell;
        segsq[node] %= hell;
        seg[node] += ((end - start + 1) * val) % hell;
        seg[node] %= hell;
        if (start != end) {
            lazy[node << 1] += val;
            lazy[node << 1 | 1] += val;
        }
        return;
    }
    long long mid = (start + end) >> 1;
    update(node << 1, start, mid, l, r, val);
    update(node << 1 | 1, mid + 1, end, l, r, val);
    seg[node] = (seg[node << 1] + seg[node << 1 | 1]) % hell;
    segsq[node] = (segsq[node << 1] + segsq[node << 1 | 1]) % hell;
}

// Main function to find the sum of counts.
int sumCounts(int nums[], int n) {
    for (int i = 1; i <= n; i++) {
        a[i] = 0;
    }
    
    // Build the segment tree.
    build(1, 1, n);
    
    int prev_seen_at[n];
    for (int i = 0; i < n; i++) {
        prev_seen_at[i] = -1;
    }
    
    long long ans = 0;
    
    for (int i = n - 1; i >= 0; i--) {
        if (prev_seen_at[nums[i]] == -1) {
            update(1, 1, n, i + 1, n, 1);
        }
        else {
            update(1, 1, n, i + 1, prev_seen_at[nums[i]] - 1, 1);
        }
        
        prev_seen_at[nums[i]] = i + 1;
        
        ans = (ans + segsq[1]) % hell;
    }
    
    return ans;
}

int main() {
    int nums[] = {3, 2, 3, 3, 2};
    int n = sizeof(nums) / sizeof(nums[0]);
    int result = sumCounts(nums, n);
    printf("Result: %d\
", result);
    return 0;
}


```

```Java []

public class Solution {
    private final long N = 100005;
    private final long hell = 1000000007;
    private long[] a = new long[(int) N];
    private long[] seg = new long[4 * (int) N];
    private long[] segsq = new long[4 * (int) N];
    private long[] lazy = new long[4 * (int) N];

    // Build the segment tree.
    private void build(int node, long start, long end) {
        if (start == end) {
            seg[node] = a[(int) start];
            segsq[node] = (a[(int) start] * a[(int) start]) % hell;
            return;
        }
        long mid = (start + end) >> 1;
        build(node << 1, start, mid);
        build(node << 1 | 1, mid + 1, end);
        seg[node] = (seg[node << 1] + seg[node << 1 | 1]) % hell;
        segsq[node] = (segsq[node << 1] + segsq[node << 1 | 1]) % hell;
    }

    // Update the segment tree and handle lazy propagation.
    private void update(int node, long start, long end, int l, int r, int val) {
        if (lazy[node] != 0) {
            segsq[node] += ((end - start + 1) * (lazy[node] * lazy[node]) % hell) % hell + (2 * lazy[node] * seg[node]) % hell;
            segsq[node] %= hell;
            seg[node] += ((end - start + 1) * lazy[node]) % hell;
            seg[node] %= hell;
            if (start != end) {
                lazy[node << 1] += lazy[node];
                lazy[node << 1 | 1] += lazy[node];
            }
            lazy[node] = 0;
        }
        if (start > end || start > r || end < l) return;
        if (l <= start && end <= r) {
            segsq[node] += ((end - start + 1) * (val * val) % hell) % hell + (2 * val * seg[node]) % hell;
            segsq[node] %= hell;
            seg[node] += ((end - start + 1) * val) % hell;
            seg[node] %= hell;
            if (start != end) {
                lazy[node << 1] += val;
                lazy[node << 1 | 1] += val;
            }
            return;
        }
        long mid = (start + end) >> 1;
        update(node << 1, start, mid, l, r, val);
        update(node << 1 | 1, mid + 1, end, l, r, val);
        seg[node] = (seg[node << 1] + seg[node << 1 | 1]) % hell;
        segsq[node] = (segsq[node << 1] + segsq[node << 1 | 1]) % hell;
    }

    // Main function to find the sum of counts.
    public int sumCounts(int[] nums) {
        int n = nums.length;
        for (int i = 1; i <= n; i++) {
            a[i] = 0;
        }

        // Build the segment tree.
        build(1, 1, n);

        HashMap<Integer, Integer> prev_seen_at = new HashMap<>();

        long ans = 0;

        for (int i = n - 1; i >= 0; i--) {
            if (!prev_seen_at.containsKey(nums[i])) {
                update(1, 1, n, i + 1, n, 1);
            } else {
                update(1, 1, n, i + 1, prev_seen_at.get(nums[i]) - 1, 1);
            }

            prev_seen_at.put(nums[i], i + 1);

            ans = (ans + segsq[1]) % hell;
        }

        return (int) ans;
    }

```
```python3 []
class Solution:
    def __init__(self):
        self.N = 100005
        self.hell = 1000000007
        self.a = [0] * (self.N)
        self.seg = [0] * (4 * self.N)
        self.segsq = [0] * (4 * self.N)
        self.lazy = [0] * (4 * self.N)

    # Build the segment tree.
    def build(self, node, start, end):
        if start == end:
            self.seg[node] = self.a[start]
            self.segsq[node] = (self.a[start] * self.a[start]) % self.hell
            return
        mid = (start + end) >> 1
        self.build(node << 1, start, mid)
        self.build(node << 1 | 1, mid + 1, end)
        self.seg[node] = (self.seg[node << 1] + self.seg[node << 1 | 1]) % self.hell
        self.segsq[node] = (self.segsq[node << 1] + self.segsq[node << 1 | 1]) % self.hell

    # Update the segment tree and handle lazy propagation.
    def update(self, node, start, end, l, r, val):
        if self.lazy[node] != 0:
            self.segsq[node] += ((end - start + 1) * (self.lazy[node] * self.lazy[node]) % self.hell) % self.hell + (2 * self.lazy[node] * self.seg[node]) % self.hell
            self.segsq[node] %= self.hell
            self.seg[node] += ((end - start + 1) * self.lazy[node]) % self.hell
            self.seg[node] %= self.hell
            if start != end:
                self.lazy[node << 1] += self.lazy[node]
                self.lazy[node << 1 | 1] += self.lazy[node]
            self.lazy[node] = 0
        if start > end or start > r or end < l:
            return
        if l <= start and end <= r:
            self.segsq[node] += ((end - start + 1) * (val * val) % self.hell) % self.hell + (2 * val * self.seg[node]) % self.hell
            self.segsq[node] %= self.hell
            self.seg[node] += ((end - start + 1) * val) % self.hell
            self.seg[node] %= self.hell
            if start != end:
                self.lazy[node << 1] += val
                self.lazy[node << 1 | 1] += val
            return
        mid = (start + end) >> 1
        self.update(node << 1, start, mid, l, r, val)
        self.update(node << 1 | 1, mid + 1, end, l, r, val)
        self.seg[node] = (self.seg[node << 1] + self.seg[node << 1 | 1]) % self.hell
        self.segsq[node] = (self.segsq[node << 1] + self.segsq[node << 1 | 1]) % self.hell

    # Main function to find the sum of counts.
    def sumCounts(self, nums):
        n = len(nums)
        for i in range(1, n + 1):
            self.a[i] = 0

        # Build the segment tree.
        self.build(1, 1, n)

        prev_seen_at = {}

        ans = 0

        for i in range(n - 1, -1, -1):
            if nums[i] not in prev_seen_at:
                self.update(1, 1, n, i + 1, n, 1)
            else:
                self.update(1, 1, n, i + 1, prev_seen_at[nums[i]] - 1, 1)

            prev_seen_at[nums[i]] = i + 1

            ans = (ans + self.segsq[1]) % self.hell

        return ans



```
```javascript []
class Solution {
    constructor() {
        this.N = 100005;
        this.hell = 1000000007;
        this.a = new Array(this.N);
        this.seg = new Array(4 * this.N);
        this.segsq = new Array(4 * this.N);
        this.lazy = new Array(4 * this.N);
    }

    // Build the segment tree.
    build(node, start, end) {
        if (start === end) {
            this.seg[node] = this.a[start];
            this.segsq[node] = (this.a[start] * this.a[start]) % this.hell;
            return;
        }
        const mid = (start + end) >> 1;
        this.build(node << 1, start, mid);
        this.build((node << 1) + 1, mid + 1, end);
        this.seg[node] = (this.seg[node << 1] + this.seg[(node << 1) + 1]) % this.hell;
        this.segsq[node] = (this.segsq[node << 1] + this.segsq[(node << 1) + 1]) % this.hell;
    }

    // Update the segment tree and handle lazy propagation.
    update(node, start, end, l, r, val) {
        if (this.lazy[node] !== 0) {
            this.segsq[node] += ((end - start + 1) * (this.lazy[node] * this.lazy[node]) % this.hell) % this.hell + (2 * this.lazy[node] * this.seg[node]) % this.hell;
            this.segsq[node] %= this.hell;
            this.seg[node] += ((end - start + 1) * this.lazy[node]) % this.hell;
            this.seg[node] %= this.hell;
            if (start !== end) {
                this.lazy[node << 1] += this.lazy[node];
                this.lazy[(node << 1) + 1] += this.lazy[node];
            }
            this.lazy[node] = 0;
        }
        if (start > end || start > r || end < l) return;
        if (l <= start && end <= r) {
            this.segsq[node] += ((end - start + 1) * (val * val) % this.hell) % this.hell + (2 * val * this.seg[node]) % this.hell;
            this.segsq[node] %= this.hell;
            this.seg[node] += ((end - start + 1) * val) % this.hell;
            this.seg[node] %= this.hell;
            if (start !== end) {
                this.lazy[node << 1] += val;
                this.lazy[(node << 1) + 1] += val;
            }
            return;
        }
        const mid = (start + end) >> 1;
        this.update(node << 1, start, mid, l, r, val);
        this.update((node << 1) + 1, mid + 1, end, l, r, val);
        this.seg[node] = (this.seg[node << 1] + this.seg[(node << 1) + 1]) % this.hell;
        this.segsq[node] = (this.segsq[node << 1] + this.segsq[(node << 1) + 1]) % this.hell;
    }

    // Main function to find the sum of counts.
    sumCounts(nums) {
        const n = nums.length;
        
        // Initialize the array 'a' with 0 values.
        for (let i = 1; i <= n; i++) {
            this.a[i] = 0;
        }
        
        // Build the segment tree.
        this.build(1, 1, n);
        
        // Use a map to store the last seen index of each number.
        const prev_seen_at = new Map();
        
        let ans = 0;
        
        for (let i = n - 1; i >= 0; i--) {
            if (!prev_seen_at.has(nums[i])) {
                this.update(1, 1, n, i + 1, n, 1);
            }
            else {
                this.update(1, 1, n, i + 1, prev_seen_at.get(nums[i]) - 1, 1);
            }
            
            prev_seen_at.set(nums[i], i + 1);
            
            ans = (ans + this.segsq[1]) % this.hell;
        }
        
        return ans;
    }
}

```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---