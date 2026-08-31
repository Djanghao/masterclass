# Typescript || Sieve of Eratosthenes Algo (use for generating prime numbers)

**Author:** onifs10
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2979332/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/2979332/)

---

# Intuition
get prime numbers that can divide the product of the array

# Approach
the prime number within the 0 and the maximum number in the array

# Complexity
- Time complexity:
$$O(n * b)$$  
> b = number of primes between 0 and the largest num in array

- Space complexity:
$$O(n)$$ 

# Code
```
const sievePrimeNumberGen = (n:number): Array<number> => {
    if (n <= 1) {
        return []
    }
    const values: boolean[] = new Array(n + 1).fill(true);
    values[0] = false;
    values[1] = false
    for (let i = 2; i <= n; i++){
        if (values[i] == true) {
        for (let j = 2; j * i <= n; j++){
            values[j * i] = false;
        }
        }
    }
    let result:number[] = [];
    values.forEach((v: boolean, i: number) => { if (v) result.push(i) })
    return result;
}

function distinctPrimeFactors(nums: number[]): number {
    // product
    const primes = sievePrimeNumberGen(Math.max(...nums))
    console.log(primes)
    let primesInNum:Set<number> = new Set()
    // for every number check if they are divisible by the primes
    for(const num of nums){
        for(const prime of primes){
            if((num % prime) == 0){
                primesInNum.add(prime)
            }
        }
    }
    return primesInNum.size
};
```