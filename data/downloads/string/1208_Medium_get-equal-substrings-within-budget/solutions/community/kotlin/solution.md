# Easy to Understand | Simple | Clean | Crisp Code | Beats 90% | C++ | Java | Python | Kotlin

**Author:** Don007
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5221836/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5221836/)

---

# Problem Statement
<!-- Describe your first thoughts on how to solve this problem. -->
Given 2 strings. Find the longest possible Substring in both of them which can be same after applying some operations on String **s** less than **maxCost**.

# Intuition and Approach
<!-- Describe your approach to solving the problem. -->
Here, We need to find the **Longest Possible Substring** which is present in both the Strings **s** and **t**. 

So, If we think greedily then we will try to perform all operations which are having the least cost over the complete string in order to **Maximize** the Number of Operations Performed on the String **s**. But, it doesn't ensures that the **Resulting string** will be having the **Longest Possible Substring** present in it.

Difference is states as the Difference of ASCII values of Characters at Specific Index

Given Below Example for Better Understanding
s = "abcd"
t = "bdfc"
maxCost = 3

Total Difference At Corresponding Indices are
```
for i in range(0,len(s)):
    abs( s[i] - t[i] )
```
ThereFore, 
$$[abs(s[0] - t[0]), abs(s[1] - t[1]), abs(s[2] - t[2]), abs(s[3] - t[3]) ] = [1, 2, 3, 1] $$

##### If Greedily is Considered,

Then, we will First make 1st index equal for both strings with cost 1.
Remaining Cost = 3 - 1 = 2
After Operation Strings
s = "bbcd"
t = "bdfc"

Now, we will make operations at last index equal for both strings with cost 1.
Remaining Cost = 2 - 1 = 1
After Operation Strings
s = "bbcc"
t = "bdfc"

Now, We can not make any further operations on String **s** with Cost = 1.

Here, Total Longest Possible Substring of Equal Length in Strings **s** and **t** are 1.

s = "abcd"
t = "bdfc"

After Applying 2 Continuous Operations from index 1
s = "bdcd"
t = "bdfc"
Remaining Cost = 3 - 1(1st index) - 2(2nd index) = 0
Longest Possible Substring = 2

If we Start Performing Operations from index 2 by Skipping index 1
s = "adcd"
g = "bdfc"
Remaining Cost = 3 - 2(2nd index) = 1
Now further No More Operations can be performed
Longest Possible Substring = 1

Similarly, for index 3 and index 4
s = "abfd"
t = "bdfc"
Remaining Cost = 3 - 3(3rd index) = 0
Longest Possible Substring = 1

s = "abcc"
t = "bdfc"
Remaining Cost = 3 - 1(4th index) = 2
Longest Possible Substring = 1

Therefore, If we apply Operations at indexes 1 and 2, which is equal to the total maxCost = 3, We can obtain a string of length 2, which is **greater than** the Total Longest Possible Substring Obtained from the Greedy Approach.

From this we Understand that 
***All Operations that are to be performed on the string **s** should be consecutive.***

In order to Perform Operation on string **s** consecutively we can use 2 pointers i and j in which we will iterate index j from index i until we get a sum which is greater than to maxCost from index i. We will iterate index i from 0 to n
***Note - Index i is taken into consideration here***
```
while ( j < len(s) and sum >= maxCost ):
    j += 1
```

At the arrival of such an index when sum becomes greater than maxCost we can store the difference of indices into result.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int equalSubstring(string s, string t, int maxCost) {
        int n = s.size();
        vector<int> pref(n);
        for ( int i = 0 ; i < n ; i++ ) {
            pref[i] = ( i - 1 >= 0 ? pref[i-1] : 0 ) + abs(s[i]-t[i]);
            // std::cout << pref[i] << " ";
        }
        int ans = 0;
        for ( int i = 0 ; i < n ; i++ ) {
            int sum = ( i - 1 >= 0 ? pref[i-1] : 0 ) + maxCost;
            int u = upper_bound(pref.begin(),pref.end(),sum) - pref.begin();
            ans = std::max({ ans, u-i });
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int[] pref = new int[s.length()];
        for ( int i = 0 ; i < s.length() ; i++ ) {
            pref[i] = Math.abs( ((int)s.charAt(i)) - ((int)t.charAt(i)) );
            if ( i > 0 ) {
                pref[i] += pref[i-1];
            }
        }
        int ans = 0, j = 0;
        for ( int i = 0 ; i < s.length() ; i++ ) {
            int curr = maxCost;
            if ( i - 1 >= 0 ) {
                curr += pref[i-1];
            }
            while ( j < s.length() && curr >= pref[j] ) {
                j++;
            }
            ans = Math.max( ans, j - i );
        }
        return ans;
    }
}
```
```Python []
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        pref = []
        for i in range(0,len(s)):
            pref.append(abs( ord(s[i]) - ord(t[i]) ))
            if ( len(pref) > 1 ):
                pref[-1] += pref[-2]
        ans, j = 0, 0
        for i in range(0,len(s)):
            curr = maxCost
            if ( i - 1 >= 0 ):
                curr += pref[i-1]
            while ( j < len(s) and curr >= pref[j] ):
                j += 1
            ans = max( ans, j - i )
        return ans
```
```Kotlin []
import kotlin.math.abs
class Solution {
    fun equalSubstring(s: String,t: String,maxCost: Int): Int {
        var ans: Int = 0;
        var pref = IntArray(s.length);
        for (item in s.indices) {
            pref[item] = abs(s[item] - t[item])
            if ( item > 0 ) {
                pref[item] += pref[item-1];
            }
        }
        var j:Int = 0
        for (i in 0..<s.length) {
            var sum:Int = maxCost;
            if ( i - 1 >= 0 ) {
                sum += pref[i-1]
            }
            while ( j < s.length && sum >= pref[j] ) {
                j += 1
            }
            ans = max( ans, j - i );
        }
        return ans
    }
}
```
# **Please Upvote.** 
# **If You Liked, Understood the Solution.**
# Thanks For Reading