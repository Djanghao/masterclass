# c++ | 0ms Code | easy to understand | with explanation

**Author:** Pranjalmittal21
**Votes:** 29
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/834076/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/834076/)

---


'''

		class Solution {
		public:
		string modifyString(string s) {
        int n = s.length();
        for(int i=0;i<n;i++){
            
            //checking every character, if character is '?'
            if(s[i] == '?'){
                
                //loop over every alphabet
                for(char j = 'a';j<='z';j++){
                    //compare with previous char
                    if(i-1>=0 && j==s[i-1]) continue;
                    //compare with next char
                    if(i+1<n && j==s[i+1]) continue;
                    //if both the above conditions are false, fix the current alphabet in that
                    //position and break the loop
                    s[i] = j;
                    break;
                }
            }
            
            //check next char of the string
            
        }
        return s;
    }
	};

'''
Please **Upvote** my ans if you understand