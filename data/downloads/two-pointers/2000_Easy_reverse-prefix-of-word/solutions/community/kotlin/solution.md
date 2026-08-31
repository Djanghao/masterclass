# 💯Two Pointers🎯✅ | 98.63%🔥| 4 Easy Steps : 🎯| Simple (5 line) to understand💯Explained

**Author:** Prathamesh18X
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/5093972/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/5093972/)

---

# Intuition
simply we are using **2\uFE0F\u20E3 pointers**\uD83D\uDC96\uD83D\uDC96 `left` and `right` to traverse pointer in opposite direction and concurrently swaping each other to reverse the string till `left` is less than `right`...\uD83D\uDCAF

# Dont forget to vote...\u2B06\uFE0F **me**\uD83E\uDD73
### *and*
# world's Largest Democratic Election 2k24
![image.png](./images/0.png)

# Code\uD83C\uDFAF
```javascript []
var reversePrefix = function (word, ch) {
    var left = 0;
    var right = word.indexOf(ch)
    const arr = word.split('')

    if(r === -1) return word
    
    while(l < r) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++
        right--
    }
    return arr.join('');
};
```
```python []
def reverse_prefix(word, ch):
    left = 0
    right = word.find(ch)
    if right == -1:
        return word
    
    arr = list(word)
    
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    
    return ''.join(arr)
```
```java []
    public static String reversePrefix(String word, char ch) {
        int left = 0;
        int right = word.indexOf(ch);
        if (right == -1) {
            return word;
        }
        char[] arr = word.toCharArray();
        
        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        
        return new String(arr);
    }


```
```cpp []
string reversePrefix(const std::string& word, char ch) {
    int left = 0;
    int right = word.find(ch);
    if (right == std::string::npos) {
        return word;
    }
    string arr = word;
    
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
    
    return arr;
}
```
```ruby []
def reverse_prefix(word, ch)
    left = 0
    right = word.index(ch)
    return word if right.nil?
    
    arr = word.chars
    
    while left < right
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    end
    
    arr.join
end
```
``` kotlin []
fun reversePrefix(word: String, ch: Char): String {
    var left = 0
    val right = word.indexOf(ch)
    if (right == -1) {
        return word
    }
    val arr = word.toCharArray()
    
    while (left < right) {
        // Swap characters at left and right
        val temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    
    // Convert CharArray back to String and return
    return String(arr)
}
```


### Approach\uD83D\uDD25\uD83D\uDE43

1. **Find the First Occurrence of `ch`:**
    - Use  `indexOf` method on `word` to find the index of the first occurrence of `ch`.
    - If `ch` is not found (`indexOf` returns -1), return the original string.

2. **Convert String to an Array:**
    - Convert `word` to an array of characters using `split('')` for easier manipulation.

3. **Reverse the Prefix:**
    - Define two pointers: `left` starting at index 0, and `right` starting at the index of `ch`.
    - Swap characters at `left` and `right` pointers.
    - Move `left` one step forward and `right` one step backward.
    - Continue until `left` and `right` pointers meet or cross.

4. **Convert the Array Back to a String:**
    - Join the array of characters using `join('')` to convert it back to a string.

5. **Return the Result:**
    - Return the modified string.


# Complexity
- Time complexity: `O(1)`

