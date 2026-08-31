# Finding the Longest Nice Substring in a String

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/5731074/](https://leetcode.com/problems/longest-nice-substring/solutions/5731074/)

---

# Intuition

To solve this problem, we need to check all possible substrings of the given string and determine if they are "nice". The definition of "nice" is that for every letter in the substring, both its lowercase and uppercase forms must be present. Thus, our approach involves generating all possible substrings and checking each one for this condition.
# Approach

    Helper Function (checkNice):
        We define a helper function checkNice that checks whether a given substring meets the "nice" condition.
        It uses a set to keep track of all characters in the substring. For each character, it checks if both the lowercase and uppercase forms are present in the set.

    Generate All Substrings:
        We generate all possible substrings using the sliding method in Scala, which gives us all contiguous substrings of a specified length. We use this method within a loop from 1 to the length of the string to get all substrings.

    Check Each Substring:
        For each generated substring, we use the checkNice function to determine if it's "nice". If it is, and its length is greater than the length of the currently stored longest "nice" substring, we update our result.

    Return the Result:
        Finally, we return the longest "nice" substring found.

# Complexity

    Time complexity: O(N3)O(N3)
        Generating all substrings takes O(N2)O(N2), where NN is the length of the string.
        For each substring, checking if it is "nice" takes O(N)O(N) in the worst case. Thus, the overall complexity is O(N3)O(N3).
    Space complexity: O(N2)O(N2)
        We store all substrings, which could take up to O(N2)O(N2) space.

# Code
```scala []
object Solution {
    def longestNiceSubstring(s: String): String = {
        def checkNice(s1 :String) :Boolean ={
            var c :Int =0
            var s_set :Set[Char] =Set()
            for (c <- s1) {
                if (!s_set.contains(c))  s_set +=c
            }
            while(c < s1.length){
            if (!((s1(c).isLower && s_set.contains(s1(c).toUpper)) || (s1(c).isUpper && s_set.contains(s1(c).toLower)))) return false
            c+=1
            }
            true
        }
        if (s.length <= 2 && checkNice(s) == true) return s
        // Generate all combinations of characters for all possible lengths
        val allCombinations = (1 to s.toList.length).flatMap(length => s.toList.sliding(length)).toList
        var final_sub =""
        for (combination <- allCombinations) {
          val s_string =combination.mkString
          if (checkNice(s_string) == true && final_sub.length < s_string.length) final_sub =s_string
        }
        return final_sub
    }
}
```