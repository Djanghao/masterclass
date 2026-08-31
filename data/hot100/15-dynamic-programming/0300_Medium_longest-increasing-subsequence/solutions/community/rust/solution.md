# SIMPLE explanation O(n*log(n)) - Beats 100% (plain English + rust).

**Author:** jesse1412
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509269/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509269/)

---

# Approach
At every number, $$n_i$$ we can choose to use that number in our "best" sequence or not. Interstingly, we can actually track the best sequence as we move along each number as long as we identify that the sequence is *strictly increasing* and that we don't actually care about the contents of the sequence, only it's length.

Consider the list of numbers $$[10, 9, 2, 5, 3, 15, 16, 11, 12, 13, 14, 99, 18]$$. 
Let's loop through it and track the "best" theoretical sequence at each $$n_i$$ in a list as we go along:

```
[10]                       10. Start
[9]                        9. We can't append, and the lowest num we can replace is 10, so do it.
[2]                        2. We can't append, and the lowest num we can replace is 9, so do it.
[2, 5]                     5. 5 > 2, so we can make a longer sequence.
[2, 3]                     3. We can't append, and the lowest num we can replace is 5, so do it.
[2, 3, 15]                 15. 15 > 3, so we can make a longer sequence.
[2, 3, 15, 16]             16. 16 > 15, so we can make a longer sequence.
[2, 3, 11, 16]             11. We can't append, and the lowest num we can replace is 15, so do it.
[2, 3, 11, 12]             12. We can't append, and the lowest num we can replace is 16, so do it.
[2, 3, 11, 12, 13]         13. 13 > 12, so we can make a longer sequence.
[2, 3, 11, 12, 13, 14]     14. 14 > 13, so we can make a longer sequence.
[2, 3, 11, 12, 13, 14, 99] 99. 99 > 14, so we can make a longer sequence.
[2, 3, 11, 12, 13, 14, 18] 19. We can't append, and the lowest num we can replace is 99, so do it.
```

To find out where to do replacements at each step, we can simply do a [binary search](https://leetcode.com/problems/binary-search/description/).

Finally, we return the length of the list, this is our longest possible subsequence.

# Complexity
- Time complexity:
$$O(nlog(n))$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        let mut v: Vec<i32> = vec![*nums.first().unwrap()];
        for n in nums.iter() {
            if n > v.last().unwrap() {
                v.push(*n);
            } else {
                let pos = v.binary_search(n);
                if let Err(pos) = pos {
                    if v[pos] > *n {
                        v[pos] = *n;
                    }
                }
            }
        }
        v.len() as i32
    }
}
```