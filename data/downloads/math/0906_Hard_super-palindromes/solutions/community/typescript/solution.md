# TypeScript | JavaScript Solution

**Author:** macolby14
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/1197996/](https://leetcode.com/problems/super-palindromes/solutions/1197996/)

---

## TypeScript/JavaScript Solution

### Intuition:
- The limiting constraint for this problem is the very large range of number 10^18. This is a bigger than the JavaScript Number.MAX_SAFE_INTEGER value of 2^53-1
- We know the square needs to be a palindrome. The max value is 10^18, so we only need to check up to 10^9 (10^9)^2=10^18
- We can create a palindrome if we take a string and then repeat it, or take a string add a middle digit, then repeat it
- This means we only need to check up up to half the digits of 10^9 (we will just go up to 10^5) to make it easy

### Process:
- Manually add single digits super palindromes (2,4,9)
- Generate numbers from 1 to 10^5. Create palindromes from these numbers. Check if their square is also a palindrome. If it is, add it to super palindrome list
- For the middle digit, it can be an empty string (no middle digit - even length string) or any single digit
- If there is no middle digit and the square is too big, we can break out as we know the number will never get smaller than this 

### Code
```
function superpalindromesInRange(left: string, right: string): number {
    /*
    10^18 is range
    Find all palindromes to 10^9 -> as square must also be a plaindrome
    - If we iterate through digits to 10^5, we can just repeat the digits
    */
    
    let ct=0;
    
    //manually add single digit numbers
    if(2>=BigInt(left)&&2<=BigInt(right)){ct++;}
    if(4>=BigInt(left)&&4<=BigInt(right)){ct++;}
    if(9>=BigInt(left)&&9<=BigInt(right)){ct++;}
    
    for(let i=1;i<10**5;i++){
        const leftHalf=i+"";
        const rightHalf=leftHalf.split("").reverse().join("");
        for(let mid=-1;mid<9;mid++){
            // do no middle digit first -> so we can break out early if squared is too big
            const midStr = mid===-1 ? "" : mid+"";
            const whole=leftHalf+midStr+rightHalf;
            const n=BigInt(whole);
            const squared=n**2n;
            
            // squared is bigger without a middle digit and will never get smaller
            if(midStr==="" && squared>BigInt(right)){return ct;}
            
            if(squared>=BigInt(left)&&squared<=BigInt(right)&&isPalindrome(squared)){
                ct++;
                // console.log(squared);
            }   
        }
    }
    
    return ct;
};

function isPalindrome(n: BigInt){
    const s = n+"";
    const rev=s.split("").reverse().join("");
    if(s===rev){return true;}
    return false;
}
```