# JAVA - Clean & Well Commented Explanation

**Author:** rachelgupta7codenirvana
**Votes:** 11
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2066611/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2066611/)

---

**Approach:**
1. Traverse the given String "s", and increment the count each time the character is equal to the given "letter".
2. Find the percentage using standard percentage formula : (given*100)/total.

***Kindly upvote if I was able to help you, this motivates me to do more for the community.***

***Kindly look for the comments in the code below for explanation.***
**Time Complexity:** O(N)
**Space Complexity:** O(1)
```
class Solution {
    public int percentageLetter(String s, char letter) {
        int count=0; //count acts as a counter variabe to count the give character "letter" in the string 
        
        //Traverse the string s and each time the character int the string is equal to "letter"
        //increment the count variable by 1.
        for(char ch:s.toCharArray())
        {
            if(ch==letter)
                count++;
        }
        
    //If the count is zero, then the percentage is also zero
        if(count==0) 
            return 0;
        
        
     // to find the total characters in the strings or we can say to find the length of the string   
        int total=s.length(); 
    
    // Calculate the total percentage using the standard percentage formula i.e (given*100)/total
        int per=(count*100)/total;
        return per;
    }
}
```