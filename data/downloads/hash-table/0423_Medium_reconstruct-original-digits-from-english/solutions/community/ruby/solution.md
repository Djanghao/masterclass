# Ruby solution with tallying letters (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/3462089/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/3462089/)

---

# Intuition
Count how often each letter appears, then remove sets of letters for different numbers, starting with numbers with uncommon letters (e.g., zero with 'z').

# Approach
1. Count how often each character appears
2. Create a map of letters that only appear in one word, in order.  (Note that 'o' appears in multiple words, but it doesn't appear in any words after 'o' in the map.  We're going to eliminate letters, so by the time we're looking at 'o' as a key, all of the 'o's belong to the word 'one'.)
3. Iterate throught the map, removing sets of letters corresponding to each word and incrementing the count.
4. Iterate through the numbers 0-9, putting a character into the string for each time the letters of that number were counted.
5. Return string

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def original_digits(s)
    count = Hash.new(0)
    s.each_char {|char| count[char] += 1}

    letters_conversion = {'z' => [0,'zero'], 'w' => [2,'two'],
    'x' => [6,'six'], 'g' => [8,'eight'], 'u' => [4,'four'],
    'o' => [1,'one'], 'h' => [3,'three'], 'f' => [5,'five'],
    'v' => [7,'seven'], 'n' => [9,'nine']}

    letters_conversion.each do |letter,arr|
        num, str = arr
        while count[letter] > 0
            count[num] += 1
            str.each_char { |char| count[char] -= 1 }
        end
    end

    str = ''
    (0..9).each { |i| str += i.to_s * count[i] }
    
    str
end


# zero -> z
# two -> w
# six -> x
# eight -> g
# four -> u
# one -> o
# three -> h
# five -> f
# seven -> v
# nine -> n
```