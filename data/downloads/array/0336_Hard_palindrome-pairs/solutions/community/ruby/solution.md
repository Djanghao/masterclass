# Ruby | Hashmap

**Author:** codingstar1
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/2589664/](https://leetcode.com/problems/palindrome-pairs/solutions/2589664/)

---

Not very pretty looking solution, but it goes into TLE only on the 134th test of 136. Maybe that's not that bad for ruby.
Hashmap `compl` contains array `compl[word] ` of arrays `[index, bool]`, where `bool == true` for pushing to result array an element `[index, words.index(word)]` and `bool == false` for pushing `[words.index(word), index]`.
```ruby
def palindrome_pairs(words)
    res = []
    compl = Hash.new { _1[_2] = [] }
    empty_index = false
	
    part_pal = -> word, i do
        if !empty_index && word == ""
            empty_index = i
            return 
        end
        compl[word.reverse] << [i, true]
        n = word.length
        unless n == 1
            compl[word[1..].reverse] << [i, false]
            compl[word[..-2].reverse] << [i, true]
        else
            return
        end

        first, start = 0, 1
        seek = word[first]
        while idx = word.index(seek, start)
            break unless n - 1 > idx -= 1
            # fin = first + (idx - first )/2
            fin = idx / 2
            if first == idx || word[first + 1..fin] == word[idx - fin + 1..idx].reverse
                compl[word[idx + 2..].reverse] << [i,false]
            end
            start = idx + 2
        end
        last = -1 + n = word.length
        start = last - 1
        seek = word[last]
        while start > 0 && idx = word.rindex(seek, start)
            break unless 1 < idx += 1
            fin = last - ( last - idx ) / 2
            if last == idx || word[fin..last - 1] == word[idx..idx + last - 1 - fin].reverse
                compl[word[0..idx - 2].reverse] << [i,true]
            end
            start = idx - 2
        end
    end
	
    words.each_with_index do |word, i|
        part_pal.(word, i)
    end
	
    unless empty_index
        words.each_with_index do |word, i|
            if com = compl[word]
                com.each do |idx, left|
                    res << ( left ? [idx, i] : [i, idx] ) unless idx == i
                end
            end
        end
    else
        words.each_with_index do |word, i|
            next if i == empty_index 
            if com = compl[word]
                com.each do |idx, left|
                    res << ( left ? [idx, i] : [i, idx] ) unless idx == i
                end
            end
            
            is_palindrome = true
            j = 0
            while j <= word.length / 2
                if word[j] != word[-j += 1]
                    is_palindrome = false
                    break
                end
            end
            if is_palindrome
                res.push([empty_index, i], [i, empty_index])
            end
        end
    end
    res
end
```
<hr>

# Tests:
```ruby
require 'test/unit'

class Test_palindrome_pairs < Test::Unit::TestCase
    def test_
        assert_equal [[0,1],[1,0],[3,2],[2,4]], palindrome_pairs(["abcd","dcba","lls","s","sssll"])
        assert_equal [[0,1],[1,0]], palindrome_pairs(["bat","tab","cat"])
        assert_equal [[0,1],[1,0]], palindrome_pairs(["a",""])
        assert_equal [[0,3],[3,0],[2,3],[3,2]], palindrome_pairs(["a","abc","aba",""])
        assert_equal [[6,0],[0,4],[13,2],[4,0],[5,3],[14,5],[6,3],[7,6],[19,8],[8,16],[14,8],[8,10],[16,10],[0,11],[6,12],[13,3],[3,13],[8,15],[16,15],[13,19]], 
            palindrome_pairs(["baaabab","aaaaba","babbb","b","babaaab","baabaa","ba","ababa","abbaaa","aababaaa","aabba","ababaaab","babab","bb","aa","aaaaabba","abba","babbbaa","baaba","aaabb"])
    end
end
```
