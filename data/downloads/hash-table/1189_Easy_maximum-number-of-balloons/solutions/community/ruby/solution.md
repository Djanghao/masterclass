# ruby simple beats 100%

**Author:** kamilpuchala
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/5741745/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/5741745/)

---


WORD = "balloon"
def max_number_of_balloons(text)
    result = text.chars.tally

    counter = 0

    loop do 
        WORD.chars.each do |char|
            return counter if result[char].nil? || result[char].zero?
            
            result[char] -=1
            
        end
        counter += 1
    end
end
```