# Rust - Brutal Force with a Heap

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2261405/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2261405/)

---

The key point is to evenly distribute the fills, so that <i>to fill two at once</i> can be exploited.

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl1/lc2335)

<b>Problem List</b>
#Heap - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_data_structure/heap)

```
/// @author: Leon
/// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/
/// Time Complexity:    O(max(`nums`) *  lg(`len_ns`))
/// Space Complexity:   O(`len_ns`) ~ O(1)
use std::collections::BinaryHeap;
impl Solution {
    pub fn fill_cups(nums: Vec<i32>) -> i32 {
        let len_ns: usize = nums.len(); // 3
        let mut heap: BinaryHeap<i32> = {
            let mut heap = BinaryHeap::with_capacity(len_ns);
            for num in nums{
                if num != 0{
                    heap.push(num);
                }
            }
            heap
        };
        let mut cnt: i32 = 0;
        while let Some(top) = heap.pop(){
            if let Some(sec_top) = heap.pop(){
                if sec_top > 1{
                    heap.push(sec_top - 1);
                }
            }else{
                return cnt + top;
            }
            if top > 1{
                heap.push(top - 1);
            }
            cnt += 1;
        }
        cnt
    }
}
```