# I know the case you stuck at, Simple Hinglish Explanation||C++, Beats 100%

**Author:** Rarma
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4637091/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4637091/)

---

Case tum logo ka atk rha hoga count of 1 pr,
smjho jra 1 ki power kuch bhi ho ayga 1 so if agr bhot sare 1 present hain toh 1 ka bhi ek valid sequence hoga

e.g. v = [1,1,1,1,1,2,2,4]

answer isme aya -> 5
but if we check sequence then it would have been [2,4,2] -> 3
but but [1,1,1,1,1] bhi exist krega which have greater length

# Intuition & Approach
mene sidde brute force socha like map me element store kr lo kyuki mujhe elements find krna pdega 
ab joh bhi current element hain uska square map me dhundo if milta hain toh count ko badhao else next element ka square dhundo 

but but but.... it ended up in TLE
TLE Solution (also Exceed long long range) :- 
```
class Solution {
public:
    int maximumLength(vector<int>& n) {
        // map me store kro
        map<long long,int> um;
        for(auto val:n){
            um[val]++;
        }
        if(um.size()==1){return 1;}
        
        int cnt=0;
        int ans=1;
        
        //hr element map ka square find krte jao
        for(auto val:um){
            if(val.second >= 2){
                //yha current element ka square krrh
                long long fnd = pow(val.first,2);

                while(true){
                    // agr uska square map me milta hain
                    if(um.find(fnd) != um.end()){    
                        cnt+=2;
                        // toh fnd ko update kro 
                        // ab fnd will be square of fnd
                        fnd=pow(fnd,2);
                        // pair bnane ke liye atleast 2 count us
                        // number ka hona chaiye na 
                        if(um[fnd]>=2){
                            continue;
                        }
                        //otherwise no sequence possible
                        else{
                            cnt++;
                            break;
                        }
                    }
                    else{
                        break;
                    }
                }
                ans = max(ans,cnt);
                cnt=0;
            }
        }

        //check if 1 exist
        int maxi=0;
        if(um.find(1)!=um.end()){
            //exist so uska count le lo
            maxi = um[1];
        }

        //sequence hmesha odd times rhega as observed
        //so -1 kr dena if count of one is even
        if(maxi > ans){
            if(maxi & 1){return maxi;}
            return maxi-1;
        }

        return ans;
    }
};
```

Ab aate hain solution pr
after getting TLE \uD83D\uDE2D and also the long long range exceed, 
mene socha square krne ke karan yeh problem aa rhi so ab iska ulta try krte hain 
mtlb ki square root dhundte hain which save me from exceeding long long error
Ps. Thoda code padho upar wala then niche wala pura smjh aajaega question and solution \uD83D\uDC4D

# Code - Accepted
```C++ []
class Solution {
public:
    int maximumLength(vector<int>& n) {
        // map used during contest submission 
        // unordered_map<long long,int> um;  <-- old map

        // yeh thoda changed map as new test cases add kre leetcode
        // walo ne and is test case pr atk rha tha code 
        // [2,5,8,18,2] -> how ? as root(8) = 2.82 or int me voh 2 aa 
        // tha so my code giving 3 but expected answer is 1
        unordered_map<double,int> um;  // <-- updated map

        for(auto val:n){
            um[val]++;
        }
        // if(um.size()==1){return 1;} //yeh condition jaruri nhi 
        
        int cnt=0;
        int ans=1;
        
        for(auto val:um){
                // .5 = 1/2 which is square root
                double fnd = pow(val.first,.5);
                cnt=1;

                // yha condition greater than equal 2 isiliye rkha 
                // to avoid the infinite loop as use calculator
                // and find root(2)->root(root(2))...so on
                // it will never end
                while(fnd >= 2){
                    if(um.find(fnd) != um.end()){    
                        if(um[fnd] >= 2){
                            cnt+=2;
                        }
                        else{
                            break;
                        }
                        fnd=pow(fnd,.5);                        
                    }
                    else{
                        break;
                    }
                }
                ans = max(ans,cnt);
                cnt=0;
        }
        int maxi=0;
        if(um.find(1)!=um.end()){
            maxi = um[1];
        }
        if(maxi > ans){
            if(maxi & 1){return maxi;}
            return maxi-1;
        }
        return ans;
    }
};
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const um = new Map();

    for (const val of nums) {
        if (um.has(val)) {
            um.set(val, um.get(val) + 1);
        } else {
            um.set(val, 1);
        }
    }

    if (um.size === 1) {
        return 1;
    }

    let cnt = 0;
    let ans = 1;

    for (const [key, value] of um) {
        // .5 = 1/2 which is square root
        let fnd = Math.pow(key, 0.5);
        cnt = 1;

        // yha condition greate than equal 2 isiliye rkha 
        // to avoid the infinite loop as use calculator
        // and find root(2)->root(root(2))...so on
        // it will never end
        while (fnd >= 2) {
            if (um.has(fnd)) {
                if (um.get(fnd) >= 2) {
                    cnt += 2;
                } else {
                    break;
                }
                fnd = Math.pow(fnd, 0.5);
            } else {
                break;
            }
        }

        ans = Math.max(ans, cnt);
        cnt = 0;
    }

    let maxi = 0;
    if (um.has(1)) {
        maxi = um.get(1);
    }

    if (maxi > ans) {
        if (maxi & 1) {
            return maxi;
        }
        return maxi - 1;
    }

    return ans;
};
```

# Complexity
Pehle toh, har element ki count nikalne ke liye vector par ek loop chalaya gaya hai. Yeh O(N) time le lega, jahan N vector ke elements hain.
```
for(auto val:n){
    um[val]++;
}
```
Fir, ek aur loop hai jo unique elements ke liye chalta hai. Isme har iteration mein ek constant time ka kaam hota hai. Overall, iska time complexity bhi O(N) hai.
```
for(auto val:um){
    // ...
}
```
Ab, iske andar ek aur loop hai jo square root lene aur uske occurrences ko check karne mein lagta hai. Yeh constant time operation hai, kyun ki ek element ke square root nikalna aur map mein check karna dono constant time mein ho sakte hain.
```
while(fnd >= 2){
    // ...
}
```
Iske alawa, max aur if conditions bhi constant time operations hain. Jaise ki:
```
if(um.size()==1){return 1;}
if(maxi > ans){
    if(maxi & 1){return maxi;}
    return maxi-1;
}
```

Overall, code ka **time complexity O(N log M)**, where N is the size of the input vector and M is the maximum value in the input vectorhai.

Space Complexity Analysis (in Hinglish):

Ek map (um) ka use kiya gaya hai elements ki count store karne ke liye. Iska space complexity O(N) hoga, jahan N unique elements hain.
```
map<long long,int> um;
```
Saath hi, kuch variables ka use kiya gaya hai jo constant space lete hain, jaise ki cnt, ans, aur fnd.

Is tarah,**space complexity bhi O(N)** hai.

Understand Next Problem - https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4676198/agr-concept-smjhna-hain-toh-read-c \uD83D\uDC4D\uD83D\uDE01\uD83D\uDC4D
