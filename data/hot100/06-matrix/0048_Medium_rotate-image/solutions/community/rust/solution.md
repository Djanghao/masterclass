# Rust | Three Solutions | With Comments

**Author:** wallicent
**Votes:** 6
**Link:** [https://leetcode.com/problems/rotate-image/solutions/2504047/](https://leetcode.com/problems/rotate-image/solutions/2504047/)

---

There are several different pairs of transformations that result in a 90 degree rotation of the matrix. One is mirroring vertically, and then transposing:

```
impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        matrix.reverse();
        for i in 1..matrix.len() {
            for j in 0..i {
                let t = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = t;
            }
        }
    }
}
```

which I think is the most elegant and efficient, since the `.reverse()` operation is just n / 2 swaps of fat pointers. Another method is transposing and then mirroring horizontally:

```
impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        for i in 1..matrix.len() {
            for j in 0..i {
                let t = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = t;
            }
        }
        matrix.iter_mut().for_each(|row| row.reverse());
    }
}
```

which is less efficient since we have to do n * n / 2 swaps in the mirroring operation. And as an exercise, I also did the variation with horizontal mirroring followed by mirroring over the anti-diagonal, and I did it with functional-style Rust. Not at all as clean as the solutions above, but the idea here was to create chained iterators with the endpoints of all the relevant diagonals (corners do not need to be reversed), and then walk toward the middle of each diagonal, swapping elements as we go. Nice to use chained iterators and `successors`. :)

```
impl Solution {
    pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
        matrix.iter_mut().for_each(|row| row.reverse());
        let m = matrix.len();
        (1..m - 1)
            .map(|i| ((i, 0), (m - 1, m - i - 1)))
            .chain((0..m - 1).map(|j| ((0, j), (m - j - 1, m - 1))))
            .for_each(|coords| {
                std::iter::successors(Some(coords), |((r1, c1), (r2, c2))| {
                    Some(((*r1 + 1, *c1 + 1), (r2.wrapping_sub(1), c2.wrapping_sub(1))))
                })
                .take_while(|((r1, _), (r2, _))| *r1 < *r2)
                .for_each(|((r1, c1), (r2, c2))| {
                    let t = matrix[r1][c1];
                    matrix[r1][c1] = matrix[r2][c2];
                    matrix[r2][c2] = t;
                })
            })
    }
}
```