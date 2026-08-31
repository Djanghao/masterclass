# No Built-in methods, pure 2-pointer technique code --> JS, Python, Ruby ^^

**Author:** ejini6969
**Votes:** 6
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/5337403/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/5337403/)

---

# Intuition
Do it without built-in `reverse`, `split`, `strip` (`trim` in JS) methods.

# Approach
The point of this problem being at medium difficulty is due to the follow up question below:

> Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?

Currently, strings in Ruby are mutable, but not in JavaScript nor Python, but for the sake of writing the algorithm to be in-line with Ruby and the spirit of this question, I would convert the input string to list / array to make swapping and character replacement be feasible in JavaScript and Python.

This algorithm is easy to come up, if you first write a one-line solution using built-in methods. In JS, it would be:

```
return s.trim().split("\\S+").reverse().join("")
```
In Python, it would be:
```
return " ".join(s.strip().split()[::-1])
```

Then, you could visualize your algorithm based on those lines. Split each built-in method into a respective helper or stand-alone function and construct logic using **2-pointer technique** !!!

**Step-by-step algorithm explanation**

* Remove trailing, leading and consecutive spaces within the string.
  * Initialize `i = 0`. Continue delete the first character until it is not a whitespace character.
  * Initialize `j = s.length - 1` (Or use Python's negative indexing --> `-1`). Continue delete the last character until it is not a whitespace character
  * Start from the first to `j`th character and check if the current and next character are spaces. If so, delete them. (Remember to decrement the pointer `i` by 1 since upon each iteration we are incrementing `i`, and one space character will be removed, so we need to stay at the current step (`i`) to check for the next character)

* Reverse string using **2-pointer technique**
  * Initialize a starting pointer (`i = 0`) and an ending pointer (`j = s.length - 1`)
  * Swap their positions. You may store a `temp` variable to do so, otherwise you may perform in-line swapping within an array or tuple or list...
  * Increment starting pointer by 1 and decrement ending pointer by 1.
  * Continue above 3 steps until the 2 points meet (as in `i >= j`)

* Reverse every word (consecutive groups of non-space characters) in the string
  * We know a word is either trailed or bounded by a space character or the end of the string.
  * We can use this as a boundary check and determine at which point we should start and stop the reversal of a word 
  * Initialize `tracker = 0` to keep track of starting position for reversing 
  * If we encounter a space character, we reverse the string using the same **2-pointer logic** as above.
  * Since the last word is not trailed by a space, we must perform an additional reversal outside of the `while` loop.
  
* Concatenate the list of characters into a string, and we got our answer.

### Any suggestions are welcome ~~ Happy Coding and do not forget to up-vote this as it is my first-time writing a decent step-by-step explanation to a problem !!! 


# Code

## JavaScript
```
var reverseWords = function(s) {
    let arr = [...s]
    // trim trailing, leading and consecutive spaces within
    while(arr[0] === ' ') arr.shift()
    while(arr[arr.length - 1] === ' ') arr.pop()
    let i = 0, j = arr.length
    while(i < j){
        if(arr[i] === arr[i + 1] && arr[i] === ' '){
            arr.splice(i, 1)
            i--
        }
        i++
    }
    // reverse 
    i = 0, j = arr.length - 1
    while(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    // reverse each word in string (groups of non-space characters)
    let tracker = 0
    i = 0
    n = arr.length 
    while(i < n){
        if(arr[i] === ' '){
            let left = tracker, right = i - 1
            while(left < right){
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left++
                right--
            }
            tracker = i + 1
        }
        i++
    }
    // ~~~~~reverse last word in string~~~~
    let left = tracker, right = i - 1
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr.join("")
};
```

## Python 3
```
class Solution:
    def reverseWords(self, s: str) -> str:
        lst = list(s)
        # remove inner, trailing and leading spaces
        i = 0
        while lst[0] == ' ': del lst[i]
        while lst[-1] == ' ': del lst[-1]
        while i < len(lst) - 1:
            if lst[i] == lst[i + 1] == ' ': 
                del lst[i]
                i -= 1
            i += 1
        # reverse 
        i, j = 0, len(lst) - 1
        while i < j:
            lst[i], lst[j] = lst[j], lst[i]
            i += 1
            j -= 1
        # reverse every word in string
        i, tracker, n = 0, 0, len(lst)
        while i < n:
            if lst[i] == ' ':
                left, right = tracker, i - 1
                while left < right:
                    lst[left], lst[right] = lst[right], lst[left]
                    left += 1
                    right -= 1
                tracker = i + 1
            i += 1
        #### reverse last word too
        left, right = tracker, i - 1
        while left < right:
            lst[left], lst[right] = lst[right], lst[left]
            left += 1
            right -= 1
        return "".join(lst)
        
```
## Ruby
```
def reverse_words(s)
    # remove inner, trailing and leading space
    i = 0
    s[i] = "" while s[i] == ' '
    j = s.size - 1
    while s[j] == ' '
      s[j] = ""
      j -= 1
    end
    while i < j
      if s[i] == s[i + 1] && s[i] == " "
        s[i] = ""
        i -= 1
      end
      i += 1
    end
    p s
    # reverse string
    i = 0
    j = s.size - 1
    while i < j
      s[i], s[j] = s[j], s[i]
      i += 1
      j -= 1
    end
    # reverse every word before space and end of string
    i = 0
    tracker = 0
    n = s.size
    while i < n
      if s[i] == ' '
        left = tracker
        right = i - 1
        while left < right
          s[left], s[right] = s[right], s[left]
          left += 1
          right -= 1
        end
        tracker = i + 1
      end
      i += 1
    end
    ##### reverse last word too
    left = tracker
    right = i - 1
    while left < right
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    end
    s
end
```