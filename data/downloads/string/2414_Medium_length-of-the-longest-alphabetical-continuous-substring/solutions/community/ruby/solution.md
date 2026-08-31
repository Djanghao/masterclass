# Length of the longest alphabetically-continuous substring

**Author:** MarinKitagawa
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/4067761/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/4067761/)

---

# Intuition
Since the question asks for the continuous substrings, it is like a growing window. The window stops growing when the first non-consecutive grapheme is found and then a new window starts from the next grapheme. So, the previous window leaves a chunk and so do the other windows. Then make a pass through the entire array and find the size of each chunk. 

If the set of chunks is $P$, where $|P| = t$ is the number of chunks, then, size of the string $s$ in terms of number of graphemes is given by 
$$
|s| = \\displaystyle\\sum_{p\\in P}|p|
$$
where $|s|$ denotes the size of the string. 

# Approach
Chunk each consecutive strings and then find the size of each one and find the maximum size

# Complexity
- Time complexity:
$$\\mathcal{O}(n)$$ where $n$ is the number of graphemes in the string $s$
The time taken for this to exectue bet $100\\%$ of `Ruby` users.

- Space complexity:
$$\\mathcal{O}(n)$$

# Code
```ruby
# @param {String} s
# @return {Integer}
def longest_continuous_substring s
    s.chars.chunk_while{_2.ord-_1.ord==1}.map(&:size).max
end
```