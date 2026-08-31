# ✅ Python | | Easy 3 Approaches explained

**Author:** constantine786
**Votes:** 64
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/2085316/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/2085316/)

---

1. ##### **Hashset**
The approach is quite straightforward. We do the following:
1. **Compute** the unique **char_set** in one iteration.
2. **Find** all the **pairs** and **compute** the **max product** only if there are no common characters between two **char_sets**. In python, you can use `&` operator which serves as the intersection operator.

```
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        n=len(words)                        
        char_set = [set(words[i]) for i in range(n)] # precompute hashset for each word                                                  
        max_val = 0
        for i in range(n):
            for j in range(i+1, n):
                if not (char_set[i] & char_set[j]): # if nothing common
                    max_val=max(max_val, len(words[i]) * len(words[j]))
        
        return max_val   
```
**Time - O(N^2 * 26)** -  where `N` is the number of words. The intersection will run against a fixed set of `26` characters. (Thanks to [newbie7025](https://leetcode.com/newbie7025) and [sagnikbiswas](https://leetcode.com/sagnikbiswas) who helped with the time complexity)
**Space - O(N)** - space to store the `char_set`.

----


2. ##### **One Liner using Python Library**

Here the code will be using [combinations](https://docs.python.org/3/library/itertools.html#itertools.combinations) which is a python built-in to achieve the same approach as above in one line.

```
class Solution:
    def maxProduct(self, words: List[str]) -> int:
         return max([len(s1) * len(s2) for s1, s2 in combinations(words, 2)  if not (set(s1) & set(s2))], default=0)
```

**Time - O(N^2 * 26)** -  where `N` is the number of words and `L` is the max length of the word in `words`. The interesect operation `A & B` in python has a time complexity of `O(min(len(A), len(B))`.
**Space - O(1)** 

---

3. ##### **Bit Mask**

This approach replaces the **char_set** in above approach using a **bit_mask**. The set bits of the **bit_mask** will indicate the presence of a char in the word. This will also help improve the time complexity as the code will replace the **&** of **two hashset** which is **O(min(len(s1), len(s2))**  with **&** operation between **two integers** which is **O(1)**.

```
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        n=len(words)
        
        bit_masks = [0] * n
        lengths = [0] * n
        
        for i in range(n):             
            for c in words[i]:
                bit_masks[i]|=1<<(ord(c) - ord('a')) # set the character bit            
            lengths[i]=len(words[i])
                        
        max_val = 0
        for i in range(n):
            for j in range(i+1, n):
                if not (bit_masks[i] & bit_masks[j]):
                    max_val=max(max_val, lengths[i] * lengths[j])
        
        return max_val  
```

**Time - O(N^2)** -  where `N` is the number of words.
**Space - O(N)** - space to store the `char_set` and `lengths`.

---

***Please upvote if you find it useful***