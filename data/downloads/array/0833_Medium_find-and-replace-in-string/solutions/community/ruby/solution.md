# 100% fast Ruby solution

**Author:** pocha
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/1649172/](https://leetcode.com/problems/find-and-replace-in-string/solutions/1649172/)

---

O(n) complexity where n is the size of input string.

1. Initialize `out` string variable to which the final solution will be appended character by character.
2. Iterate on input string character by character
3. If the index match with one in `indices`, pick a sub string of length `sources[i]` starting from the current index from `s` & compare with `targets[i]`
4. If found match, append `targets[i]` to `out` variable. Increase index by the size of sub string that was created in step 2 as you need to skip all the parts from input string that got replaced.
5. If match in step 2 fails, append the single character at the index from `s` to `out` & increase index by 1. 
6. Repeat till end of input string is reached. 

**Optimizations**
I assumed that `indices` array will always be sorted. But then one of the testcase threw me off where the values in indices array was not sorted. 

My next attempt was to iterate on indices rather iterating on input array. But with that approach, I needed to alter the input string with a match, which would complicate the logic. I think, a good idea would be to iterate on indices & decide which of the values are valid, only keep them, sort them & then iterate on input string character by character & do what I did above. But then, I think what I suggested above worked out of the box, so I reverted my solution back to it. 

I also found handling a separate index for `indices` cumbersome. So I decided to create a hash table named `complex` with key being the same index as the iteration index of input `s`. This made my logic much simpler to understand. 

```
def find_replace_string(s, indices, sources, targets)
    complex = {}
    indices.each_with_index do |val, i|
        complex[val] = {source: sources[i], target: targets[i]}
    end
    
    out = ""
    i = 0
    while i < s.length
        #puts "i #{i}"
        if complex[i]
            source = complex[i][:source]
            _end = i + source.length - 1
            sub_string = s[i.._end]
            #puts sub_string
            if source == sub_string
                out += complex[i][:target]
                i += sub_string.length
                next
            end
        end
        out += s[i]
        i += 1
    end
    #puts out.inspect
    out
end
```