# [C++ / Go] Calculate the total points for getting to each position - O(n) time + O(1) space solution

**Author:** mikazuki4712
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4970188/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4970188/)

---

# Approach
- Calculate the total points for getting to each position.
- Iterate and return the first suitable position:
    - Suitable position `i`: $points[i] > totalPoints - points[i]$

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```C++ []
class Solution {
public:
    int minimumLevels(vector<int>& possible) {
        int n = possible.size();
        possible[0] = (possible[0] == 1) ? 1 : -1;
        for (int i = 1; i < n; i++)
            possible[i] = possible[i - 1] + ((possible[i] == 1) ? 1 : -1);

        for (int i = 0; i < n - 1; i++)
            if (possible[i] > possible[n - 1] - possible[i])
                return i + 1;

        return -1;
    }
};
```
```Go []
func minimumLevels(possible []int) int {
    n := len(possible)
    if possible[0] == 0 {
        possible[0] = -1
    } 

    for i := 1; i < n; i++ {
        if possible[i] == 1 {
            possible[i] = possible[i - 1] + 1
        } else {
            possible[i] = possible[i - 1] - 1
        }
    }

    for i := 0; i < n - 1; i++ {
        if possible[i] > possible[n - 1] - possible[i] {
            return i + 1
        }
    }

    return -1
}
```