# Just a solution

**Author:** Variete
**Votes:** 0
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5683026/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5683026/)

---

# Code
```rust []
impl Solution {
    fn to_frac(expr: &str) -> (i32, i32) {
        let exprs: Vec<_> = expr.split('/').collect();
        (exprs[0].parse::<i32>().unwrap(), exprs[1].parse::<i32>().unwrap())
    }

    fn gcd(a: i32, b: i32) -> i32 {
        let (mut a, mut b) = (a, b);
        while b != 0 {
            a %= b;
            (a, b) = (b, a)
        }
        a
    }

    pub fn fraction_addition(expression: String) -> String {
        let exprs_plus: Vec<_> = expression.split('+').collect();

        let [mut nom, mut de_nom] = [0, 1];
        for expr in exprs_plus {
            let exprs_minus: Vec<_> = expr.split('-').collect();

            let mut i = 1;
            let (mut a, mut b) = if exprs_minus[0].is_empty() {
                i += 1;
                let (a, b) = Self::to_frac(exprs_minus[1]);
                (-a, b)
            } else {
                Self::to_frac(exprs_minus[0])
            };

            for expr in &exprs_minus[i..] {
                let (c, d) = Self::to_frac(expr);
                (a, b) = (a * d - b * c, b * d);
                let g = Self::gcd(a, b);
                (a, b) = (a / g, b / g);
            }

            (nom, de_nom) = (nom * b + a * de_nom, b * de_nom);
            let g = Self::gcd(nom, de_nom);
            (nom, de_nom) = (nom / g, de_nom / g);
        }
        if de_nom < 0 {
            (nom, de_nom) = (-nom, -de_nom);
        }

        [nom.to_string(), "/".to_owned(), de_nom.to_string()].concat()
    }
}
```