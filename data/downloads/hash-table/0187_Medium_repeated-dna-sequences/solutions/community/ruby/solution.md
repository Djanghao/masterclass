# [Ruby] O(n)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/898635/](https://leetcode.com/problems/repeated-dna-sequences/solutions/898635/)

---

```
# @param {String} s
# @return {String[]}
def find_repeated_dna_sequences(s)
  sequence_set = Set.new
  repeated_sequence_set = Set.new

  (s.length - 9).times do |i|
    current_sequence = s[i...i+10]

    if sequence_set.include?(current_sequence)
      repeated_sequence_set << current_sequence
    end

    sequence_set << current_sequence
  end
  
  repeated_sequence_set.to_a
end
```