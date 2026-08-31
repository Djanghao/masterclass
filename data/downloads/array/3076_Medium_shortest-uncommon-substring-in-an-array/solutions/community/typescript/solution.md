# BruteForce || Typescript

**Author:** sam_Eldoro
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4853596/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4853596/)

---

> # Code
```

function shortestSubstrings(arr: string[]): string[] {
    let mpp=new Map<string,number[]>();
    
    for(let i=0;i<arr.length;i++){
        for(let k=0;k<arr[i].length;k++){
            for(let j=k+1;j<=arr[i].length;j++){

                if(!mpp.has(arr[i].substring(k,j))){
                    mpp.set(arr[i].substring(k,j),[i]);
                }
                else{
                    if(!mpp.get(arr[i].substring(k,j)).includes(i))mpp.get(arr[i].substring(k,j)).push(i);
                }
            }
        }
    }
    let ans:string[]=[]
//    console.log(mpp)

    for(let i=0;i<arr.length;i++){
        let temp=[]
        for(let j=0;j<arr[i].length;j++){
            for(let k=j+1;k<=arr[i].length;k++){
                if(mpp.get(arr[i].substring(j,k)).length <=1 && mpp.get(arr[i].substring(j,k)).includes(i)){
                    if(temp.length>0 && temp[0].length > arr[i].substring(j,k).length){
                        temp.shift();
                    }
                    temp.push(arr[i].substring(j,k));
                }
            }
        }

        if(temp.length==0){
            ans.push("");
        }
        else{

            let res:string=temp[0];

            for(let i=1;i<temp.length;i++){
                if(temp[i] < res || temp[i].length < res.length){
                   if(res.length >= temp[i].length) res=temp[i];
                }
            }
            
            ans.push(res);
            temp=[];
        }
    }
    
    return ans;

};
```