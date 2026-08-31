# Easy C++ solution

**Author:** puneeth_0307
**Votes:** 61
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674000/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674000/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
TLDR: Since we can add any characters to the end. Just add universal characters to the end that cant act as any character

The question wants us to find just the count of operations required. So I tried to simulate the removing and adding at the end process. Removing k characters from the start is easy enough but adding characters to end is not that simple because we have a lot of choices to pick what characters to add at the end to get optimal result.

Calculating those optimal characters gets more complicated.
So I just assumed that the character " * " I'm adding will just act as the correct character according to the requirement. So abacabc would equate to true with abac***

In the worst case if all characters have to be removed and replaced we could get all characters replaced by " * " which would get evaluated to true in the isEqual function.
i.e, abacabc == *******

# Approach
<!-- Describe your approach to solving the problem. -->
Remove k charcters from the start and add universal characters to the end and check if our new string equals the original string. Use "do while" here since we always need non zero result. Increment count variable in every iteration. 

# Code
```
class Solution {
public:
    bool isEqual(string &word, string &target){
        int n = word.size();
        for(int i=0;i<n;i++){
            if(target[i]!='*' && word[i]!=target[i]){
                return false;
            }
        }
        return true;
    }
    int minimumTimeToInitialState(string word, int k) {
        string copy = word;
        int count = 0;
        do{
            copy = copy.substr(k) + string(k, '*');
            count++;
        } while(!isEqual(word, copy));
        return count;
    }
};
```