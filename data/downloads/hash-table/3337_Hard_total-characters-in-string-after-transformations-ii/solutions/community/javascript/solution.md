# JS | Matrix Multiplication

**Author:** michaelm12358
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973134/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5973134/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can create a matrix based on the 'nums' array, and exponentiate it to the t-th power. Then, we create a vector with the counts of the letters in the input, and multiply it by the exponentiated matrix. 

# Approach
<!-- Describe your approach to solving the problem. -->
Each row in the matrix corresponds to an input letter, and the columns respond to the number of times that input letter creates that output letter. I.e. if we have an input nums of `[2, ...]`, the first row of the matrix would be `[0, 1, 1, 0, ...]`.


# Code
```javascript []
const MOD = 1e9 + 7;
const MODn = BigInt(MOD);

var lengthAfterTransformations = function(s, t, nums) {
    let vec = new Array(26).fill(0);
    for(let i = 0; i < s.length; ++i) {
        let chr = s.charCodeAt(i) - 'a'.charCodeAt(0);
        vec[chr] += 1;
    }
    let mat = new Array(26).fill(0).map(_ => new Array(26).fill(0n));
    for(let i = 0; i < 26; ++i) {
        let count = nums[i];
        let j = (i + 1) % 26;
        while(count > 0) {
            mat[i][j] = 1n;
            --count;
            
            j = (j + 1) % 26;
        }

    }

    mat = matPow(mat, t);
    let result = 0;
    for(let i = 0; i < 26; ++i) {
        for(let j = 0; j < 26; ++j) {
            result += vec[i] * Number(mat[i][j]);
        }
        result = result % MOD;
    }

    return result;
}

function multiplyInto(mat1, mat2, output, tmp) {

    for(let i = 0; i < output.length; ++i) {
        for(let j = 0; j < output[0].length; ++j) {
            let result = 0n;
            for(let k = 0; k < output.length; ++k) {
                result += mat1[i][k] * mat2[k][j];
                result %= MODn;
            }
            tmp[i][j] = result;
        }
    }

    for(let i = 0; i < output.length; ++i) {
        for(let j = 0; j < output[0].length; ++j) {
            output[i][j] = tmp[i][j];
        }
    }
}

function matPow(mat, exp) {
    const result = new Array(mat.length).fill(0).map(_ => mat[0].slice(0).fill(0n));
    const tmp = new Array(mat.length).fill(0).map(_ => mat[0].slice(0));
    for(let i = 0; i < result.length; ++i) {
        result[i][i] = 1n;
    }

    while (exp) {
        if (exp & 1) { multiplyInto(mat, result, result, tmp); }
        multiplyInto(mat, mat, mat, tmp);
        exp >>>= 1;
    }

    return result;
}
```