# Largest Component...  - javascript 356ms (beats 90%)

**Author:** hyun-hwan
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/819974/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/819974/)

---

### Ideas to the solution

* It doesn't need to have the entire graph, and we only need to have connected components with minimal connections.
* Using [union-find algorithm](https://en.wikipedia.org/wiki/Disjoint-set_data_structure), we can efficiently group two numbers divided by a divisor. However, running this algorithm will take O(N^2), and it causes TLE. 
* A key idea is that two numbers divided by a prime number belong to the same component together. Furthermore, K numbers are divided by a prime number will be in the same component. Running the union operation for (X1, X2), (X1, X3), ..., (X1, XK) will group the number together. Here, X1 ... XK is a set of numbers that are divided by a prime number.
* So, using Eratosthenes' sieve, we can collect prime numbers less than or equal to the maximum number (M) of the input and run the union operations.
* My initial solution runs Eratosthenes' sieve from 2 to M. It was accepted, but it took 4600 ms. After I got AC, I tried to find where I could optimize. 
* After review my code, I realized that it only needs to run the sieve up to sqrt(M) with prime factorizations for every time it performs a union operation for a prime number. Later the sieve, it needs to find numbers that still need to be factorized, and those numbers are prime numbers that are not counted by the sieve. Running additional union operations the same yet-to-factorized numbers (prime numbers) and measuring the maximum component will complete the algorithm. 

```
var largestComponentSize = function(A) {
  const n = A.length;
  let parent = new Array(n).fill().map((_,i)=>i);
  let cnt = new Array(n).fill(1);
  let find  = (i) => parent[i] == i? i : find(parent[i]);
  let union = (i, j) => {
    let p = find(i);
    let q = find(j);
    
    if(p === q) return;
    
    if(cnt[p]<cnt[q]) {
      [p,q] = [q,p];
    }
    cnt[p] += cnt[q];
    parent[q] = p;
  }
  
  const m = Math.max(...A);
  let p = new Array(m+1).fill(true);
  const root = Math.floor(Math.sqrt(m));
  for(let i=2;i<=root;i++) if(p[i]) {
    let k = -1;
    for(let j=0;j<n;++j) {
      if(A[j]%i===0) {
        while(A[j] % i === 0)
          A[j] = Math.floor(A[j]/i);
        if(k===-1) k = j;
        else union(k, j);
      }
    } 
    for(let j=i*i;j<=m;j+=i) p[j] = false;
  }
  
  A = A.map((x,i)=>[x,i]).filter(x=>x[0]>1).sort((a,b)=>a[0]-b[0]);
  for(let i=1;i<A.length;++i) {
    if(A[i-1][0]===A[i][0]) {
      union(A[i-1][1], A[i][1]);
    }
  }
  
  return Math.max(...cnt);
};
```