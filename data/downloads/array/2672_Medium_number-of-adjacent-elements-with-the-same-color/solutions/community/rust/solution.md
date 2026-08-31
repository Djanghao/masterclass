# read hint and u will solve it | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/4455221/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/4455221/)

---

# Code
```
// use std::collections::HashMap;
impl Solution {
    pub fn color_the_array(n: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let mut colors: Vec<i32> = vec![0; n as usize];
        let mut result: Vec<i32> = vec![];
        // let mut color_freq: HashMap<i32, i32> = HashMap::new();
        let mut count: i32 = 0;

        for i in 0..queries.len() {
            let mut colors_idx: usize = queries[i][0] as usize;
            let mut prev_color: i32 = colors[colors_idx];
            let mut new_color: i32 = queries[i][1];
            if prev_color == new_color {
                result.push(count);
                continue
            }
            if i == 0 {
                colors[colors_idx] = new_color;
                result.push(count);
                continue;
            }
            
            // checking
            if colors_idx > 0 && prev_color == colors[colors_idx-1] && prev_color != 0 {count -= 1}
            if colors_idx < colors.len()-1 && prev_color == colors[colors_idx+1] && colors[colors_idx+1] != 0 {count -= 1}
            if colors_idx > 0 && new_color == colors[colors_idx-1] && colors[colors_idx-1] != 0 {count += 1} 
            if colors_idx < colors.len()-1 && new_color == colors[colors_idx+1] && colors[colors_idx+1] != 0 {count += 1} 

            result.push(count);
            colors[colors_idx] = new_color;
        }   

        // TEST
        // println!("{:?}", colors);
        // TEST


        result
    }
}
```