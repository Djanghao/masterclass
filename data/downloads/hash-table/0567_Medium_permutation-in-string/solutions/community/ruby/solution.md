# Ruby | sliding window with explanation

**Author:** golfinho
**Votes:** 4
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/2804090/](https://leetcode.com/problems/permutation-in-string/solutions/2804090/)

---

```
def check_inclusion(s1, s2)
    return false if s1.length > s2.length
    
    s1_count = Array.new(26, 0)
    s2_count = Array.new(26, 0)
    a = 'a'.ord
    s2 = s2.split("")
    # count occurences of every character in s1
    s1.each_char do |chr|
        s1_count[chr.ord - a] += 1
    end
    # Count occurences of the first i characters in s2 where i = s1.length.
    # This will be our first substring in s2 to compare to s1
    i = 0
    while(i < s1.length) do
        s2_count[s2[i].ord - a] += 1
        i += 1
    end
    # No need to continue algorithm if we already found a match
    if s1_count == s2_count
        return true
    end
    # j will keep track of the first character in every new substring of s2.
    # Our sliding window will contain a substring whose length is the same of s1
    # Each iteration will update the occurence of the characters in our new substring.
    j = 0
    while(i < s2.length) do
        # We substract the occurence of the character we removed from the front of our sliding window
        s2_count[s2[j].ord - a] -= 1
        # We add the occurence of the character we just added to the end of our sliding window
        s2_count[s2[i].ord - a] += 1
        # If this new substring matches what we saw in s1, were done otherwise continue
        if s1_count == s2_count
            return true
        end
        j += 1
        i += 1
    end
    # We've checked all the substrings matching the length of s1 at this point. If
    # we found a match our algorithm wouldve returned true before reaching this point.
    return false
end
```