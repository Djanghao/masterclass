# Rust - 0ms

**Author:** aaronbruckner
**Votes:** 3
**Link:** [https://leetcode.com/problems/image-smoother/solutions/522747/](https://leetcode.com/problems/image-smoother/solutions/522747/)

---

```
static directions: [[i32; 2]; 9] = [
    [-1,-1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1]
];

impl Solution {
    pub fn image_smoother(img: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut smoothed_image: Vec<Vec<i32>> = Vec::new();
        
        for row in 0..img.len() {
            let mut smoothRow: Vec<i32> = Vec::with_capacity(img[0].len());
            for col in 0..img[0].len() {
                smoothRow.push(find_smoothed_value(&img, row, col));
            }
            smoothed_image.push(smoothRow);
        }
        smoothed_image
    }
}

fn find_smoothed_value(img: &Vec<Vec<i32>>, row: usize, col: usize) -> i32 {
    let mut total = 0;
    let mut count = 0;
    for [rowOff, colOff] in &directions {
        let new_row = (row as i32) + rowOff;
        let new_col = (col as i32) + colOff;
        
        if new_row >= 0 && new_row < img.len() as i32 && new_col >= 0 && new_col < img[0].len() as i32 {
            count += 1;
            total += img[new_row as usize][new_col as usize];
        }
    }
    total / count
}
```