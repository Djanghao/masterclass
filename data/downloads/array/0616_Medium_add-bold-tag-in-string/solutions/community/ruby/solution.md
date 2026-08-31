# Ruby beats 100% with explanation

**Author:** kenhufford
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/613479/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/613479/)

---

First let's identify what we need to do.  We need to figure out what letters should be bolded while making sure overlaps are taken care of.  Then we need to add in the bold tags where needed.

1.  We want to use the bold array to track which indices are bolded.
2.  We iterate through dict and look for the index where that word starts in our given string.  We use the while loop to find every instance of that word. 
3.  We take the max of found and prev_bolded to know where to start. We make sure we don't overlap and do a ton of rework especially if the dict word is very long  ("aaaaaaaaaa" in a string of all "a" for example)
4.  We can set prev bolded to be the end our indices we are bolding
5.  Our next "found" will be starting from where we started from +1
6.  For bold_word we use open to show if have an open <b> or closed </b> while iterating over the string.
7.  If we still are "open" at the end, we want to make sure we close that bold tag

```
def add_bold_tag(s, dict)
    bold = Array.new(s.length, false)
    find_bolded(s, dict, bold)
    return bold_word(s, bold)
end

def find_bolded(s, dict, bold)
   dict.each.with_index do |word,i|
        found = s.index(word, 0)
        prev_bolded = 0
        while found != nil
            start = [found, prev_bolded].max
			prev_bolded = found+word.length
            (start...prev_bolded).each do |i|
                bold[i] = true 
            end
            found = s.index(word, start+1)
        end
    end 
end

def bold_word(s, bold)
    result = ""
    open = false
    (0...s.length).each do |i|
       if bold[i] && !open
           result += '<b>'
           open = true
       elsif !bold[i] && open
           result+= '</b>'
           open = false
       end
       result += s[i]
    end
    result += '</b>' if open 
    result
end
```