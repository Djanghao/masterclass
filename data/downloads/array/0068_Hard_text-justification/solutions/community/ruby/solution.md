# Concise solution in ruby

**Author:** Hilings
**Votes:** 6
**Link:** [https://leetcode.com/problems/text-justification/solutions/24974/](https://leetcode.com/problems/text-justification/solutions/24974/)

---

fit as many words into one line as possible, then join the words with proper number of spaces.

    def full_justify(words, max_width)
      v, line = [], []
      words.each do |word|
        if (line+[word]).join(' ').size > max_width
          v.push(join_line(line, max_width))
          line = []
        end
        line.push(word)
      end
      v.push(join_line(line, max_width, true))
    end
    
    def join_line(line, max_width, last = false)
      return line.join(' ') + ' '*(max_width-line.join(' ').size) if (line.size == 1 or last == true)
      space, extra = (max_width-line.join.size).divmod(line.size-1)
      line[0..extra].join(' '*(space+1)) + ' '*space + line[extra+1..-1].join(' '*space)
    end