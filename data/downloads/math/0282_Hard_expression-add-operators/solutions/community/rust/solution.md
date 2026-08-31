# Rust 7ms backtracking with explanation

**Author:** Martician
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/4791570/](https://leetcode.com/problems/expression-add-operators/solutions/4791570/)

---

# Approach
Brute force solution: generate all possible valid expressions and then check if they evaluate to the target value.

This is ok, but we can do better: Instead of evaluating expressions when we have fully constructed them we can evaluate gradually as we generate the expressions. This would save a lot of time.

# Implementation
We create a recursive function that operates on some suffix of the original ```num```. First it checks if the suffix is empty. If that is the case we can not do anything more with the expression, so we just add it to the answer if it evaluates to target(note that everything preceding the suffix is completely evaluated beforehand and passed as an argument to the function).

If the suffix is not empty we concatenate ```1 <= i <= suffix.len()``` characters, perform one of ```+```,```-```,```*``` with a left operand the previous evaluation and a right operand the concatenation and then recursively call the function with a ```i```-characters shorter suffix.

# Note
Multiplication has a higher priority than addition and subtraction which can lead to invalid evaluation:
```
Input: "234"
In the case of the "2+3*4" expression
we would first evaluate 2 then add 3 to the evaluation.
This however is wrong evaluation order,
2+3*4 = 2+(3*4) = 2 + 12 = 14
We should correct our evaluation by removing the 3
and substituting it with 3*4.
```
Also we should not consider concatenations that start with "0" other than "0" itself (053 is not a number but 0 is)

# Code
```
impl Solution {
    pub fn add_operators(num: String, tgt: i32) -> Vec<String> {
        let num = num.as_bytes();
        let mut s = vec![];
        let mut rez = vec![];

        let mut x = 0;
        for i in (0..num.len()).take_while(|&i| num[0] != b'0' || i == 0) {
            x = x * 10 + (num[i] - b'0') as i64;
            s.push(num[i]);
            Self::dfs(&num[i + 1..], &mut s, &mut rez, tgt as i64, x, x);
        }
        rez
    }

    fn dfs(num: &[u8], s: &mut Vec<u8>, rez: &mut Vec<String>, tgt: i64, eval: i64, prev: i64) {
        let n = num.len();
        if n == 0 {
            if eval == tgt {
                rez.push(unsafe { String::from_utf8_unchecked(s.clone()) });
            }
            return;
        }

        let m = s.len();
        s.push(b'@');
        let mut x = 0;
        for i in (0..n).take_while(|&i| num[0] != b'0' || i == 0) {
            x = x * 10 + (num[i] - b'0') as i64;
            s.push(num[i]);
            s[m] = b'+';
            Self::dfs(&num[i + 1..], s, rez, tgt, eval + x, x);

            s[m] = b'-';
            Self::dfs(&num[i + 1..], s, rez, tgt, eval - x, -x);

            s[m] = b'*';
            Self::dfs(&num[i + 1..], s, rez, tgt, eval - prev + prev * x, prev * x);
        }
        s.truncate(m);
    }
}
```