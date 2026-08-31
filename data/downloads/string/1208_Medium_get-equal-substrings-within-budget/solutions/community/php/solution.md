# ✅  Beats 100% | ✅ Working 25.10.2024

**Author:** Piotr_Maminski
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5964634/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5964634/)

---

```python3 []
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        # Get length of input strings (they are guaranteed to be equal length)
        n = len(s)
        
        # Create array of transformation costs between characters at each position
        # ord() converts character to ASCII value, abs() gets positive difference
        costs = [abs(ord(s[i]) - ord(t[i])) for i in range(n)]
        
        # Initialize variables for sliding window approach:
        curr_sum = 0    # Tracks current cost within window
        max_length = 0  # Stores maximum valid window length found
        left = 0        # Left pointer of sliding window
        
        # Right pointer moves through string, expanding window
        for right in range(n):
            # Add cost of new character to window sum
            curr_sum += costs[right]
            
            # If window cost exceeds maxCost, shrink window from left
            # until we're back under maxCost
            while curr_sum > maxCost and left <= right:
                curr_sum -= costs[left]
                left += 1
            
            # Current window is valid, update max_length if current window is larger
            # Window size is (right - left + 1)
            max_length = max(max_length, right - left + 1)
        
        # Return the length of longest valid substring found
        return max_length
```
```cpp []
class Solution {
public:
    // Function to find the longest substring that can be transformed within maxCost
    static int equalSubstring(string& s, string& t, int maxCost) {
        // Length of input strings
        const int n = s.size();
        
        // Two pointers for sliding window
        int l = 0, r;
        
        // Track current cost and max length found
        int cost = 0, len = 0;

        // First pass: Try to include as many characters as possible from start
        for (r = 0; r < n; r++) {
            // Add cost of transforming current character
            cost += abs(s[r]-t[r]);
            
            // If cost exceeds maxCost, undo last addition and break
            if (cost > maxCost) {
                cost -= abs(s[r]-t[r]);
                break;
            }
        }

        // If we reached end of string and cost is acceptable,
        // entire string can be transformed
        if (r == n && cost <= maxCost) return n;
        
        // Store the length of first valid window
        len = r;

        // Second pass: Sliding window approach
        for (; r < n; r++) {
            // Add cost of including new character
            cost += abs(s[r]-t[r]);
            
            // While cost exceeds maxCost, shrink window from left
            while (cost > maxCost) {
                cost -= abs(s[l]-t[l]);
                l++;
            }
            
            // Update maximum length if current window is larger
            len = max(len, r-l+1);
        }
        
        return len;
    }
};

// Lambda function for I/O optimization
auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
```java []
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        // Length of input strings
        final int n = s.length();
        
        // Two pointers for sliding window
        int l = 0, r;
        
        // Track current cost and max length found
        int cost = 0, len = 0;
        
        // First pass: Try to include as many characters as possible from start
        for (r = 0; r < n; r++) {
            // Add cost of transforming current character
            cost += Math.abs(s.charAt(r) - t.charAt(r));
            
            // If cost exceeds maxCost, undo last addition and break
            if (cost > maxCost) {
                cost -= Math.abs(s.charAt(r) - t.charAt(r));
                break;
            }
        }
        
        // If we reached end of string and cost is acceptable,
        // entire string can be transformed
        if (r == n && cost <= maxCost) return n;
        
        // Store the length of first valid window
        len = r;
        
        // Second pass: Sliding window approach
        for (; r < n; r++) {
            // Add cost of including new character
            cost += Math.abs(s.charAt(r) - t.charAt(r));
            
            // While cost exceeds maxCost, shrink window from left
            while (cost > maxCost) {
                cost -= Math.abs(s.charAt(l) - t.charAt(l));
                l++;
            }
            
            // Update maximum length if current window is larger
            len = Math.max(len, r - l + 1);
        }
        
        return len;
    }
}
```
```csharp []
public class Solution {
    public int EqualSubstring(string s, string t, int maxCost) {
        // Length of input strings
        int n = s.Length;
        
        // Two pointers for sliding window
        int l = 0, r;
        
        // Track current cost and max length found
        int cost = 0, len = 0;
        
        // First pass: Try to include as many characters as possible from start
        for (r = 0; r < n; r++) {
            // Add cost of transforming current character
            cost += Math.Abs(s[r] - t[r]);
            
            // If cost exceeds maxCost, undo last addition and break
            if (cost > maxCost) {
                cost -= Math.Abs(s[r] - t[r]);
                break;
            }
        }
        
        // If we reached end of string and cost is acceptable,
        // entire string can be transformed
        if (r == n && cost <= maxCost) return n;
        
        // Store the length of first valid window
        len = r;
        
        // Second pass: Sliding window approach
        for (; r < n; r++) {
            // Add cost of including new character
            cost += Math.Abs(s[r] - t[r]);
            
            // While cost exceeds maxCost, shrink window from left
            while (cost > maxCost) {
                cost -= Math.Abs(s[l] - t[l]);
                l++;
            }
            
            // Update maximum length if current window is larger
            len = Math.Max(len, r - l + 1);
        }
        
        return len;
    }
}
```
```golang []
package solution

type Solution struct{}

func (s *Solution) equalSubstring(s string, t string, maxCost int) int {
    n := len(s)
    l, r := 0, 0
    cost := 0
    length := 0

    // First pass: Try to include as many characters as possible from start
    for r = 0; r < n; r++ {
        cost += abs(int(s[r]) - int(t[r]))
        
        if cost > maxCost {
            cost -= abs(int(s[r]) - int(t[r]))
            break
        }
    }

    if r == n && cost <= maxCost {
        return n
    }
    
    length = r

    // Second pass: Sliding window approach
    for ; r < n; r++ {
        cost += abs(int(s[r]) - int(t[r]))
        
        for cost > maxCost {
            cost -= abs(int(s[l]) - int(t[l]))
            l++
        }
        
        if r-l+1 > length {
            length = r - l + 1
        }
    }
    
    return length
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
```php []
class Solution {
    /**
     * @param String $s
     * @param String $t
     * @param Integer $maxCost
     * @return Integer
     */
    function equalSubstring($s, $t, $maxCost) {
        // Length of input strings
        $n = strlen($s);
        
        // Two pointers for sliding window
        $l = 0;
        
        // Track current cost and max length found
        $cost = 0;
        $len = 0;
        
        // First pass: Try to include as many characters as possible from start
        for ($r = 0; $r < $n; $r++) {
            // Add cost of transforming current character
            $cost += abs(ord($s[$r]) - ord($t[$r]));
            
            // If cost exceeds maxCost, undo last addition and break
            if ($cost > $maxCost) {
                $cost -= abs(ord($s[$r]) - ord($t[$r]));
                break;
            }
        }
        
        // If we reached end of string and cost is acceptable,
        // entire string can be transformed
        if ($r == $n && $cost <= $maxCost) return $n;
        
        // Store the length of first valid window
        $len = $r;
        
        // Second pass: Sliding window approach
        for (; $r < $n; $r++) {
            // Add cost of including new character
            $cost += abs(ord($s[$r]) - ord($t[$r]));
            
            // While cost exceeds maxCost, shrink window from left
            while ($cost > $maxCost) {
                $cost -= abs(ord($s[$l]) - ord($t[$l]));
                $l++;
            }
            
            // Update maximum length if current window is larger
            $len = max($len, $r - $l + 1);
        }
        
        return $len;
    }
}
```
### Complexity 
- Time complexity: O(n)

- Space complexity: O(n)

![image.png](./images/0.png)