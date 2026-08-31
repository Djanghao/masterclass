# Rust solution

**Author:** BigMih
**Votes:** 5
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/1625016/](https://leetcode.com/problems/rings-and-rods/solutions/1625016/)

---

```
impl Solution {
    pub fn count_points(rings: String) -> i32 {
        let mut rods = [0; 10];
        rings.as_bytes().chunks(2).for_each(|pair| {
            rods[(pair[1] - b'0') as usize] |= match pair[0] {
                b'R' => 0b001,
                b'G' => 0b010,
                _ => 0b100,
            };
        });
        rods.iter().filter(|&&x| x == 0b111).count() as _
    }
}
```