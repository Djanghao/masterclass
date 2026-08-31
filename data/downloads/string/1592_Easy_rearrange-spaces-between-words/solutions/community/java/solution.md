# JAVA Simple and easy

**Author:** mohdamanzaid07
**Votes:** 5
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/1263149/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/1263149/)

---

```class Solution {
    public String reorderSpaces(String text) {
        int numWords = 0;
        int numSpaces = 0;
        int textLength = text.length();
        
        for(int i = 0; i < textLength; i++ ) {
            if(text.charAt(i) == ' ') numSpaces++; // count total spaces
            if(text.charAt(i) != ' ' && (i + 1 == textLength ||  text.charAt(i + 1) == ' ') ) numWords++; //count total words
        }
        
 
        
        int avgSpaces = 0; // calculate average num spaces
        
        if(numWords < 2) {
            avgSpaces = numSpaces; // if numWords == 1 , dividing numSpaces with 1 - 1 i.e. 0 will give error
        } else {
            avgSpaces = numSpaces / (numWords - 1);
        }
        
        
        int i = 0;
        int spaces = 0;
        
        StringBuilder sb = new StringBuilder();
        
        while(i < textLength) {
            while(i < textLength && text.charAt(i) == ' ') i++;   // skip spaces from string
            while(i < textLength && text.charAt(i) != ' ') { 
                sb.append(text.charAt(i));  // add word chararacters to string builder
                i++;
            }
            while(sb.length() < textLength  && spaces < avgSpaces) {    // append avg number of spaces after each word
                sb.append(' ');
                spaces++;
            }
           
          
            i++; // move to next character
            spaces = 0; //make spaces zero again for next word in string builder
        }
        
        while(sb.length() < textLength) sb.append(' '); // append any remaining spaces to sb in the end of sb string
            
            
        return sb.toString();
    }
}