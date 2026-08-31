# Ruby

**Author:** malavbhavsar
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/4778405/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/4778405/)

---

# Intuition
Description is confusiong. I recommend lookign at the examples and understanding what the decding algorithm should look like. When you have questions about edge case you can then look at description for clarifications.

# Approach

Function would be

> decoded_char = encoded_text[(row_num * total_cols) + (row_num + col_num)]

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} encoded_text
# @param {Integer} rows
# @return {String}
def decode_ciphertext(encoded_text, rows)
  cols = encoded_text.length / rows
  answer = []

  0.upto(cols-1).each do |col|
    0.upto(rows-1).each do |row|
      xrow = row
      xcol = row + col

      next if xcol > cols-1

      answer << encoded_text[(xrow * cols) + xcol]
    end
  end

  answer.join.rstrip
end
```