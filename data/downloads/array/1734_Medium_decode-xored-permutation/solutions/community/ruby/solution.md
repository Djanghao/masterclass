# Ruby T: O(n) S: O(1) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/2608784/](https://leetcode.com/problems/decode-xored-permutation/solutions/2608784/)

---

```
# @param {Integer[]} encoded
# @return {Integer[]}
def decode(encoded)
  n = encoded.size + 1
  agg_encoded = encoded.reduce(&:^)
  agg_original = 1.upto(n).reduce(&:^)

  agg_mids = agg_original ^ agg_encoded
  i = n - 3

  while i > 1
    agg_mids ^= encoded[i]
    i -= 2
  end

  result = Array.new(n)

  result[1] = agg_mids
  result[0] = encoded[0] ^ agg_mids

  1.upto(n - 2) do |i|
    result[i + 1] = encoded[i] ^ result[i]
  end

  result
end
