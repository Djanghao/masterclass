# Ruby Solution. With comments

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5881640/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/solutions/5881640/)

---

Naive Solution (TLE)
```
 def kth_character(k, operations)
     word = 'a'
    
     operations.each do |op|
         if op == 0
             word = word + word
         else
             word.each_char { |w| word += w == 'z' ? 'a' : w.next }
         end
     end
    
     word[k - 1]
 end
```

Optimized Solution

```
def kth_character(k, operations)
    # i => number of times we need to double our string's length to find our Kth letter
    #      subtracting one gives us the HALFWAY POINT in our string and also the index
    #      of operations that will produce that string
    
    i = Math.log(k, 2).ceil - 1
    ans = 'a'
    
    while i >= 0
        halfway_point = 2**i
        
        # does our K fall in the RIGHT HALF after applying this operation?
        if k > halfway_point
            if operations[i] == 1
                ans = ans == 'z' ? 'a' : ans.next
            end
            
            k -= halfway_point
        end
        
        i -= 1
    end
    
    ans
end
```