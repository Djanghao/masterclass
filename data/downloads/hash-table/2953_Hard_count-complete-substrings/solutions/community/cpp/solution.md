# Easy Explanation | C++ | Sliding Window

**Author:** anupam_713
**Votes:** 58
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4355843/](https://leetcode.com/problems/count-complete-substrings/solutions/4355843/)

---

# Intuition
First i break string into parts such that no two adjacent chars 
have diff more than 2 

now for each broken part i calculate answer and add them to final answer.. 

Calculating answer for each part...

now i have to count substrings such that they have each character k times..

string can contain of only 26 unique characters.. 

if string contains of j unique character's, it's len should be k * j 

so i check all strings of len 1 * k to 26 * k 

now in the string of len j * k 

i check using freq array that there are j characters with freq k.. 

i use sliding window to check substrings of each len starting with 1 * k  

PS: Please correct anything you find wrong..


# Code
```

class Solution {
public:
    // checking the frequency vector so that there 
    // are j characters and each character occurs k times..
    bool check(vector<int> & freq, int &j, int &k)
    {
        int ct = 0;
        for(int i = 0; i < freq.size();i++)
        {
            if (freq[i] == 0) continue;
            if (freq[i] != k) return false;
            else ct++;
        }
        if (ct > j) return false;
        return true;
    }
    long long int func(string & s, int &k)
    {
        long long int count = 0;
        int n = s.length();
        for(int j = 1; j <= 26;j++)
        {
            int len = k * j;
            vector<int> freq(26,0);
            if (len > n) break;
            // using sliding window to check each substring of length = len..
            for(int i = 0; i < len;i++)
            {
                freq[s[i] - 'a']++;
            }
            if (check(freq,j,k)) count++;
            for(int i = len;i < n;i++)
            {
                char prev = s[i - len];
                char next = s[i];
                freq[prev - 'a']--;
                freq[next  - 'a']++;
                if (check(freq,j,k)) count++;
            }
        }
        return count;
    }
    int countCompleteSubstrings(string word, int k) {
        long long int  ans = 0;
        string result = "";
        int n = word.length();
        for(int i =0; i < n;i++)
        {
            result += word[i];
            if (i <= n - 2)
            {
                if (abs(word[i] - word[i + 1]) > 2)
                {
                    ans += func(result,k);
                    result = "";
                }
            }
        }
        ans += func(result,k);
        return ans;
    }
};
/*
intution : 

first i break string into parts such that no two adjacent chars 
have diff more than 2 

now for each broken part i calculate answer and add them to final answer.. 

Calculating answer for each part...

now i have to count substrings such that they have each character k times..

string can contain of only 26 unique characters.. 

if string contains of j unique character's, it's len should be k * j 

so i check all strings of len 1 * k to 26 * k 

now in the string of len j * k 

i check using freq array that there are j characters with freq k.. 

i use sliding window to check substrings of each len starting with 1 * k 


*/
```