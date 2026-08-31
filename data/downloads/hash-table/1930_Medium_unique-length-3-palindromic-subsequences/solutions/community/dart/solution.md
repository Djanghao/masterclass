# First Solution in dart

**Author:** officialdevelopercarti
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/3493443/](https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/3493443/)

---

# Intuition
To key is to get unique characters in string  then get their occurance in string and where they are in string/index  then getting all the characters in between creating a unique character list out of them and incrementing their length

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class Solution {
   int countPalindromicSubsequence(String s) {
     s = s.toLowerCase();
     int lengthOfString = s.length;

     ///if String length is less than 3
     
    if(lengthOfString<3){
  
     return 0;
  
     }
     
     
        ///if String length is 3
     else if (lengthOfString==3){
       
       if(s[0]==s[s.length-1]){
         return 1;
       }else{
         return 0;
       }
       
     }
     else {
       
      int counter=0;
       
       ///Get all unique Characters
       List<String> uniqueCharactersInString = s.split('').toSet().toList();
       
      for (String uChar in uniqueCharactersInString){
        ///Getting character repetion
        final int occuranceCount = s.split('').where((char) => char == uChar).length;
        
        if(occuranceCount>1){
           final List<int> indexesOfUniqueCharacter = [];
          
          for(int i =0;i<s.length;i++){
            if(s[i]==uChar){
              indexesOfUniqueCharacter.add(i);
            }
            
          }
          
          
         final int startIndexOfUniqueCharacter = indexesOfUniqueCharacter.first;
          final int lastIndexOfUniqueCharacter = indexesOfUniqueCharacter.last;
          
          String valuesInBetweenBothIndexes = s.substring(startIndexOfUniqueCharacter+1,lastIndexOfUniqueCharacter);
          counter += valuesInBetweenBothIndexes.split('').toSet().toList().length;
          
          
        }
        
      }
       
       return counter;
       
       
       
       }
     

  }
}


```