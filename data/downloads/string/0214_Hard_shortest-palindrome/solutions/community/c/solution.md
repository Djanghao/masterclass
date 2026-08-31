# C++ KMP Solution | Short and Simple

**Author:** log89
**Votes:** 12
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/1529864/](https://leetcode.com/problems/shortest-palindrome/solutions/1529864/)

---


    // kmp function to find kmp array, taken array of size n+1, to make things little simple and the code short
	
    vector<int> KMP(string &s){
        int n = s.length();
        vector<int> kmp(n+1);
        int i = 0,j = -1;
        kmp[0] = -1;   // set that to -1 so avoid comparison further in nested while loop in the code below as the array front end is hit when, we get j as -1 which means we have to stop
        
        while(i < n){
            while(j != -1 && s[j] != s[i]){
                j = kmp[j];      // jumping backwards in kmp array to find any other possibility of match in cases of mismatches
            }
            j++; i++;     
            kmp[i] = j;      // set the curr index kmp array value
        }
        
        return kmp;   
    }
	// Just remember this kmp code . Believe me it will be easier. (just 6 lines of main logic in this kmp code)

..............................

Test case 1 :
		
        s = "aacecaaa"
        x = "aaacecaa"

     T = "aacecaaa#aaacecaa" // apply kmp on this. "#" is used for separating both the s and rev(s). To avoid wrong matching.

     index =  0 1 2 3 4 5 6 7 8  9  10 11 12 13 14 15 16 17
         T =   {a a c e c a a}a  #   a [a  a  c  e  c  a  a]
       kmp = -1 0 1 0 0 0 1 2 2  0   1  2  2  3  4  5  6  7

    "(aacecaa)a" , the part in the small bracket is common in both. So if append "a" at start of the original string s, we will get the shortest palindrome. -> (1)

....................

Steps to follow :

    Step 1 : Find kmp array for string T = original string + "#" + reversed string (pattern to be matched)
    Step 2 : Get the last element in the kmp array, represents the length matched with the reverse string pattern -> say length l.
    Step 3 : Remove the first l characters from the original string (represented in small brackets above) , reverse the remaining characters (say string temp)
    Step 4 : Add this temp to start of the original string. i.e., Answer = temp + s.

.........................................


    string shortestPalindrome(string s) {
        
        string x = s;
        reverse(x.begin(),x.end());     // reverse the original string 
        
        
        string T = s + "#" + x;   
        int n = T.length();      
        vector<int> kmp = KMP(T);   // form kmp array for this string T


        int l = kmp[n];   // find the length of matched part
        
        string temp = s.substr(l);         // remove first l elements from s , and store the remaining string in temp.
        reverse(temp.begin(),temp.end());   // revrersed the temp string
        
        return temp + s;  // add temp to start of s, to get the shortest palindrome.
    }
    
    /*
    
    Note : In  this problem they have asked to make the string palindrome by appending minimum characters at start. We used string T = s + "#" + rev(s).
    Also we have removed first first l elements from s. Reverse the remaining string and append it to start of s.

    But if were being asked to find the same by appending minimum characters at start . We would have used T = rev(s) + "#" + s. 
    Also we would have removed last l elements from s. Reverse the remaining elements and append it to end of s.
	
	*/
