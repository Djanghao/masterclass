# just a variant

**Author:** igormsc
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5019292/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5019292/)

---

# Code
```Rust []
impl Solution {
    pub fn number_of_subarrays(nums: Vec<i32>) -> i64 {
        let mut st:Vec<Vec<i32>> = vec![];
        return nums.iter().fold(0i64, | r, n | {
            while !st.is_empty() && *st.last().unwrap().last().unwrap() < *n { st.truncate(st.len()-1) }
            if st.is_empty() || *st.last().unwrap().last().unwrap() != *n { st.push(vec![0, *n]) }
            let v = st.last_mut().unwrap().first_mut().unwrap();
            *v += 1;
            r + *v as i64 } )
    }
}
```
```Kotlin []
class Solution {
    fun numberOfSubarrays(nums: IntArray): Long {
        val st = Stack<IntArray>();
        return nums.fold(0L) { r, n ->
                    while (st.isNotEmpty() && st.peek()[0] < n) st.pop()
                    if (st.isEmpty() || st.peek()[0] != n) st.push(intArrayOf(n, 0))
                    r + (++st.peek()[1]).toLong()
        }
    }
}
```