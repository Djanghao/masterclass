# matrix solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5985606/](https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/solutions/5985606/)

---

# Intuition
This is a matrix problem. Since the order doesn't matter, view the original string as a freqency array $v$. After one transformation, the array would be as if it has been multiplied by a matrix $M$ like this.
$$
\\begin{bmatrix} 
    0                           & 0                           & \\ldots & \\vdots(\	ext{nums[26] ones})\\\\
    \\vdots(\	ext{nums[0] ones}) & 0                           & \\ldots & 0\\\\
    0                           & \\vdots(\	ext{nums[1] ones}) & \\ldots & 0\\\\
    0                           & 0                           & \\ldots & 0\\\\

\\end{bmatrix}
$$
Use matrix multiplication to calculate $M^t$, then calculate $M^tv$

# Complexity
- Time complexity:
$$O(\\log(t)*n)$$

- Space complexity:
$$O(\\log(t))$$

# Code
```rust []
impl Solution {
    const MOD:u64=1000000007;

    pub fn length_after_transformations(s: String, t: i32, nums: Vec<i32>) -> i32 {
        let mut matrix=[[0u64; 26]; 26];
        for i in 0..26{
            for j in i+1..=i+nums[i] as usize{
                matrix[j%26][i]=1;
            }
        }

        let M=Self::mexp(matrix, t);

        let mut v=[0u64; 26];
        for c in s.as_bytes(){
            v[(*c-b'a') as usize]+=1;
        }
        let mut r=[0u64; 26];
        for i in 0..26{
            let mut n=0;
            for j in 0..26{
                n+=M[i][j]*v[j];
                n%=Self::MOD;
            }
            r[i]=n;
        }
        (r.into_iter().sum::<u64>()%Self::MOD) as i32
    }

    fn mexp(matrix: [[u64; 26]; 26], p: i32) -> [[u64; 26]; 26]{
        if p==1{
            matrix
        }else{
            let h=Self::mexp(matrix, p/2);
            if p%2==0{
                Self::mm(&h, &h)
            }else{
                let r=Self::mm(&h, &h);
                Self::mm(&r, &matrix)
            }
        }
    }

    fn mm(A: &[[u64; 26]; 26], B: &[[u64; 26]; 26]) -> [[u64; 26]; 26]{
        let mut res=[[0u64; 26]; 26];
        for i in 0..26{
            for j in 0..26{
                let mut n=0;
                for k in 0..26{
                    n+=A[i][k]*B[k][j];
                    n%=Self::MOD;
                }
                res[i][j]=n;
            }
        }
        res
    }
}
```