# Coin Change problem Variant

**Author:** dinesh55
**Votes:** 146
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/2807155/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/2807155/)

---

```c++ 
// Please upvote if you like the approach \uD83D\uDE0A
```

##### This is similar to Coin change problem
<hr>
<b> Q] how is this similar ? </b>

Ans] Given we can append 0 `zero` number of times and 1 `one number of times`

so if zero is 4 then 0000 is considered one string and one is 3 then 111 is considered one string

now using these two strings we will have to make some new string that has a length between low and high inclusive

Now treat the  <b> length of final string </b> to make as a target that needs to be achieved

and the length of strings from which the final string <b> to be made as coin values  </b>

<hr>
<b> q] why will this work ? </b>

we can <b> `at once append` </b>  zero 0's or  one 1's to string . and our final objective is to make a length of string 
that lies in a range. ans is only dependent on  one and zero.

<hr/>

##### Conclusion :-

So all we have to do is to run a for loop from low to high and call the function that will return total number of ways to make a string of that length . And that is similar to coin change problem 

This top down approach will see all possible ways to get a score k
<hr>

#### code

```c++
#define mod 1000000007
class Solution {
public:
int score(int target, vector<int>& dp, int one, int zero)
{
	// if target is 0 that means this target can be made so return 1
	if (target == 0)
		return 1;
	// target < 0 cannot be made 
	if (target < 0)
		return 0;
	// if already computed eturn the value
	if (dp[target] != -1)
		return dp[target];
	long long sum;
	// target - a is adding 'a' 0's to the string
	// target - b is adding 'b' 1's to string 
	sum =  score(target - one, dp, one, zero) + score(target - zero, dp,one, zero);
	return dp[target] = (sum % (mod));
}
int countGoodStrings(int low, int high, int zero, int one)
{
	vector<int> dp(high + 1, -1);

	int ans = 0;
	// run a loop from low to high for every i get total number of ways to make that length
	for (int i = low; i <= high; i++)
	{
		ans = ((ans % mod) + ( score(i, dp, one, zero) % mod )) % mod;
	}
	return ans;
}
};
```
<hr>

#### bottom up
```c++
class Solution {
public:
    int countGoodStrings(int low, int high, int zero, int one) {
        vector<int> dp(high + 1);
        dp[0] = 1;
        int res = 0, mod = 1e9 + 7;
        for (int i = 1; i <= high; ++i) {
            // if we can add 0 string then add 
            if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod;
            // if we can add 1's string i.e i >= len of 1's string
            if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
            // if i is in between low and high add 
            if (i >= low) res = (res + dp[i]) % mod;
        }
        return res;
    }
};
```
`TC : O(high)  
SC :- O(high)` for both approaches
<hr>
Java :-

```java
class Solution {
    public int countGoodStrings(int low, int high, int zero, int one) {
        int dp[] = new int[high + 1], res = 0, mod = 1000000007;
        dp[0] = 1;
        for (int i = 1; i <= high; ++i) {
            // if we can add 0 string then add 
            if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % mod;
            // if we can add 1's string i.e i >= len of 1's string
            if (i >= one) dp[i] = (dp[i] + dp[i - one]) % mod;
            // if i is in between low and high add 
            if (i >= low) res = (res + dp[i]) % mod;
        }
        return res;
    }
}
```
