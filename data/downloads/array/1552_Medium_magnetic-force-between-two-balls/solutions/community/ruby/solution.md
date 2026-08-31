# ✔️ Beats 100% - Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Dart - Binary search

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5341784/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5341784/)

---

# Intuition
The problem requires us to place `m` balls in such a way that the minimum distance between any two balls is maximized. This can be efficiently solved using binary search over the possible minimum distances.

# Approach
1. **Sort the positions**: To place the balls optimally, we start by sorting the positions.
2. **Binary Search**: We perform a binary search over the possible distances. The lower bound (`l`) is 1, and the upper bound (`h`) is the maximum possible distance between the first and the last position divided by (`m-1`).
3. **Feasibility Check**: For a given middle distance (`mid`) during the binary search, check if it's possible to place all `m` balls such that the minimum distance between any two balls is at least `mid`.
4. **Update Search Range**: Based on the feasibility check, update the search range to find the maximum minimum distance.

# Complexity
- Time complexity: $$O(n \\log (\	ext{max\\_distance}))$$, where `n` is the number of positions.
- Space complexity: $$O(1)$$, as we are using a constant amount of extra space.

# Step-By-Step Explanation
1. Sort the positions array.
2. Define the binary search range: `l` is 1, and `h` is the maximum possible minimum distance.
3. Perform binary search:
    - Calculate `mid`.
    - Check if placing `m` balls with at least `mid` distance is feasible.
    - If feasible, update `ans` and search in the upper half; otherwise, search in the lower half.
4. Return the maximum minimum distance found.

# Code
```C++ []
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

class Solution {
public:
    bool helper(const std::vector<int>& position, int mid, int m) {
        int c = 1;
        int n = position.size();
        int l = position[0];
        for (int i = 1; i < n; ++i) {
            if (position[i] - l >= mid) {
                c++;
                l = position[i];
            }
            if (c >= m) {
                return true;
            }
        }
        return false;
    }

    int maxDistance(std::vector<int>& position, int m) {
        std::sort(position.begin(), position.end());
        int n = position.size();
        int l = 1;
        int h = std::ceil((position[n - 1] - position[0]) / (m - 1));
        int ans = 0;
        while (l <= h) {
            int mid = (l + h) / 2;
            if (helper(position, mid, m)) {
                ans = mid;
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }
        return ans;
    }
};

int main() {
    Solution sol;
    std::vector<int> position = {1, 2, 3, 4, 7};
    int m = 3;
    std::cout << sol.maxDistance(position, m) << std::endl;
    return 0;
}

```
```Java []
import java.util.Arrays;

class Solution {
    private boolean helper(int[] position, int mid, int m) {
        int c = 1;
        int n = position.length;
        int l = position[0];
        for (int i = 1; i < n; i++) {
            if (position[i] - l >= mid) {
                c++;
                l = position[i];
            }
            if (c >= m) {
                return true;
            }
        }
        return false;
    }

    public int maxDistance(int[] position, int m) {
        Arrays.sort(position);
        int n = position.length;
        int l = 1;
        int h = (int)Math.ceil((double)(position[n - 1] - position[0]) / (m - 1));
        int ans = 0;
        while (l <= h) {
            int mid = (l + h) / 2;
            if (helper(position, mid, m)) {
                ans = mid;
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] position = {1, 2, 3, 4, 7};
        int m = 3;
        System.out.println(sol.maxDistance(position, m));
    }
}

```
```python []
class Solution:
    def helper(self,position: List[int], mid: int,m: int ) -> bool:
        c=1
        n=len(position)
        l=position[0]
        for i in range(1,n):
            if position[i]-l>=mid:
                c+=1
                l=position[i]
            if c>=m :
                return True
        return False

    def maxDistance(self, position: List[int], m: int) -> int:
        position.sort()
        n=len(position)
        l=1
        h=ceil((position[n-1]-position[0])/(m-1))
        ans=0
        while l<=h:
            mid=(l+h)//2
            if self.helper(position,mid,m):
                ans=mid
                l=mid+1
            else:
                h=mid-1
        return ans
```
```javascript []
class Solution {
    helper(position, mid, m) {
        let c = 1;
        let n = position.length;
        let l = position[0];
        for (let i = 1; i < n; i++) {
            if (position[i] - l >= mid) {
                c++;
                l = position[i];
            }
            if (c >= m) {
                return true;
            }
        }
        return false;
    }

    maxDistance(position, m) {
        position.sort((a, b) => a - b);
        let n = position.length;
        let l = 1;
        let h = Math.ceil((position[n - 1] - position[0]) / (m - 1));
        let ans = 0;
        while (l <= h) {
            let mid = Math.floor((l + h) / 2);
            if (this.helper(position, mid, m)) {
                ans = mid;
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }
        return ans;
    }
}

// Example usage:
const sol = new Solution();
const position = [1, 2, 3, 4, 7];
const m = 3;
console.log(sol.maxDistance(position, m));

```
```Dart []
import 'dart:math';

class Solution {
  bool helper(List<int> position, int mid, int m) {
    int c = 1;
    int n = position.length;
    int l = position[0];
    for (int i = 1; i < n; i++) {
      if (position[i] - l >= mid) {
        c++;
        l = position[i];
      }
      if (c >= m) {
        return true;
      }
    }
    return false;
  }

  int maxDistance(List<int> position, int m) {
    position.sort();
    int n = position.length;
    int l = 1;
    int h = (position[n - 1] - position[0]) ~/ (m - 1);
    int ans = 0;
    while (l <= h) {
      int mid = (l + h) ~/ 2;
      if (helper(position, mid, m)) {
        ans = mid;
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
    return ans;
  }
}

void main() {
  Solution sol = Solution();
  List<int> position = [1, 2, 3, 4, 7];
  int m = 3;
  print(sol.maxDistance(position, m)); // Output: 3
}

```
```Go []
package main

import (
	"fmt"
	"sort"
)

func helper(position []int, mid int, m int) bool {
	c := 1
	n := len(position)
	l := position[0]
	for i := 1; i < n; i++ {
		if position[i]-l >= mid {
			c++
			l = position[i]
		}
		if c >= m {
			return true
		}
	}
	return false
}

func maxDistance(position []int, m int) int {
	sort.Ints(position)
	n := len(position)
	l := 1
	h := (position[n-1] - position[0]) / (m - 1)
	ans := 0
	for l <= h {
		mid := (l + h) / 2
		if helper(position, mid, m) {
			ans = mid
			l = mid + 1
		} else {
			h = mid - 1
		}
	}
	return ans
}

func main() {
	position := []int{1, 2, 3, 4, 7}
	m := 3
	fmt.Println(maxDistance(position, m)) // Output: 3
}

```
```ruby []
class Solution
  def helper(position, mid, m)
    c = 1
    n = position.length
    l = position[0]
    (1...n).each do |i|
      if position[i] - l >= mid
        c += 1
        l = position[i]
      end
      return true if c >= m
    end
    false
  end

  def max_distance(position, m)
    position.sort!
    n = position.length
    l = 1
    h = ((position[n - 1] - position[0]).to_f / (m - 1)).ceil
    ans = 0
    while l <= h
      mid = (l + h) / 2
      if helper(position, mid, m)
        ans = mid
        l = mid + 1
      else
        h = mid - 1
      end
    end
    ans
  end
end

# Example usage:
sol = Solution.new
position = [1, 2, 3, 4, 7]
m = 3
puts sol.max_distance(position, m) # Output: 3

```
