# Ruby using hash and stack w/ explanations

**Author:** Didi46
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/1006774/](https://leetcode.com/problems/remove-duplicate-letters/solutions/1006774/)

---


```
 #using hash and stack techniques
def remove_duplicate_letters(s)
  # put chars in hash, with each char's last occurance's index as value
  # input: s = "bcabc"
    hash = { } 
  s.each_char.with_index do |char, index|
      hash[char] = index
  end
  # hash =  {"b"=>3, "c"=>4, "a"=>2}

  result = ""
  
  s.each_char.with_index do |char, index|
    if !result.include?(char) 
      while result.length != 0 && char < result[-1] && index < hash[result[-1]] 
        # a letter can be deleted if it's greater in value than char AND if it reappears in s at a later index
      result.slice!(-1) # continue to pop off the last letter as this while condition returns true
      end
      result += char # we can now add char to result after above conditions have been checked
    end
  end
  
  return result
end```
