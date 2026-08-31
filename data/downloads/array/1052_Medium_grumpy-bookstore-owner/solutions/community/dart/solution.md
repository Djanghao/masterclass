# ✔️ Beats 100% - Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Dart - Sliding Window

**Author:** Cregan_wolf
**Votes:** 2
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5348158/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5348158/)

---

# Intuition
To maximize the number of satisfied customers, we need to account for both the naturally satisfied customers and those who can be made satisfied using the secret technique for a given period of time. The problem can be approached using a sliding window to find the optimal period for applying the secret technique.

# Approach
1. **Initial Satisfaction Calculation**:
   - Calculate the total satisfaction from customers who are not grumpy.
   
2. **Sliding Window Technique**:
   - Use a sliding window of size `m` to traverse through the list of customers.
   - Calculate the additional satisfaction that can be gained by applying the secret technique within the window.
   - Adjust the window to maintain its size and update the maximum satisfaction accordingly.
   
3. **Adjustments**:
   - When the window exceeds size `m`, move the left pointer of the window to the right.
   - If the customer at the left pointer was grumpy, subtract their satisfaction from the additional satisfaction count.

4. **Result**:
   - The result will be the maximum satisfaction achievable by using the secret technique optimally.

# Complexity
- Time complexity: $$O(n)$$, where \\(n\\) is the number of customers, as we traverse the list a constant number of times.
- Space complexity: $$O(1)$$, as we only use a few extra variables.

# Code
```C++ []
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxSatisfied(std::vector<int>& c, std::vector<int>& g, int m) {
        int t = 0, n = c.size();
        
        // Calculate initial satisfaction for non-grumpy periods
        for (int i = 0; i < n; ++i) {
            if (g[i] == 0) {
                t += c[i];
            }
        }

        int ans = t, o = 0;
        
        // Sliding window approach
        for (int i = 0, j = 0; j < n; ++j) {
            if (g[j] == 1) {
                o += c[j];
            }
            if (j - i + 1 > m) {
                if (g[i] == 1) {
                    o -= c[i];
                }
                ++i;
            }
            if (j - i + 1 == m) {
                ans = std::max(ans, t + o);
            }
        }
        return ans;
    }
};

```
```java []
import java.util.*;

class Solution {
    public int maxSatisfied(int[] c, int[] g, int m) {
        int t = 0, n = c.length;
        
        // Calculate initial satisfaction for non-grumpy periods
        for (int i = 0; i < n; ++i) {
            if (g[i] == 0) {
                t += c[i];
            }
        }

        int ans = t, o = 0;
        
        // Sliding window approach
        for (int i = 0, j = 0; j < n; ++j) {
            if (g[j] == 1) {
                o += c[j];
            }
            if (j - i + 1 > m) {
                if (g[i] == 1) {
                    o -= c[i];
                }
                ++i;
            }
            if (j - i + 1 == m) {
                ans = Math.max(ans, t + o);
            }
        }
        return ans;
    }
}

```
```python []
class Solution:
    def maxSatisfied(self, c: List[int], g: List[int], m: int) -> int:
        t=0
        n=len(c)
        for i in range(n):
            if g[i]==0:
                t+=c[i]
        ans=t
        i=0
        o=0
        for j in range(n):
            if g[j]==1:
                o+=c[j]
            if j-i+1>m:
                if g[i]==1:
                    o-=c[i]
                i+=1
            if j-i+1==m:
                ans=max(ans,t+o)
        return ans

```
```javascript []
function maxSatisfied(c, g, m) {
    let t = 0;
    const n = c.length;
    
    // Calculate initial satisfaction for non-grumpy periods
    for (let i = 0; i < n; i++) {
        if (g[i] === 0) {
            t += c[i];
        }
    }

    let ans = t;
    let o = 0;
    let i = 0;
    
    // Sliding window approach
    for (let j = 0; j < n; j++) {
        if (g[j] === 1) {
            o += c[j];
        }
        if (j - i + 1 > m) {
            if (g[i] === 1) {
                o -= c[i];
            }
            i++;
        }
        if (j - i + 1 === m) {
            ans = Math.max(ans, t + o);
        }
    }
    
    return ans;
}

```
```Dart []
class Solution {
  int maxSatisfied(List<int> c, List<int> g, int m) {
    int t = 0;
    int n = c.length;
    
    // Calculate initial satisfaction for non-grumpy periods
    for (int i = 0; i < n; i++) {
      if (g[i] == 0) {
        t += c[i];
      }
    }

    int ans = t;
    int o = 0;
    int i = 0;
    
    // Sliding window approach
    for (int j = 0; j < n; j++) {
      if (g[j] == 1) {
        o += c[j];
      }
      if (j - i + 1 > m) {
        if (g[i] == 1) {
          o -= c[i];
        }
        i++;
      }
      if (j - i + 1 == m) {
        ans = ans > t + o ? ans : t + o;
      }
    }
    
    return ans;
  }
}

```
```Go []
package main

func maxSatisfied(c []int, g []int, m int) int {
    t := 0
    n := len(c)
    
    // Calculate initial satisfaction for non-grumpy periods
    for i := 0; i < n; i++ {
        if g[i] == 0 {
            t += c[i]
        }
    }

    ans := t
    o := 0
    i := 0
    
    // Sliding window approach
    for j := 0; j < n; j++ {
        if g[j] == 1 {
            o += c[j]
        }
        if j - i + 1 > m {
            if g[i] == 1 {
                o -= c[i]
            }
            i++
        }
        if j - i + 1 == m {
            if t + o > ans {
                ans = t + o
            }
        }
    }
    
    return ans
}

```
```ruby []
def max_satisfied(c, g, m)
    t = 0
    n = c.size
    
    # Calculate initial satisfaction for non-grumpy periods
    for i in 0...n
        t += c[i] if g[i] == 0
    end

    ans = t
    o = 0
    i = 0
    
    # Sliding window approach
    for j in 0...n
        o += c[j] if g[j] == 1
        if j - i + 1 > m
            o -= c[i] if g[i] == 1
            i += 1
        end
        if j - i + 1 == m
            ans = [ans, t + o].max
        end
    end
    
    return ans
end

```
