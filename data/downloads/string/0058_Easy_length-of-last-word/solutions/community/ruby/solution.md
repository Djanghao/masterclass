# Ruby solutions: Ruby-centric, negative two pointers, and two pointers recursion

**Author:** viethqhoang
**Votes:** 4
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/2089196/](https://leetcode.com/problems/length-of-last-word/solutions/2089196/)

---

Ruby solution is more elegant, but for a technical interview they are probably looking for the two pointer solution...

## Elegant Ruby solution

```
# @param {String} s
# @return {Integer}
def length_of_last_word(s)
	s.strip.split.last.length
end
```

## Two pointer solution

```
# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    word_end_pointer = word_start_pointer = -1
    
    while s[word_end_pointer] == ' '
        word_start_pointer -= 1
        word_end_pointer -= 1
    end
    
    while s[word_start_pointer - 1] != ' ' && !s[word_start_pointer - 1].nil?
        word_start_pointer -= 1
    end
        
    word_end_pointer - word_start_pointer + 1
end
```

## Two pointer recursion

```
# @param {String} s
# @param {Integer} word_start_pointer
# @param {Integer} word_end_pointer
# @return {Integer}
def length_of_last_word(s, word_start_pointer = -1, word_end_pointer = -1)
    return length_of_last_word(s, word_start_pointer - 1, word_end_pointer - 1) if s[word_end_pointer] == ' '
    return length_of_last_word(s, word_start_pointer - 1, word_end_pointer) unless s[word_start_pointer - 1] == ' ' || s[word_start_pointer - 1].nil?
    
    word_end_pointer - word_start_pointer + 1
end
```

## Benchmark

```
require 'benchmark'

n = 1_000_000
test_cases =
    [
        'Hello World',
        '   fly me   to   the moon  ',
        'luffy is still joyboy',
        'a'
    ]

Benchmark.bmbm do |x|
    x.report('length_of_last_word_ruby_like()') { n.times { |nth| length_of_last_word_ruby_like(test_cases[nth % test_cases.length]) } }
    x.report('length_of_last_word_pointers()')  { n.times { |nth| length_of_last_word_pointers(test_cases[nth % test_cases.length]) } }
    x.report('length_of_last_word_recursive()')  { n.times { |nth| length_of_last_word_recursive(test_cases[nth % test_cases.length]) } }
end
```

Yields the following:

```
Rehearsal -------------------------------------------------------------------
length_of_last_word_ruby_like()   0.266291   0.000618   0.266909 (  0.267041)
length_of_last_word_pointers()    0.771048   0.003334   0.774382 (  0.774670)
length_of_last_word_recursive()   0.959967   0.005425   0.965392 (  0.965810)
---------------------------------------------------------- total: 2.006683sec

                                      user     system      total        real
length_of_last_word_ruby_like()   0.256995   0.001348   0.258343 (  0.258443)
length_of_last_word_pointers()    0.772559   0.002656   0.775215 (  0.775308)
length_of_last_word_recursive()   0.957321   0.001549   0.958870 (  0.959077)
```