# One Pass || O(1) Space

**Author:** Rowque
**Votes:** 14
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/2874981/](https://leetcode.com/problems/circular-sentence/solutions/2874981/)

---

# C++ Iterative
	bool isCircularSentence(string sen) {
        int sz = sen.size();
        if(sen[0] != sen[sz - 1]) return false;
        for(int i = 0; i < sz;++i)
            if(sen[i] == ' ' && sen[i - 1] != sen[i + 1]) return false;
        return true;
    }
# C++ Recursion
Just for fun :)
     
	 bool isCircularSentence(string sen) {
        int sz = sen.size();
        if(sen[0] != sen[sz - 1]) return false;
        
        function<bool(int)> solve = [&](int i){
            if(i == sz) return true;
            if(sen[i] == ' ' && sen[i - 1] != sen[i + 1]) return false;
            return solve(i + 1);
        };
        return solve(0);
    }