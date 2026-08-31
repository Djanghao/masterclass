# Rust - Linear Scan

**Author:** idiotleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/2970075/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/2970075/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl2/lc1428)

<b>By Tag</b>
#LinearScan - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_technique/n_pointers/by_pointer_amount/linear_scan)
#BinarySearch - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/search/binary_search)
#Matrix - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/array/by_dimension/array_2d.txt)
#APIGiven - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/others/api_given.txt)

```
/// @author: Leon
/// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/
/// Time Complexity:    O(`len_rs` + `len_cs`)
/// Space Complexity:   O(1)
impl Solution {
    pub fn left_most_column_with_one(mat: &FakeBinaryMatrix) -> i32 {
        let dimens: Vec<i32> = mat.dimensions();
        let len_rs: i32 = dimens[0];
        let len_cs: i32 = dimens[1];
        let mut r: i32 = 0;
        let mut c: i32 = len_cs - 1;
        while r < len_rs {
            while c >= 0 && mat.get(r, c) == 1 {
                c -= 1;
            }
            r += 1;
        }
        return if c == len_cs - 1 { -1 } else { c + 1 };
    }
}
```

```
/// @author: Leon
/// https://leetcode.com/problems/leftmost-column-with-at-least-a-one/description/
/// Time Complexity:    O(`len_rs` + `len_cs`)
/// Space Complexity:   O(1)
impl Solution {
    pub fn left_most_column_with_one(mat: &FakeBinaryMatrix) -> i32 {
        let dimens: Vec<i32> = mat.dimensions();
        let len_rs: i32 = dimens[0];
        let len_cs: i32 = dimens[1];
        let mut r: i32 = 0;
        let mut c: i32 = len_cs - 1;
        while r < len_rs && c >= 0 {
            if mat.get(r, c) == 1 {
                c -= 1;
            } else {
                r += 1;
            }
        }
        return if c == len_cs - 1 { -1 } else { c + 1 };
    }
}
```