# Short and Concise C++ Solution (Binary Search) with explanation

**Author:** vismit2000
**Votes:** 45
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/387561/](https://leetcode.com/problems/ugly-number-iii/solutions/387561/)

---

This problem can easily solved by binary-search by defining the predicate: "Given N, how many numbers upto N are divisible by A or B or C"

The predicate can be evaluated by inclusion-exclusion principle:

	No. of numbers upto N divisible by A = N/A;
	No. of numbers upto N divisible by B = N/B;
	No. of numbers upto N divisible by C = N/C;
	
	No. of numbers upto N divisible by both A and B = N / lcm(A, B);
	No. of numbers upto N divisible by both B and C = N / lcm(B, C);
	No. of numbers upto N divisible by both A and C = N / lcm(A, C);
	
	No. of numbers upto N divisible by all A, B and C = N / lcm(A, B, C);
	
Furthermore LCM(A, B) can be computed as LCM(A, B) = (A*B) / GCD(A, B)

For problem solving technique using binary search predicate, refer to the following awesome article:
	https://www.topcoder.com/community/competitive-programming/tutorials/binary-search

```
typedef long long ll;
class Solution {
public:
    ll lcm(ll a, ll b) {
        return a*b / __gcd(a, b);
    }
    
    int nthUglyNumber(int n, int a, int b, int c) 
    {
        ll N = (ll)n, A = ll(a), B = ll(b), C = ll(c);
        ll lo = 1, hi = 2000000000, mid, ans;
        
        while(lo <= hi)
        {
            mid = lo + (hi - lo)/2;
            ll cnt = 0;
            cnt += mid/A;
            cnt += mid/B;
            cnt += mid/C;
            cnt -= mid / lcm(A, B);
            cnt -= mid / lcm(B, C);
            cnt -= mid / lcm(C, A);
            cnt += mid / lcm(a, lcm(b, c));
            
            if(cnt >= N)
            {
                ans = mid;
                hi = mid-1;
            }
            else
                lo = mid+1;
        }
        return ans;
    }
};
```