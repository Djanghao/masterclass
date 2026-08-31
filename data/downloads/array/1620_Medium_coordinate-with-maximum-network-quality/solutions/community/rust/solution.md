# Calculating quality for each point and comparing

**Author:** ileftit
**Votes:** 0
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/4442494/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/4442494/)

---

# Code
```
impl Solution {
    pub fn best_coordinate(towers: Vec<Vec<i32>>, radius: i32) -> Vec<i32> {
        let xs = towers.iter().map(|x| x[0]).collect::<Vec<i32>>();
        let ys = towers.iter().map(|x| x[1]).collect::<Vec<i32>>();
        let mut high_quality: i32 = 0;
        let mut high_quality_point: Vec<i32> = vec![0, 0];
        for x in &xs {
            for y in &ys {
                let mut quality: i32 = 0;
                for tower in &towers {
                    let d = ((x - tower[0]).pow(2)+ (y - tower[1]).pow(2)) as f64;
                    if d <= radius.pow(2) as f64 {
                        quality += (tower[2] as f64 / (1.0 + d.sqrt())) as i32;
                    }
                }
                if quality > high_quality {
                    high_quality = quality;
                    high_quality_point = vec![*x, *y]
                } else if quality == high_quality {
                    high_quality_point = std::cmp::min(vec![*x, *y], high_quality_point);
                }
            }
        }
        high_quality_point
    }
}
```