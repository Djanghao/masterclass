# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 152
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3357439/](https://leetcode.com/problems/scramble-string/solutions/3357439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking to check whether s2 is scrambled string of s1 or not. The scrambled string of a given string is defined as any string that can be obtained by swapping some characters of the original string. So we can solve this problem recursively by dividing the string into left and right substrings and check for two cases i.e., whether we need to swap the substrings before checking for the next recursive call or not.

# Approach
<!-- Describe your approach to solving the problem. -->
We will first check the base cases i.e., if the two strings are equal or not or if they are of different sizes. Then, we will create a key for the current problem by concatenating the two strings and storing it in a dictionary to avoid repeated computations. We will iterate over all possible splits of the current string and check whether we need to swap the left and right substrings or not. We will then make recursive calls on these two substrings and return true if any of the calls return true.

# Complexity
- Time complexity: $$O(n^4)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
since for each character in s1, we are trying out all possible splits of the string which takes $$O(n^2)$$ time and we are calling the recursion twice for each split which takes another $$O(n^2)$$ time. And for each such problem, we are storing it in a dictionary which takes $$O(1)$$ time. So overall time complexity is $$O(n^4)$$.

- Space complexity: $$O(n^3)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
since we are using a dictionary to store previously solved problems and the depth of the recursion tree can go up to n. Therefore, the space complexity of this solution is $$O(n^3)$$.



![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
class Solution {
    // for storing already solved problems
    Map<String, Boolean> mp = new HashMap<>();

    public boolean isScramble(String s1, String s2) {
        int n = s1.length();

        // if both strings are not equal in size
        if (s2.length() != n)
            return false;

        // if both strings are equal
        if (s1.equals(s2))
            return true;

        // if code is reached to this condition then following this are sure:
        // 1. size of both string is equal
        // 2. string are not equal
        // so size is equal (where size==1) and they are not equal then obviously false
        // example 'a' and 'b' size is equal ,string are not equal
        if (n == 1)
            return false;

        String key = s1 + " " + s2;

        // check if this problem has already been solved
        if (mp.containsKey(key))
            return mp.get(key);

        // for every iteration it can two condition
        // 1.we should proceed without swapping
        // 2.we should swap before looking next
        for (int i = 1; i < n; i++) {
            // ex of without swap: gr|eat and rg|eat
            boolean withoutswap = (
                    // left part of first and second string
                    isScramble(s1.substring(0, i), s2.substring(0, i))

                            &&

                            // right part of first and second string;
                            isScramble(s1.substring(i), s2.substring(i))
            );

            // if without swap give us right answer then we do not need
            // to call the recursion withswap
            if (withoutswap) {
                mp.put(key, true);
                return true;
            }

            // ex of withswap: gr|eat rge|at
            // here we compare "gr" with "at" and "eat" with "rge"
            boolean withswap = (
                    // left part of first and right part of second
                    isScramble(s1.substring(0, i), s2.substring(n - i))

                            &&

                            // right part of first and left part of second
                            isScramble(s1.substring(i), s2.substring(0, n - i))
            );

            // if withswap give us right answer then we return true
            // otherwise the for loop do it work
            if (withswap) {
                mp.put(key, true);
                return true;
            }
            // we are not returning false in else case
            // because we want to check further cases with the for loop
        }
        mp.put(key, false);
        return false;
    }
}
```
``` C++ []
class Solution {
public:
//for storing already solved problems
    unordered_map<string,bool> mp;
    
    
    bool isScramble(string s1, string s2) {
        //base cases
        
        int n = s1.size();
        
        //if both string are not equal in size
        if(s2.size()!=n)
            return false;
        
        //if both string are equal
        if(s1==s2)
         return true;   
        
            
        
        //if code is reached to this condition then following this are sure:
        //1. size of both string is equal
        //2.  string are not equal
        //so size is equal (where size==1) and they are not equal then obviously false
        //example 'a' and 'b' size is equal ,string are not equal
        if(n==1)
            return false;
        
        string key = s1+" "+s2;
        
		//check if this problem has already been solved
        if(mp.find(key)!=mp.end())
            return mp[key];
        
        //for every iteration it can two condition 
        //1.we should proceed without swapping
        //2.we should swap before looking next
        for(int i=1;i<n;i++)
        {

            //ex of without swap: gr|eat and rg|eat
            bool withoutswap = (
                //left part of first and second string
                isScramble(s1.substr(0,i),s2.substr(0,i)) 
                
                &&
                
                //right part of first and second string;
                isScramble(s1.substr(i),s2.substr(i))
                );
            
            
            
            //if without swap give us right answer then we do not need 
            //to call the recursion withswap
            if(withoutswap)
                return true;
            
            //ex of withswap: gr|eat  rge|at
			//here we compare "gr" with "at" and "eat" with "rge"
            bool withswap = (
                //left part of first and right part of second 
                isScramble(s1.substr(0,i),s2.substr(n-i)) 
                
                &&
                
                //right part of first and left part of second
                isScramble(s1.substr(i),s2.substr(0,n-i)) 
                );
            
            
            
            //if withswap give us right answer then we return true
            //otherwise the for loop do it work
            if(withswap)
                return true;
            //we are not returning false in else case 
            //because we want to check further cases with the for loop
        }
        
        
        return mp[key] = false;
        
    }
};
```
``` Python []
class Solution(object):
    def isScramble(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        # Base cases

        n = len(s1)

        # If both strings are not equal in size
        if len(s2) != n:
            return False

        # If both strings are equal
        if s1 == s2:
            return True

        # If code is reached to this condition then following this are sure:
        # 1. size of both string is equal
        # 2. string are not equal
        # so size is equal (where size==1) and they are not equal then obviously false
        # example 'a' and 'b' size is equal, string are not equal
        if n == 1:
            return False

        key = s1 + " " + s2

        # Check if this problem has already been solved
        if key in self.mp:
            return self.mp[key]

        # For every iteration it can two condition
        # 1. We should proceed without swapping
        # 2. We should swap before looking next
        for i in range(1, n):
            # ex of without swap: gr|eat and rg|eat
            without_swap = (
                # Left part of first and second string
                self.isScramble(s1[:i], s2[:i])
                and
                # Right part of first and second string;
                self.isScramble(s1[i:], s2[i:])
            )

            # If without swap gives us the right answer then we do not need
            # to call the recursion with swap
            if without_swap:
                return True

            # ex of with swap: gr|eat rge|at
            # here we compare "gr" with "at" and "eat" with "rge"
            with_swap = (
                # Left part of first and right part of second
                self.isScramble(s1[:i], s2[n-i:])
                and
                # Right part of first and left part of second
                self.isScramble(s1[i:], s2[:n-i])
            )

            # If with swap gives us the right answer then we return True
            # otherwise, the for loop does its work
            if with_swap:
                return True

        self.mp[key] = False
        return False

    # for storing already solved problems
    mp = {}

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```
```