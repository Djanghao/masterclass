# Rust; speed & mem better than 100% 0ms; with comments;

**Author:** mariodanieldoskocil
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/2624110/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/2624110/)

---


```
impl Solution {
    pub fn max_chunks_to_sorted(arr: Vec<i32>) -> i32 {

		//add index divided by 10000 to each element - this removes all duplicate numbers
		let arr_float = arr.iter().enumerate().map(|(i, &x)| x as f32 + (i as f32 / 10000.0)).collect::<Vec<f32>>();

		//sort arr2_float and save it to arr3
		let mut arr_float_sorted = arr_float.clone();
		arr_float_sorted.sort_by(|a, b| a.partial_cmp(b).unwrap());

		let mut max = 0.0;
		let mut res = 0;

		//loop through array arr_float with index
		for (index, num) in arr_float.iter().enumerate() {
			//if num is greater than max, set max to num
			if num > &max {
				max = *num as f32;
			}
			if arr_float_sorted[index] == max {
				res += 1;
				max = 0.0;
			}
		}

		return res;
    }
}
```