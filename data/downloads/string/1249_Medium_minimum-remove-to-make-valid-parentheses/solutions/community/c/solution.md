# C++ | 2 Approaches | O(n), Beats 100% | No Extra Space (Best) | Explanation

**Author:** akash2099
**Votes:** 241
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/1073189/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/1073189/)

---

**APPROACH 1**
Here, we will use a **stack** for checking the validity of parentheses, and later remove the indexes of invalid parentheses from the string `s`. Thanks [@harmxnkhurana](https://leetcode.com/harmxnkhurana) for the suggestion of directly marking the invalid parentheses in string `s` rather than redundant storing it in a different vector. 
- First, iterate the string `s` and mark the index of those characters which need to be removed to make it *parentheses string* using a special symbol **`'#'`**.
- Here, a **stack** is used for finding the **valid** pair of parentheses, and while doing so also **mark** the indexes of **invalid parentheses** in ```s```.
- Finally, iterate `s` again and append **non-marked symbol** (`#`) to `ans`.

**COMPLETE CODE**
```
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        
        stack<int>st; // helper stack for finding matching parentheses
        
        for(int i=0;i<s.length();++i){
            if(s[i]=='('){ // for open parentheses push into stack
                st.push(i);
            }
            else if(s[i]==')'){ // for closing parentheses
                // if no matching previous open parentheses found, we need to remove the index of that open parentheses from "s" so for now we are marking it with special character '#'
                if(st.empty()){ 
                    s[i]='#';
                }
                else{
                    // if matching open parentheses found remove that from the stack
                    st.pop();
                }
            }
        }

        // if stack is not empty, that means it contains open parentheses indexes which don't have any matching closing parentheses
        while(!st.empty()){
            s[st.top()]='#';
            st.pop();
        }
        
        string ans="";
        for(int i=0;i<s.length();++i){
            if(s[i]!='#'){ // append not marked character to the end of "ans"
                ans.push_back(s[i]);
            }
        }
        
        return ans;
    }
};
```

**TIME COMPLEXITY**
**O(n)**

**SPACE COMPLEXITY**
**O(n)** [ *For stack* ]

---

**APPROACH 2 ( Better Approach )**
In this approach, we don't need a stack so **no extra space** will be used. Thanks [@Ajna2](https://leetcode.com/Ajna2) for the suggestion of keeping a count variable instead of using a stack.
- First, create a `count` variable for storing the number of **opening** or **closing** brackets as per our need.
- **STEP 1:**
	- Initialize `count=0`. For this step, we will use `count` for storing the number of **open** brackets.
	- Then, iterate the string `s` from **start** and at each iteration:
		- if **open bracket** found, then **increase** `count`.
		- if **close bracket** found, then check *if* **no. of close brackets > no. of open brackets**, then mark that character in `s` by *replacing* it by **`#`**, *else* **decrease** the `count` ( as **matching parentheses** found ).
	```
	int count=0; 
	for(int i=0;i<n;++i){
		if(s[i]=='('){ // for open bracket
			++count;
		}
		else if(s[i]==')'){ // for close bracket
			if(count==0){  // if no. of close brackets > no. of open brackets
				s[i]='#';
			}
			else{
				// if matching parentheses found decrease count
				--count;
			}
		}
	}
	```
- **STEP 2  ( Reverse of STEP 1 )**
	- Again, make `count=0`. For this step, we will use `count` for storing the number of **close** brackets.
	- Then, iterate the string `s` from the **end** and at each iteration:
		- if **close bracket** found, then **increase** `count`.
		- if **open bracket** found, then check *if* **no. of open brackets > no. of close brackets**, then mark that character in `s` by *replacing* it by **`#`**, *else* **decrease** the `count` ( as **matching parentheses** found ). 
	```
	count=0;
	for(int i=n-1;i>=0;--i){
		if(s[i]==')'){ // for close bracket
			++count;
		}
		else if(s[i]=='('){ // for open bracket
			if(count==0){ // if no. of open brackets > no. of close brackets
				s[i]='#';
			}
			else{
				// if matching parentheses found decrease count
				--count;
			}
		}
	}
	```
- **STEP 3:**
	- Iterate the string `s` and append each non - marked character (`#`) to `ans` string.
	- return `ans`.
	```
	string ans="";
	for(int i=0;i<n;++i){
		if(s[i]!='#'){ 
			ans.push_back(s[i]);
		}
	}
	return ans;
	```

**COMPLETE CODE**
```
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        int n=s.length();
        // Step 1 : Iterate from start
        int count=0; 
        for(int i=0;i<n;++i){
            if(s[i]=='('){ // for open bracket
                ++count;
            }
            else if(s[i]==')'){ // for close bracket
                if(count==0){  // if no. of close brackets > no. of open brackets
                    s[i]='#';
                }
                else{
                    // if matching parentheses found decrease count
                    --count;
                }
            }
        }
        
        // Step 2 : Iterate from end
        count=0;
        for(int i=n-1;i>=0;--i){
            if(s[i]==')'){ // for close bracket
                ++count;
            }
            else if(s[i]=='('){ // for open bracket
                if(count==0){ // if no. of open brackets > no. of close brackets
                    s[i]='#';
                }
                else{
                    // if matching parentheses found decrease count
                    --count;
                }
            }
        }
        
        // Step 3 : Create "ans" by ignoring the special characters '#'
        string ans="";
        for(int i=0;i<n;++i){
            if(s[i]!='#'){ 
                ans.push_back(s[i]);
            }
        }
        return ans;
    }
};
```

**TIME COMPLEXITY**
**O(n+n+n) = O(n)** [ *Each step takes O(n) time* ]

**SPACE COMPLEXITY**
**O(1)** [ *No extra space used, ignoring "ans"* ]