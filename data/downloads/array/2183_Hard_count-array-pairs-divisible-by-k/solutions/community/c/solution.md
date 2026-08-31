# How gcd(a,k) * gcd(b,k) % k == 0 ? || Explained with example

**Author:** rupakk
**Votes:** 191
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1785906/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/1785906/)

---

## Intuition
Let's first understand this property:

<b>If (a*b)%k==0, then
gcd(a,k) * gcd(b,k) % k is also 0</b>

Let\u2019s assume two numbers 504 and 819. Their prime factorization can be written as:

504 = (2^3) * (3^2) * 7
819 = (3^2) * 7 * 13

Now gcd(504,819) = 63 and 63 = (3^2) * 7

<b>gcd(a,b) is the multiplication of common prime factors of a and b.</b>

Coming back to the statement
How gcd(a,k) * gcd(b,k) % k is 0 ?

For any number to be divisble by k it need to have atleast all the prime factors of k.

gcd(a,k) = Multiplication of all prime factors of k available in a.
and
gcd(b,k) = Multiplication of all prime factors of k available in b.

If gcd(a,k) * gcd(b,k) % k is 0, it means some of the prime factors of k are contributed by a and some of the prime factors of k are contributed by b and thier multiplication has all the prime factors of k which means a*b is divisble by k.

We dont care about prime factors of a or b which are not prime factors of k because they will not help us in making a*b divisible by k.

Example:

Let k=84, a=24, b=273

k = 84 = (2^2) * 3 * 7
a = 24 = (2^3) * 3
b = 273 =  3 * 7 * 13

gcd(a,k) = (2^2) * 3 (Common prime factors of a and k)
gcd(b,k) = 7 * 3 (Common prime factors of b and k)

gcd(a,k) * gcd(b,k) = (2^2) * (3^2) * 7
which has all prime factors of k thus a*b is divisble by k.

## Now the solution:

As compared to checking for every pair, if we check for gcd of every number with k then the operations will be less because the number of prime factors of a number will be less.

Code:
```
typedef long long ll;

class Solution {
public:
    long long countPairs(vector<int>& nums, int k) {
        unordered_map<ll, ll> gcdCount;
        ll ans = 0;
        for (ll i = 0; i < nums.size(); ++i)
        {
            ll currgcd = __gcd(nums[i], k);
            for (auto &[gc_d, count] : gcdCount)
                if ((currgcd * gc_d) % k == 0)
                    ans += count;
            gcdCount[currgcd]++;
        }
        return ans;
    }
};
```

## Time Complexity - O(N*sqrt(K))

Why sqrt(K):
Since we are taking gcd, it means we are considering factors of K and the number of factors of K will not be above 2*sqrt(K).

I hope you got the logic.

You can ask your questions in comment section.

Please upvote if you found this helpful.