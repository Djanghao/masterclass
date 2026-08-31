# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5845128/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5845128/)

---


# Code
```ruby []
# @param {Integer[]} a
# @param {Integer[]} b
# @return {Integer[]}
def find_the_prefix_common_array(a, b)
    a_hash = Hash.new{|a, key| a[key] = 0}
    b_hash = Hash.new{|a, key| a[key] = 0}
    i = 0
    answer = []
    common_nums = 0
    used = Set.new
    while i < a.size
        a_hash[a[i]] += 1
        b_hash[b[i]] += 1

        if b_hash[a[i]] > 0 and (!used.include? a[i])
            used << a[i]
            common_nums += 1
        end

        if a_hash[b[i]] > 0  and (!used.include? b[i])
            used << b[i]
            common_nums += 1
        end
        answer << common_nums 

        i += 1
    end

    answer
end
```