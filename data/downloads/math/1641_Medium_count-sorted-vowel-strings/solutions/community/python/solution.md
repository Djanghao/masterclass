# ✅🔥DP & 5 Variables Approach - C++/Java/Python

**Author:** dhruba-datta
**Votes:** 213
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/2027503/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/2027503/)

---

# Intuition

- Here we can observe a pattern to this problem.

```
		  a  e  i  o  u
    n=1   1  1  1  1  1  /a, e, i, o, u
    n=2   5  4  3  2  1  /a-> aa,ae,ai,ao,au | e-> ee,ei,eo,eu | i-> ii,io,iu | o-> oo,ou | u-> uu
    n=3   15 10 6  3  1
```

- If we observe from last there will be only 1 element which will start with u. Every other element will have the count of previous count + next element count. As example
in n=2, i will be previous i(1) + count of next element, o(2) \u2192 3
in n=3, e will be previous e(4) + count of next element, i(6) \u2192 10

# Approach 01
1. Using ***5 variables.***
1. Initialize variables a, e, i, o, and u to 1, representing the count of strings ending with each vowel.
2. Iterate from n-1 to 0 using a loop, updating the count for each vowel as follows:
   - Increment the count of strings ending with 'o' (o += u).
   - Increment the count of strings ending with 'i' (i += o).
   - Increment the count of strings ending with 'e' (e += i).
   - Increment the count of strings ending with 'a' (a += e).
3. After the loop, the sum of counts for all vowels (a+e+i+o+u) represents the total count of strings of length n that consist only of vowels and are lexicographically sorted.

# Complexity
- Time complexity: The time complexity of this solution is O(n), where algorithm iterates through the loop n times, and each iteration involves constant time operations.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(1) since we use a constant amount of space for variables regardless of the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int countVowelStrings(int n) {
        int a=1, e=1, i=1, o=1, u=1;
        
        while(--n){
            o += u;
            i += o;
            e += i;
            a += e;
        }
        
        return a+e+i+o+u;
    }
};
```
```Java []
class Solution {
    public int countVowelStrings(int n) {
        int a = 1, e = 1, i = 1, o = 1, u = 1;

        while (--n > 0) {
            o += u;
            i += o;
            e += i;
            a += e;
        }

        return a + e + i + o + u;
    }
}
```
```python []
class Solution(object):
    def countVowelStrings(self, n):
        a, e, i, o, u = 1, 1, 1, 1, 1

        while n > 1:
            o += u
            i += o
            e += i
            a += e
            n -= 1

        return a + e + i + o + u
```

---



# Approach  02

1. Using ***Dynamic Programing(dp).***
2. Initialize a vector dp of size 5 (representing the vowels) with all elements set to 1. This vector will store the count of strings ending with each vowel.
3. Iterate n-1 times (since we already have the count for n=1).
4. In each iteration, update the count in the dp vector by summing up the counts of strings ending with each vowel from right to left. This step corresponds to extending the strings by adding one more character.
5. After the iterations, the sum of counts in the dp vector represents the total number of strings of length n that can be formed using vowels.
6. Return the sum as the result.


# Complexity
- Time complexity: The time complexity of this solution is O(3n) - The algorithm iterates n-1 times, and each iteration involves updating the vector in constant time.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(1) since we use a constant amount of space for variables regardless of the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int countVowelStrings(int n) {
        vector<int> dp(5, 1);
        int ans = 0;
        
        while(--n){
            for(int i=3; i>=0; i--){
                dp[i] += dp[i+1];
            }
        }
        
        for(auto x:dp) ans += x;
        
        return ans;
    }
};
```
```Java []
class Solution {
    public int countVowelStrings(int n) {
        int[] dp = new int[]{1, 1, 1, 1, 1};
        int ans = 0;

        while (--n > 0) {
            for (int i = 3; i >= 0; i--) {
                dp[i] += dp[i + 1];
            }
        }

        for (int x : dp) {
            ans += x;
        }

        return ans;
    }
}
```
```python []
class Solution(object):
    def countVowelStrings(self, n):
        dp = [[0] * 5 for _ in range(n + 1)]

        for j in range(5):
            dp[1][j] = 1

        for i in range(2, n + 1):
            for j in range(5):
                for k in range(j, 5):
                    dp[i][j] += dp[i - 1][k]

        result = sum(dp[n])
        return result
```

---

> **Please upvote this solution**
>