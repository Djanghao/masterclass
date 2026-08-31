# Force solution

**Author:** Andrey_Bukreev
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5600983/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5600983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
In the first and second steps, we check the outermost characters of the string. If they are equal to ?, then we replace them.
Next, we use a loop. If we encounter the character ?, we select a replacement character that is not equal to the adjacent characters

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun modifyString(s: String): String {
        val arr = s.toCharArray()
        val n = arr.size
        if(arr[0] == '?'){
            if(n == 1) return "a"
            if(arr[1] != 'a') arr[0] = 'a' else arr[0] = 'b'
        }
        if(arr[n -1] == '?'){
            if(arr[n -2] == 'a') arr[n -1] = 'b' else arr[n -1] ='a'
        }
        for(i in 1 until n -1){
            if(arr[i] == '?'){
                for(j in 0..26){
                    val sim:Char = (j + 'a'.code).toChar()
                    if(sim != arr[i-1] && sim != arr[i+1]){
                        arr[i] = sim
                        break
                    }
                }
            }
        }
        val builder = StringBuilder()
        arr.forEach{
            builder.append(it)
        }
        return builder.toString()
    }
}
```