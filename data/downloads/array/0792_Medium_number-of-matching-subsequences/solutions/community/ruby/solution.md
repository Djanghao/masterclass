# Ruby - Queues (beats 100%, easy to understand)

**Author:** pilos
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/845480/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/845480/)

---

Credits to https://leetcode.com/problems/number-of-matching-subsequences/discuss/117598/Java-solution-using-HashMap-and-Queue

Intuition:
In order for a `word[i]` to be a subsequence of `S`, all of its characters need to be in `S` and they need to appear in the same order.

We can create queues for every letter of the alphabet and enqueue words depending character they "need" next (ie their first character). To access these queues quickly, we can create an array of size 26 and index into it.
  
 Example:
 ```ruby
words = ["a", "bb", "acd", "ace"]
qs = [
  Q(['a', 'acd', 'ace'])  # index 0 in qs array is for 'a'
  Q(['bb'])               # index 1 in qs array is for 'b'
]
  ```

Next, we can iterate over the chars in S.

For each char, find the correct queue and deq from it `n` times, where `n` is the original size. (This is important because we might need to enqueue into it again, so we can't check `q.empty?`).

For each dequeued word, find the remaining string. If it's been consumed, then it's a subsequence. Otherwise, enqueue the remaining string in the right queue.



```ruby
# @param {String} s
# @param {String[]} words
# @return {Integer}
def num_matching_subseq(s, words)
  subseq_count = 0
  qs = 'a'.upto('z').map { |_c| Queue.new }
  words.each { |w| qs[w[0].ord - 'a'.ord].enq(w) }
  
  s.each_char do |c|
    q = qs[c.ord - 'a'.ord]
    to_deq = q.size
    to_deq.times do
      word = q.deq
      rem = word[1..-1]
      if rem.length == 0
        subseq_count += 1
      else
        qs[rem[0].ord - 'a'.ord].enq(rem)
      end
    end
  end

  subseq_count
end
```