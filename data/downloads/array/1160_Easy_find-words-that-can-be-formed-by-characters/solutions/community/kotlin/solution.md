# Easy Kotlin Solution

**Author:** Abhishek_Maurya2028
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4354620/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4354620/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity -->
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countCharacters(words: Array<String>, chars: String): Int {
        var count = 0
        var arr =IntArray(26);
        for( i in chars){
            arr[i -'a']++
        }
        for(i in words){
            if(check(i , arr)){
                count += i.length
            }
        }
        // print(arr.contentToString());
        return count

    }
    fun check(word : String , count : IntArray): Boolean{
        var arr = IntArray(26)
        for(i in word){
            var a = i -'a'
            arr[a]++
            if(arr[a] > count[a]){
                return false;
            }
        }
    return true;

    }
}
```