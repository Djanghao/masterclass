# Hash Table And Binary Search

**Author:** shayankhan1156
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/5925347/](https://leetcode.com/problems/number-of-black-blocks/solutions/5925347/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N*4*LOGN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(3*(N*4))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
 const bs=(arr,r,c)=>{
let start=0,end=arr.length-1;
while(start<=end){
let mid=Math.floor(start+(end-start)/2);
if(arr[mid][0]<r)start=mid+1;
else if(arr[mid][0]>r)end=mid-1;
else if(arr[mid][1]<c)start=mid+1;
else if(arr[mid][1]>c)end=mid-1;
else return true;
}
return false;
 }
  const get_index=(r,c,arr)=>{
let start=0,end=arr.length-1;
while(start<=end){
let mid=Math.floor(start+(end-start)/2);
if(arr[mid][0]<r)start=mid+1;
else if(arr[mid][0]>r)end=mid-1;
else if(arr[mid][1]<c)start=mid+1;
else if(arr[mid][1]>c)end=mid-1;
else return mid;
}
return -1;
 }
  const valid=(r,c,row,col)=>{
    if(r<0 || r>=row || c<0 || c>=col)return false;
    return true;
 }
const check_for_zero=(row,col,arr,n,c)=>{
let ans=0;
for(let pos=0;pos<4;pos+=1){
    if(pos==0){
       let fr=row,fc=col;
        let sr=row,sc=col+1;
        let tr=row+1,tc=col;
        let lr=row+1,lc=col+1;
        if(valid(lr,lc,n,c) && valid(sr,sc,n,c) && valid(tr,tc,n,c) &&valid(fr,fc,n,c)){
        if(get_index(sr,sc,arr)!=-1 ||get_index(tr,tc,arr)!=-1 || get_index(lr,lc,arr)!=-1)continue;
        ans+=1;
        }
    }else if(pos==1){
        let fr=row,fc=col-1;
        let sr=row,sc=col;
        let tr=row+1,tc=col-1;
        let lr=row+1,lc=col;
        if(valid(lr,lc,n,c) && valid(sr,sc,n,c) && valid(tr,tc,n,c) &&valid(fr,fc,n,c)){
        if(get_index(fr,fc,arr)!=-1 ||get_index(tr,tc,arr)!=-1 || get_index(lr,lc,arr)!=-1)continue;
        ans+=1;
        }
    }else if(pos==2){
     let fr=row-1,fc=col;
        let sr=row-1,sc=col+1;
        let tr=row,tc=col;
        let lr=row,lc=col+1;
        if(valid(lr,lc,n,c) && valid(sr,sc,n,c) && valid(tr,tc,n,c) &&valid(fr,fc,n,c)){
        if(get_index(fr,fc,arr)!=-1 || get_index(sr,sc,arr)!=-1 || get_index(lr,lc,arr)!=-1)continue;
        ans+=1;
        }
    }else{
     let fr=row-1,fc=col-1;
        let sr=row-1,sc=col;
        let tr=row,tc=col-1;
        let lr=row,lc=col;
        if(valid(lr,lc,n,c) && valid(sr,sc,n,c) && valid(tr,tc,n,c) &&valid(fr,fc,n,c)){
        if(get_index(fr,fc,arr)!=-1 || get_index(sr,sc,arr)!=-1 ||get_index(tr,tc,arr)!=-1)continue;
        ans+=1;
        }
    }
}

return ans;
 }
 const check_for_others=(fr,fc,sr,sc,tr,tc,lr,lc,arr,row,col,visited,req,pos,v)=>{
if(!valid(fr,fc,row,col) || !valid(sr,sc,row,col) || !valid(tr,tc,row,col) || !valid(lr,lc,row,col))return 0;
let index1=get_index(fr,fc,arr);
let index2=get_index(sr,sc,arr);
let index3=get_index(tr,tc,arr);
let index4=get_index(lr,lc,arr);
//visited[index][current_postion in a 2*2 grid]=0(never been as current_position/1(already counted))
let t=new Array(5).fill(-1);
let cnt=0;
if(index1!=-1){
    t[0]=index1;
    cnt+=1;
}
if(index2!=-1){
    t[1]=index2;
    cnt+=1;
}
if(index3!=-1){
    t[2]=index3;
    cnt+=1;
}
if(index4!=-1){
    t[3]=index4;
    cnt+=1;
}
if(cnt!=req)return 0;
for(let i=0;i<4;i+=1){
    if(t[i]==-1)continue;
    if(visited[t[i]][i])return 0;
    visited[t[i]][i]=1;
}
return 1;
 }
 const calculate=(arr,row,col,number)=>{
let ans=0;
const visited=new Array(arr.length).fill(0).map(()=>{
    return new Array(3).fill(0);
});
if(number===1){
let req=0;
for(let ele of arr){
    ans+=check_for_zero(ele[0],ele[1],arr,row,col);
}
}else{
    for(let ele of arr){
    for(let pos=0;pos<4;pos+=1){
        if(pos==0){
        ans+=check_for_others(ele[0],ele[1],ele[0],ele[1]+1,ele[0]+1,ele[1],ele[0]+1,ele[1]+1,arr,row,col,visited,number,pos);
        }else if(pos==1){
            ans+=check_for_others(ele[0],ele[1]-1,ele[0],ele[1],ele[0]+1,ele[1]-1,ele[0]+1,ele[1],arr,row,col,visited,number,pos);
        }else if(pos==2){
            ans+=check_for_others(ele[0]-1,ele[1],ele[0]-1,ele[1]+1,ele[0],ele[1],ele[0],ele[1]+1,arr,row,col,visited,number,pos);
        }else{
            ans+=check_for_others(ele[0]-1,ele[1]-1,ele[0]-1,ele[1],ele[0],ele[1]-1,ele[0],ele[1],arr,row,col,visited,number,pos);
        }
    }
}

}
return ans;
 }
var countBlackBlocks = function(m, n, coordinates) {
    let arr=new Array(5).fill(0);
    coordinates.sort((a,b)=>{
        if(a[0]<b[0])return -1;
        else if(a[0]>b[0])return 1;
    return a[1]-b[1];
    })
    let sum=0;
    for(let i=1;i<5;i+=1){
        arr[i]=calculate(coordinates,m,n,i);
        sum+=arr[i];
    }
    let total=n-1;
    total=total*(m-1);
    arr[0]=total-sum;
    return arr;
};
```