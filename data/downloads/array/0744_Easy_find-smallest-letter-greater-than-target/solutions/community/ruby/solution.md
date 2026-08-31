# Ruby solution using binary search

**Author:** brunomrlima
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/2095453/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/2095453/)

---

```
def next_greatest_letter(letters, target)
    return letters[0] if target < letters[0]
    return letters[0] if target >= letters[letters.size - 1]
    
    left = 0
    right = letters.size - 1
    
    while left <= right
        mid = (left + right)/2
        
        if target < letters[mid]
            right = mid - 1
        else
            left = mid + 1
        end
        
        letter = letters[mid]
        break if letter > target && target >= letters[mid-1]
    end
    
    letter
end
```
