# [C++] O(n) solution with detailed explanation

**Author:** __nupur
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/1029198/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/1029198/)

---

**Intuition**
 By taking a close look at the following test cases, we can understand the problem better:
 Consider :
1.   [3,5,2,6] and k=2
Answer= [2,6]

2.  [3,5,2,6] and k=3
Answer= [3,2,6]

In the first case, our answer began with 2 which was the smallest number available in the array. However, in the second case we could not start our answer with 2 as we need a total of k=3 numbers in the answer. Thus we begin our answer with the smallest number we can find, which **also** has enough numbers after it to contribute to the final answer.

**Algorithm**
For each arr[i] we have 2 options: either it will be a part of our ans or it won't be. Thus there's a 'dilemna' we have to resolve for each arr[i].
We shall use a stack, which will at max contain k elements at a time. These will be the elements whose dilemna is unresolved. At the end, this stack will contain our final answer.

1. Start traversing the arr. PUSH the arr[i] in the stack if stack.size() < k. We will resolve this pushed arr[i] 's dilemna at the time of POP operation (explained next).
2. POP **all** the elements whose dilemna is resolved ie they will NOT be a part of the ans. This will be the case when current arr[i] is smaller than stack.top(), and arr[i] **also** has sufficient number of elements after it to form the final answer.
3. On following the above steps, at the end our stack will contain the final answer. Convert it to an array and return it.

**Complexity**
Time Complexity will be O(n) and space complexity will be O(k) as the stack will at max contain k elements.
	
**Follow up**
Instead of using a stack and then storing it to vector and returning, we can simply use a vector from the very beginning. Use vector.back() to access 'top' element and vector.pop_back() for popping. At the end simply return this vector we were using like a stack. 


```
vector<int> mostCompetitive(vector<int>& arr, int k){
 
        int n= arr.size();
        
        stack<int> s;  //stores the elements which have a dilemna. In the end, the elements who remain form the answer.
        
        for(int i=0; i<n; i++){
            
            //n-i-1 elements are left in the array after ith index and k-s.size() is the no. of elements still required for our answer
            while(!s.empty() && arr[i]<s.top() && (n-i-1 >= k-s.size())){
                s.pop();
            }
            
            //push elements if stack has less than k elements (these elements are the ones whose dilemna has not been resolved yet) 
            if(s.size()<k){
                s.push(arr[i]);
            }
        }
        
        //stack s contains our answer now, converting to a vector
        vector<int> ans;
         while(!s.empty()){
            ans.push_back(s.top());
            s.pop();
         }
        reverse(ans.begin(), ans.end());
        return ans;
    }
	
	