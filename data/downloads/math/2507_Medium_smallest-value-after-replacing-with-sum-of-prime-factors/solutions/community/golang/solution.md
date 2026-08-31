# O(N∗Log(Log(N))) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5503595/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5503595/)

---

# Complexity
- Time complexity:$$O(n \u2217 log (log(N)) )$$
<!-- Add your time complexity here, e.g. $$O(n \u2217 log (log(N)) )$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` rust []
impl Solution {
    pub fn smallest_value(mut n: i32) -> i32 {
        let get_prime = |n: usize| {
            let mut is_prime = vec![true; n + 1];
            (2..=n).filter(|p| p * p <= n).for_each(|p| {
                if is_prime[p] {
                    (p * p..=n).step_by(p).for_each(|i| {
                        is_prime[i] = false;
                    })
                }
            });
            is_prime
            };
        let (is_prime, mut prev) = (get_prime(n as usize), n);
        
        let sos = |mut n: usize| {
            let (mut sum, mut i) = (0, 2);
            while i <= n {
                if is_prime[i] && n % i == 0 {
                    sum += i;
                    n /= i;
                } else {
                    i += 1;
                }
            }
            sum as i32
        };
        
        while !is_prime[n as usize] {
            n = sos(n as usize);
            if prev == n {
                break;
            }
            prev = n;
        }
        
        n
    }
}
```
``` java []
class Solution {
    public int smallestValue(int n) {
        final Function<Integer, boolean[]> getPrime = (a) -> {
            final var ip = new boolean[a+1];
            Arrays.fill(ip, true);
            for(int p = 2; p * p <= a; p++)
                if(ip[p])
                    for(int i = p * p; i <= a; i += p)
                        ip[i] = false;
            return ip;
        };
        final var isPrime = getPrime.apply(n);

        final Function<Integer, Integer> sop = a -> {
            int sum = 0, i = 2;
            while( i <= a)
                if (isPrime[i] && a%i == 0){
                    sum += i;
                    a /= i;
                }else i += 1;
            return sum;
        };
        
        var prev = n;
        while (!isPrime[n]){
            n = sop.apply(n);
            if (prev == n) break;
            prev = n;
        }return n;
    }
}
```
``` golang []
func smallestValue(n int) int {
	isPrime := func() []bool {
		isPrime := make([]bool, n + 1)
		for i := range isPrime {
			isPrime[i] = true
		}
		for p := 2; p*p <= n; p++ {
			if isPrime[p] {
				for i := p * p; i <= n; i += p {
					isPrime[i] = false
				}
			}
		}
		return isPrime
	}()
	sop := func(n int) int {
		sum, i := 0, 2
		for i <= n {
			if isPrime[i] && n%i == 0 {
				sum += i
				n /= i
			} else {
				i += 1
			}
		}
		return sum
	}
	
	prev := n
	for !isPrime[n] {
		n = sop(n)
		if prev == n {
			break
		}
		prev = n
	}
	return n
}
```