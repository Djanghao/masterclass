# Just 7 lines of code!

**Author:** debanjanc
**Votes:** 23
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/54076/](https://leetcode.com/problems/repeated-dna-sequences/solutions/54076/)

---

I am too lazy to design my own hash function; Hence I just used the one provided by C++.



 

    vector<string> findRepeatedDnaSequences(string s) {
            
            unordered_map<size_t,int> MP;
            hash<string> hash_fn;
            vector<string> ret;
            
            for(int i = 0; i < int(s.size()) - 9; ++i)
                if(MP[hash_fn(s.substr(i,10))]++ == 1 )
                   ret.push_back(s.substr(i,10));
                   
          return ret;
        }