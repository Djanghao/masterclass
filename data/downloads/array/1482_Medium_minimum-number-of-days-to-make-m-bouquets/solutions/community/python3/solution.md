# Binary Search||59ms Beats 99.43%

**Author:** anwendeng
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334538/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334538/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary search.
LC said:
> To make a bouquet, you need to use k adjacent flowers from the garden.

It needs to define a function to judge whether it can make m  bouquets or not.

Look at this constraint `1 <= bloomDay[i] <= 10^9`, the most system builtin binary search functions need containers; if the container is used, it may lead to MLE.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define a function` bool f(int d, vector<int>& bloomDay, int m, int k)` to judge whether it can make m  bouquets or not. (3 variants are made)
2. Notice that the edge case `(long long)m * k > n` needs `long long`, otherwise overflow
3. Use C++ `minmax_element` to find the min, max for `bloomDay` as the searching range.
4. Use a while loop to implement the binary search 
5.  The 2nd version for f using a nested loop is made which makes the C++ code faster
6. The 3rd version for f is made.

To solve the question is like to solve [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/solutions/3685871/w-explanation-easy-binary-search-c-solution/)
Please turn on english subtitles if necessary:
[https://youtu.be/KtZOZ4E1zww?si=2tsJ1GLA4AgQXw0a](https://youtu.be/KtZOZ4E1zww?si=2tsJ1GLA4AgQXw0a)
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n\\log M)$$ where $M=\\max(bloomDay)-\\min(bloomDay)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

$$O(1)$$
# Code||C++ 62 ms Beats 99.11%
```
class Solution {
public:
    int n;

    bool f(int d, vector<int>& bloomDay, int m, int k) {
        int len = 0, bouquet = 0;
        for (int i = 0; i < n; i++) {
            if (bloomDay[i] <= d) {
                len++;// length for the adjacent blooming flowers
                if (len == k) {
                    bouquet++;// can make a bouquet
                    len = 0;// reset
                }
            } 
            else len = 0;//reset

            if (bouquet >= m) return 1;// already more than m bouquets
        }
        return bouquet >= m;
    }

    int minDays(vector<int>& bloomDay, int m, int k) {
        n = bloomDay.size();
        if ((long long)m * k > n) return -1;

        auto [x0, xN] = minmax_element(bloomDay.begin(), bloomDay.end());
        int l = *x0, r = *xN, mid;

        while (l < r) {
            mid = l + (r - l) / 2;
            if (f(mid, bloomDay, m, k))
                r = mid;
            else
                l = mid + 1;
        }
        return l;
    }
};

auto init = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();

```
# A variant for the function f ||Use this runtime=59ms Beats 99.43%, Python version is slow but accepted

```C++ []
    bool f(int d, vector<int>& bloomDay, int m, int k) {
        int len = 0, bouquet = 0;
        for (int i = 0; i < n; i++) {
            while(i <n && bloomDay[i] <= d) {
                len++;
                if (len == k) {
                    bouquet++;
                    len = 0;
                }
                i++;
            } 
            if (i<n && bloomDay[i]>d) len = 0;

            if (bouquet >= m)
                return 1;
        }
        return bouquet >= m;
    }
```
```Python []
class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        n=len(bloomDay)
        if m*k>n: return -1

        def f(d):
            len, bouquet=0, 0
            i=0
            while i<n:
                while i<n and bloomDay[i]<=d:
                    len+=1
                    if len==k:
                        bouquet+=1
                        len=0
                    i+=1
                if i<n and bloomDay[i]>d: len=0
                if bouquet>m: return True
                i+=1
            return bouquet>=m

        l, r = min(bloomDay), max(bloomDay)
        while l < r:
            mid = l + (r - l) // 2
            if f(mid):
                r = mid
            else:
                l = mid + 1
        return l
        
```
# 3rd C++ function f
```
    bool f(int d, vector<int>& bloomDay, int m, int k) {
        int bouquet = 0;
        for (int i=0; i < n; i++) {
            int len=0;
            while(i<n && bloomDay[i]<= d) {
                len++;
                i++;
            }
            bouquet+=len/k;
            if (bouquet >= m)
                return 1;
        }
        return bouquet >= m;
    }
```