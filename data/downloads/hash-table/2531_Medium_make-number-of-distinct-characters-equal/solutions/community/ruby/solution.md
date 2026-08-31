# [Ruby] Beats 100% time & space

**Author:** Alam97
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/5592283/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/5592283/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} word1
# @param {String} word2
# @return {Boolean}
def is_it_possible(word1, word2)
    count_map_1 = {}
    count_map_2 = {}

    word1.each_char do |c|
        count_map_1[c] = (count_map_1[c] || 0) + 1
    end

    word2.each_char do |c|
        count_map_2[c] = (count_map_2[c] || 0) + 1
    end

    # return true if count_map_1.keys.size == count_map_2.keys.size

    unique_m1, unique_m2 = 0, 0
    count_map_1.keys.each do |char1|
        count_map_2.keys.each do |char2|
            unique_m1, unique_m2 = swap(count_map_1, count_map_2, char1, char2)
            p [unique_m1, unique_m2]
            return true if unique_m1 == unique_m2
        end
    end
    false
end

def swap(m1, m2, char1, char2)
    unique_m1 = m1.keys.count #1 
    unique_m2 = m2.keys.count #1

    if char1 == char2
        return [unique_m1, unique_m2]
    end

    if m1[char2].nil? 
        unique_m1 +=1 #2 
    end

    if m1[char1] == 1 #1
        unique_m1 -=1
    end

    if m2[char1].nil? #2 
        unique_m2 +=1
    end

    if m2[char2] == 1
        unique_m2-=1
    end

    [unique_m1, unique_m2]
end

```