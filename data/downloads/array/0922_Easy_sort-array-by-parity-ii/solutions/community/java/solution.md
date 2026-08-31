# Java 2ms (99.76% faster)

**Author:** kbenriquez
**Votes:** 16
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/283369/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/283369/)

---

1. Get first even entry at the wrong index
2. Get first odd entry at the wrong index
3. swap
4. repeat
```
public int[] sortArrayByParityII(int[] A) {
        int even = 0, odd = 1;
        while(true){
            while(even < A.length && A[even] % 2 == 0) /*(1)*/
                even += 2;
            while(odd < A.length && A[odd] % 2 != 0) /*(2)*/
                odd += 2;
            if(odd >= A.length || even >= A.length) return A;
			
			/*(3)*/
            int temp = A[even];
            A[even] = A[odd];
            A[odd] = temp;
        }
    }
```