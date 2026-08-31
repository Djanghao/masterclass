# I don't know what the algorithm is this, but just intuitive (beats 100%)

**Author:** andgursky
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5939056/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5939056/)

---

# Code
```ruby []
def find_kth_bit(n, k)
  st = '0'
  # Si = Si-1 + '1' + reverste(invert(Si-1))
  temp = ''
  (0...n).each do |i|
    temp = st.dup
    st += '1'
    if i > 1
      temp_n = temp.length
      adj = (temp.to_i(2) ^ ('1' * temp_n).to_i(2)).to_s(2)
      adj_n = adj.length
      if adj_n < temp_n
        diff = temp_n - adj_n
        diff.times { adj += '0' }
      end
      st += adj.reverse
    end
  end
  st[k-1]
end
```