# O(n*k*10) solution | digit dp beats 100% ---->

**Author:** its_shiv43
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5732877/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5732877/)

---

# Approach
# Power Calculation:
Precompute powers of 10 modulo k for efficient remainder calculations as digits are added.
# Recursive Function (find):

1. Base Case: When half of the palindrome is formed, check if the current remainder (premod) is 0 (i.e., the number is divisible by k).
2. Digit Selection: Starting from 9 down to 0, try to assign each digit to the palindrome while ensuring the number remains divisible by k.
3. Update Remainder: As digits are added, update the remainder using the precomputed power values.
4. Memoization: Store results of subproblems to avoid redundant calculations.
# Palindrome Construction:

1. Using the digits stored in the res array, construct the palindrome by mirroring the digits on both sides.
# Return Result:

The final palindrome is returned as a string.

# Complexity
- Time complexity:
O(n* k*10)

- Space complexity:
O(n *k)

# Code
```cpp []
class Solution {
public:

    int find(int ind, int premod, int n, int k, vector<int>&power,vector<vector<int>>&dp,vector<int>&res,int half){

        //base case
        if(ind==half){
            return premod==0;
        }

        if(dp[ind][premod]!=-1){
            return dp[ind][premod];
        }
        
        // for making less travel to make big number start from backword
        for(int digit=9;digit>=0;digit--){
            int newmod=premod;
            //if odd and at middle
            if((n&1) && (ind==half-1)){
                newmod+=(digit*power[ind])%k;
            }
            else{
                //even
                newmod+=(digit*power[ind])%k;
                newmod+=(digit*power[n-1-ind])%k;
            }

            newmod=newmod%k;

            int flag=find(ind+1,newmod,n,k,power,dp,res,half);
            // if find the largest value then store in res and break the loop
            if(flag){
                res[ind]=digit;
                break;
            }
        }
        
        // storing value in res
        if(res[ind]==-1){
            return dp[ind][premod]=0;
        }
        return dp[ind][premod]=1;
    }

    string largestPalindrome(int n, int k) {
        
        int half=(n+1)/2;

        vector<int>power(n,0);

        power[0]=1%k;

        for(int i=1;i<n;i++){
            power[i]=(power[i-1]*10)%k;
        }
        
        // to store the valid value;
        vector<int>res(n,-1);
        vector<vector<int>>dp(half,vector<int>(10,-1));

        int prev=0;
        find(0,prev,n,k,power,dp,res,half);

        string ans(n,'0');
        for(int i=0;i<half;i++){
            ans[i]='0'+res[i];
            ans[n-1-i]=ans[i];
        }

        return ans;
    }
};
```
```java []
import java.util.Arrays;
import java.util.Vector;

class Solution {

    public int find(int ind, int premod, int n, int k, int[] power, int[][] dp, int[] res, int half) {

        // Base case
        if (ind == half) {
            return premod == 0 ? 1 : 0;
        }

        if (dp[ind][premod] != -1) {
            return dp[ind][premod];
        }

        for (int digit = 9; digit >= 0; digit--) {
            int newmod = premod;
            if ((n % 2 != 0) && (ind == half - 1)) {
                newmod += (digit * power[ind]) % k;
            } else {
                newmod += (digit * power[ind]) % k;
                newmod += (digit * power[n - 1 - ind]) % k;
            }

            newmod = newmod % k;

            int flag = find(ind + 1, newmod, n, k, power, dp, res, half);
            if (flag == 1) {
                res[ind] = digit;
                break;
            }
        }

        if (res[ind] == -1) {
            dp[ind][premod] = 0;
        } else {
            dp[ind][premod] = 1;
        }

        return dp[ind][premod];
    }

    public String largestPalindrome(int n, int k) {

        int half = (n + 1) / 2;

        int[] power = new int[n];
        power[0] = 1 % k;

        for (int i = 1; i < n; i++) {
            power[i] = (power[i - 1] * 10) % k;
        }

        int[] res = new int[n];
        Arrays.fill(res, -1);
        int[][] dp = new int[half][10];
        for (int[] row : dp) Arrays.fill(row, -1);

        int prev = 0;
        find(0, prev, n, k, power, dp, res, half);

        char[] ans = new char[n];
        for (int i = 0; i < half; i++) {
            ans[i] = (char) ('0' + res[i]);
            ans[n - 1 - i] = ans[i];
        }

        return new String(ans);
    }
}

```
```python []
class Solution:

    def find(self, ind, premod, n, k, power, dp, res, half):
        # Base case
        if ind == half:
            return premod == 0

        if dp[ind][premod] != -1:
            return dp[ind][premod]

        # Start from 9 to make the largest number
        for digit in range(9, -1, -1):
            newmod = premod
            # If n is odd and we're at the middle
            if (n % 2 == 1) and (ind == half - 1):
                newmod += (digit * power[ind]) % k
            else:
                # Even case
                newmod += (digit * power[ind]) % k
                newmod += (digit * power[n - 1 - ind]) % k

            newmod %= k

            flag = self.find(ind + 1, newmod, n, k, power, dp, res, half)
            # If a valid number is found, store the digit and break
            if flag:
                res[ind] = digit
                break

        if res[ind] == -1:
            dp[ind][premod] = 0
        else:
            dp[ind][premod] = 1

        return dp[ind][premod]

    def largestPalindrome(self, n: int, k: int) -> str:
        half = (n + 1) // 2

        power = [0] * n
        power[0] = 1 % k

        for i in range(1, n):
            power[i] = (power[i - 1] * 10) % k

        res = [-1] * n
        dp = [[-1] * 10 for _ in range(half)]

        prev = 0
        self.find(0, prev, n, k, power, dp, res, half)

        ans = ['0'] * n
        for i in range(half):
            ans[i] = str(res[i])
            ans[n - 1 - i] = ans[i]

        return ''.join(ans)

```
```javascript []
class Solution {

    find(ind, premod, n, k, power, dp, res, half) {
        // Base case
        if (ind === half) {
            return premod === 0 ? 1 : 0;
        }

        if (dp[ind][premod] !== -1) {
            return dp[ind][premod];
        }

        // Start from 9 to make the largest number
        for (let digit = 9; digit >= 0; digit--) {
            let newmod = premod;
            // If n is odd and we're at the middle
            if ((n % 2 !== 0) && (ind === half - 1)) {
                newmod += (digit * power[ind]) % k;
            } else {
                // Even case
                newmod += (digit * power[ind]) % k;
                newmod += (digit * power[n - 1 - ind]) % k;
            }

            newmod %= k;

            let flag = this.find(ind + 1, newmod, n, k, power, dp, res, half);
            // If a valid number is found, store the digit and break
            if (flag) {
                res[ind] = digit;
                break;
            }
        }

        if (res[ind] === -1) {
            dp[ind][premod] = 0;
        } else {
            dp[ind][premod] = 1;
        }

        return dp[ind][premod];
    }

    largestPalindrome(n, k) {
        let half = Math.floor((n + 1) / 2);

        let power = new Array(n).fill(0);
        power[0] = 1 % k;

        for (let i = 1; i < n; i++) {
            power[i] = (power[i - 1] * 10) % k;
        }

        let res = new Array(n).fill(-1);
        let dp = new Array(half).fill(null).map(() => new Array(10).fill(-1));

        let prev = 0;
        this.find(0, prev, n, k, power, dp, res, half);

        let ans = new Array(n).fill('0');
        for (let i = 0; i < half; i++) {
            ans[i] = String(res[i]);
            ans[n - 1 - i] = ans[i];
        }

        return ans.join('');
    }
}

```
