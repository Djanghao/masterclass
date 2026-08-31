# ✅ [Python/C++/Java/Rust] one-liners + O(1) space BONUS (with detailed comments)

**Author:** iablokov
**Votes:** 40
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/2740316/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/2740316/)

---

**\u2705 IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
****
This solution employs simple concatenation of arrays using one-liners. Time complexity is linear: **O(N)**. Space complexity is linear: **O(N)**. 

<iframe src="https://leetcode.com/playground/CTcE5MNK/shared" frameBorder="0" width="800" height="210"></iframe>

****

As was mentioned, the solutions above use **O(N)** space due to concatenation of strings. As a bonus, I provide several solutions that use **O(1)** space.

**Python.**
```python
from itertools import zip_longest

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        
        # [1] here, we construct generators (not lists!) that
        #     yield (!) characters from each word-item
        gen1 = (ch1 for w1 in word1 for ch1 in w1)
        gen2 = (ch2 for w2 in word2 for ch2 in w2)
        
        # [2] zip_longest from itertools ensures that
        #     different lengths are treated correctly
        return all(ch1 == ch2 for ch1, ch2 in zip_longest(gen1, gen2))
```

**C++**. 
```cpp
class Solution 
{
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) 
    {
        // [1] here, we obtain a bunch of iterators, namely, for 
        //     items in each word and for characters in each item
        auto w1b = word1.begin(), w1e = word1.end();
        auto w2b = word2.begin(), w2e = word2.end();
        auto c1b = w1b->begin(),  c1e = w1b->end();
        auto c2b = w2b->begin(),  c2e = w2b->end();
        
        // [2] iteration proceeds while characters are equal
        while (*c1b == *c2b)
        {   
            // [3] for both words, move to the next character 
            //     in each of currently iterated items
            ++c1b; ++c2b;
            
            // [4] if we are at the end of an item, move to the next item 
            if (c1b == c1e) ++w1b;
            if (c2b == c2e) ++w2b;
            
            // [5] if next item is the end of any of words,
            //     it's time break out of the cycle
            if (w1b == w1e || w2b == w2e) break;
            
            // [6] if change of item happened, update iterators
            if (c1b == c1e) { c1b = w1b->begin(); c1e = w1b->end(); }
            if (c2b == c2e) { c2b = w2b->begin(); c2e = w2b->end(); }
        }
        
        // [7] check that we broke out of the cycle exactly 
        //     after processing all characters in all items
        return (w1b == w1e && w2b == w2e);
    }
};
```

**Rust.** 
```rust
impl Solution 
{
    pub fn array_strings_are_equal(word1: Vec<String>, word2: Vec<String>) -> bool 
    {
        // flatten two lists...
        let it1 = word1.iter().flat_map(|s| s.chars());
        let it2 = word2.iter().flat_map(|s| s.chars());
		
		// ...and compare the resulting iterators   
        it1.eq(it2)
    }
}
```
**Java**. Ok, this one is way slower than concatenation, however, uses **O(1)** memory.
```
class Solution 
{
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) 
    {
        // [1] build a flattened "stream of streams"
        Stream<Character> ch1 = Stream.of(word1).flatMap(w -> w.chars().mapToObj(c -> (char)c));
        Stream<Character> ch2 = Stream.of(word2).flatMap(w -> w.chars().mapToObj(c -> (char)c));
        
        // [2] in Guava there is a simple iterator comparator
        //     retrun Iterators.elementsEqual(ch1.iterator(), ch2.iterator());
        
        // [3] on LeetCode, we are forced to use a somewhat longer solution...
        var it1 = ch1.iterator();
        var it2 = ch2.iterator();  
        while (it1.hasNext() && it2.hasNext())
            if (!it1.next().equals(it2.next())) return false;
               
        // [4] remember to check that iterators may have different lengths
        return !it1.hasNext() && !it2.hasNext();
    }
}
```