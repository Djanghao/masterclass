# Java, Priority Queue and stack -  Larger String with repeat limit

**Author:** Surendaar
**Votes:** 54
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/1784797/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/1784797/)

---

At first on looking into this problem it looked little complex,

But after thinking for some time, I am able to unwire it little easily..

Here is the approach I took.

In-order to get a lexicographically larger number we know that it should have all larger alphabets in the starting of string like zzzzzzyyyyyyxxxxx.

But here they have given repeat count limit, so first things first we can sort the given string of characters using PriorityQueue.

`1. Sort the given string in lexicographically large order using Max heap

Then to maintain the repeat count and the lesser lexicographically small character once and then come back to larger charecter, I took the help of stack.

 2. If the count of repeated character is more than the given repeat limit then add to stack
 3. Then add the small character once and check whether the stack is empty
 4. If its empty then you can continue in the same pattern
 5. If stack is not empty then add the characters to its repeat count and again go for lesser character and repeat this process till the Priority Queue is empty.

Now its time to look into the code :)


```
   public String repeatLimitedString(String s, int repeatLimit) {
        PriorityQueue<Character> pq = new PriorityQueue<Character>((a,b)->b-a);
        for(char ch:s.toCharArray()){
        	pq.add(ch);
        }
        StringBuffer res = new StringBuffer();
        ArrayList<Character> list = new ArrayList<Character>();
        Stack<Character> stk = new Stack<Character>();
        int count = 0;
        char previouschar = pq.peek();
        while(!pq.isEmpty()){
        	char curr = pq.poll();
        	if(curr==previouschar){
        		if(count<repeatLimit){
        			res.append(curr);
        		}
        		else{
        			stk.add(curr);
        		}
        		count++;
        	}
        	else{
        		if(stk.isEmpty()){
        			count=0;
        			res.append(curr);
        			previouschar = curr;
        			count++;
        		}
        		else{
        			res.append(curr);
        			count=0;
        			while(!stk.isEmpty() && count<repeatLimit){
        				res.append(stk.pop());
        				count++;
        			}
        		}
        	}
        }
        return res.toString();
    }


Happy learning.. upvote if its helpful

