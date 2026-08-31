# Typescript || DFS || backtracking

**Author:** onifs10
**Votes:** 2
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/3079164/](https://leetcode.com/problems/restore-ip-addresses/solutions/3079164/)

---

# Intuition
Use DFS for backtracking to generate all possible IP addresses



# Complexity
- Time complexity:
    $$O(3^n)$$ 

- Space complexity:
$$O(d)$$
> d auxiliary  call stack space 

# Code
```
function restoreIpAddresses(s: string): string[] {
    let result:string[] = [];
    const DFS  = (ip:string,index:number,octet:number) => {
        if(index >= s.length){
            return;
        }
        // last octet check
        if(octet == 3){
            //check if last digit is valid
            if(s.substring(index, index+1) != "0" || index+1 == s.length){
                if(Number(s.substring(index)) < 256){
                    ip += '.'
                    ip += s.substring(index);
                    result.push(ip)
                }
            }
            return
        }
        for(let i = 1; i <= 3 && index+i < s.length; i++){
            if(Number(s.substring(index, index+i)) < 256){
                DFS(ip + '.'+ s.substring(index, index+i),index+i, octet + 1);
            }
            //check for leading zero
            if(s.substring(index, index+1) == "0"){
                break;
            }
        }
    }
    for(let i = 1; i <= 3 && i < s.length ; i++){
        if(Number(s.substring(0, i)) < 256){
            DFS(s.substring(0, i), i, 1);
        }
        //check for leading zero
        if(s[0] == "0"){
                break;
        }
    }
    return result
};
```