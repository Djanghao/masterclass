# Beat 100% runtime and memory, practically faster than using hash map

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/5214030/](https://leetcode.com/problems/number-of-boomerangs/solutions/5214030/)

---

# Result
![image.png](./images/0.png)


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Theoretically this approach is slower than using hashmap which has TC of $$O(n^2)$$. But maybe practically faster due to that accessing array is faster than accessing hashmap

# Approach
Use 2 pointers to count number of boomerangs
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2*ln(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

import "slices"

func numberOfBoomerangs(points [][]int) int {
    n := len(points)
    distanceSquare := make([]int, n)
    ans := 0

    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            distanceSquare[j] = (points[i][0] - points[j][0])*(points[i][0] - points[j][0]) + (points[i][1] - points[j][1])*(points[i][1] - points[j][1])
        }
        slices.Sort(distanceSquare)
        prevDistance := 0
        cnt := 0
        for end := 1; end < n; end++ {
            if distanceSquare[end] == prevDistance {
                ans += 2*cnt
                cnt++
            } else {
                cnt = 1
                prevDistance = distanceSquare[end]
            }
        }
    }

    return ans
}
```