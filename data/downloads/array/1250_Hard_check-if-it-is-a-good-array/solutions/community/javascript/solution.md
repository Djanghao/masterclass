# 1250 - true if gcd(array) is 1,  use co-primes existence for early exit

**Author:** pgmreddy
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/1309095/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/1309095/)

---

---

Hard to see at first, and its pure math
A long one coming, below :)

---

**Algo**

- `1 <= nums[i] <= 10^9` So array elements are always +ve
- For `[1]` or `[1,2,3]` or `[1,5,10,15,20]` array is good
  - because we have  subset as `[ 1 ]` & multiplicand as `1`, so our sum (after multiplying with each element of array with some multiplicand is `1*1`) is `1`
- For `[5,10,15,20]`, array is not good
  - because we dont have 1 as element
  - so some of elements must have `-ve` numbers as `multiplicand`
    - but even after having them, for example `5*-2 + 10*1`, it comes to `0`
    - this is because they are all multiples of a number (`5` in this case)
      - but we need `1`
      - so picking multiples of number won't help
      - and picking `co-primes` will help
  - Now we know `co-primes` will help
   - Some exampels are `[5,7]` , `[5,11]` , `[7,37]`
     - It's easy to see that the gcd of 1st two is `1`, also it is also for last one
       - But is it working really? `5*3 + 7*-2 = 1`, `5*-2 + 11*1 = 1`, `-7*21 + 4*37 = 1`, yes, it is working
  - So, we know that if `gcd` is 1 then it is working
- But what about `[5,10,15,20, 7]`?
  - Here there some numbers are multiples of `5`, also `5 & 7` are `co-prime`
    - Since we can take subset, we can take `[5,7]` and they are co-prime (`gcd = 1`), we its good
      - How? Same as above `5*3 + 7*-2 = 1`
      - So, effectively both `[5,10,15,20, 7]` and `[5,7]` are same
        - In other words, if we have 2 prime numbers, then we are done, or if we have two co-primes we are good
        - Is `[5,7]` is good - yes, why? `5 & 7 are co-prime` (that is `gcd = 1`)
        - Is `[3,4]` is good - yes, why? `3 & 4 are co-prime` (that is `gcd = 1`)
        - Is `[10,8]` is good - No, why? `10 & 8 are Not co-prime`, because they have a prime number `2` as common factor (that is `gcd = 2`)
- So can I stop going ahead once I found 2 co-primes? yes
  - `[8,9,100,200,300,400,500,600]` is same as `[8,9]`, as 8 & 9 are co-prime we don't need to look at `100, 200..`
  - [9,100,200,300,400,500,600] is same as `[9,100]` yes they are `3*3` and `2*2*5*5` but there are no common factors with each other (`co-prime`), their only common factor is `1` (`gcd=1`), (`gcf=hcf=gcd=1`)
    - So we can exit as soon as we find `two co-primes` (`gcd=1`)
      - see last solution below for early exit
- Why is `[6,10,15]` a kind of special test case?
    - But `6*1 + 10*-2 + 15*1 = 1`
    - gcd of 6, 10, and 15 is 1
    - but there are no `co-primes`
      - `co-primes` if present then good, but may not present too but good array for our question
      - so `gcd is 1` can be trusted always, use and `co-primes` existence can be used for early exit
- Want more? :)
  - Check gcd properties here - https://en.wikipedia.org/wiki/Greatest_common_divisor#Properties
    - Especially, see the closest one - 2nd property in above link - `B\xE9zout's identity`

Hope it is simple to understand.

---

```
var isGoodArray = function (A) {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    return A.reduce((g, n) => gcd(g, n)) === 1;
};
```

![image](./images/0.png)

---

```
var isGoodArray = function (A) {
    return A.reduce((gcd = (a, b) => (b ? gcd(b, a % b) : a))) === 1;
};
```

![image](./images/1.png)

---

```
var isGoodArray = (A) => A.reduce((gcd = (a, b) => (b ? gcd(b, a % b) : a))) === 1;
```

![image](./images/2.png)

---

```
var isGoodArray = function (A) {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);

    let g = A[0];
    for (let n of A) {
        g = gcd(g, n);
        if (g === 1)
            return true;    // early exit
    }
    return false;
};
```

![image](./images/3.png)

---
