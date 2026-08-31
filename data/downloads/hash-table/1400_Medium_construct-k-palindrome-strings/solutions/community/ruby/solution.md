# Ruby solution

**Author:** profcalculus
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/2385953/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/2385953/)

---

The idea is, any character that has odd number of characters can be treated as a character with count of "one" and rest as even count. (for ex: if a occurs 3 times aaa -> we can treat this as a -> 1 and a -> 2). If the number of characters occuring once is the least number of palindromes possible. Any even characters can be merged into any number of ways. 

```# @param {String} s
# @param {Integer} k
# @return {Boolean}
def can_construct(s, k)

    map = s.chars.tally
    one_count, even_count = {}, {}
    map.each do |k,v|
        if v.odd?
            if v == 1
              one_count[k] = v
            else
              one_count[k] = 1
              even_count[k] = v-1
            end    
        else
            even_count[k] = v
        end
    end
    
    if one_count.keys.size > k
        return false
    end
    
    if one_count.keys.size + even_count.values.sum >= k 
        return true
    end


    return false

  end




