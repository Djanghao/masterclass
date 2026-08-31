# rust solution

**Author:** akaisiro
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1980089/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1980089/)

---

```rust
pub fn _count_rectangles(rectangles: Vec<Vec<i32>>, points: Vec<Vec<i32>>) -> Vec<i32> {
    let mut group: Vec<Vec<i32>> = vec![Vec::new(); 101];
    rectangles
        .iter()
        .for_each(|x| group[x[1] as usize].push(x[0]));
    group.iter_mut().for_each(|x| x.sort_unstable());

    points
        .iter()
        .map(|i| {
            group
                .iter()
                .skip(i[1] as usize)
                .map(|l| match l.binary_search(&i[0]) {
                    Ok(index) => (l.len() - index) as i32,
                    Err(index) => (l.len() - index) as i32,
                })
                .sum::<i32>()
        })
        .collect()
}
```