# Detailed Line by Line Explanation |C++ | Java | Python

**Author:** shivam-727
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3729844/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3729844/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
Sliding Window

For detailed explanation you can refer to my youtube channel (hindi Language)
https://youtu.be/jyeXpd2FSlQ
 or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes. 
   or
 search \uD83D\uDC49`Maximise the Confusion of an Exam by Let's Code Together`

1. The `solve` function takes three parameters: the input string `a`, the limit `k`, and the character `c` ('T' or 'F') for which the maximum length of the substring is to be found.

2. Initialize variables `i` and `j` to 0, representing the start and end indices of the current substring.

3. Initialize a variable `cnt` to 0 to keep track of the number of occurrences of the character `c` within the current substring.

4. Initialize a variable `n` to store the size of the input string `a`.

5. Initialize a variable `ans` to 0, which will hold the maximum length of the substring satisfying the given conditions.

6. Start a while loop that iterates until the end of the string `a` (represented by `j < n`).

7. Inside the loop, check if the character at index `j` in string `a` is equal to the character `c`. If it is, increment `cnt` by 1.

8. Enter another while loop that checks if the current substring violates the limit `k`. If `cnt` is greater than `k`, it means there are more occurrences of character `c` than allowed, so we need to move the window's start index (`i`) to the right and decrement `cnt` accordingly. Increment `i` by 1 and decrement `cnt` by 1 for each occurrence of character `c` until `cnt` becomes less than or equal to `k`.

9. After exiting the inner while loop, calculate the length of the current valid substring (`j - i + 1`) and update `ans` to the maximum value between the current `ans` and the length of the substring.

10. Move the window's end index (`j`) to the right by incrementing it by 1.

11. Finally, return the maximum value between `ans1` and `ans2`, which are the results of calling the `solve` function twice with the characters 'T' and 'F', respectively.

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int solve(string a, int k,char c){
         int i=0;
        int j=0;
        int cnt=0;
        int n=a.size();
        int ans=0;
          while(j<n){
          if(a[j]==c)
          cnt++;
          while(i<n&&cnt>k){
           if(a[i]==c)
           cnt--;
           i++;
          }  
          ans=max(j-i+1,ans);
          j++;
        }
        return ans;
    }
    int maxConsecutiveAnswers(string a, int k) {
       
        int ans1=solve(a,k,'T');
        int ans2=solve(a,k,'F');
         return max(ans1,ans2);
    }
};
```
![upvote-this-you.jpg](./images/0.jpeg)
