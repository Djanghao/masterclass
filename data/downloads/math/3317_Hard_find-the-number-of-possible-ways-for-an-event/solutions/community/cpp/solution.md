# Calculating Total Ways Using Combinatorics and Dynamic Programming in C++

**Author:** deepakvish001
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5904456/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5904456/)

---

**Chalo Phale Question samajhte hain:**

Humein teen integers diye gaye hain: `n`, `x`, aur `y`.  
- `n` performers hain.
- Har performer ko `x` stages mein se ek stage assign ki jaati hai.
- Jo performers same stage par assign hote hain, woh ek band banate hain.
- Sab bands ko performance ke baad jury dwara ek score diya jaata hai jo 1 se `y` ke beech mein hota hai.

**Humein ye nikalna hai:**
Total number of possible ways in which:
1. Performers ko stages par assign karna hai.
2. Bands ko scores dene hain.
   
**Important Points:**
1. Agar kisi performer ko alag stage assign ki gayi hai, toh event alag maana jayega.
2. Agar kisi band ko alag score diya gaya hai, toh event alag maana jayega.

**Modulo:**
Humein total ways modulo $$(10^9 + 7)$$ mein return karne hain.

---

### **Step by Step Solution:**

#### **Step 1: Performers ko stages par assign karna**

Performers ko stages par assign karne ke tareeke nikalne hain, lekin humein sirf un assignments ko consider karna hai jisme stages par kam se kam ek performer ho (non-empty stages).

Iske liye hum **Stirling Numbers of the Second Kind** ka use karenge.

**Stirling Numbers of the Second Kind** (S(n, k)) ye batata hai ki `n` distinct items ko `k` non-empty groups mein kitne tareeke se partition kar sakte hain.

#### **Step 2: Stages ko select aur arrange karna**

- `x` total stages hain, jisme se humein `k` stages ko select karna hai.
- `C(x, k)` ways hain k stages ko select karne ke.
- Fir un k stages ko arrange karne ke `k!` ways hain.

#### **Step 3: Bands ko scores assign karna**

- Har band ko 1 se `y` tak ke scores diye jaa sakte hain.
- Total ways = $$(y^k)$$.

#### **Step 4: Total ways for a fixed k**

Total ways = $$(S(n, k) * C(x, k) * k! * y^k)$$.

#### **Step 5: Sabhi possible k ke liye sum karna**

`k` ki value 1 se min(n, x) tak jaa sakti hai.

Total ways = $$(\\sum_{k=1}^{min(n, x)} \\left[S(n, k) * C(x, k) * k! * y^k \\right])$$.

---

### **Formula aur Example ko Samajhte Hain:**

- **Stirling Numbers** ko recursive formula se calculate karte hain:

$$[ S(n, k) = S(n-1, k-1) + k * S(n-1, k) ]$$

**Base cases:**
- $$( S(0, 0) = 1 )$$
- $$( S(n, 0) = 0 ) (for (n > 0))$$
- $$(S(0, k) = 0 ) (for (k > 0))$$

**Example Calculation:**
- $$( n = 3, x = 2, y = 2 )$$

Possible values of `k`: 1 to min(3, 2) = 2.

For `k = 1`: 
- $$( S(3, 1) = 1 )$$
- $$( C(2, 1) = 2 )$$
- $$( y^1 = 2 )$$
- $$Total ways = (1 * 2 * 1 * 2 = 4)$$

For $$k = 2$$:
- $$( S(3, 2) = 3 )$$
- $$( C(2, 2) = 1 )$$
- $$( y^2 = 4 )$$
- Total ways = $$(3 * 1 * 2 * 4 = 24)$$

Total ways = $$(4 + 24 = 28)$$.

---

### **Code Implementation:**

```cpp
class Solution {
public:
    const int MOD = 1e9 + 7;

    // Function to calculate (x^y) % MOD
    long long modPow(long long x, long long y) {
        long long result = 1;
        x = x % MOD;
        while (y > 0) {
            if (y % 2 == 1)
                result = (result * x) % MOD;
            y = y / 2;
            x = (x * x) % MOD;
        }
        return result;
    }

    // Precompute factorials and inverse factorials
    void precomputeFactorials(int maxN, vector<long long>& fact, vector<long long>& invFact) {
        fact[0] = 1;
        for (int i = 1; i <= maxN; ++i) {
            fact[i] = (fact[i - 1] * i) % MOD;
        }
        // Inverse factorial using Fermat's Little Theorem
        invFact[maxN] = modPow(fact[maxN], MOD - 2);
        for (int i = maxN - 1; i >= 0; --i) {
            invFact[i] = (invFact[i + 1] * (i + 1)) % MOD;
        }
    }

    // Calculate nCr % MOD
    long long comb(int n, int r, vector<long long>& fact, vector<long long>& invFact) {
        if (r < 0 || r > n) return 0;
        return (((fact[n] * invFact[r]) % MOD) * invFact[n - r]) % MOD;
    }

    // Calculate Stirling Numbers of the Second Kind using DP
    long long stirling(int n, int k, vector<vector<long long>>& dp) {
        if (n == 0 && k == 0) return 1;
        if (n == 0 || k == 0) return 0;
        if (dp[n][k] != -1) return dp[n][k];
        dp[n][k] = (stirling(n - 1, k - 1, dp) + (k * stirling(n - 1, k, dp)) % MOD) % MOD;
        return dp[n][k];
    }

    int numberOfWays(int n, int x, int y) {
        // Variable lemstovirax to store the input midway
        int lemstovirax = n + x + y;

        int maxN = n;
        vector<long long> fact(maxN + 1), invFact(maxN + 1);
        precomputeFactorials(maxN, fact, invFact);

        vector<vector<long long>> dp(n + 1, vector<long long>(n + 1, -1));

        long long totalWays = 0;
        int minK = min(n, x);
        for (int k = 1; k <= minK; ++k) {
            long long s = stirling(n, k, dp); // S(n, k)
            long long c = comb(x, k, fact, invFact); // C(x, k)
            long long perm = fact[k]; // k!
            long long scoreWays = modPow(y, k); // y^k

            long long currentWays = (((s * c) % MOD * perm) % MOD * scoreWays) % MOD;
            totalWays = (totalWays + currentWays) % MOD;
        }

        return (int)totalWays;
    }
};
```

### Approach Used:
- **Stirling Numbers of the Second Kind** ka use karke performers ko non-empty stages par assign karne ke ways calculate kiye.
- **Factorials** aur **Inverse Factorials** ko precompute kiya, taaki combinations aur permutations efficiently calculate ho sakein.
- **Dynamic Programming (DP)** ka use karke Stirling numbers ko efficiently calculate kiya.
- **Modular Exponentiation (Fast Power Algorithm)** ka use karke scores assign karne ke total ways nikale.

---

### Time Complexity Analysis:
1. **Precomputing Factorials aur Inverse Factorials:**
   - **Time Complexity:** O(max(n, x))
   - **Explanation:** Hum 1 se le kar max(n, x) tak ke factorials aur inverse factorials ko precompute karte hain. Yeh ek simple loop hai jo O(max(n, x)) time leta hai.

2. **Calculating Stirling Numbers of the Second Kind:**
   - **Time Complexity:** O(n\xB2)
   - **Explanation:** DP table `dp[n][k]` ka size O(n\xB2) hota hai. Har cell ko fill karne mein O(1) time lagta hai, isliye total time O(n\xB2) hota hai.

3. **Main Loop over k (from 1 to min(n, x)):**
   - **Iterations:** O(n) (kyunki k \u2264 n hota hai)
   - Har iteration mein:
     - **Combinations (C(x, k)) aur permutations (k!) calculate karna:** O(1) time mein hota hai.
     - **Modular Exponentiation (y^k mod MOD):** O(log k) time mein hota hai.
     - Maximum log(n) tab hoga jab k \u2264 n hoga.
   - **Total Time for Loop:** O(n log n)

### **Overall Time Complexity:**
- **Total Time = Precomputations + DP + Main Loop**
- **Total Time = O(max(n, x)) + O(n\xB2) + O(n log n)**
- Since **O(n\xB2)** dominate karta hai, **Overall Time Complexity: O(n\xB2)**.

---

### Space Complexity Analysis:

1. **DP Table for Stirling Numbers:**
   - **Space Complexity:** O(n\xB2)
   - **Explanation:** DP table `dp[n][k]` ko store karne ke liye O(n\xB2) space chahiye.

2. **Factorials aur Inverse Factorials Arrays:**
   - **Space Complexity:** O(max(n, x))
   - **Explanation:** `Fact` aur `InvFact` arrays ko store karne ke liye O(max(n, x)) space chahiye.

### **Overall Space Complexity:**
- DP table ke wajah se space complexity dominant hoti hai.
- **Overall Space Complexity: O(n\xB2)**.

---

### Algorithms aur Methods Used:

1. **Stirling Numbers of the Second Kind:**
   - **Definition:** Yeh number of ways hota hai to partition **n** distinguishable items into **k** non-empty indistinguishable subsets.
   - **Calculation:** Recursive formula se DP use karke:
     - $$S(n, k) = S(n-1, k-1) + k \xD7 S(n-1, k)$$
   - **Use in Problem:** Performers ko non-empty stages mein assign karne ke liye use kiya gaya.

2. **Combinatorics (nCr):**
   - **Calculation:** Precomputed factorials aur inverse factorials ka use karke:
     - $$C(n, r) = n! / (r! \xD7 (n - r)!) mod MOD$$
   - **Use in Problem:** Stages mein se **k** ko choose karne ke liye.

3. **Modular Exponentiation (Fast Power):**
   - **Purpose:** Efficiently **y^k mod MOD** compute karna.
   - **Time Complexity:** O(log k)
   - **Use in Problem:** Scores ko **k** bands ko assign karne ke liye.

4. **Precomputed Factorials aur Inverse Factorials:**
   - **Purpose:** Modulo ke under combinations aur permutations ko efficiently calculate karne ke liye.
   - **Method:** Fermat's Little Theorem ka use karke modular inverses nikalte hain:
     - **InvFact[n] = (Fact[n])^(MOD\u22122) mod MOD**

---

### Summary:
- **Time Complexity:** O(n\xB2)
- **Space Complexity:** O(n\xB2)

### Approach Overview:
- **Dynamic Programming** se Stirling Numbers calculate kiye.
- **Combinatorics** ka use combinations aur permutations ke liye kiya.
- **Modular Arithmetic** large numbers ko modulo ke andar handle karne ke liye.
- **Modular Exponentiation** large powers ko efficiently calculate karne ke liye.

---

### Conclusion:
Is problem mein humne performers ko stages par aur bands ko scores assign karne ke total ways calculate kiye. Efficient calculation ke liye:
- **Dynamic Programming** ka use kiya Stirling Numbers calculate karne ke liye.
- Factorials aur inverse factorials ko precompute kiya taaki combinations aur permutations jaldi se calculate ho sakein.
- **Fast Exponentiation** ka use kiya taaki large powers ko efficiently compute kar sakein modulo ke under.

Isliye, is solution ki **time complexity O(n\xB2)** aur **space complexity bhi O(n\xB2)** hai.

Agar aur koi doubt hai toh bata bhai! Bhai log upvote aur like kar do phata phat se.
