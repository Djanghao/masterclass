# Hashmap  |  One Pass  O(n)  soln  |  C + +

**Author:** megamind_
**Votes:** 37
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772482/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772482/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
lets say we have two strings that are reverse of each other , Now if we have a palindrome and we add one string at front and other at back, it will still be a palindrome (len += 4 in our case) Also if all the pairs are used , we can still increase length by putting a string in between if both the char of string should be same. 

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) (hashmap)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


*PS. This exact question was asked in an amazon interview.*
# Code
```
  int res = 0;
       unordered_map<string,int> hm; 
       
       for(string s:words){ // match to make pairs that can be taken in palindrome
           string p = s;
           reverse(p.begin(),p.end());
           if(hm[p]>0){ // reverse of current string found, these 2 strings can be added to palindrome 
               res+= 4;
               hm[p]--;  // remove occurence of string as we used it for palindrome
           }
           else{
               hm[s]++;   // reverse not fount , put it in hashmap
           }
       }
         //***** to take element at the center with both letters same
       for(auto i:hm){   // only strings with frequency 1 are left now  
           if(i.first[0]==i.first[1] && i.second>0){ // to place in center of palindrome we needs chars to be same
               return res+2;   
           }
       }

       return res;
```