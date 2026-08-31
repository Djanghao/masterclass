# Solution in Rust

**Author:** douaumont
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-square/solutions/5678681/](https://leetcode.com/problems/valid-square/solutions/5678681/)

---

# Approach
1. Calculate vectors composed from the given points (there will be $$3$$ vectors);
2. Sort the vectors by their length in ascending order;
3. Check if all of the following conditions are true:
3.1 Scalar product of the first two vectors should be zero, i.e. the angle between them is $$90$$ degrees;
3.2 Sum of the first two vectors should equal to the last one;
3.3 The first two vectors' lengths should be equal;
3.4 All vectors' lengths should be greater than zero;
4. If all of it is true, then the given points make a square.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```rust []
struct Vec2d {
    x: i32,
    y: i32
}

impl Vec2d {
    fn new(begin: &Vec<i32>, end: &Vec<i32>) -> Vec2d {
        Vec2d {
            x: end[0] - begin[0],
            y: end[1] - begin[1]
        }
    }

    fn length(&self) -> f64 {
        let x = self.x as f64;
        let y = self.y as f64;
        (x.powi(2) + y.powi(2)).sqrt()
    }

    fn add(&self, other: &Self) -> Self {
        Self {
            x: self.x + other.x,
            y: self.y + other.y
        }
    }

    fn scalar_product(&self, other: &Self) -> i32 {
        self.x * other.x + self.y * other.y
    }
}

impl std::cmp::PartialEq for Vec2d {
    fn eq(&self, other: &Self) -> bool {
        self.x == other.x && self.y == other.y
    }
}

const PRECISION: f64 = 1e-6;

impl Solution {
    pub fn valid_square(p1: Vec<i32>, p2: Vec<i32>, p3: Vec<i32>, p4: Vec<i32>) -> bool {
        let mut vectors: [Vec2d; 3] = [Vec2d::new(&p1, &p2), Vec2d::new(&p1, &p3), Vec2d::new(&p1, &p4)];
        vectors.sort_by(|v1, v2| v1.length().total_cmp(&v2.length()));

        //scalar product of the first two vectors should be zero
        vectors[0].scalar_product(&vectors[1]) == 0 &&
        //sum of the first two vectors should equal to the last one
        vectors[0].add(&vectors[1]) == vectors[2] &&
        //the first two vectors' lengths should be equal
        (vectors[0].length() - vectors[1].length()).abs() < PRECISION &&
        //all vectors' lengths should be greater than zero
        vectors.iter().fold(true, |res, vec| res && vec.length() > 0.0)
    }
}
```