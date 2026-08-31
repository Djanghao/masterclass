# [C++ with explanation] Simple Mathematics!

**Author:** Code-O-Maniac
**Votes:** 56
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993005/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993005/)

---

**Intuition**
* Maximum $$k$$-subsequence is to be formed using $$k$$ unique elements.
* $$f(c)$$ = Sum of all the occurrances of $$c$$
* Value of the $$k$$-subsequence is decided by $$\\sum_{i=1}^{k}f(c_i)$$
* It's better to choose top $$k$$ characters frequency-wise because it will produce the maximum sum. 

**How to choose top $$k$$ elements?**
* Mantain a priority queue of frequencies. 
* Pick them until you reach up $$k$$. 
* Now suppose, you have to pick $$y$$ more elements but there are $$x$$ elements with the same frequency, such that $$x > y$$. Then, out of these $$x$$ elements, you have to choose $$y$$ elements. This can be done by using $${x \\choose y}$$. 

**How to calculate answer?**
* You know the top $$k$$ elements by now. So, if there are $$a_i$$ occurrances of the $$i$$ element, then the answer would be $$\\prod_{i=1}^{k}a_i$$
* Make sure to multiply $${x \\choose y}$$ at the end. 

**Code**
```
class Solution {
    int MOD = 1000000007;
    
    long long power(int x, int n) {
        if( n == 0) return 1;
        
        long long ans = power(x, n / 2);
        ans *= ans;
        ans %= MOD;
        
        if(n % 2 != 0) {
            ans *= x;
            ans %= MOD;
        }
        
        return ans;
    }
    
    long long fact(int n) {
        long long ans = 1;
        
        for(int i = 1; i <= n; i++) {
            ans *= i;
            ans %= MOD;
        }
        
        return ans;
    }
    
    long long nCr(int n, int r) {
        long long ans = fact(n);
        long long denominator = (fact(r) * fact(n - r)) % MOD;
        
        return (ans * power(denominator, MOD - 2)) % MOD;
    }
    
public:
    int countKSubsequencesWithMaxBeauty(string s, int k) {
        priority_queue<int> pq;
        
        vector<int> freq(26);
        for(auto x:s) {
            freq[x - 'a'] += 1;
        }
        
        for(int i = 0; i < 26; i++) {
            if(freq[i] > 0) pq.push(freq[i]);
        }
        
        if(pq.size() < k) {
            return 0;
        }
        
        long long ans = 1;
        while(k > 0) {
            int countEqual = 0, ele = pq.top();
            while(pq.size() > 0 && pq.top() == ele) {
                countEqual += 1;
                pq.pop();
            }
            
            if(countEqual <= k) {
                k -= countEqual;
                ans *= power(ele, countEqual);
                ans %= MOD;
            } else {
                ans *= power(ele, k);
                ans %= MOD;
                
                ans *= nCr(countEqual, k);
                ans %= MOD;
                break;
            }
        }
        
        return ans;
    }
};
```