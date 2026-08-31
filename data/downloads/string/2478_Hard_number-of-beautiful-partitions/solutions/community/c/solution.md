# DP Basic to Prefix-Sum Optimization (O(K * N^2) to O(K * N))

**Author:** jigyansunanda
**Votes:** 41
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2831925/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2831925/)

---

### **State of DP:**
**dp[i][j] = # (number of) of ways to create `i` non-intersecting substrings using index from `0` to `j`**

### **Transition of DP:**
```cpp
// since we want our substring to be of length atleast minLength, it must start from atleast 
// (previous number of substrings * minLength) and end 
// at max index: end - minLength

for startingIndex = [ ((i - 1) * minLength) - 1,  end - minLength ]
			if (isPrime(startingIndex) and not isPrime(end)):
					dp[i][end] += dp[i-1][startingIndex-1]
```

### Base Case:
```
// for string of length 1 using s[0, j]
dp[1][j] = isPrime(s[0]) and not isPrime(s[j])
```

### **Time Complexity: O(K * N^2)**
```cpp
class Solution {
public:
    const long long mod = 1e9 + 7;
    unordered_set<char> p = {'2', '3', '5', '7'};

    bool isPrime(int x) {return (p.find(x) != p.end());}

    int beautifulPartitions(string s, int k, int minLength) {
        int n = s.size();
        vector<vector<long long>> dp(k + 1, vector<long long>(n, 0LL));
        for (int j = 0; j < n; ++j) {
            dp[1][j] = (isPrime(s[0]) and !isPrime(s[j]));
        }
        for (int i = 2; i <= k; ++i) {
            for (int end = (i * minLength) - 1; end < n; ++end) {
                if (isPrime(s[end])) continue;
                for (int start = ((i - 1) * minLength) - 1; start <= (end - minLength); ++start) { 
				// we will reduce this loop to O(1) using prefix sum calculation in solution below
                    if (isPrime(s[start + 1])) {
                        dp[i][end] = (dp[i][end] + dp[i - 1][start]) % mod;
                    }
                }
				
				// Notice in the inner-most for loop, we need sum of values in the column range [((i - 1) * minLength) - 1, (end - minLength)]
				// IF AND ONLY IF the next_index is capable of starting a valid substring
            }
        }
        return dp[k][n - 1];
    }
};
```


### **Prefix Sum Optimization**
Notice these `2` following facts:
1. `dp[i][j]` requires summation of only `dp[i-1][some_index]`. i.e. we only need some values of previous row to calculate current row
2. Those `some_index` are the indices which satisfies the condition of `isPrime(some_index + 1) == true`. 

```cpp
class Solution {
public:
    const long long mod = 1e9 + 7;
    unordered_set<char> p = {'2', '3', '5', '7'};

    bool isPrime(int x) {return (p.find(x) != p.end());}

    int beautifulPartitions(string s, int k, int minLength) {
        int n = s.size();
        vector<vector<long long>> dp(k + 1, vector<long long>(n, 0LL));
        for (int j = 0; j < n; ++j) {
            dp[1][j] = (isPrime(s[0]) and !isPrime(s[j]));
        }
        vector<long long> previous_row(n, 0);
        for (int i = 0; i + 1 < n; ++i) {
            if (isPrime(s[i + 1])) previous_row[i] = dp[1][i];  // update IFF next_index is prime and capable of starting a substring
            if (i - 1 >= 0) previous_row[i] = (previous_row[i] + previous_row[i - 1]) % mod;
        }
        for (int i = 2; i <= k; ++i) {
            vector<long long> current_row(n, 0LL);
            for (int end = (i * minLength) - 1; end < n; ++end) {
                if (isPrime(s[end])) continue;

                // optimization usage
                long long prefixsum = previous_row[end - minLength];
                int start = ((i - 1) * minLength) - 1;
                if (start - 1 >= 0) prefixsum = (prefixsum - previous_row[start - 1] + mod) % mod;
                dp[i][end] = (dp[i][end] + prefixsum) % mod;
                
                // update current_row's column only if the next_index is a prime and capable of starting a substring
                if (end + 1 < n and isPrime(s[end + 1])) current_row[end] = (current_row[end] + dp[i][end]) % mod;
            }
            // re-calclate prefix sum of current row dp values for each column
            for (int c = 1; c <= n - 1; ++c) {
                current_row[c] = (current_row[c] + current_row[c - 1]) % mod;
            }

            // swap previous_row dp values and current_row dp values. why ?
            // Because current row will become previous row for next row
            swap(previous_row, current_row);
        }
        return dp[k][n - 1];
    }
};
```

### **Time Complexity: O(N * K)**
### **Space Complexity: O(N * K)**