# No explanation real $\Theta(1)$ Rust solution

**Author:** Dzuchun
**Votes:** 0
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3834232/](https://leetcode.com/problems/soup-servings/solutions/3834232/)

---

### First thoughts
Well, It's obviously a DP problem. The thing is, I'm really afraid of **regular DP will hit TLE** with `n` being, like, 1bil...

A [good person in the comments](https://leetcode.com/problems/soup-servings/description/comments/1909774) inspired me to do a simulation first, and... yep, it's the best way to solve it.

First observation I've taken is that answer repeats a lot. Specifically, for $n \\in [1;25]$ it's all $0.62500$, for $n\\in[26;50]$ it's $0.62500$ again, and for $n\\in[51;75]$ it's $0.65625$.
This makes sense, since amount of soup modulo $25$ does not change up until the last serve. And since last serve is performed in the same way too, it only makes sense to calculate results for $n \\equiv 1\\ (mod\\ 25)$.

We can simplify a problem further, if we consider `amount(A)//25` and `amount(B)//25` as our variables instead.
To do that, I've written the following piece of code:
```rust
fn main() {
    const N: usize = 194;
    let mut results: [[f64; N]; N] = [[0f64; N]; N];
    results[0][0] = 0.5;
    for j in 1..N {
        results[0][j] = 1.0;
    }
    for i in 1..N {
        for j in 1..N {
            results[i][j] = (results[if i > 4 { i - 4 } else { 0 }][j]
                + results[if i > 3 { i - 3 } else { 0 }][if j > 1 { j - 1 } else { 0 }]
                + results[if i > 2 { i - 2 } else { 0 }][if j > 2 { j - 2 } else { 0 }]
                + results[if i > 1 { i - 1 } else { 0 }][if j > 3 { j - 3 } else { 0 }])
                / 4.0;
        }
    }

    for i in 0..N {
        println!("{:.5},", results[i][i] as f32);
    }
}

```
($N$ here is supposedly $(n-1)//25$)

This is a regular memorized DP, printing results after all calculations.

It might be confusing, why did I interrupt the calculations precisely after $N=193$, but the reason is quite simple: the answer is "$1.00000something$" after that, so according to task specs, it's alright to return $1.0$ instead.

I've written all of the pre-computed answers into a static array, and returned corresponding one for each test.

### Code
```rust
const ANSWERS: [f32; 192] = [
    0.62500, 0.62500, 0.65625, 0.71875, 0.74219, 0.75781, 0.78516, 0.79688, 0.81787, 0.82764,
    0.84485, 0.85217, 0.86670, 0.87256, 0.88483, 0.88963, 0.90008, 0.90406, 0.91301, 0.91634,
    0.92405, 0.92687, 0.93353, 0.93593, 0.94170, 0.94376, 0.94878, 0.95056, 0.95493, 0.95646,
    0.96029, 0.96162, 0.96497, 0.96612, 0.96906, 0.97007, 0.97265, 0.97353, 0.97580, 0.97657,
    0.97857, 0.97924, 0.98100, 0.98160, 0.98315, 0.98367, 0.98505, 0.98551, 0.98672, 0.98713,
    0.98820, 0.98856, 0.98951, 0.98983, 0.99067, 0.99095, 0.99170, 0.99195, 0.99261, 0.99283,
    0.99342, 0.99362, 0.99414, 0.99431, 0.99478, 0.99493, 0.99535, 0.99548, 0.99585, 0.99597,
    0.99630, 0.99640, 0.99670, 0.99679, 0.99705, 0.99714, 0.99737, 0.99744, 0.99765, 0.99772,
    0.99790, 0.99796, 0.99812, 0.99818, 0.99832, 0.99837, 0.99850, 0.99854, 0.99866, 0.99870,
    0.99880, 0.99884, 0.99893, 0.99896, 0.99904, 0.99907, 0.99914, 0.99917, 0.99923, 0.99925,
    0.99931, 0.99933, 0.99939, 0.99940, 0.99945, 0.99947, 0.99951, 0.99952, 0.99956, 0.99957,
    0.99961, 0.99962, 0.99965, 0.99966, 0.99968, 0.99969, 0.99972, 0.99972, 0.99975, 0.99975,
    0.99977, 0.99978, 0.99980, 0.99980, 0.99982, 0.99982, 0.99984, 0.99984, 0.99985, 0.99986,
    0.99987, 0.99987, 0.99988, 0.99989, 0.99989, 0.99990, 0.99991, 0.99991, 0.99991, 0.99992,
    0.99992, 0.99993, 0.99993, 0.99993, 0.99994, 0.99994, 0.99994, 0.99995, 0.99995, 0.99995,
    0.99996, 0.99996, 0.99996, 0.99996, 0.99996, 0.99997, 0.99997, 0.99997, 0.99997, 0.99997,
    0.99997, 0.99997, 0.99998, 0.99998, 0.99998, 0.99998, 0.99998, 0.99998, 0.99998, 0.99998,
    0.99998, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999,
    0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999, 0.99999,
    0.99999, 0.99999,
];

impl Solution {
    pub fn soup_servings(n: i32) -> f64 {
        if n == 0 {
            return 0.5;
        }
        let mut n = n as usize;
        n -= 1;
        n /= 25;
        if n >= ANSWERS.len() {
            1.0
        } else {
            ANSWERS[n] as f64
        }
    }
}
```

**Note:** `ANSWERS` array is of type `[f32; _]`, since `f32` has enough precision to store 5 decimal digits. In fact, if only 4 digits were required, I'd use `u16` instead, convert it into `f64` at runtime, and divide by 10k.

### Performance & Complexity
Complexity and memory usage are obviously $\\Theta(1)$ both, since there are no iterations or recursion at runtime at all.

At the time of me writing this, LeetCode's performance for this solution is
- 0ms runtime (beats 100%)
- 2.24mb memory (beats 100%)

Although I seriously doubt it really using 2mb, since the array I use is static, and takes up, like, 800b. Also, as runtime I create separate variable `n` to have a `usize` type instead of `i32` (8b, at most). You may want to include 8b for `f64` I return.

So, to use up 2mb of memory in total, LeetCode presumably runs this code, like, 100k times :D