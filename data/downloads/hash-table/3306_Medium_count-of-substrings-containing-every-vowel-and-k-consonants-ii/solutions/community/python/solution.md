# 💯🔥💯💯🔥O(n) EASIESST SOLUTIONNN  beats 100% 💯🔥💯💯🔥

**Author:** Lakshay_Tewtiya1402_2005
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846703/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/5846703/)

---

# Intuition

Let's say a array is good if it satisfies the conditions given in question

Now we just have to think of how much can we extend this subarray

It can be extended till the next consonant arrives

That can be precomputed - The next consonant array

Now we just use sliding window when we encounter a good array we count all till the next consonant arrives that is :
Number of Subarrays : nextconsonant [ r ] - r

# Complexity
- Time complexity:
- O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
# Code
```cpp []
class Solution {
public:

    bool vowel(char& c){
        if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')return true;
        return false;
    }

    long long countOfSubstrings(string word, int k) {
        map<char,long long> mp1;
        
        long long ccnt=0;
        long long answer=0;
        long long last=word.size();
        vector<long long> nextc(word.size());
        for(long long i=word.size()-1;i>=0;i--){
            nextc[i]=last;
            if(!vowel(word[i])){
                last=i;
            }
        }

        for(long long l=0,r=0;r<word.size();r++){
            if(vowel(word[r]))mp1[word[r]]++;
            else ccnt++;
            while(ccnt>k){
                if(vowel(word[l])){
                    mp1[word[l]]--;
                    if(mp1[word[l]]==0)mp1.erase(word[l]);
                }
                else ccnt--;
                l++;
            }
            while(ccnt==k && mp1.size()==5){
                answer+=(nextc[r]-r);
                if(vowel(word[l])){
                    mp1[word[l]]--;
                    if(mp1[word[l]]==0)mp1.erase(word[l]);
                }
                else ccnt--;
                l++;
            }
        }
        return answer;
    }
};
```