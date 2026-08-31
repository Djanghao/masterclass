# 4 cases, stupidly simple.

**Author:** clasiqh
**Votes:** 23
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2630335/](https://leetcode.com/problems/push-dominoes/solutions/2630335/)

---

**So, there are 4 cases:**
* **LL:** everything in between will be 'L' |  **<-L . . . <-L**
* **RR:** everything in between will be 'R' |  **R-> . . . R->** 
* **LR:** everything in between will be '.' | **<-L . . . R->**
* **RL:**  they will `meet in the middle` |  **R-> . . . <-L**
*[ in case of RL, if the count of '.'s was odd, the middle element will be `'.'` ]*

**Code:**

    StringBuilder sb = new StringBuilder();
    public String pushDominoes(String dominoes) {
        int count = 0; char last = 'L';
        for(char ch : dominoes.toCharArray()){
            if(ch!='.'){
				if(ch==last) add(count, last);             // case LL & RR
				else if(last=='L') add(count, '.');  // case LR
				else {                                     // case RL
					add(count/2, 'R');
					if(count%2!=0) sb.append('.');
					add(count/2, 'L');
				}
				sb.append(ch);
				last = ch; count = 0;
			}
			else count++;
        }
        add(count, last=='R'?'R':'.');  // for trailing '.'s
        return sb.toString();
    }
    
    void add(int count, char ch){  // append 'ch' to sb 'count' times
        for(int i=0; i<count; i++) sb.append(ch);
    }