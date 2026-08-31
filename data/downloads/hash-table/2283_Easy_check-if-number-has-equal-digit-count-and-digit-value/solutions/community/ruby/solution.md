# Frequency match nums index as integer O(n):O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/4854247/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/4854247/)

---


```
# @param {String} num
# @return {Boolean}
def digit_count(num)
    hash = Hash.new(0)
    num.each_char do |char|
        hash[char.to_i] += 1
    end

    i = 0
    while i < num.size
        if hash[i] != num[i].to_i
            return false
        end 
        i += 1
    end
    
    true
end
```