# Scala Functional - Easy to understand solution

**Author:** vtiwari227
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/1826371/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/1826371/)

---

Code: 
```
def firstUniqChar(s: String): Int = {
  val charCountMap = s.groupBy(_.toChar).mapValues(_.length)
  s.indexWhere(charCountMap.get(_).contains(1))
}
```

Intuition:
1. Use HashMap to store the count of occurence of each character in string. in above code grouBy method creating a Map of ( char -> char, ex : e-> eee) then mapValues, convert value to count resulting in ex: e ->3)
2. In second line indexWhere is similar to looping through the string and get where is my first character for which count of occurence in above hashMap is 1


Time Complexity : O(n) : for putting in Map and then scanning through the string
Space Compexity : O(n) for storing the character in map