# Simple, O(1) in C++, Java & Python

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-iii/solutions/4266073/](https://leetcode.com/problems/distribute-candies-among-children-iii/solutions/4266073/)

---

# Intuition
Use maths.
child1 gets i candies, child2 gets x candies and child3 gets the remaining
and assume limit <= n.
We'll have
max(0, n - i - limit) <= x <= min(limit, n - i)
0 <= i <= limit

2 Cases.
 (1)0 <= i <= n - limit
        n - i - limit <= x <= limit
        We must have n - i - limit <= limit
        i >= n - limit - limit
        i <= n - limit
        i <= limit
        i >= 0
    
So for each i in [max(n - 2 * limit, 0), min(n - limit, limit)]
we have x can be in [n - i - limit, limit], we have excatly 
limit * 2 + i - n ways to distrubute all candies.

(2) i > n - limit
    i >= n - limit + 1
    i >= 0
    i <= limit
    0 <= x <= n - i
Similarily, for each i in [n - limit + 1, limit], x can be in [0, n - i]
So we have excatly n - i + 1 ways to distributed all candiles.

Use arithmetic sequence sum formular to get the result.



# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
C++
```
class Solution {
public:
    long long distributeCandies(int n, int limit) {
        long long r = 0;
        limit = min(limit, n);
        /*
        max(0, n - i - limit) <= x <= min(limit, n - i)
        0 <= i <= limit
        (1)0 <= i <= n - limit
        n - i - limit <= x <= limit
        We must have n - i - limit <= limit
        i >= n - limit - limit
        i <= n - limit
        i <= limit
        i >= 0
        num = limit + limit + i - n + 1
        
        (2) i > n - limit
        i >= n - limit + 1
        i >= 0
        i <= limit
        0 <= x <= n - i
        
        */
        const int x1 = max(0, n - limit - limit), y1 = min(n - limit, limit);
        if (x1 <= y1) {
            r += (limit + limit - n + 1LL) * (y1 - x1 + 1LL) + (x1 + y1) * (y1 - x1 + 1LL) / 2;
        }
        const int x2 = n - limit + 1, y2 = limit;
        if (x2 <= y2) {
            r += (n + 1LL) * (y2 - x2 + 1LL) - (x2 + y2) * (y2 - x2 + 1LL) / 2;
        }
        
        return r;
    }
};
```
Java
```
class Solution {
    public long distributeCandies(int n, int limit) {
        long r = 0;
        limit = Math.min(limit, n);
        /*
        max(0, n - i - limit) <= x <= min(limit, n - i)
        0 <= i <= limit
        (1)0 <= i <= n - limit
        n - i - limit <= x <= limit
        We must have n - i - limit <= limit
        i >= n - limit - limit
        i <= n - limit
        i <= limit
        i >= 0
        num = limit + limit + i - n + 1
        
        (2) i > n - limit
        i >= n - limit + 1
        i >= 0
        i <= limit
        0 <= x <= n - i
        
        */
        int x1 = Math.max(0, n - limit - limit), y1 = Math.min(n - limit, limit);
        if (x1 <= y1) {
            r += (limit + limit - n + 1L) * (y1 - x1 + 1L) + (x1 + y1) * (y1 - x1 + 1L) / 2;
        }
        int x2 = n - limit + 1, y2 = limit;
        if (x2 <= y2) {
            r += (n + 1L) * (y2 - x2 + 1L) - (x2 + y2) * (y2 - x2 + 1L) / 2;
        }
        
        return r;
    }
}
```

Python

```
class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        r = 0
        limit = min(limit, n)
        """
        max(0, n - i - limit) <= x <= min(limit, n - i)
        0 <= i <= limit
        (1) 0 <= i <= n - limit
        n - i - limit <= x <= limit
        We must have n - i - limit <= limit
        i >= n - limit - limit
        i <= n - limit
        i <= limit
        i >= 0
        num = limit + limit + i - n + 1
        
        (2) i > n - limit
        i >= n - limit + 1
        i >= 0
        i <= limit
        0 <= x <= n - i
        
        """
        x1 = max(0, n - limit - limit)
        y1 = min(n - limit, limit)
        if x1 <= y1:
            r += (limit + limit - n + 1) * (y1 - x1 + 1) + (x1 + y1) * (y1 - x1 + 1) // 2
        x2 = n - limit + 1
        y2 = limit
        if x2 <= y2:
            r += (n + 1) * (y2 - x2 + 1) - (x2 + y2) * (y2 - x2 + 1) // 2
        
        return r

```
