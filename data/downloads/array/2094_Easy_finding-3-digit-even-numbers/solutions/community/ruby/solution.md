# Beats 100%. Hashmap

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4773620/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4773620/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} digits
# @return {Integer[]}
def find_even_numbers(digits)
    hash = Hash.new(0)
    digits.each do |d|
        hash[d] += 1
    end

    ans = []
    (100..998).each do |int|
        if int.even?
            og_int = int
             int = int.digits
             if hash[int[0]] > 0
                first_val = hash[int[0]]
                hash[int[0]] -= 1

                if hash[int[1]] > 0
                    second_val = hash[int[1]] 
                    hash[int[1]] -= 1

                     
                    if hash[int[2]] > 0
                        ans << og_int
                    end

                    hash[int[1]] = second_val
                end
                hash[int[0]] = first_val
             end
        end
    end

    ans
end
```