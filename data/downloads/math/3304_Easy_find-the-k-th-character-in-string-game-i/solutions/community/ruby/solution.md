# Ruby straightforward solution

**Author:** Aksafan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5846309/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5846309/)

---



# Code
```ruby []
# @param {Integer} k
# @return {Character}
def kth_character(k)
  result_string = 'a'
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  replacements = 'bcdefghijklmnopqrstuvwxyza'

  while result_string.length < k
    current_string = result_string
    new_string = current_string.tr(alphabet, replacements)
    result_string += new_string
  end

  result_string[k-1]
end
```