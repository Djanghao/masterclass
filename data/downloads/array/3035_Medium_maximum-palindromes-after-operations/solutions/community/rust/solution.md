# Rust/Python count the number of duplicate chars. 100 ms / 2 ms

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4713321/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4713321/)

---

# Intuition

Operations which are described in the question means that you can take any two words and change any two characters there. By doing these operations infinite number of times it means that you can change any charcters however you want.

So lets count how many characters do we have. Now lets look at the words that we have. The smaller is the length of the word, the easier it is to build it. 

Now if we have a word of lenght `x`, we need `x // 2` pairs to build it. We count the number of pairs we can have from the `cnts`. 

So after calculating counts, we check how many pairs do we have. Then iterate over lengths (in code I store `len // 2`) in reverse order from smallest to longest and check do I still have enough pairs. If yes, increase result. If no, then stop here.

# Complexity

Let $n$ be the number of words and $l$ be the size of words.

- Time complexity: $O(n \\cdot l + n \\cdot \\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn max_palindromes_after_operations(words: Vec<String>) -> i32 {
    let mut cnt = [0; 26];
    let mut lens = Vec::with_capacity(words.len());

    for w in words {
      lens.push(w.len() / 2);
      for c in w.into_bytes() {
        cnt[c as usize - 97] += 1;
      }
    }

    let mut num_pairs = 0;
    for v in cnt {
      num_pairs += v / 2;
    }

    lens.sort_unstable();
    let mut res = 0;
    for l in lens {
      if l <= num_pairs {
        num_pairs -= l;
        res += 1;
      } else {
        return res;
      }
    }

    return res;
  }
}
```
```python []
class Solution:
  def maxPalindromesAfterOperations(self, words: List[str]) -> int:
    cnt, lens = [0] * 26, []
    for w in words:
      lens.append(len(w) // 2)
      for c in w:
        cnt[ord(c) - 97] += 1
      
    num_pairs, res = sum([c // 2 for c in cnt]), 0
    for l in sorted(lens):
      if l <= num_pairs:
        num_pairs -= l
        res += 1
      else:
        break

    return res
```
