# Ruby Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/615054/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/615054/)

---

```
def min_number_of_frogs(croak_of_frogs)
    previous = { 'c' => nil, 'r' => 'c', 'o' => 'r', 'a' => 'o', 'k' => 'a' }
    letter_count = { 'c' => 0, 'r' => 0, 'o' => 0, 'a' => 0, 'k' => 0 }
    
    max_count = count = 0
    croak_of_frogs.split('').each do |letter|
        return -1 if letter != 'c' && letter_count[previous[letter]] <= letter_count[letter]
        
        count += 1 if letter == 'c'
        count -= 1 if letter == 'k'
        max_count = [max_count, count].max
        
        letter_count[letter] += 1
    end
    
    letter_count.values.uniq.length == 1 ? max_count : -1
end
```