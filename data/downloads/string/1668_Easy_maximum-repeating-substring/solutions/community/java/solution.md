# Java | 3 liner

**Author:** kanvstnrn
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/981906/](https://leetcode.com/problems/maximum-repeating-substring/solutions/981906/)

---

```
class Solution {
    public int maxRepeating(String sequence, String word) {
        String find="";
        while(sequence.contains(find)) find += word;
        return (find.length()-word.length())/word.length();
    }
}
```

Let's try to understand this approach with an example - 

sequence = "ababcababcabababc";
word = "ab";

The desired output here is 3 since we have a substring `ababab` which has `ab` repeated thrice.

1. Initially, find is an empty string, and sequence contains an empty string, so the loop starts.
2. After the first iteration, find becomes "ab" because "ab" is found at the beginning of the sequence.
3. In the second iteration, "ab" is found at the beginning again, and find becomes "abab."
4. In the third iteration, "abab" is found again at the beginning, and find becomes "ababab."
5. In the fourth iteration, "ababab" is found at the end, and find becomes "abababab."
6. In the fifth iteration, "abababab" is not found in the sequence, so the loop stops.

Now, the length of find is 8, and the length of word is 2. So, the code calculates `(8 - 2) / 2`, which is 3. This means that the word "ab" can be consecutively repeated 6 times in the sequence "ababcababcabababc." The code will return 6 as the maximum repeating count. The reason behind subtracting the `word length` is that the code appends find with an extra length of word before exiting the loop.
