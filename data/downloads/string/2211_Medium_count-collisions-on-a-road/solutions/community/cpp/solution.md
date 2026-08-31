# C++ Easy Simulation | Stack | Explanation | Beginner Friendly Solution

**Author:** Albatross912
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865816/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865816/)

---

The problem was a good simulation problem. Here we have three cases of collision and one hidden case.
* First case, if the car is moving **R** and the car next to it is moving **L**
* Second, if the car is moving **R** and the very next car is stationary *i.e.* **S**
* Third, one is if the first car is stationary **S** and the next car is moving in left direction **L**
* and the hidden case which i found it later was, what if ***two or more*** cars is moving in right direction and later on some collision take place and the car become stationary
	
# 	Explanation with examples and proof
	 Example and explanation of the 4th hidden case
	 Eg: RRRRRRL
	 Here we can see that R and L will become stationary (After collision of R and L)
	 -> RRRRRS (after collision or after first traverse)
	 but, we have just missed the couple of R's before S
	 
	 To handle this, we will remove the leading R's from the stack.
	 and after removing leading R's count remaing R's and add to the answer
	 **Proof**
	 Let a string S S R S S R L L R S L L R S R S S R L R R R R L L R R L S S R R
	 after performing first traverse( handling only first 3 cases ) the stack will look like 
	 R R S S S R S R R R S S S S S S S S S S the string is in reverse order
			             
	 After reversing it S S S S S S S S S S R R R S R S S S R R
	 
	 Now, we can see that there are couple of collision are left i.e R R R S R S S S R R
	 last two R R cant collide in any way so remove them from the stack 
	 current stack R R R S R S S S
	 
	 Resulting  we are only remain with some R's that are surely going to collide because even if we
	 have single 'S' it is sure that after collide if any car it will become stationary and number of
	 stationary will increment.
	 
	 So, count the remaining R's and add to the answer
	 
	 Please do dry run on this case, for better understand
	 S S R S S R L L R S L L R S R S S R L R R R R L L R R L S S R R
	 
**read the comment in the code for better understand**
**CODE**

```
class Solution {
public:
    int countCollisions(string s) {
        stack<char> st; // creating a stack
        int n = s.size();
        if(n == 1)return 0; // edge case !
        st.push(s[0]); // Push the very first element in stack 
        int ans = 0;
        for(int i=1; i<n; i++)
        {
            if(!st.empty() && st.top() == 'R' && s[i] == 'L') // First case 
            {
                ans += 2;
                st.pop();   // remove the last element from the stack because they have collide 
                st.push('S'); // after collide the car become stationary so, push "S"
            }
            else if(!st.empty() && st.top() == 'R' && s[i] == 'S') // second case
            {
                ans += 1;
                st.pop();   // same here 
                st.push('S');
            }
            else if(!st.empty() && st.top() == 'S' && s[i] == 'L') // third case 
                ans += 1; 
            else
                st.push(s[i]); // if no condition is matched push the current element;
        } 
        // handling 4th case 
        while(!st.empty() && st.top() == 'R') // remove the leading R's
            st.pop();
        while(!st.empty()) // count the remaing R's
        {
            if(st.top() == 'R')ans++;
            st.pop();
        }
        // please dry  run this case of your own for better understand
        // S S R S S R L L R S L L R S R S S R L R R R R L L R R L S S R R
        
        
        return ans;
    }
};
```