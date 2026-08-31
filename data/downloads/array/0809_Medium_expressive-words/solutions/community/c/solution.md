# [C++] Short & Easy (10 lines) Easy to understand two pointer O(n) and O(1) with detailed explanation

**Author:** aravind-kumar
**Votes:** 12
**Link:** [https://leetcode.com/problems/expressive-words/solutions/467621/](https://leetcode.com/problems/expressive-words/solutions/467621/)

---

Terminilogy:
If we try to determine if a given query word is sketchy to S.
here i assume query word = src and S = dst.
Example:
S = "heeellooo".
words = ["hello"]

Here src = hello and dst = heeellooo

From the description of the question we can come to the following conclusions
1.  If the src has a extra character not in dst or vice versa then its not sketchy. (Ex: src = hi,dst = hello. src has 'i' but not dst)
2.  If the number of repeating characters in dst < 3 then its not sketchy (Ex: src = hello,dst = helloo. dst has repeating character  'o' whose count = 2 which is <3)
3.  Similarly we cannot make src sketchy if the number of repeating characters > the number of repeating characters in dst (Ex: src="aaaab",dst="aab". src has repeating character group of 'a' whose count = 4 and dst has count = 2, in this case we cannot get make 2 characters out of 4 characters)

```
    bool isExpressive(string dst,string src) {
        int i=0,j=0;
        while(i<dst.size() && j<src.size()) {
           if(dst[i] != src[j]) return false;
		   int dstCount = 1,srcCount = 1;
		   
			// dst[++i] means increment the value of i then use it 
            while(i<dst.size() && dst[i]==dst[++i]) { dstCount++;} 
            while(j<src.size() && src[j]==src[++j]) { srcCount++;}
                  
            if(dstCount != srcCount && (srcCount > dstCount || dstCount <3))
                return false;
        }
        
        return i==dst.size() && j==src.size();
    }
    
    int expressiveWords(string S, vector<string>& words) {
        int res = 0;
        
        for(auto w : words) {
            res += isExpressive(S,w);
        }
        
        return res;
        
    }
	```
	First post :) let me know if u have any questions.