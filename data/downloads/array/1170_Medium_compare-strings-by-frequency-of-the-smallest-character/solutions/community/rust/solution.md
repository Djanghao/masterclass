# simple approach in rust

**Author:** ravik13
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4454989/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4454989/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn num_smaller_by_frequency(queries: Vec<String>, words: Vec<String>) -> Vec<i32> {

        fn process(arr: &String)->u8{
            // println!("{:?}",arr);
            let mut first:char=arr.chars().nth(0).unwrap();
            let mut count:u8=1;
            for i in arr[1..arr.len()].chars(){
                if i<first{
                    first=i;
                    count=1;
                }
                else if first==i{
                    count+=1;
                }
            }
            return count;
        }
        let mut word_arr:Vec<u8>=Vec::new();
        let mut queries_arr:Vec<u8>=Vec::new();
        for i in (0..words.len()){
            word_arr.push(process(&words[i]));
        }
        for i in (0..queries.len()){
            queries_arr.push(process(&queries[i]));
        }
        // println!("{:?}",word_arr);
        // println!("{:?}",queries_arr);
        let mut out:Vec<i32>=Vec::new();
        for i in &queries_arr{
            let mut c:i32=0;
            for j in &word_arr{
                if j>i{
                    c+=1;
                }
            }
            out.push(c);
        }
        out
    }
}
```