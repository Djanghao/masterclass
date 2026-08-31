# Ruby Solution to the strong password checker  t: O(n) s: O(1)

**Author:** thehorseman
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/2885702/](https://leetcode.com/problems/strong-password-checker/solutions/2885702/)

---

# Intuition
Inspired by the linear Go solution for this problem.


# Complexity
- Time complexity:
The time complexity of the code is O(n) as it iterates through the password string once.

- Space complexity:
The space complexity is O(1) as the code only uses a fixed amount of memory.

# Code
```
# @param {String} password
# @return {Integer}
def strong_password_checker(password)
  need_digits = 1
  need_lowercase = 1
  need_uppercase = 1
  needs_change = 0
  can_delete_for_change = [0, 0, 0]
  
  i = 0
  while i < password.length
    v = password[i]
    if v.between?('0', '9')
      need_digits = 0
    elsif v.between?('a', 'z')
      need_lowercase = 0
    elsif v.between?('A', 'Z')
      need_uppercase = 0
    end
    
    if i - 2 >= 0 && password[i - 2] == v && password[i - 1] == v
      seq_len = 3
      i += 1
      while i < password.length && password[i] == v
        seq_len += 1
        i += 1
      end
      needs_change += seq_len / 3
      can_delete_for_change[seq_len % 3] += 1
    else
      i += 1
    end
  end
  
  sz = password.length
  needs_special = need_digits + need_lowercase + need_uppercase
  if sz < 6
    return [needs_special, 6 - sz, needs_change].max
  elsif sz <= 20
    return [needs_special, needs_change].max
  else
    needs_deleted = sz - 20
    can_delete = needs_deleted
    (0..2).each do |i|
      to_delete = [can_delete_for_change[i] * (1 + i), can_delete].min
      can_delete -= to_delete
      needs_change -= to_delete / (1 + i)
    end
    needs_change -= [can_delete, 0].max / 3
    return needs_deleted + [needs_change, needs_special].max
  end
end
```