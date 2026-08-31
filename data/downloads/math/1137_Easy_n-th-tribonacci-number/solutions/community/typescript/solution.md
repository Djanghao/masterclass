# 11 Solutions | From O(3^N) to O(logN)

**Author:** rojas
**Votes:** 7
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/4329604/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/4329604/)

---

# Guide

#### For Interviews

- [1. Brute Force](#1-brute-force)
- [2. Sliding Window](#2-sliding-window)

#### Good to Know About

- [3. Matrix Multiplication](#3-matrix-multiplication)
- [4. Condensed Matrix Multiplication](#4-condensed-matrix-multiplication)
- [5. Math](#5-math)

#### Followup 1: Custom Initial Values

- [6. Counting Multiples](#6-counting-multiples)

#### Followup 2: K-bonacci Numbers

- [7. Generalized Brute Force](#7-generalized-brute-force)
- [8. Generalized Sliding Window](#8-generalized-sliding-window)
- [9. Generalized Matrix Multiplication](#9-generalized-matrix-multiplication)
- [10. Generalized Condensed Matrix Multiplication](#10-generalized-condensed-matrix-multiplication)
- [11. Generalized Math](#11-generalized-math)

**Note:** Only some solutions have both memoized and non-memoized versions. The absence / presence of memoization in the others does not significantly change the approach, so conversion is left up to the reader.
  
# 1. Brute Force

## 1A. Recursive (Time Limit Exceeded)
- Time complexity: $O(3^N)$
- Space complexity: $O(N)$

```Typescript
function tribonacci(n: number): number {
    if (n < 1) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n-1);
};
```

## 1B. Recursive, Memoized
- Time complexity: $O(N)$
- Space complexity: $O(N)$

```Typescript
const MEM: number[] = [0, 1, 1];
function tribonacci(n: number): number {
    if (n < 0) {
        return 0;
    }
    if (MEM[n] == null) {
        let val = tribonacci(n-3);
        val += tribonacci(n-2);
        MEM[n] = val + tribonacci(n-1);
    }
    return MEM[n];
};
```

## 1C. Iterative, Pointers
- Time complexity: $O(N)$
- Space complexity: $O(1)$

```Typescript
function tribonacci(n: number): number {
    if (n < 3) {
        return (n < 1) ? 0 : 1;
    }
    let t0 = 0;
    let t1 = 1;
    let t2 = 1;
    let t3 = t0 + t1 + t2;
    for (n -= 3; n > 0; --n) {
        t0 = t1;
        t1 = t2;
        t2 = t3;
        t3 = t0 + t1 + t2;
    }
    return t3;
};
```

## 1D. Iterative, Memoized
- Time complexity: $O(N)$
- Space complexity: $O(N)$
```Typescript
const MEM: number[] = [0, 1, 1];
function tribonacci(n: number): number {
    for (let i = MEM.length - 1; i < n; ++i) {
        MEM.push(MEM[i-2] + MEM[i-1] + MEM[i]);
    }
    return MEM[n];
};
```

# 2. Sliding Window

## 2A. Recursive
- Time complexity: $O(2^N)$
- Space complexity: $O(N)$

```Typescript
function tribonacci(n: number): number {
    if (n < 1) {
      return 0;
    }
    if (n < 3) {
      return 1;
    }
    return 2*tribonacci(n-1) - tribonacci(n-4);
}
```

## 2B. Recursive, Memoized
- Time complexity: $O(N)$
- Space complexity: $O(N)$

```Typescript
const MEM: number[] = [0, 1, 1];
function tribonacci(n: number): number {
    if (n < 0) {
        return 0;
    }
    if (MEM[n] == null) {
        const val = tribonacci(n-4);
        MEM[n] = 2*tribonacci(n-1) - val;
    }
    return MEM[n];
};
```

## 2C. Iterative
- Time complexity: $O(N)$
- Space complexity: $O(1)$

```Typescript
function tribonacci(n: number): number {
    if (n < 1) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    let sum = 2;
    const vals = [0, 1, 1];
    for (let i = 3; i < n; ++i) {
        vals.push(sum);
        sum += sum - vals.shift();
    }
    return sum;
};
```

## 2D. Iterative, Circular
- Time complexity: $O(N)$
- Space complexity: $O(1)$

```Typescript
function tribonacci(n: number): number {
    if (n < 1) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    let sum = 2;
    const vals = [0, 1, 1];
    for (let i = 0; --n >= 3; i = (i + 1) % 3) {
        const temp = vals[i];
        vals[i] = sum;
        sum += sum - temp;
    }
    return sum;
};
```

## 2E. Iterative, Memoized
- Time complexity: $O(N)$
- Space complexity: $O(N)$

```Typescript
const MEM: number[] = [0, 1, 1, 2];
function tribonacci(n: number): number {
    for (let i = MEM.length - 1; i < n; ++i) {
        MEM.push(2*MEM[i] - MEM[i-3]);
    }
    return MEM[n];
};
```

# 3. Matrix Multiplication

## 3A. Recursive
- Time complexity: $O(\\log{N})$
- Space complexity: $O(\\log{N})$

Thanks to [@VehicleOfPuzzle](https://leetcode.com/VehicleOfPuzzle/) and [@bzax](https://leetcode.com/bzax/).

```Typescript
const RELATION = [[1, 1, 1], [1, 0, 0], [0, 1, 0]];

function tribonacci(n: number): number {
  return (n < 1) ? 0 : pow(n, RELATION)[0][2];
}

function mult(A: number[][], B: number[][]): number[][] {
  const M = A.length;
  const N = A[0]?.length;
  const P = B[0]?.length;
  if (N !== B.length) {
    throw new Error();
  }

  const C = new Array<number[]>(M);
  for (let m = 0; m < M; ++m) {
    const rowA = A[m];
    const rowC = new Array<number>(P);
    for (let p = 0; p < P; ++p) {
      let val = 0;
      for (let n = 0; n < N; ++n) {
        val += rowA[n] * B[n][p];
      }
      rowC[p] = val;
    }
    C[m] = rowC;
  }

  return C;
}

function pow(n: number, mat: number[][]): number[][] {
    if (n < 2) {
        return mat;
    }
    const res = pow(n >> 1, mult(mat, mat));
    return ((n & 1) === 0) ? res : mult(res, mat);
};
```

## 3B. Iterative
- Time complexity: $O(\\log{N})$
- Space complexity: $O(1)$

```Typescript
const IDENTITY = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
const RELATION = [[1, 1, 1], [1, 0, 0], [0, 1, 0]];

function tribonacci(n: number): number {
    return (n < 1) ? 0 : pow(n, RELATION, IDENTITY)[0][2];
}

function mult(A: number[][], B: number[][]): number[][] {
  const M = A.length;
  const N = A[0]?.length;
  const P = B[0]?.length;
  if (N !== B.length) {
    throw new Error();
  }

  const C = new Array<number[]>(M);
  for (let m = 0; m < M; ++m) {
    const rowA = A[m];
    const rowC = new Array<number>(P);
    for (let p = 0; p < P; ++p) {
      let val = 0;
      for (let n = 0; n < N; ++n) {
        val += rowA[n] * B[n][p];
      }
      rowC[p] = val;
    }
    C[m] = rowC;
  }

  return C;
}

function pow(n: number, mat: number[][], identity: number[][]): number[][] {
    let rem = identity;
    while (n > 1) {
        rem = ((n & 1) === 0) ? rem : mult(rem, mat);
        mat = mult(mat, mat);
        n >>= 1;
    }
    return mult(rem, mat);
};
```

# 4. Condensed Matrix Multiplication
- Time complexity: $O(\\log{N})$
- Space complexity: $O(N)$

```Typescript
const MEM: number[] = [0, 1, 1];
function tribonacci(n: number): number {
    if (n < 0) {
        return 0;
    }
    if (MEM[n] != null) {
        return MEM[n];
    }

    const k = n >> 1;
    const c = tribonacci(k-2);
    const b = tribonacci(k-1);
    const a = tribonacci(k);

    MEM[n] = ((n & 1) === 0) 
        ? a*(a + 2*(b + c)) + b**2
        : 2*a*(a + 2*b + c) + b*(b + 2*c) + c**2;
    
    return MEM[n];
}
```

# 5. Math
- Time complexity: $O(\\log{N})$
- Space complexity: $O(1)$

See [Binet's Formula for the Tribonacci Sequence](https://www.fq.math.ca/Scanned/20-2/spickerman.pdf).

```Typescript
const TRIB_CONST = tribonacci_constant();
const TRIB_MULT = tribonacci_multiplier();

function tribonacci(n: number): number {
  return Math.round(TRIB_MULT * (TRIB_CONST ** n));
}

function tribonacci_constant(): number {
  const a = 3 * Math.sqrt(33);
  return (1 + Math.cbrt(19 + a) + Math.cbrt(19 - a)) / 3;
}

function tribonacci_multiplier(): number {
  const b = Math.cbrt(586 + 102 * Math.sqrt(33));
  return (3*b) / (b**2 - 2*b + 4);
}
```

<h1 align="center">Followup 1. Custom Initial Values</h1>

Until now our initial values have been $T_0=0, T_1 = 1, T_2 = 1$. Given $n$ and a new array $inits$ of initial values, return the value of $T_n$.

**New constraints:**
- ```3 = inits.length```
- ```-2^31 <= answer < 2^31```

# 6. Counting Multiples

Let's break down each value in the tribonacci sequence by how many multiples of the initial values they have:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-------|---|---|---|---|---|---|---|----|----|
| $T_0$ | 1 | 0 | 0 | 1 | 1 | 2 | 4 |  7 | 13 |
| $T_1$ | 0 | 1 | 0 | 1 | 2 | 3 | 6 | 11 | 20 |
| $T_2$ | 0 | 0 | 1 | 1 | 2 | 4 | 7 | 13 | 24 |

The table shows that the multiples of $T_0$ and $T_2$ are the original tribonacci sequence ($OT$) when $inits = [0,1,1]$. For reference, here is the original sequence:

| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-------|---|---|---|---|---|---|---|----|----|
| $T_n$ | 0 | 1 | 1 | 2 | 4 | 7 | 13 | 24 | 44 |

So for a given $n$, $T_0$'s multiple is $OT_{n-2}$, $T_2$'s multiple is $OT_{n-1}$, and $T_1$'s multiple is $OT_{n-3} + OT_{n-2}$. 

We can use any method described in this post to find $OT$. For example, the following solution uses method "*5. Math*":

```Typescript
function tribonacci(n: number, inits = [0, 1, 1]): number {
    if (n < 3) {
        return inits[n];
    }
    return trib(n-3) * inits[1]
           + trib(n-2) * (inits[0] + inits[1])
           + trib(n-1) * inits[2];
}

const TRIB_CONST = tribonacci_constant();
const TRIB_MULT = tribonacci_multiplier();

function trib(n: number): number {
    return Math.round(TRIB_MULT * (TRIB_CONST ** n));
}

function tribonacci_constant(): number {
  const a = 3 * Math.sqrt(33);
  return (1 + Math.cbrt(19 + a) + Math.cbrt(19 - a)) / 3;
}

function tribonacci_multiplier(): number {
  const b = Math.cbrt(586 + 102 * Math.sqrt(33));
  return (3*b) / (b**2 - 2*b + 4);
}
```

<h1 align="center">Followup 2. K-bonacci Numbers</h1>

In a [Fibonacci](https://leetcode.com/problems/fibonacci-number/) sequence, each number is the sum of the 2 preceding numbers. In a [Tribonacci](https://leetcode.com/problems/n-th-tribonacci-number/) sequence, each number is the sum of the 3 preceding numbers. Write a function that returns the $n$th number in a sequence, where each number is the sum of the $k$ preceding numbers.

**New constraints:**
- ```k = inits.length```
- ```1 < k < 10```
- ```0 <= answer < 2^31```

# 7. Generalized Brute Force

## 7A. Recursive (Time Limit Exceeded)
- Time complexity: $O(K^N)$
- Space complexity: $O(N)$

```Typescript
function tribonacci(n: number): number {
    return kbonacci(n, 3);
}

function kbonacci(n: number, k: number): number {
    if (n < 1) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    let val = 0;
    for (let i = 1; i <= k; ++i) {
        val += kbonacci(n - i, k);
    }
    return val;
};
```

## 7B. Iterative
- Time complexity: $O(NK)$
- Space complexity: $O(N)$

```Typescript
function tribonacci(n: number): number {
    return kbonacci(n, 3);
}

function kbonacci(n: number, k: number) {
    if (n < 1 || k < 1) {
        return 0;
    }
    if (n < 3 || k < 2) {
        return 1;
    }
    let val = 1;
    const vals = [0, 1];
    for (let i = 2; i <= k; ++i) {
        vals.push(val);
        val += val;
    }
    for (let i = k+1; i <= n; ++i) {
        val = 0;
        for (let j = i - k; j < i; ++j) {
            val += vals[j];
        }
        vals.push(val);
    }
    return vals[n];
};
```

# 8. Generalized Sliding Window

## 8A. Iterative, Circular
- Time complexity: $O(N)$
- Space complexity: $O(K)$

```Typescript
function tribonacci(n: number): number {
    return kbonacci(n, [0, 1, 1]);
}

function kbonacci(N: number, vals: number[]): number {
    if (N < 0) {
        return 0;
    }

    const K = vals.length;
    if (N < K) {
        return vals[N];
    }

    // Get sum of vals
    let sum = 0;
    for (let i = 0; i < K; sum += vals[i++]) {}

    // Iterate from K to N
    for (let i = 0; --N >= K; i = (i + 1) % K) {
        const temp = vals[i];
        vals[i] = sum;
        sum += sum - temp;
    }

    return sum;
}
```

## 8B. Iterative, Memoized
- Time complexity: $O(\\max(K, N))$
- Space complexity: $O(\\max({K}, N))$
```Typescript
class Kbonacci {
    K: number;
    mem: number[];

    constructor(inits: number[]) {
        let sum = 0;
        const K = inits.length;
        for (let i = 0; i < K; sum += inits[i++]) {}
        this.mem = Array.from(inits);
        this.mem.push(sum);
        this.K = K;
    }

    get(N: number): number {
        for (let i = this.mem.length - 1; i < N; ++i) {
            this.mem.push(2*this.mem[i] - this.mem[i - this.K]);
        }
        return this.mem[N];
    }
}

const MEM = new Kbonacci([0, 1, 1]);
function tribonacci(n: number): number {
    return MEM.get(n);
}
```

# 9. Generalized Matrix Multiplication

Generalized versions of "*3. Matrix Multiplication*".

## 9A. Iterative

- Time complexity: $O(K^3\\log{N})$
- Space complexity: $O(K^2)$

```Typescript
class Kbonacci {
    identity: number[][];
    K: number;
    relation: number[][];

    constructor(K: number) {
        this.K = K;
        this.identity = genIdentity(this.K);
        this.relation = genRelation(this.K);
    }

    get(N: number): number {
        if (N < 1) {
            return 0;
        }
        return pow(N, this.relation, this.identity)[0][this.K - 1];
    }
}

////////////
// MAIN
////////////

const TRIB = new Kbonacci(3);
function tribonacci(n: number): number {
    return TRIB.get(n);
}

////////////
// HELPERS
////////////

function genIdentity(N: number): number[][] {
    const mat = genMatrix(N);
    for (let i = 0; i < N; ++i) {
        mat[i][i] = 1;
    }
    return mat;
}

function genMatrix(N: number, M = N, v = 0): number[][] {
    const mat: number[][] = [];
    for (let i = 0; i < N; ++i) {
        mat.push(new Array(M).fill(v));
    }
    return mat;
}

function genRelation(N: number): number[][] {
    const mat = genMatrix(N);
    mat[0].fill(1);
    for (let i = 1; i < N; ++i) {
        mat[i][i-1] = 1;
    }
    return mat;
}

function mult(A: number[][], B: number[][]): number[][] {
    const M = A.length;
    const N = A[0]?.length;
    const P = B[0]?.length;
    if (N !== B.length) {
        throw new Error("Matrices cannot be multiplied");
    }

    const C = new Array<number[]>(M);
    for (let m = 0; m < M; ++m) {
        const rowA = A[m];
        const rowC = new Array<number>(P);
        for (let p = 0; p < P; ++p) {
            let val = 0;
            for (let n = 0; n < N; ++n) {
                val += rowA[n] * B[n][p];
            }
            rowC[p] = val;
        }
        C[m] = rowC;
    }

    return C;
}

function pow(n: number, mat: number[][], identity: number[][]): number[][] {
    let rem = identity;
    while (n > 1) {
        rem = ((n & 1) === 0) ? rem : mult(rem, mat);
        mat = mult(mat, mat);
        n >>= 1;
    }
    return mult(rem, mat);
};
```

## 9B. Multiples of K, Memoized

- Time complexity: $O(K^3\\log{N})$
- Space complexity: $O(NK)$

```Typescript
class Kbonacci {
    identity: number[][];
    K: number;
    mats: number[][][];

    constructor(K: number) {
        this.K = K;
        this.identity = genIdentity(this.K);
        this.mats = [genRelation(this.K)];
    }

    get(N: number): number {
        if (N < 1) {
            return 0;
        }
        const y = (this.K - (N % this.K)) % this.K;
        N += y;
        const m = N / this.K;
        if (this.mats[m] == null) {
            this.mats[m] = pow(N, this.mats[0], this.identity);
        }
        return this.mats[m][y][this.K - 1];
    }
}

////////////
// MAIN
////////////

const TRIB = new Kbonacci(3);
function tribonacci(n: number): number {
    return TRIB.get(n);
}

////////////
// HELPERS
////////////

function genIdentity(N: number): number[][] {
    const mat = genMatrix(N);
    for (let i = 0; i < N; ++i) {
        mat[i][i] = 1;
    }
    return mat;
}

function genMatrix(N: number, M = N, v = 0): number[][] {
    const mat: number[][] = [];
    for (let i = 0; i < N; ++i) {
        mat.push(new Array(M).fill(v));
    }
    return mat;
}

function genRelation(N: number): number[][] {
    const mat = genMatrix(N);
    mat[0].fill(1);
    for (let i = 1; i < N; ++i) {
        mat[i][i-1] = 1;
    }
    return mat;
}

function mult(A: number[][], B: number[][]): number[][] {
    const M = A.length;
    const N = A[0]?.length;
    const P = B[0]?.length;
    if (N !== B.length) {
        throw new Error("Matrices cannot be multiplied");
    }

    const C = new Array<number[]>(M);
    for (let m = 0; m < M; ++m) {
        const rowA = A[m];
        const rowC = new Array<number>(P);
        for (let p = 0; p < P; ++p) {
            let val = 0;
            for (let n = 0; n < N; ++n) {
                val += rowA[n] * B[n][p];
            }
            rowC[p] = val;
        }
        C[m] = rowC;
    }

    return C;
}

function pow(n: number, mat: number[][], identity: number[][]): number[][] {
    let rem = identity;
    while (n > 1) {
        rem = ((n & 1) === 0) ? rem : mult(rem, mat);
        mat = mult(mat, mat);
        n >>= 1;
    }
    return mult(rem, mat);
};
```

## 9C. Powers of K, Memoized

- Time complexity: $O(K^3\\log(\\frac{N}{K}))$
- Space complexity: $O(K^2\\log(\\frac{N}{K}))$

```Typescript
class Kbonacci {
    identity: number[][];
    K: number;
    mats: number[][][];

    constructor(K: number) {
        this.K = K;
        this.identity = genIdentity(K);
        this.mats = [pow(K, genRelation(K), this.identity)];
    }

    get(N: number): number {
        const K = this.K;
        const y = (K - (N % K)) % K;
        return this.getMatrix(N)[y][K-1];
    }

    private getMatrix(N: number): number[][] {
        if (N < 1) {
            return this.identity;
        }

        const K = this.K;
        N = Math.ceil(N / K);

        let b = Math.floor(Math.log2(N));
        for (let i = this.mats.length; i <= b; ++i) {
            this.mats.push(square(this.mats[i-1]));
        }

        N -= 1 << b;
        let mat = this.mats[b];
        for (b = 0; N > 0; ++b) {
            const v = 1 << b;
            if ((N & v) !== 0) {
                N -= v;
                mat = mult(mat, this.mats[b]);
            }
        }
        
        return mat;
    }
}

////////////
// MAIN
////////////

const TRIB = new Kbonacci(3);
function tribonacci(n: number): number {
    return TRIB.get(n);
}

////////////
// HELPERS
////////////

function genIdentity(N: number): number[][] {
    const mat = genMatrix(N);
    for (let i = 0; i < N; ++i) {
        mat[i][i] = 1;
    }
    return mat;
}

function genMatrix(N: number, M = N, v = 0): number[][] {
    const mat: number[][] = [];
    for (let i = 0; i < N; ++i) {
        mat.push(new Array(M).fill(v));
    }
    return mat;
}

function genRelation(N: number): number[][] {
    const mat = genMatrix(N);
    mat[0].fill(1);
    for (let i = 1; i < N; ++i) {
        mat[i][i-1] = 1;
    }
    return mat;
}

function mult(A: number[][], B: number[][]): number[][] {
    const M = A.length;
    const N = A[0]?.length;
    const P = B[0]?.length;
    if (N !== B.length) {
        throw new Error("Matrices cannot be multiplied");
    }

    const C = new Array<number[]>(M);
    for (let m = 0; m < M; ++m) {
        const rowA = A[m];
        const rowC = new Array<number>(P);
        for (let p = 0; p < P; ++p) {
            let val = 0;
            for (let n = 0; n < N; ++n) {
                val += rowA[n] * B[n][p];
            }
            rowC[p] = val;
        }
        C[m] = rowC;
    }

    return C;
}

function pow(n: number, mat: number[][], identity: number[][]): number[][] {
    let rem = identity;
    while (n > 1) {
        rem = ((n & 1) === 0) ? rem : mult(rem, mat);
        mat = mult(mat, mat);
        n >>= 1;
    }
    return mult(rem, mat);
};

function square(mat: number[][]): number[][] {
    return mult(mat, mat);
}
```

# 10. Generalized Condensed Matrix Multiplication

## 10A. Powers of K, Memoized
- Time complexity: $O(K^2\\log(\\frac{N}{K}))$
- Space complexity: $O(K\\log(\\frac{N}{K}))$

```Typescript
class Kbonacci {
    K: number;
    inits: number[];
    values: number[][];

    constructor(K: number, inits?: number[]) {
        if (inits != null && inits.length !== K) {
            throw new Error("K !== inits.length");
        }
        this.K = K;
        this.inits = inits;
        this.values = [genInits(K)];
    }

    get(N: number): number {
        if (N < 1) {
            return 0;
        }
        const y = (N - 1 + this.K) % this.K;
        if (this.inits == null) {
            return this.getValues(N)[y];
        }
        if (N <= this.K) {
            return this.inits[N-1];
        }
        return mult(this.inits, this.getValues(N - this.K))[y];
    }

    private getValues(N: number): number[] {
        const K = this.K;
        N = Math.ceil(N / K);

        let b = Math.floor(Math.log2(N));
        for (let i = this.values.length; i <= b; ++i) {
            this.values.push(square(this.values[i-1]));
        }

        N -= 1 << b;
        let vals = this.values[b];
        for (b = 0; N > 0; ++b) {
            const v = 1 << b;
            if ((N & v) !== 0) {
                N -= v;
                vals = mult(vals, this.values[b]);
            }
        }
        
        return vals;
    }
}

////////////
// MAIN
////////////

const TRIB = new Kbonacci(3);
function tribonacci(n: number): number {
    return TRIB.get(n);
}

////////////
// HELPERS
////////////

function decode(arr: number[]): number[][] {
    const N = arr.length;
    const mat: number[][] = [];
    for (let i = 1; i < N; i = mat.push([])){}
    mat[N-1] = arr.slice(1);
    for (let y = N-2; y > 0; --y) {
        for (let x = 0; x < y; ++x) {
            mat[y][x] = mat[y+1][x+1] - arr[x+1];
        }
    }
    mat[0] = arr;
    for (let y = 1; y < N; ++y) {
        for (let x = y; x < N; ++x) {
            mat[y][x] = mat[y-1][x-1] + arr[x];
        }
    }
    return mat;
}

function genInits(N: number): number[] {
    if (N < 1) {
        return [];
    }
    const arr = [1];
    for (let next = 1; --N > 0; next += next) {
        arr.push(next);
    }
    return arr;
}

function mult(A: number[], B: number[]): number[] {
    const N = A.length;
    if (N !== B.length) {
        throw new Error("Cannot multiply: A.length !== B.length");
    }
    const C: number[] = [];
    const matB = decode(B);
    for (let i = 0; i < N; ++i) {
        let val = 0;
        for (let j = 0; j < N; ++j) {
            val += A[j] * matB[j][i];
        }
        C.push(val);
    }
    return C;
}

function square(A: number[]): number[] {
    return mult(A, A);
}
```

# 11: Generalized Math
- Time complexity: $O(\\log{N})$
- Space complexity: $O(1)$

See [A Simplified Binet Formula for k-Generalized Fibonacci Numbers](https://dresden.academic.wlu.edu/files/2017/08/BinetJISsecond.pdf).

```Typescript
function tribonacci(n: number): number {
    return kbonacci(n, 3);
}

const ROOTS = [
    // Precise enough
    0, 1, 1.61803398875, 1.83928675521, 
    // May need more precision
    1.927561975, 1.965948224, 1.98358284, 
    1.99196419, 1.99603117, 1.99802947
];

function kbonacci(n: number, k: number) {
    const r = ROOTS[k];
    const num = (r-1) * r**(n-1);
    const den = 2 + (k + 1) * (r - 2);
    return Math.round(num/den);
}
```