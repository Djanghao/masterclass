# Kadane  Algorithm|  C++ |  Java | Python+Video Explanation

**Author:** shivam-727
**Votes:** 40
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3738770/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3738770/)

---




# Approach
<!-- Describe your approach to solving the problem. -->
iterate through every possible pair of character and finding the variance and maximum among them will be answer.for this we will always take c1 greater than c2 so answer is postive.automatically the case will be covered for c2 greater than c1 when j and i character swap its posistion. 

For detailed explanation you can refer to my youtube channel (hindi Language)
https://youtu.be/c-U5cQMXFH4
 or link in my profile.Here,you can find any solution in playlists monthwise from June 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.
or
search \uD83D\uDC49`Substring With Largest Variance by Let's Code Together` on youtube

# Complexity
- Time complexity:$$O(26*26*2*s)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(26)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int largestVariance(string s) {
        vector<int>arr(26);
        for(auto x:s){
           arr[x-'a']++; 
        }
        int ans=0;
        for(char i='a';i<='z';i++){
            for(char j='a';j<='z';j++){
                 if(j==i||arr[i-'a']==0||arr[j-'a']==0)
                            continue;
                for(int k=1;k<=2;k++){
                   int c1=0;
                    int c2=0;
                    for(auto x:s){
                        if(x==i)
                            c1++;
                        if(x==j)
                            c2++;
                        if(c2>c1){
                            c1=0;
                            c2=0;
                        }
                        if(c1>0&&c2>0)
                        ans=max(ans,c1-c2);
                    }
                    reverse(s.begin(),s.end());
                }
            }
        }
        return ans;
    }
};
```
![upvote-this-you.jpg](./images/0.jpeg)