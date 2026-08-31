# Understanding factorial

**Author:** vmss
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/5357970/](https://leetcode.com/problems/permutation-sequence/solutions/5357970/)

---

With $$n$$ numbers, the number of permutations will be $$n!$$. For $$(n-1)$$ numbers, the number of permutations will be $$(n-1)!$$

So the number of permutations of $$n$$ numbers can be looked at as, the collection of all the permutations of the rest of $$(n-1)$$ numbers, after picking one number as the starting number. You begin doing this by picking $$1$$ first, and going until $$n$$. 

With each of the numbers until n, as the starting number, there will be $$(n-1)!$$ permutations.

So the total number of permutations, which is $$n!$$, can also be expressed as : 
$$n! = n \	imes (n-1)!$$

So the number of permutations starting with '1' is $$(n-1)!$$
the number of permutations starting with '2' is $$(n-1)!$$
and so on...

With this information we can estimate the first digit. If the kth permutations is more than $$d \	imes (n-1)!$$ and less than $$(d+1) \	imes (n-1)!$$, then the first number of the permutation is d. 

We keep a list of numbers from 1 to n. If we found a number, we remove it and re-adjust the array so that $$d$$<sup>th</sup> number changes in the array for further calculations.

So to get $$d$$ from the array, divide $$k$$ with $$(n-1)!$$.

Which means you started looking for the permutation after $$d \	imes (n-1)!$$.

To find out further numbers, it is the same problem this time with $$(n-1)$$ numbers and the value of $$k$$ being $$d \	imes (n-1)!$$ less than its initial value.

I have reduced $$k$$ by 1 at the start of the solution as I took the first permutation as the 0th permutation.



# Code
```
function getPermutation(n: number, k: number): string {
    let arr = new Array(n).fill(0).map((m,i)=>i+1);
    // let map = new Map(new Array(n).fill(0).map(m,i)=>[i+1,i+1]));
    let result = '';
    k = k-1;
    let facs = [];

    while(n > 0) {
        let fac = factorial(n-1, facs);
        let r = Math.floor(k/fac);
        result = result + arr[r];
        arr[r] = 0;
        arr = arr.filter((m,i)=>m);
        k = k - (fac * r);

        n = n-1;
    }

    return result;
};

function factorial(n : number, facs : number[]) : number {
    if(n === 1 || n === 0) {
        facs[n] = 1;
        return facs[n];
    }

    if(facs[n]) return facs[n];

    facs[n] = n * factorial(n-1, facs);

    return facs[n];
}
```