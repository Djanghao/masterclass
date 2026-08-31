# Fully explained code with simple loop and all

**Author:** raeezrazz
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/5574210/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/5574210/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countPrimeSetBits(left: number, right: number): number {
    // to check how many primes are there 

    let count :number = 0

    // Iletrate over numbers from Left to  Right

    while(left <= right){

        // finding how many setBits are there in each number by this methode 

        let setBitCount = left.toString(2).split('1').length-1

//we all know 1 is not prime so there is chance to have on set Bit sometimes so we ignore 1

        if(setBitCount != 1){
            let i:number =2

// create a boolean to find weather it is prime or not

        let isPrime:boolean = true
        
        // check wheather it is prime or not

        while( i < setBitCount-1){
            if(setBitCount %i ==0) isPrime =false

            // incument i
            i++
        }


// if it is prime then count increases

        if(isPrime == true) count++

        }
        
    // incriment the left

        left++
    }

    // return the count

    return count
};
```