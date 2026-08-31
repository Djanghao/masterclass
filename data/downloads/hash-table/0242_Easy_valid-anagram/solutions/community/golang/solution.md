# GOLANG optimized with followup - O(n)

**Author:** scio
**Votes:** 35
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/2347062/](https://leetcode.com/problems/valid-anagram/solutions/2347062/)

---

This problem can be solved by sorting the characters, but sorting is computationally expensive. We want a solution that loops once over each string. We are going to do the following: keep a slice of integers representing the amount of appearances of each of the 26 lowercase English letters:
```
chars := make([]int, 26)
```
We loop once over s, incrementing the relevant number. We want chars[0] to refer to 'a', chars[1] to refer to 'b', etc.
```
for _, v := range s {
	i := int(v - 'a')
	chars[i]++
}
```
Then we do the same over t. We can maintain another slice, but we also can just decrement towards 0 again:
```
for _, v := range t {
	i := int(v - 'a')
	chars[i]--
}
```
Now, if chars contains only zeros, we return true, otherwise false. This operation is O(1).
```
for _, v := range chars {
	if v != 0 {
		return false
	}
}

return true
```

Full solution:
```
func isAnagram(s string, t string) bool {
    chars := make([]int, 26)
    
    for _, v := range s {
		i := int(v - 'a')
		chars[i]++
	}
    
    for _, v := range t {
		i := int(v - 'a')
		chars[i]--
	}
    
	for _, v := range chars {
		if v != 0 {
			return false
		}
	}
    
    return true
}
```

**Bonus:** What if the inputs contain Unicode characters?

We could maybe go on a quest to find out how many Unicode chars are there, and maintain a slice with many thousands of elements, and technically this would still be O(n), but it is a cheeky solution with a lot of waste. We can do better, we can use a map:
```
chars := make(map[rune]int)
```
We need to make a map of [runes](https://go.dev/blog/strings), because bytes are not adequae for all unicode characters. The rest is easy.
Full code:
```
func isAnagram(s string, t string) bool {
    chars := make(map[rune]int)
    
    for _, v := range s {
        chars[v]++
    }
    
    for _, v := range t {
        chars[v]--
    }
    
    for _, v := range chars {
        if v != 0 {
            return false
        }
    }
    
    return true
}
```
Alternative version with a couple tricks added:
```
func isAnagram(s string, t string) bool {
    chars := make(map[rune]int)
    
    for _, v := range s {
        chars[v]++
    }
    
    for _, v := range t {
        if number, exists := chars[v]; !exists || number == 0 {
            return false
        }
        chars[v]--
    }
    
    return len(s) == len(t)
}
```
If we are going to decrement and we find that the char count is already 0, or that we don't even have a count, then we can say that the second string has more of that character than the first, and therefore we return false immediately.
If we never find ourselves in that situation, then the first string has more or equal of every character than the second string. We can quickly check if it is **sometimes more** or if it is **always equal** by checking the total lengths.