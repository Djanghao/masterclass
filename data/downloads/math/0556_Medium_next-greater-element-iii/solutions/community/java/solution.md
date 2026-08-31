# java 0ms solution easy to understand with explanation

**Author:** rmanish0308
**Votes:** 53
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/1407530/](https://leetcode.com/problems/next-greater-element-iii/solutions/1407530/)

---

Explanation :-
Consider number 6537421 , firstly we convert this number to char array and check from right end 
if numbers are in increasing order from right side then it means we cannot create a number more than given number because the left number's place value is always more than right one.
if there exist a number in array such that it is less than the right value , then we swap the  position of number less than right value , with the number just bigger than that :-
here 6 5 3 7 4 2 1 :- 3 is the first number which is less than right values so swap 3 , 4
now the number becomes 6 5 4 7 3 2 1 :- but this is not the least number , to get least number we reverse the numbers from 7 to 1 ie 7 3 2 1 -> 1 2 3 7 and we add this to existing ans:-
final answer 6 5 4 1 2 3 7

```
class Solution {
    public int nextGreaterElement(int n) {
        char arr[] = (Integer.toString(n)).toCharArray();
        
        int i=arr.length-2;
        StringBuilder ans = new StringBuilder();
        while(i>=0 && arr[i] >= arr[i+1])
            i--;
        
        if(i == -1)
            return -1;
        
        int k = arr.length-1;
        
        while(arr[k] <= arr[i])
            k--;
        
        swap(arr,i,k);
        
        for(int j=0;j<=i;j++)
            ans.append(arr[j]);
        
        for(int j=arr.length-1;j>i;j--)
            ans.append(arr[j]);
        
        long ans_ = Long.parseLong(ans.toString());
        
        return (ans_ > Integer.MAX_VALUE) ? -1 : (int)ans_;
        
        
    }
    void swap(char[] arr,int i,int j)
    {
        char temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}
```
Please upvote if u find my code easy to understand