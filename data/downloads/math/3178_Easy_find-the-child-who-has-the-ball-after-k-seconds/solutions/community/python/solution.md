# Easy Video Solution 🔥 || How to 🤔 in Interview || O(N)->O(1) 🔥

**Author:** ayushnemmaniwar12
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282027/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282027/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can derive a formula



# ***Easy Video Explanation***

https://youtu.be/lTD4AqpPxUA

    

# Code (Brute Force)


```C++ []
class Solution {
public:
    int numberOfChild(int n, int k) {
        int p = 0;
        int f=0,i=0;
        while(k>0) {
            while(k>0 && i<n-1) {
                i++;
                k--;
            }
            if(k==0)
                return i;
            while(k>0 && i>0) {
                i--;
                k--;
            }
            if(k==0)
                return i;
        }
        return 0;
    }
};
```
```python []
class Solution:
    def numberOfChild(self, n: int, k: int) -> int:
        i = 0
        while k > 0:
            while k > 0 and i < n - 1:
                i += 1
                k -= 1
            if k == 0:
                return i
            while k > 0 and i > 0:
                i -= 1
                k -= 1
            if k == 0:
                return i
        return 0

```
```Java []

class Solution {
    public int numberOfChild(int n, int k) {
        int i = 0;
        while (k > 0) {
            while (k > 0 && i < n - 1) {
                i++;
                k--;
            }
            if (k == 0) {
                return i;
            }
            while (k > 0 && i > 0) {
                i--;
                k--;
            }
            if (k == 0) {
                return i;
            }
        }
        return 0;
    }
}

```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(Max(N,k))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)


# Code (Optimized)


```C++ []
class Solution {
public:
    int numberOfChild(int n, int k) {
        n--; // Decrement n to simplify calculation (so range is now 0 to n-1)
        int rounds = k / n; // Calculate the number of complete back-and-forth trips
        int rem = k % n; // Calculate the remaining steps after the last complete trip

        if(rounds % 2 == 0) {
            // If the number of complete back-and-forth trips is even
            return rem; // The ball is passed forward from the start
        } else {
            // If the number of complete back-and-forth trips is odd
            return (n - rem); // The ball is passed backward from the end
        }
    }
};
```
```python []
class Solution:
    def numberOfChild(self, n: int, k: int) -> int:
        n -= 1 # Decrement n to simplify calculation (so range is now 0 to n-1)
        rounds = k // n # Calculate the number of complete back-and-forth trips
        rem = k % n # Calculate the remaining steps after the last complete trip

        if rounds % 2 == 0:
            # If the number of complete back-and-forth trips is even
            return rem # The ball is passed forward from the start
        else:
            # If the number of complete back-and-forth trips is odd
            return n - rem # The ball is passed backward from the end

```
```Java []
class Solution {
    public int numberOfChild(int n, int k) {
        n--; // Decrement n to simplify calculation (so range is now 0 to n-1)
        int rounds = k / n; // Calculate the number of complete back-and-forth trips
        int rem = k % n; // Calculate the remaining steps after the last complete trip

        if (rounds % 2 == 0) {
            // If the number of complete back-and-forth trips is even
            return rem; // The ball is passed forward from the start
        } else {
            // If the number of complete back-and-forth trips is odd
            return n - rem; // The ball is passed backward from the end
        }
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00