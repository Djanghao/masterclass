# Terrible Time Complexity, but

**Author:** ifiht
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/4955045/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/4955045/)

---

# Intuition
I started this thinking that Ruby hashes would be much quicker.. but quickly realized nothing beats an array. Also realized early on that you only need to search the string up until `words[0].length` away from the end. This allowed for at least one trick, where if all the words are identical we can compress them into one word, making the word length much larger in some cases, and drastically reducing our search space.

# Approach
After the above epiphany, I rewrote all the code to find the quickest ways to compare arrays and cut strings. Moved all my string operations to occur in-place, especially in the `substring?` function, which intuitively and confirmed via Ruby Profiler is where most of the time+resources are spent:
```
$ ruby -rprofile fast.rb
[]
  %   cumulative   self              self     total
 time   seconds   seconds    calls  ms/call  ms/call  name
 72.68    15.53     15.53   969701     0.02     1.12  Object#substring?
  6.62    16.94      1.42   979302     0.00     0.00  String#slice!
  6.12    18.25      1.31   969701     0.00     0.00  Array#include?
  6.00    19.53      1.28   960100     0.00     0.00  Array#index
  3.96    20.38      0.85   960100     0.00     0.00  Array#delete_at
  3.71    21.17      0.79   969701     0.00     0.00  Array#empty?
  0.72    21.33      0.15        1   154.51 21365.42  Object#find_substring
  0.05    21.34      0.01     9601     0.00     0.00  Array#+
  0.04    21.35      0.01     9601     0.00     0.00  String#replace
  0.04    21.36      0.01     9601     0.00     0.00  Integer#+
  0.04    21.37      0.01     9602     0.00     0.00  Integer#<=
  0.00    21.37      0.00        1     0.28     0.28  TracePoint#enable
  0.00    21.37      0.00        1     0.01     0.01  Array#uniq
  0.00    21.37      0.00        1     0.01     0.01  BasicObject#!=
  0.00    21.37      0.00        2     0.00     0.00  IO#set_encoding
  0.00    21.37      0.00        3     0.00     0.00  String#length
  0.00    21.37      0.00        2     0.00     0.00  Module#method_added
  0.00    21.37      0.00        1     0.00     0.00  Integer#<
  0.00    21.37      0.00        2     0.00     0.00  Integer#-
  0.00    21.37      0.00        1     0.00     0.00  Kernel#respond_to?
  0.00    21.37      0.00        1     0.00     0.00  Array#size
  0.00    21.37      0.00        1     0.00     0.00  Integer#==
  0.00    21.37      0.00        1     0.00     0.00  Array#[]
  0.00    21.37      0.00        1     0.00     0.00  Array#length
  0.00    21.37      0.00        1     0.00     0.00  Integer#*
  0.00    21.37      0.00        1     0.00     0.00  Monitor#mon_owned?
  0.00    21.37      0.00        1     0.00     0.00  BasicObject#==
  0.00    21.37      0.00        1     0.00     0.00  Array#inspect
  0.00    21.37      0.00        1     0.00     0.00  IO#write
  0.00    21.37      0.00        1     0.00     0.00  IO#puts
  0.00    21.37      0.00        1     0.00     0.00  Kernel#puts
  0.00    21.37      0.00        1     0.00     0.00  TracePoint#disable
  0.00    21.37      0.00        1     0.00 21366.25  #toplevel
```

# Complexity
- Time complexity:
$$O(n^m/C)$$
Terrible, I know... $$C$$ here is a constant representing word length.

- Space complexity:
$$O(2n)$$
I thought this was pretty good actually, the in-place modifications done by `substring?` necessitate at duplication of all n at least once, if the time complexity weren't so bad I could try some additional tricks to clear unused objects but as the code is now I didn't want to mess with any lines not strictly needed.

# Code
```
# @param {String} s
# @param {String[]} words
# @return {Integer[]}
# RUNNING ON RUBY 3.2.2

@val = ''       # reusable string to save memory & time
@temp_str = ''  # reusable string to save memory & time
@temp_wrd = []  # reusable array to save memory & time

def substring?(searchs, words, slen, slenm1)
    if words.empty?
        return true # a match, if we exhaust the permutable list
    elsif words.include?(@val = searchs.slice!(0..slenm1))
        words.delete_at(words.index(@val))
        return substring?(searchs, words, slen, slenm1)
    else
        return false # not a match if the word is not found
    end
end

def find_substring(s, words)
    results = []
    if words.uniq.size == 1  # create a single string if all values are identical
        words = [words.join('')]
        wordlen = words[0].length # recompute word length
    else
        wordlen = words[0].length
    end
    minlen = (words.length) * wordlen
    if s.length < minlen        # check if substring is possible
        return []
    else            # otherwise do a recursive search
        n = 0
        wordlenm1 = wordlen - 1
        search_len = s.length - minlen
        while n <= search_len # don't need to search the whole string, just string - word length
            @temp_str.replace(s) #tradeoff to allow in-place modification for substring?
            @temp_wrd = [] + words #tradeoff to allow in-place modification for substring?
            if substring?(@temp_str, @temp_wrd, wordlen, wordlenm1)
                results.push(n)
            end
            s.slice!(0)
            n+=1
        end
        return results
    end
end
```