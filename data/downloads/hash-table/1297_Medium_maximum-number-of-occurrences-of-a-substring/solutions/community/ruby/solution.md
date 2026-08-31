# Easy to read ruby solution

**Author:** aliken9
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/4007864/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/4007864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We keep a hash table of the count of each substring as we traverse through the input string. At the end return the max value of the key/value pairs in the hash table.

# Approach
<!-- Describe your approach to solving the problem. -->
At first I've investigated each substring that satisfies `min_size` and `max_size`, but at the end realized an optimization that subarrays with `min_size` will always have a higher occurrence count than substrings that are greater than `min_size`. Effectively `max_size` is there to throw you off, and I choose to ignore it completely.

Use methods to make code more readable.

# Complexity
- Time complexity:
$$O(n)$$, for n characters in the input string, we loop through the input string once as we construct our counter hash table.

- Space complexity:
$$O(n)$$, we create maximum n entries for each character in the input string.

# Code
```
# @param {String} string
# @param {Integer} max_letters
# @param {Integer} min_size
# @param {Integer} max_size
# @return {Integer}
def max_freq(string, max_letters, min_size, max_size)
    # Shift through each substring and track occurrence in a hash counter.
    occurrence_hash = {}

    # Size should always just be min_size, because it will never find a higher
    # count with a bigger substring. max_size is unused and is a red herring.
    size = min_size

    # Traverse through the input string and increment each valid substring.
    (0..(string.length - size)).each do |starting_index|
        substring = string[starting_index..(starting_index + size - 1)]
        if satisfies_max_letters?(substring, max_letters)
            increment_occurrence_of(substring, occurrence_hash)
        end
    end

    # Return the highest value in the occurrence hash, if we don't have any max values, return 0.
    occurrence_hash.values.max() || 0
end

def increment_occurrence_of(substring, occurrence_hash)
    if !occurrence_hash[substring].nil?
        occurrence_hash[substring] = occurrence_hash[substring] + 1
    else
        occurrence_hash[substring] = 1
    end
end

def satisfies_max_letters?(substring, max_letters)
    substring.chars.uniq.length <= max_letters
end
```