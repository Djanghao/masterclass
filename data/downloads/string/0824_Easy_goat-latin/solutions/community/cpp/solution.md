# C++ Clean&Clear Solution 100% faster using istringstream with explanations

**Author:** DebbieAlter
**Votes:** 9
**Link:** [https://leetcode.com/problems/goat-latin/solutions/800141/](https://leetcode.com/problems/goat-latin/solutions/800141/)

---

```
class Solution {
public:
    string toGoatLatin(string S) 
    {
        // result
        string goatLatin = "";
        
        static const string VOWELS = "aAeEiIoOuU";
        
        // to keep count of how many "a"s to add
        size_t count = 1;
        
		// for spliting sentence to words
        std::istringstream ss(S); 
        
    	while (ss)
	    { 
        	std::string word; 
        	ss >> word;
            
		    // convert word to goat latin according to case
            if(!word.empty())
            {
                goatLatin += VOWELS.find(word[0]) != string::npos ? word + "ma" + std::string(count, 'a') + " " : word.substr(1, word.length() - 1) + word[0] + "ma" +  std::string(count, 'a') + " ";
            }
             
            // increment for next word
            count ++;
	    }
		// return sentence without last space
        return goatLatin.substr(0, goatLatin.length() - 1);
    }
};
```