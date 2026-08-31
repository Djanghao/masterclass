# C++ | Mathematics | O(n) ? Solution | 32 ms

**Author:** blank_manash
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-equal-sum/solutions/5828456/](https://leetcode.com/problems/split-array-with-equal-sum/solutions/5828456/)

---

# Intuition

Let us define $p$ as the prefix sum array. 

Given:
$$ p_{i-1} = p_{j-1} - p_i = p_{k-1} - p_j = p_{n-1} - p_k $$

From the given, we get the following three equations:
$$ p_{n-1} - p_k = p_{i-1}$$
$$ p_j = p_k + p_{k-1} - p_{n-1}$$
$$ p_i + p_{i-1} = p_{j-1}$$

Define the following helper functions:
$$ f_1(i) = p_i + p_{i - 1}$$
$$ g_1(i) = p_i + p_{i - 1} - p_{n - 1}$$
$$ f_2(i) = p_{i - 1}$$
$$ g_2(i) = p_{n - 1}-p_i$$

After substitution we have, 
$$ p_j = g_1(k) \\quad \	ext{...(1)}$$
$$ p_{j-1} = f_1(i) \\quad \	ext{...(2)} $$
$$ g_2(k) = f_2(i) \\quad \	ext{...(3)} $$

For the condition to be valid, all the above 3 equation should hold.
We can pre-compute $f_1,f_2,g_1,g_2$ on the array in $O(n)$ time. 

# Approach
We iterate over $j$ and keep the mapping 
$g_1(i)\\rightarrow g_2(i)\\ \\forall \\ i\\ \\lt j-1 $
$f_1(k)\\rightarrow f_2(k) \\ \\forall \\ k\\ \\gt j+1 $

Since we already know what $g_1(i)$ and $f_1(k)$ values are from $(1)$ and $(2)$ we just have to check if there is an intersection for $(3)$, in the maintained maps for $g_1$ and $f_1$. 

# Complexity
The original complexity as shown by leetcode is $O(n)$. In a naive glance it seems that the worst case scenario would have the complexity as $O(n^2)$, but that would imply that there are $n$ distinct tuples $p_i, p_{i+1}, p_{i}$ for each $i$ which is a contradiction. 

Space Complexity is $O(n)$

# Code
```cpp []


// Given p[i - 1] = p[j - 1] - p[i] = p[k - 1] - p[j] = p[n - 1] - p[k]

// p[i] + p[i - 1] = p[j - 1]
// p[j] = p[k] + p[k - 1] - p[n - 1]

// p[i] - p[j] = p[j - 1] - p[k - 1]
// p[i] - (p[k] + p[k - 1] - p[n - 1]) = p[i] + p[i - 1] - p[k - 1]
// p[n - 1] - p[k] - p[k - 1] = p[i - 1] - p[k - 1]
// p[n - 1] - p[k] = p[i - 1]

class Solution {
    int n;
    unordered_map<int, unordered_map<int,int>> f, g;
    vector<int> p;
    void remove(int j) {
        int k = j + 1;
        int x = p[k] + p[k - 1] - p[n - 1];
        int val = p[n - 1] - p[k];
        if (--g[x][val] == 0) {
            g[x].erase(val);
        }
    }

    void add(int j) {
        int i = j - 2;
        int x = p[i] + p[i - 1];
        int val = p[i - 1];
        f[x][val] += 1;
    };

public:
    bool splitArray(vector<int>& nums) {
        n = nums.size();
        if (n <= 5)
            return false;
        p = nums;
        for (int i = 1; i < n; ++i) {
            p[i] += p[i - 1];
        }

        for (int k = n - 2; k >= 4; --k) {
            int x = p[k] + p[k - 1] - p[n - 1];
            int val = p[n - 1] - p[k];
            g[x][val] += 1;
        }

        for (int j = 3; j < n - 2; ++j) {
            remove(j);
            add(j);
            auto a = f[p[j - 1]];
            auto b = g[p[j]];
            for (auto pi : b) {
                if (a.count(pi.first)) {
                    return true;
                }
            }
        }

        return false;
    }
};
```