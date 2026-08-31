# [C++ | Python] Binary Search + Greedy + Two Pointers + Simple Math With Explanation

**Author:** alexunxus
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357686/](https://leetcode.com/problems/minimum-time-to-eat-all-grains/solutions/3357686/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to find the minimal time threshold `t_0` to finish all the grains. As long as the time `t >= t_0`, it is always possible to finish all the grains if the hens act optimally. So binary search is taken into consideration.

When using binary search algorithm, the problem becomes "Given a deadline `t`, can hens finish all the grains?" 

Carefully thinking about the transformed problem, it is not hard to come up with a solution using greedy algorithm. The hen at the left most position is responsible for finishing all remaining grains on the left hand side of it and if time permits, it should move forward and finish as much grains on its right hand side as possible. If the leftmost hen cannot finish all remaining grains on its left-hand side, it is impossible for the remaining hens to do so. In this case we can simply return false.

To solve the transformed problem in linear time, we can first sort positions of the hens and the grains in non-decreasing order and consider the 1st, 2nd, 3rd, 4th... hens sequentially. We can use a "grain pointer" to keep the position of the left-most remaining grains so that each grain will be considered only once. 

# Approach
<!-- Describe your approach to solving the problem. -->
I adopt a binary search backbone to find out the minimal time `t` for all hens to finish the grains. So the problem is modified to "whether the task can be finished within time `t`".

As I mentioned in the intuition part, starting from the left-most hen, each hen act optimally(i.e. finish all the grains on its left-hand-side and move forward). 

### Case 1
There is no remaining grain on the left-hand-side of the hen. Then the hen simply move forward `t` and collect all the grains on the path. We should move the grain pointer forward accordingly.

### Case 2
There is at least one remaining grain on the LHS of the hen. There are two strategies to finish the grains on the left-hand-side and move forward.

1. first move forward `x` and turn around to collect all the grains on the left-hand-side,
2. first move backward, turn around, and then move forward `y` to collect the grains on the right-hand-side, or
3. impossible to collect the grain because `distance(G, H) > deadline t` so return false and terminate the algorithm.

```
Strategy 1: (H for hen, G for grains)
G          H-G-->
                |
<----------------
            <--->
              x

Strategy 2:
G<---------H
|
-------------G-->
            <--->
              y
```

Assume the distance between the hen and the leftmost remaining grain is `diff` and the deadline is `t`. Then the distance moving forward for the strategy 1 is `x=(t-diff)/2` and that for strategy 2 is `y=(t-diff*2)`.

It can be easily shown that 
1. stragegy 1 is better when `diff < t/3` and 
2. stragegy 2 for `diff >= t/3`.

After determining the maximal distancea a hen move, we can move the corresponding grain pointer to the next position that is beyound the reach of this hen. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Binary search backbone takes $O(\\log(M = 10^9))$
Sorting the hens/grains vectors. $O(m\\log m+n\\log n)$
Implementing the greedy algorithm and two pointer algorithm takes $O(m+n)$, where m is the length of the hens vector, n is the length of the grains vector.

So the whole algorithm takes $O(\\log (M)\\cdot(m+n) + (m\\log m+n\\log n)) = O(m(\\log m + \\log M) + n(\\log n + \\log M))$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(quicksort)$

# Code
C++
```
class Solution {
public:
    int minimumTime(vector<int>& hens, vector<int>& grains) {
        // grains on the lhs of the hens will be eaten first
        // let's do binary search
        ::sort(begin(hens), end(hens));
        ::sort(begin(grains), end(grains));
        int lo = 0, hi = 2e9 + 1;
        while (lo < hi) {
            int mid = (lo + hi)/2;
            if (can_finish(hens, grains, mid)) { hi = mid; }
            else                               { lo = mid+1; }
        }
        return lo;
    }

    bool can_finish(vector<int>& hens, vector<int>& grains, int t) {
        int n = grains.size(), r = 0;
        for (int hen: hens) {
            long long budget = t;
            // move backward
            if (hen > grains[r]) {
                if (hen - grains[r] > t) {return false;}
                long long diff = hen - grains[r];
                if (3*diff >= budget) {
                    budget = (budget - diff)/2;
                } else {
                    budget = budget - 2*diff;
                }
            }
            while (r < n && grains[r] - hen <= budget) {++r;}
            if (r == n) {return true;}
        }
        return false;
    }
};
```
Python
```
class Solution:
    def minimumTime(self, hens: List[int], grains: List[int]) -> int:
        def can_finish(h: List[int], g: List[int], t: int) -> bool:
            n = len(g)
            r = 0
            for hen in hens:
                if hen > grains[r]:
                    if hen - grains[r] > t:
                        return False 
                    diff = hen - grains[r]
                    budget = max((t - diff)//2, t - 2*diff)
                else:
                    budget = t 
                while r < n and grains[r] -  hen <= budget:
                    r += 1
                if r == n:
                    return True 
            return False

        hens = sorted(hens)
        grains = sorted(grains)
        
        lo, hi = 0, 2000000001
        while lo < hi:
            mid = (lo + hi)//2
            if can_finish(hens, grains, mid):
                hi = mid 
            else:
                lo = mid+1
        return lo
```