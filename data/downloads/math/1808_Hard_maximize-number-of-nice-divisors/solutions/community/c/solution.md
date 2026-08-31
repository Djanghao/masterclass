# ✅ Break primeFactors into integers to maximize products | Simple solution w/ Explanation O(logn)

**Author:** archit91
**Votes:** 41
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1130512/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/1130512/)

---

We are asked to choose **`primeFactors`** number of prime factors to form `n` which maximizes number of **nice divisors**. This can be restated into simple statement as - breaking **`primeFactors`** into 1 or more numbers such that their product is maximized. 

By observation, we can notice that we must **repeatedly divide a number into 3 till it is greater than 4**. Atlast, we will have the option to **choose either 2, 3 or 4 depending on the remainder**. Lastly, multiply all these obtained numbers, mod them and return the answer

Here are some examples to get clear understanding - 

```
[primeFactors] - [prime factors of n]           |  total nice divisors
1              - [2]                            |    1  (1)
2              - [2, 2]                         |    2  (2)
3              - [2, 2, 2]                      |    3  (3)
4              - [2, 2, 3, 3]                   |    4  (2 * 2)
5              - [2, 2, 2, 3, 3]                |    6  (3 * 2)
6              - [2, 2, 2, 3, 3, 3]             |    9  (3 * 3)
7              - [2, 2, 2, 3, 3, 3, 3]          |    12  (3 * 4)
8              - [2, 2, 2, 3, 3, 3, 5, 5]       |    18  (3 * 3 * 2)
9              - [2, 2, 2, 3, 3, 3, 5, 5, 5]    |    27  (2 * 3 * 3)
10             - [2, 2, 2, 3, 3, 3, 5, 5, 5, 5] |    36  (3 * 3 * 4)
```

We are not concerned with printing the list of prime factors or `n`, just the product of **frequency of each prime factor**. ***Why?*** Simple combinatorics - Because that's the number of ways, you can choose a number such that it satisfies rules of being a nice divisor.

We just need to take care of overflow in some languages. Here's the implementation in **C++** -

```
typedef long long ll;
int mod = 1000000007;
ll power(ll x, ll y){
	ll res = 1;                
	while (y > 0){        
		if (y & 1)
			res = (res*x) % mod;         
		y >>= 1; // y /= 2
		x = (x*x) % mod;
	}
	return res % mod;
}
int maxNiceDivisors(int n) {        
	ll ans = 1;
	if(n <= 3)return n;        
	ll numOfDiv3 = n / 3, rem = n % 3;
	if(rem == 1) rem = 4, --numOfDiv3;
	else if(!rem) rem = 1;

	return (power(3, numOfDiv3) * rem) % mod;                                        
}
```


***Time Complexity :*** **`O(logN)`**, required for modular exponentiation.
***Space Complexity :*** **`O(1)`**.
