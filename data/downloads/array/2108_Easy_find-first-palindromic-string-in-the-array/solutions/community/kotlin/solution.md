# Java and Kotlin Solution

**Author:** Wasim15185
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/2346854/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/2346854/)

---

**Java :**

```
 public String firstPalindrome(String[] words) {
      
      for(String word :words){
        
        if(isWordPalindrome(word)){
          return word ;
        }
        
      }
      
      return "" ;
      
    }
  
    private boolean isWordPalindrome(String s){
      
      for(int i = 0 ; i< s.length() ; i++){
        
        if(s.charAt(i) != s.charAt(s.length()-1-i)){
          return false ;
         }
      }
      return true ;
    }
```


**Kotlin :**

```
 fun firstPalindrome(words: Array<String>): String {
      
      words.forEach{ word ->
        
        if( isWordPalindrome(word) ){
          return word ;
        }
        
      }
      
      return "";
      
    }
    
    private fun isWordPalindrome(s:String):Boolean{
      
      s.forEachIndexed{ index: Int, c: Char -> 
        
        if(c != s[s.length-1-index]){
          return false ;
        }
        
      }
      
      return true ;
      
    }
    
```

