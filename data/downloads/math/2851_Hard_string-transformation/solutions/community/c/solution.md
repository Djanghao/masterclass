# Three Steps: string match, recursion and speed up

**Author:** gaoyf1235
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-transformation/solutions/4025100/](https://leetcode.com/problems/string-transformation/solutions/4025100/)

---

To solve this problem, you need to know:
1 O(n) string match algorithm (I use z function as an example here):
https://cp-algorithms.com/string/z-function.html
2 Fast modular inverse algorithm:
https://cp-algorithms.com/algebra/binary-exp.html
https://cp-algorithms.com/algebra/module-inverse.html

Then the three steps:
1 String match: The operation is just treat the string as a cyclic one, we can represent the string status with first character index. If we only consider the last step, it means to move it to a match position. This match position can be calculated by an O(n) string match algorithm, by find "s" in "t + t" (cyclic match check).

2 Recursion: When we know the count of match positions:
* The total move count is (n - 1) ^(k) at step k, equals to the macth move plus mismatch ones.
* **match(k+1) = match_position_count * total_move_count(k) -  match(k);**
* Why? To make k+1 step match, we can move from any k step status to a match position, **except from an already matched position to itself**.
* Now we have a O(N + K) solution, but K could be a large number!

3 Speed up: math helps here:
* match(k+1) = match_position_count * total_move_count(k) -  match(k)
					  = match_position_count * (n - 1) ^ k - match(k)
					  = match_position_count * (n - 1) ^ k) - ( match_position_count * total_move_count(k-1) -  match(k-1))
					  = match_position_count * (n - 1) ^ k -  (match_position_count * (n - 1) ^(k - 1) - match(k - 1))
					  = match_position_count * ( (n - 1) ^ k)   - (n - 1) ^(k - 1) + (n - 1) ^(k - 2) - ..  (n - 1) * (-1)^ k  )  + (-1)^(k+1) * match(1);
					  =  match_position_count * ((n - 1) ^(k + 1) + (-1)^ k * (n - 1)) / n  + (-1)^(k+1) * match(1);
https://en.wikipedia.org/wiki/Geometric_progression

* Then we calculate the final results with fast binary exponentiation for (n - 1) ^(k + 1)
* To divide by n, use modular inverse algorithnm.
* The O(N + logK) solution done!





```
class Solution {
    using ll = long long;
    ll mod = 1e9 + 7;
    vector<int> z_function(string& s) {
        int n = (int) s.length();
        vector<int> z(n);
        for (int i = 1, l = 0, r = 0; i < n; i++) {
            // [l, r] is checked, reuse this info => z[i] = z[i - l], but bounded by r -i + 1
            if (i <= r) z[i] = min (r - i + 1, z[i - l]);
            // Single char match check
            while (i + z[i] < n && s[z[i]] == s[i + z[i]]) z[i]++;
            // Update r[i] if we get a larger z box
            if (i + z[i] - 1 > r){
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }
    
    ll modExp(ll x, ll y){
        if(y == 0) return 1;
        ll half_exp = modExp(x, y / 2);
        if(y % 2 == 0) return (half_exp * half_exp) % mod;
        else return (((half_exp * half_exp) % mod) * x) % mod;
    }
public:
    int numberOfWays(string s, string t, long long k) {
        int n = t.size();
        string temp = t + t;
        string comb = s + "$" + temp;
        vector<int> zf = z_function(comb);
        vector<int> shifts;
        int has_zero = 0;
        for(int i = n + 1; i < zf.size(); i++){
            int shift = i - n - 1;
            if(zf[i] == n && shift < n) {
                if(shift == 0) has_zero = 1;
                shifts.push_back(i - n - 1);
            }
        }
        if(shifts.empty()) return 0;
        if(k == 1) return shifts.size() - has_zero;
        ll base = n - 1;
        ll base_plus_one_inv = modExp(base + 1, mod - 2);
        ll r1 = shifts.size() - has_zero;
        ll c = shifts.size();
        ll res = 0;
        if(k % 2 == 0){
            res = ((c * (modExp(base, k) + base) % mod) * base_plus_one_inv + mod - r1) % mod;
        }
        else{
            res = ((c * (modExp(base, k) + mod - base) % mod) * base_plus_one_inv + r1) % mod;
        }
        return res;  
    }
};
```