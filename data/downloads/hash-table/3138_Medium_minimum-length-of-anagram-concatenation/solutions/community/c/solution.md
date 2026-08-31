# Non-GCD  | Reusing Prev Problem Code

**Author:** 2018eeb1137
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114934/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5114934/)

---

This problem is just an extension of the previous problem(3137. Minimum Number of Operations to Make Word K-Periodic). So before moving onto this problem please check my solution to problem [here](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/discuss/5114551/C%2B%2B-oror-Java-oror-7-lines-code-or-Easy-Solution-With-detailed-Explaination). Because I will be re-using the same code I wrote for the previous problem here. I am gonna paste the same code here: 
### C++
```
int minimumOperationsToMakeKPeriodic(string word, int k) {
        int maxOfAllFrequencies = 0;
        unordered_map<string, int> m;
        for(int i = 0; i < word.length(); i += k){
            string sub = word.substr(i, k);
            m[sub]++;
        }
        for(auto p : m)maxOfAllFrequencies = max(maxOfAllFrequencies, p.second);
        return word.length() / k - maxOfAllFrequencies;
    }
```

In the previous problem, the function `minimumOperationsToMakeKPeriodic` returns the minimum number of operations required to make the string K-periodic. Definition of K-periodic -> *We say that word is k-periodic if there is some string s of length k such that word can be obtained by concatenating s an arbitrary number of times. For example, if word == \u201Cababab\u201D, then word is 2-periodic for s = "ab".*

For the perious problem the word `abab` is K-periodic(K=2) but `abba` is not. To make `abab` 2-periodic we require 0 opertions but to make `abba` to 2-periodic we need 1 operation. **However, in this problem the answer to both words is the same.** That is these two words are considered same for this problem. 
Let's assume that somehow we know that K = 2 is a possible anagram length then how do we verify if this is true? 

It is easy to prove that if this function `minimumOperationsToMakeKPeriodic(word, k)` returns 0 then we can say that k is a possible length of the anagram. But this will return different values for `abab` and `abba`. But we don't want that to happen, so to get the same answer for both `abab` and `abba` ie for all anagrams, we can sort the substring and then put it in the map. **Now, we can be sure that if** `minimumOperationsToMakeKPeriodic(word, k)` **returns 0 then k is definitely a possible length of the anagram.** So now we can change the previous code like this:

### C++ 
```
int minimumOperationsToMakeKPeriodic(string word, int k) {
        int maxOfAllFrequencies = 0;
        unordered_map<string, int> m;
        for(int i = 0; i < word.length(); i += k){
            string sub = word.substr(i, k);
            sort(sub.begin(), sub.end()); // Just add this one line here rest is the same as previous question
            m[sub]++;
        }
        for(auto p : m)maxOfAllFrequencies = max(maxOfAllFrequencies, p.second);
        return word.length() / k - maxOfAllFrequencies;
    }
```


The brute force approach would be to try for all possible lengths of the anagram and find the minimum possible length.

```
int minAnagramLength(string s) {
        int n = s.length();
        int ans = n;
        for(int i = n; i >= 1; i--){
            if(n % i == 0 && minimumOperationsToMakeKPeriodic(s, i) == 0)
                ans = i;
        }
        return ans;
    }
```


But we can make one observation here. 

Consider the string `abcdefgh`. This string is of length 8 and the minimum possible length for anagram is also 8. It is easy to see that if anagram is not possible with length `k` then none of the divisors of k can be a possible length of anagram. For example K = 4 is not a possible length of anagram because `abcd` doesn't repeat itself. Since K = 4 is not possible then K = 2 and K = 1 will also not be possible because they are its divisors.

We will use this observation here to optimise our code. First we will map all the divisors of n(length of string) to 1 i.e.
```
if(n % i == 0){
	div[i] = 1;
	div[n / i] = 1;
}
```

Then if we encounter any `i` for which `n % i == 1` we can set all the divisors of i to 0 implying that if i is not a possible length of anagram then then no divisor of i can be a possible length.

Entire Code

```
int minimumOperationsToMakeKPeriodic(string word, int k) {
        int maxOfAllFrequencies = 0;
        unordered_map<string, int> m;
        for(int i = 0; i < word.length(); i += k){
            string sub = word.substr(i, k);
            sort(sub.begin(), sub.end()); // Just add this one line here rest is the same as previous question
            m[sub]++;
        }
        for(auto p : m)maxOfAllFrequencies = max(maxOfAllFrequencies, p.second);
        return word.length() / k - maxOfAllFrequencies;
    }
    int minAnagramLength(string s) {
        int n = s.length();
        map<int, int> div;
        for(int i = 1; i * i <= s.length(); i++){
            if(n % i)continue;
            div[i] = 1;
            div[n/i] = 1;
        }
        int ans = n;
        for(auto it = div.rbegin(); it != div.rend(); it++){
            if(div[it->first] == 0)continue; //if it is not possible for it->first to make an anagram then continue
            if(minimumOperationsToMakeKPeriodic(s, it->first) == 0){
                ans = it->first; //update answer as we have found a lower value of possible anagram length
            }
            else{ // since it->first is not possible then none of its divisor can be a possible answer
                for(int i = 1; i * i <= it->first; i++){//therefore setting all its divisor to 0
                    if(it->first % i)continue;
                    div[it->first / i] = 0;
                    div[i] = 0;
                }
            }
        }
        return ans;
    }
```


