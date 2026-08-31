# Ruby solution

**Author:** akisingh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/5668338/](https://leetcode.com/problems/count-good-numbers/solutions/5668338/)

---



# Code
```ruby []
# @param {Integer} n
# @return {Integer}
def count_good_numbers(n)
    mod = 10**9 + 7
    (pow(5, (n+1)/2) * pow(4, n/2))% mod
end

def pow(base, expo)
   mod = 10**9 + 7
   res = 1
   while expo > 0 
         if expo % 2 == 1
           res = (res * base) % mod
         end

         base = (base * base)  % mod
         expo = expo / 2
    end
    res % mod        
end  
  
```