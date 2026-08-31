# ruby solution: two hashes

**Author:** qwyzmo
**Votes:** 0
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/4296437/](https://leetcode.com/problems/before-and-after-puzzle/solutions/4296437/)

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
# @param {String[]} phrases
# @return {String[]}
def before_and_after_puzzles(phrases)
  hf = {}
  hl = {}
  phrases.each_with_index do |p, i|
    psplit = p.split(' ')
    if hf[psplit.first]
      hf[psplit.first] << i
    else
      hf[psplit.first] = [i]
    end
    if hl[psplit.last]
      hl[psplit.last] << i
    else
      hl[psplit.last] = [i]
    end
  end
  joinwords = hf.keys & hl.keys

  # Now, for each word in joinwords, construct all the ba before_and_after_puzzles
  bapuzzles = []
  joinwords.each do |w|
    bapuzzles << gen_puzz(hf[w], hl[w], phrases)
  end
  bapuzzles.flatten.uniq.sort
end

def gen_puzz(fwords, lwords, phrases)
  result = []
  fwords.each do |f|
    lwords.each do |l|
      if f != l
        fw = phrases[f]
        lw = phrases[l]
        lwsplit = lw.split(' ')
        lwsplit.pop
        puzz = lwsplit + fw.split(' ')
        puzz = puzz.join(' ')
        result << puzz
      end
    end
  end
  result
end

=begin

  - match first word in p with last word in q
  - perhaps: 
    - hash hf: first word => phrase
    - hash hl: last word => phrase
    - then, for have array of keys: intersection of  hf.keys, hl.keys
    - for each key in set, get each value and construct the ba puzzle.
    - then sort the ba puzzle list.
  - goal: list of all strings that is 2 phrases that overlap

=end
```