# Clear & straightforward logic, easy to follow & understand.

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5429003/](https://leetcode.com/problems/alternating-groups-i/solutions/5429003/)

---

# Intuition
- We need to identify groups of three contiguous tiles in a circular array where the middle tile is different from its neighbors.

# Approach
1. Iterate through the array and check for alternating groups in the linear part of the array.
2. Handle the circular nature by explicitly checking the edge cases where the group could wrap around the end of the array.
3. Use modulo arithmetic to simplify wrapping around the array.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)

# Code

```Java []
class Solution {
    public int numberOfAlternatingGroups(int[] colors) {
        int n = colors.length;
        if (n < 3) return 0;

        int ans = 0;
        for (int i = 0; i < n - 2; i++) {
            if (colors[i] == colors[i + 2] && colors[i] != colors[i + 1]) {
                ans++;
            }
        }

        if (colors[0] == colors[n - 2] && colors[0] != colors[n - 1]) {
            ans++;
        }

        if (colors[0] != colors[1] && colors[1] == colors[n - 1]) {
            ans++;
        }

        return ans;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors) {
        int n = colors.size();
        if (n < 3) return 0;

        int ans = 0;
        for (int i = 0; i < n - 2; ++i) {
            if (colors[i] == colors[i + 2] && colors[i] != colors[i + 1]) {
                ans++;
            }
        }

        if (colors[0] == colors[n - 2] && colors[0] != colors[n - 1]) {
            ans++;
        }

        if (colors[0] != colors[1] && colors[1] == colors[n - 1]) {
            ans++;
        }

        return ans;
    }
};
```
```Python []
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        n = len(colors)
        if n < 3:
            return 0

        ans = 0
        for i in range(n - 2):
            if colors[i] == colors[i + 2] and colors[i] != colors[i + 1]:
                ans += 1
        
        if colors[0] == colors[n - 2] and colors[0] != colors[n - 1]:
            ans += 1
        
        if colors[0] != colors[1] and colors[1] == colors[n - 1]:
            ans += 1
        
        return ans
```
```javascript []
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    const n = colors.length;
    if (n < 3) return 0;

    let ans = 0;
    for (let i = 0; i < n - 2; i++) {
        if (colors[i] === colors[i + 2] && colors[i] !== colors[i + 1]) {
            ans++;
        }
    }

    if (colors[0] === colors[n - 2] && colors[0] !== colors[n - 1]) {
        ans++;
    }

    if (colors[0] !== colors[1] && colors[1] === colors[n - 1]) {
        ans++;
    }

    return ans;
};
```
```Golang []
func numberOfAlternatingGroups(colors []int) int {
    n := len(colors)
    if n < 3 {
        return 0
    }

    ans := 0
    for i := 0; i < n-2; i++ {
        if colors[i] == colors[i+2] && colors[i] != colors[i+1] {
            ans++
        }
    }

    if colors[0] == colors[n-2] && colors[0] != colors[n-1] {
        ans++
    }

    if colors[0] != colors[1] && colors[1] == colors[n-1] {
        ans++
    }

    return ans
}
```
```Dart []
class Solution {
  int numberOfAlternatingGroups(List<int> colors) {
    int n = colors.length;
    if (n < 3) return 0;

    int ans = 0;
    for (int i = 0; i < n - 2; i++) {
      if (colors[i] == colors[i + 2] && colors[i] != colors[i + 1]) {
        ans++;
      }
    }

    if (colors[0] == colors[n - 2] && colors[0] != colors[n - 1]) {
      ans++;
    }

    if (colors[0] != colors[1] && colors[1] == colors[n - 1]) {
      ans++;
    }

    return ans;
  }
}
```
```C []
int numberOfAlternatingGroups(int* colors, int colorsSize) {
    int n = colorsSize;
    if (n < 3) return 0;

    int ans = 0;
    for (int i = 0; i < n - 2; ++i) {
        if (colors[i] == colors[i + 2] && colors[i] != colors[i + 1]) {
            ans++;
        }
    }

    if (colors[0] == colors[n - 2] && colors[0] != colors[n - 1]) {
        ans++;
    }

    if (colors[0] != colors[1] && colors[1] == colors[n - 1]) {
        ans++;
    }

    return ans;
}
```