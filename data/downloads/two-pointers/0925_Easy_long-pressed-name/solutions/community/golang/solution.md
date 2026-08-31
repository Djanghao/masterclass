# Go - Two pointer

**Author:** marpataa
**Votes:** 1
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/2099093/](https://leetcode.com/problems/long-pressed-name/solutions/2099093/)

---

Runtime:\xA00 ms, faster than\xA0100.00%\xA0of\xA0Go\xA0online submissions for\xA0Long Pressed Name.
Memory Usage:\xA01.9 MB, less than\xA068.57%\xA0of\xA0Go\xA0online submissions for\xA0Long Pressed Name.
```
func isLongPressedName(name string, typed string) bool {
    if len(name) > len(typed) {
        return false
    }
    nameChars := []byte(name)
    typedChars := []byte(typed)
    
    i, j := 0, 0
    
    for j < len(typedChars) && i < len(nameChars) {
        if nameChars[i] == typedChars[j] {
            i++
            j++
        } else if isLongPressed(typedChars, j) {
            j++
        } else {
            return false
        }
    }
    
    // increment j until longpressed chars found
    for j < len(typedChars) {
        if isLongPressed(typedChars, j) {
            j++
        } else {
            return false
        }
    }
    
    return i == len(name) && j == len(typed)

}

func isLongPressed(typed []byte, i int) bool {
    return i > 0 && typed[i] == typed[i - 1]
}
```

