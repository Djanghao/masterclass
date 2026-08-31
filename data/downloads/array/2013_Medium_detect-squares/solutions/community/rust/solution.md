# rust: simple HashMap with buckets of x and y

**Author:** happysings
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-squares/solutions/4558254/](https://leetcode.com/problems/detect-squares/solutions/4558254/)

---


# Code
```
use std::collections::HashMap;

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
struct Point {
    x: i32,
    y: i32,
}

#[derive(Debug)]
struct DetectSquares {
    h: HashMap<Point, i32>,
    xs: HashMap<i32, Vec<Point>>,
    ys: HashMap<i32, Vec<Point>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl DetectSquares {
    fn new() -> Self {
        Self {
            h: HashMap::new(),
            xs: HashMap::new(),
            ys: HashMap::new(),
        }
    }

    fn add(&mut self, point: Vec<i32>) {
        let p = Point {
            x: point[0],
            y: point[1],
        };
        *self.h.entry(p).or_insert(0) += 1;
        self.xs.entry(point[0]).or_insert(Vec::new()).push(p);
        self.ys.entry(point[1]).or_insert(Vec::new()).push(p);
    }

    fn count(&self, point: Vec<i32>) -> i32 {
        let p = Point {
            x: point[0],
            y: point[1],
        };
        let mut res = 0;
        if let Some(xs) = self.xs.get(&p.x) {
            for p1 in xs {
                if p1.y == p.y {
                    continue;
                }
                let side_len = (p.y - p1.y).abs();
                let p2 = Point {
                    x: (p.x - side_len),
                    y: p.y,
                };
                if let Some(xs) = self.xs.get(&p2.x) {
                    if let Some(count) = self.h.get(&p2) {
                        // dbg!((side_len, count, (p.x - side_len, p.y), p, p1));
                        for p3 in xs {
                            // dbg!("-", (side_len, count, p, p1, p3, p2));
                            if p1.y == p3.y {
                                res += count
                            }
                        }
                    }
                }
                let p2 = Point {
                    x: (p.x + side_len),
                    y: p.y,
                };
                if let Some(xs) = self.xs.get(&p2.x) {
                    if let Some(count) = self.h.get(&p2) {
                        // dbg!(side_len, count);
                        for p3 in xs {
                            // dbg!("+", (side_len, count, p, p1, p3, p2));
                            if p1.y == p3.y {
                                res += count
                            }
                        }
                    }
                }
            }
        }
        res
    }
}

mod tests {
    use super::*;

    #[test]
    fn test_1() {
        let mut d = DetectSquares::new();
        d.add(vec![3, 10]);
        d.add(vec![11, 2]);
        d.add(vec![3, 2]);
        // assert_eq!(d.count(vec![11, 10]), 1);
        // dbg!(&d);
        d.add(vec![3, 2]);
        dbg!(&d);
        assert_eq!(d.count(vec![11, 10]), 2);
    }

    #[test]
    fn test_2() {
        let mut d = DetectSquares::new();
        d.add(vec![3, 10]);
        d.add(vec![11, 2]);
        d.add(vec![11, 10]);
        assert_eq!(d.count(vec![3, 2]), 1);
    }

    #[test]
    fn test_3() {
        let mut d = DetectSquares::new();
        d.add(vec![3, 10]);
        d.add(vec![3, 2]);
        d.add(vec![11, 10]);
        assert_eq!(d.count(vec![11, 2]), 1);
    }

    #[test]
    fn test_4() {
        let mut d = DetectSquares::new();
        d.add(vec![11, 2]);
        d.add(vec![3, 2]);
        d.add(vec![11, 10]);
        assert_eq!(d.count(vec![3, 10]), 1);
    }
}
```