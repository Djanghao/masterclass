# Recursive, Iterative, Generic

**Author:** votrubac
**Votes:** 256
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/1248069/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/1248069/)

---

It may take you a while to come up with an efficient math-based solution. So, for an interview, I would start with a simple recursion - at least you will have something. It can help you see a pattern, and it will be easiser to develop an intuition for an improved solution. 

If you follow-up with an improved solution, and also generalize it for `k` eggs ([887. Super Egg Drop](https://leetcode.com/problems/super-egg-drop/)) - it would be a home run. This is how this progression might look like.

> Fun fact: this problem is decribed in the Wikipedia's article for [Dynamic Programming](https://en.wikipedia.org/w/index.php?title=Dynamic_programming).

#### Simple Recursion
In the solution below, we drop an egg from each floor and find the number of throws for these two cases:
- We lost an egg but we reduced the number of floors to `i`.
	- Since we only have one egg left, we can just return `i - 1` to check all floors.
- The egg did not break, and we reduced the number of floors to `n - i`.
	- Solve this recursively to get the number of throws for `n - i` floors.

This way, we find a floor for which the number of throws - maximum from these two cases - is minimal.

**C++**
```cpp
int dp[1001] = {};
class Solution {
public:
int twoEggDrop(int n) {
	if (dp[n] == 0)
		for (int i = 1; i <= n; ++i)
			dp[n] = min(dp[n] == 0 ? n : dp[n], 1 + max(i - 1, twoEggDrop(n - i)));
	return dp[n];
}
};
```
**Java**
```java
static int[] dp = new int[1001];
public int twoEggDrop(int n) {
    if (dp[n] == 0)
        for (int i = 1; i <= n; ++i)
            dp[n] = Math.min(dp[n] == 0 ? n : dp[n], 1 + Math.max(i - 1, twoEggDrop(n - i)));
    return dp[n];
}
```

**Python 3**
```python
class Solution:
    @cache
    def twoEggDrop(self, n: int) -> int:
        return min((1 + max(i - 1, self.twoEggDrop(n - i)) for i in range (1, n)), default = 1)
```
#### Iterative Computation
Let's take a look at the results from the first solution for different `n`:
```
1: 1
2: 2
4: 3
7: 4
11: 5
16: 6
22: 7
29: 8
37: 9
46: 10
```
As you see, with `m` drops, we can test up to 1 + 2 + ... + m floors. 

**C++**
```cpp
int twoEggDrop(int n) {
    int res = 1;
    while (n - res > 0)
        n -= res++;
    return res;    
}
```
... or, using a formula:

**C++**
```cpp
int twoEggDrop(int n) {
    int m = 1;
    while (m * (m + 1) / 2 < n)
        ++m;
    return m;    
}  
```

#### Inversion and Generic Solution
With the help of the iterative solution above, we see that it's easier to solve an inverse problem: given `m` total drops, and `k` eggs, how high can we go?

So with one egg and `m` drops, we can only test `m` floors.

With two eggs and `m` drops:
1. We drop one egg to test one floor.
2. We add the number of floors we can test with `m - 1` drops and 2 eggs (the egg did not break).
3. And we add `m - 1 ` floors we can test with the last egg (the egg broke).

Thus, the formula is:
```
dp[m] = 1 + dp[m - 1] + m - 1;
```
... which is in-line with the observation we made for the iterative solution above!

This can be easily generalized for `k` eggs:

```
dp[m][k] = 1 + dp[m - 1][k] + dp[m - 1][k - 1];
```

**C++**
```cpp
int dp[1001][3] = {};
class Solution {
public:
int twoEggDrop(int n, int k = 2) {
    int m = 0;
    while (dp[m][k] < n) {
        ++m;
        for (int j = 1; j <= k; ++j)
            dp[m][j] = dp[m - 1][j - 1] + dp[m - 1][j] + 1;
    }
    return m;  
}
};
```
As we only look one step back, we can reduce the memory ussage to O(k): 

**C++**
```cpp
int twoEggDrop(int n, int k = 2) {
    int dp[3] = {};
    int m = 0;
    while (dp[k] < n) {
        ++m;
        for (int j = k; j > 0; --j)
            dp[j] += dp[j - 1] + 1;
    }
    return m;
}
```