# ✅☑[C++/Java/Python/JavaScript] || Beats 100% || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 3
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276822/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276822/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **f Function:**

    - The function `f` calculates the number of ways to distribute candies given the remaining candies `n` and the limit `L`.
    - It uses the formula: `max(0, maxv - minv + 1)`, where `minv` is the minimum possible value and `maxv` is the maximum possible value.
1. **distributeCandies Function:**

    - This function calculates the total number of ways to distribute candies by iterating through all possible cases.
    - For each case, it calls the `f` function and adds the result to the total count.



# Complexity
- *Time complexity:*
   $$O(L)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    using ll = long long;

    // Function to calculate the number of ways to distribute candies
    ll f(ll n, ll L) {
        // Calculate the minimum and maximum values based on the constraints
        ll minv = std::max(0ll, n - L);
        ll maxv = std::min(n, L);

        // Return the number of ways to distribute candies in the given range
        return std::max(0ll, maxv - minv + 1);
    }

    // Function to calculate the total number of ways to distribute candies
    int distributeCandies(int n, int L) {
        ll ans = 0;

        // Iterate through all possible cases
        for (int i = 0; i <= std::min(n, L); i++)
            ans += f((ll)(n - i), (ll)L);

        // Return the total number of ways to distribute candies
        return (int)ans;
    }
};


```

```C []


typedef long long ll;

// Function to calculate the number of ways to distribute candies
ll f(ll n, ll L) {
    // Calculate the minimum and maximum values based on the constraints
    ll minv = (n - L > 0) ? n - L : 0;
    ll maxv = (n < L) ? n : L;

    // Return the number of ways to distribute candies in the given range
    return (maxv - minv + 1 > 0) ? maxv - minv + 1 : 0;
}

// Function to calculate the total number of ways to distribute candies
int distributeCandies(int n, int L) {
    ll ans = 0;

    // Iterate through all possible cases
    for (int i = 0; i <= (n < L ? n : L); i++)
        ans += f((ll)(n - i), (ll)L);

    // Return the total number of ways to distribute candies
    return (int)ans;
}
}

```
```Java []

public class Solution {
    // Function to calculate the number of ways to distribute candies
    static long f(long n, long L) {
        // Calculate the minimum and maximum values based on the constraints
        long minv = Math.max(0, n - L);
        long maxv = Math.min(n, L);

        // Return the number of ways to distribute candies in the given range
        return Math.max(0, maxv - minv + 1);
    }

    // Function to calculate the total number of ways to distribute candies
    public static int distributeCandies(int n, int L) {
        long ans = 0;

        // Iterate through all possible cases
        for (int i = 0; i <= Math.min(n, L); i++)
            ans += f(n - i, L);

        // Return the total number of ways to distribute candies
        return (int) ans;
    }
}
```

```python3 []
class Solution:
    # Function to calculate the number of ways to distribute candies
    @staticmethod
    def f(n, L):
        # Calculate the minimum and maximum values based on the constraints
        minv = max(0, n - L)
        maxv = min(n, L)

        # Return the number of ways to distribute candies in the given range
        return max(0, maxv - minv + 1)

    # Function to calculate the total number of ways to distribute candies
    @staticmethod
    def distributeCandies(n, L):
        ans = 0

        # Iterate through all possible cases
        for i in range(min(n, L) + 1):
            ans += Solution.f(n - i, L)

        # Return the total number of ways to distribute candies
        return int(ans)


```

```javascript []
class Solution {
    // Function to calculate the number of ways to distribute candies
    static f(n, L) {
        // Calculate the minimum and maximum values based on the constraints
        const minv = Math.max(0, n - L);
        const maxv = Math.min(n, L);

        // Return the number of ways to distribute candies in the given range
        return Math.max(0, maxv - minv + 1);
    }

    // Function to calculate the total number of ways to distribute candies
    static distributeCandies(n, L) {
        let ans = 0;

        // Iterate through all possible cases
        for (let i = 0; i <= Math.min(n, L); i++) {
            ans += Solution.f(n - i, L);
        }

        // Return the total number of ways to distribute candies
        return parseInt(ans);
    }
}

```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---