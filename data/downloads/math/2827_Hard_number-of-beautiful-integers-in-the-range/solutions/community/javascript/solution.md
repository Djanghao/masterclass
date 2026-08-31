# Very Easy Intuition & Approach 🤷 || 6D Digit DP ✅✅ || C++, Java, Python, JavaScript

**Author:** the_last_uchiha
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/5990715/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/5990715/)

---

# Intuition and approach \uD83D\uDCA1:

Since a brute-force approach would be inefficient given the large possible range, we can leverage digit dynamic programming to calculate the count of beautiful numbers up to each bound efficiently. The key is to systematically explore all possible numbers in the range by analyzing each digit from most significant to least significant.

Don't get overwhelmed by the term **"Digit DP"** \u2014 I'll simplify the solution for you step-by-step. Read on below \u2B07\uFE0F

### Understanding the Recursive Function \uD83D\uDD04

The core of this solution uses **recursive depth-first exploration** with **stateful memoization (DP)** to track each possible way of forming numbers from `low` to `high` that are divisible by `k` and have an equal number of even and odd digits. Here\u2019s how each parameter and transition works:

### Recursive Function Parameters (states):

1. **`i` (Current Index)**: Tracks the current digit position in the number string `s`.
2. **`tight` (Boundary Control)**: Determines if we\u2019re constrained by the current boundary digit (when we are at the same position as the input number\u2019s digit). This lets us explore both flexible (0-9) and constrained (0 to the current digit) choices.
3. **`l` (Leading Zero Check)**: Tracks whether we\u2019re still dealing with leading zeros.
4. **`even` and `odd` (Even and Odd Counts)**: Counters that track the number of even and odd digits in the number being constructed.
5. **`remainder` (Overall sum's remainder with `k` so far)**: Stores the current remainder when the number (up to this digit) is divided by `k`, which we use to ensure divisibility (we don't have to store entire number as we are just checking only the divisibility with `k`).

---

### Transition and State Updates \uD83D\uDD04\u27A1\uFE0F :

For each digit position, the function attempts to set each possible digit (`dig`) within the allowed range and then recursively explores the resulting states. Here\u2019s how each parameter gets updated:

1. **Set Limit for Current Digit (`lmt`)**:
   - If `tight` is `true`, then `lmt` is set to the current digit in `s` (i.e., `s[i] - '0'`).
   - If `tight` is `false`, `lmt` is set to `9`, allowing any digit from `0-9`.

2. **Loop Through All Possible Digits (0 to `lmt`)**:
   - For each possible digit (`dig`) in the current position, we recursively update parameters and make a **state transition** by calling `rec()` with these updated values:

   - **Update `tight`**: 
     - `tight && (dig == lmt)`: If the current digit `dig` matches `lmt`, `tight` remains `true`, meaning we\u2019re still constrained by the boundary. If `dig < lmt`, `tight` is set to `false`, allowing freedom in subsequent digits.

   - **Update `l` (Leading Zero)**: 
     - `l && (dig == 0)`: If `l` is `true` and `dig` is `0`, we\u2019re still in the leading zero phase.
     - If `dig` is not `0`, `l` is set to `false`, and we start counting the digit for parity (even or odd).

   - **Update `even` and `odd` Counters**:
     - If `dig` is even (`!(dig & 1)`), `even` is incremented; if `dig` is odd (`dig & 1`), `odd` is incremented. However, leading zeros (when `l` is true) do not contribute to even or odd counts.

   - **Update `remainder`**:
     - `(((int)pow(10, s.size() - i - 1) * dig) + remainder) % k`: 
       - This expression updates the remainder by adding the current digit\u2019s contribution and taking modulo `k` to ensure divisibility.

3. **Base Case Check**:
   - When `i` reaches the end of the number (`i >= s.size()`), we check if:
     - `remainder == 0` (the number formed is divisible by `k`)
     - `even == odd` (equal counts of even and odd digits)
   - If both conditions are met, we return `1` for this path; otherwise, we return `0`.

---

### Memoization and Caching \uD83D\uDCE6

To avoid recalculating states, we use a DP array `dp[i][tight][l][even][odd][remainder]`:
- Each unique combination of `i`, `tight`, `l`, `even`, `odd`, and `remainder` represents a distinct state.
- If we\u2019ve already calculated the result for this state, we retrieve it from `dp` instead of recalculating, ensuring our solution runs efficiently.

---

### Full Solution Code with Explanation Inline

```cpp []
class Solution {
public:
    int dp[10][2][2][10][10][20]; // 6D DP array to store results for state (i, tight, l, even, odd, remainder)
    int k;
    int rec(string &s, int i, bool tight, bool l, int even, int odd, int remainder) {
        // Base case: Check divisibility and parity counts when we reach the end of the string
        if (i >= s.size()) return (remainder == 0) && (even == odd);

        // Memoization
        if (dp[i][tight][l][even][odd][remainder] != -1) 
            return dp[i][tight][l][even][odd][remainder];

        // Set the limit for the current digit based on the tight condition
        int lmt = tight ? s[i] - '0' : 9;
        int ans = 0;

        // Iterate over all possible digits for the current position
        for (int dig = 0; dig <= lmt; dig++) {
            // Recursive call with updated parameters:
            ans += rec(
                s, 
                i + 1,                                // Traverse to next digit state
                tight && (dig == lmt),                // Update tight if digit matches the limit
                l && (dig == 0),                      // Stay in leading zero phase if dig is 0
                even + (dig == 0 ? !l : !(dig & 1)),  // Update even count if dig is even (non-leading 0)
                odd + (dig & 1),                      // Update odd count if dig is odd
                (((int)pow(10, s.size() - i - 1) * dig) + remainder) % k // Update remainder
            );
        }
        
        // Caching
        return dp[i][tight][l][even][odd][remainder] = ans;
    }

    // Main function to calculate the count of beautiful integers in [l, r]
    int numberOfBeautifulIntegers(int l, int r, int k) {
        this->k = k;

        // Calculate beautiful numbers from 1 to l-1
        string s = to_string(l - 1);
        memset(dp, -1, sizeof(dp));
        int ansl = rec(s, 0, 1, 1, 0, 0, 0);

        // Calculate beautiful numbers from 1 to r
        s = to_string(r);
        memset(dp, -1, sizeof(dp));
        return rec(s, 0, 1, 1, 0, 0, 0) - ansl;
    }
};
```
```python []
class Solution:
    def numberOfBeautifulIntegers(self, l: int, r: int, k: int) -> int:
        self.k = k
        self.dp = {}  # Using dictionary of 6D tuple for Python memoization
        
        def rec(s: str, i: int, tight: bool, l: bool, even: int, odd: int, remainder: int) -> int:
            # Base case: Check divisibility and parity counts when we reach the end of the string
            if i >= len(s):
                return 1 if remainder == 0 and even == odd else 0
            
            # Create state tuple for memoization
            state = (i, tight, l, even, odd, remainder)
            
            # Memoization
            if state in self.dp:
                return self.dp[state]
            
            # Set the limit for the current digit based on the tight condition
            lmt = int(s[i]) if tight else 9
            ans = 0
            
            # Iterate over all possible digits for the current position
            for dig in range(lmt + 1):
                # Recursive call with updated parameters
                ans += rec(
                    s,
                    i + 1,                                            # Traverse to next digit state
                    tight and (dig == lmt),                          # Update tight if digit matches the limit
                    l and (dig == 0),                                # Stay in leading zero phase if dig is 0
                    even + (not l if dig == 0 else not (dig & 1)),   # Update even count if dig is even (non-leading 0)
                    odd + (dig & 1),                                 # Update odd count if dig is odd
                    (pow(10, len(s) - i - 1) * dig + remainder) % k  # Update remainder
                )
            
            # Caching
            self.dp[state] = ans
            return ans
        
        # Calculate beautiful numbers from 1 to l-1
        s = str(l - 1)
        self.dp.clear()
        ansl = rec(s, 0, 1, 1, 0, 0, 0)
        
        # Calculate beautiful numbers from 1 to r
        s = str(r)
        self.dp.clear()
        return rec(s, 0, 1, 1, 0, 0, 0) - ansl
```
```java []
class Solution {
    int[][][][][][] dp; // 6D DP array to store results for state (i, tight, l, even, odd, remainder)
    int k;
    String s;
    
    private void init() {
        for(int i = 0; i < 10; i++)
            for(int t = 0; t < 2; t++)
                for(int l = 0; l < 2; l++)
                    for(int e = 0; e < 10; e++)
                        for(int o = 0; o < 10; o++)
                            Arrays.fill(dp[i][t][l][e][o], -1);
    }
    
    private int rec(int i, int tight, int l, int even, int odd, int remainder) {
        // Base case: Check divisibility and parity counts when we reach the end of the string
        if (i >= s.length()) return (remainder == 0) && (even == odd) ? 1 : 0;
        
        // Memoization
        if (dp[i][tight][l][even][odd][remainder] != -1)
            return dp[i][tight][l][even][odd][remainder];
            
        // Set the limit for the current digit based on the tight condition
        int lmt = tight == 1 ? s.charAt(i) - '0' : 9;
        int ans = 0;
        
        // Iterate over all possible digits for the current position
        for (int dig = 0; dig <= lmt; dig++) {
            // Recursive call with updated parameters:
            ans += rec(
                i + 1,                                            // Traverse to next digit state
                tight == 1 && (dig == lmt) ? 1 : 0,              // Update tight if digit matches the limit
                l == 1 && (dig == 0) ? 1 : 0,                    // Stay in leading zero phase if dig is 0
                even + (dig == 0 ? (l == 0 ? 1 : 0) : ((dig & 1) == 0 ? 1 : 0)), // Update even count if dig is even (non-leading 0)
                odd + ((dig & 1) == 1 ? 1 : 0),                  // Update odd count if dig is odd
                (int)(((long)Math.pow(10, s.length() - i - 1) * dig) + remainder) % k // Update remainder
            );
        }
        
        // Caching
        return dp[i][tight][l][even][odd][remainder] = ans;
    }
    
    public int numberOfBeautifulIntegers(int l, int high, int k) {
        this.k = k;
        dp = new int[10][2][2][10][10][20];
        
        // Calculate beautiful numbers from 1 to l-1
        s = String.valueOf(l - 1);
        init();
        int ansl = rec(0, 1, 1, 0, 0, 0);
        
        // Calculate beautiful numbers from 1 to high
        s = String.valueOf(high);
        init();
        return rec(0, 1, 1, 0, 0, 0) - ansl;
    }
}
```
```javascript []
/**
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function(l, r, k) {
    // Using Map of 6 state's string for memoization
    let dp = new Map();
    
    const rec = (s, i, tight, l, even, odd, remainder) => {
        // Base case: Check divisibility and parity counts when we reach the end of the string
        if (i >= s.length) return (remainder === 0) && (even === odd) ? 1 : 0;
        
        // Create state string for memoization
        const state = `${i},${tight},${l},${even},${odd},${remainder}`;
        
        // Memoization
        if (dp.has(state)) return dp.get(state);
        
        // Set the limit for the current digit based on the tight condition
        const lmt = tight ? parseInt(s[i]) : 9;
        let ans = 0;
        
        // Iterate over all possible digits for the current position
        for (let dig = 0; dig <= lmt; dig++) {
            // Recursive call with updated parameters:
            ans += rec(
                s,
                i + 1,                                            // Traverse to next digit state
                tight && (dig === lmt),                          // Update tight if digit matches the limit
                l && (dig === 0),                                // Stay in leading zero phase if dig is 0
                even + (dig === 0 ? !l : !(dig & 1)),           // Update even count if dig is even (non-leading 0)
                odd + (dig & 1),                                 // Update odd count if dig is odd
                ((Math.pow(10, s.length - i - 1) * dig) + remainder) % k // Update remainder
            );
        }
        
        // Caching
        dp.set(state, ans);
        return ans;
    };
    
    // Calculate beautiful numbers from 1 to l-1
    let s = (l - 1).toString();
    dp.clear();
    const ansl = rec(s, 0, 1, 1, 0, 0, 0);
    
    // Calculate beautiful numbers from 1 to r
    s = r.toString();
    dp.clear();
    return rec(s, 0, 1, 1, 0, 0, 0) - ansl;
};
```
---

# Complexity \uD83D\uDCCA
- **Time complexity**: The time complexity is approximately $ O(d \	imes 2 \	imes 2 \	imes 10 \	imes 10 \	imes k) $, where:
  - $ d $: Number of digits in the upper bound (`high`), at most 10.
  - $ k $: Given divisor, up to 20.
  
  This complexity is feasible given the constraints.

- **Space complexity**: The space complexity is also $ O(d \	imes 2 \	imes 2 \	imes 10 \	imes 10 \	imes k) $ due to the 6D DP array used to memoize results for each possible state.

