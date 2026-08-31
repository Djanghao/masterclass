# C++ Implementation : Brute Force + 2d PrefixSums

**Author:** sungyuk1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-self-contained-substring/solutions/5677494/](https://leetcode.com/problems/find-longest-self-contained-substring/solutions/5677494/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here is a c++ implementation of the following solution : https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969218/prefix-sum-o-n-26-26-python-3/

Also note the following from the provided link : 
"Logically, every substring thus must be made up of the leftmost occurence of a character & the rightmost occurence of another character (potentially the same character, but not necessarily). If it isn't in this form, then there is guarenteed to be a character to the left or the right of the substring."

This is because if the endpoint is not the rightmost position of a character, then there will be another occurrence of that character to the right, outside of the interval, and therefore the interval would not be self-contained. Similarly, if the startpoint of the interval is not the leftmost index of a character, then the character has another occurrence to the left, outside of the interval, and therefore the interval would not be self-contained. 


# Code
```cpp []
class Solution {
public:
    int maxSubstringLength(string s) {
        //prefixSums of occurrences - letter => position in s => rolling total of occurrence
        //Note the prefixSums vector for each letter is 1+s.size() so that the first index is 0
        vector<vector<int>>prefixSums(26, vector<int>(s.size()+1, 0));
        map<char, pair<int, int>> endpoints; 

        //holds the number of occurrences of each character in s
        unordered_map<int, int> instances; 

        int ans = -1; 

        for(int i = 0; i<s.size(); ++i){
            if(!endpoints.contains(s[i])){
                endpoints[s[i]].first = i; 
                endpoints[s[i]].second = i; 
            }else{
                endpoints[s[i]].second = i; 
            }

            instances[s[i]]++;

            //construct prefix sums
            for(int j = 0; j<26; ++j){
                if(j == s[i] - 'a'){
                    prefixSums[j][i+1] =  prefixSums[j][i]+1;
                }else{
                    prefixSums[j][i+1] =  prefixSums[j][i];
                }
            }
        }

        //Create two vectors which holds the left most and right most
        //indexes for each character
        vector<int>left_most, right_most; 
        for(auto row: endpoints){
            left_most.push_back(row.second.first);
            right_most.push_back(row.second.second);
        }

        //Create every combination of the leftmost index of any character and the right most index of any character
        for(auto left: left_most){
            for(auto right: right_most){
                
                //skip iterations that create an invalid interval
                if((right < left)){
                    continue; 
                }

                //skip iterations where the interval is the size of s, since
                //per the directions that is not a valid substring
                if(right == s.size()-1 && left == 0){
                    continue; 
                }


                bool isValid = true; 

                //iterate through the elements in this current interval. Make sure that each letter in this 
                //current interval does not contain any characters whose leftmost and rightmost indexes are 
                //not contained in this current interval. 
                for(int i = left; i<=right; ++i){
                    if(prefixSums[s[i] - 'a'][right+1] - prefixSums[s[i] - 'a'][left] != instances[s[i]]){
                        isValid = false;
                        break; 
                    }
                }

                if(isValid){
                    ans = max(ans, right-left+1);
                }
            }
        }
        return ans; 

    }
};
```