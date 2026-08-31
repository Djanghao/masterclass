# Best approach in all JAVA,CPP,PYTHON,RUBY solution 0ms runtime and O(n) time complexity O(1) space!

**Author:** madhavbsnl013
**Votes:** 4
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/3703680/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/3703680/)

---



# Approach
The given code defines a class named "Solution" with a member function named "balancedStringSplit". This function takes a string "s" as input and returns an integer.

The purpose of the function is to determine the maximum number of balanced substrings that can be formed from the input string. A balanced substring is defined as a substring that has an equal number of 'R' and 'L' characters.

Here's how the function works:

1. It initializes two variables, "count" and "c," to 0. 
   - "count" keeps track of the difference between the number of 'R' and 'L' characters encountered so far.
   - "c" keeps track of the number of balanced substrings encountered.

2. The function iterates over each character in the input string using a for loop.

3. For each character, if it is 'R', the "count" variable is incremented by 1. Otherwise, if it is 'L', the "count" variable is decremented by 1.

4. After updating the "count" variable, the function checks if it has become 0. If it is 0, it means a balanced substring has been found, so the "c" variable is incremented by 1.

5. Finally, after iterating through all the characters in the input string, the function returns the value of "c," which represents the maximum number of balanced substrings.

In summary, the function counts the number of balanced substrings in the input string by maintaining a running count of the difference between the number of 'R' and 'L' characters encountered. Whenever this count becomes zero, it means a balanced substring has been found, and the count of balanced substrings is incremented.



# Code

```java []
class Solution {
    public int balancedStringSplit(String s) {
        int count = 0;
        int c = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'R') {
                count++;
            } else {
                count--;
            }
            if (count == 0) {
                c++;
            }
        }
        return c;
    }
}
```
```CPP []

class Solution {
public:
    int balancedStringSplit(string s) {
        int count=0,c=0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='R'){
                count++;
            }
            else
                count--;
            if(count==0){
                c++;
             }    
        }
        return c;
        
        
    }
};
```


```python []
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        count = 0
        c = 0
        for i in range(len(s)):
            if s[i] == 'R':
                count += 1
            else:
                count -= 1
            if count == 0:
                c += 1
        return c
```
```ruby []
class Solution
  def balanced_string_split(s)
    count = 0
    c = 0
    s.each_char do |char|
      if char == 'R'
        count += 1
      else
        count -= 1
      end
      if count == 0
        c += 1
      end
    end
    return c
  end
end
```


