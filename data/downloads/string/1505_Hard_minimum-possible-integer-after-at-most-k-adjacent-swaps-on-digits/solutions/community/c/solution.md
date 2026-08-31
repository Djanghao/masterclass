# C++ || Segment tree || Explained solution

**Author:** Rajdeep_Nagar
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/2669347/](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/2669347/)

---

```
/*

swap any two adjacent digits atmost k times -> minimum integer formed after this??

will greedy approach works here ?

bringing all smaller no' ahead as possible as
 
 
(bring that smallest no. here which is towards right of it and can be brought here within k steps) () () ()...


Value of k decreases..

(.)(bring that smallest no. here which is towards right of it and can be brought here within remaining k steps) () () () () () ...

Value of k decreases..

and so on till k>0


NOTE:

7683(1)67 => (1)768367


by doing this, index of all no's toward left of (1) increases by 1


 O(n*n), for each position i, check minimum digit within the range (among next k digits) , and put that minimum digit at this position

 O(n logn) , for each position i, we check Is it possible to place any digit [0-9] at this position, let we can place '3' at this position , and index of this '3' is idx, so no. of swaps we needs to do to bring '3' from index idx towards left to index i = idx- (no of digits from [0,idx] that have already used)

if we are at index i, it means we are already done with [0...i-1]


 let num= 872124652 , k=20

 S.T = 0 0 0 0 0 0 0 0 0
 
 num= 872124652
 for i=0, 872124652 => ans=1(87224652)
 nextIdx=3, alreadyUsed=0, countSwap=3-0=3, k=k-3=17
 S.T = 0 0 0 1 0 0 0 0 0
 
 num= 872124652
 for i=1, 1|87224652  => ans=12(8724652)
 nextIdx=2, alreadyUsed=0, countSwap=2-0=2, k=17-2=15
 S.T = 0 0 1 1 0 0 0 0 0
 
 num= 872124652
 for i=2, 12|8724652 => ans=122(874652)
 nextIdx=4, alreadyUsed=2, countSwap=4-2=2, k=15-2=13
  S.T = 0 0 1 1 1 0 0 0 0

 num= 87212465(2)
 for i=3, 122|874652 => ans=1222(87465)
 nextIdx=8, alreadyUsed=3, countSwap=8-3=5, k=13-5=8
  S.T = 0 0 1 1 1 0 0 0 1

num= 87212(4)652
 for i=4, 1222|87465 => ans=12224(8765)
 nextIdx=5, alreadyUsed=3, countSwap=5-3=2, k=8-2=6
 S.T = 0 0 1 1 1 1 0 0 1
 
 num= 8721246(5)2
 for i=5, 12224|8765 => ans=122245(876)
 nextIdx=7, alreadyUsed=4, countSwap=7-4=3, k=6-3=3
 S.T = 0 0 1 1 1 1 0 1 1
 
  num= 872124(6)52
 for i=5, 122245|876 => ans=1222456(87)
 nextIdx=6, alreadyUsed=4, countSwap=6-4=2, k=3-2=1
 S.T = 0 0 1 1 1 1 1 1 1
 
 num= 8(7)2124652
 for i=5, 1222456|87 => ans=12224567(8)
 nextIdx=1, alreadyUsed=0, countSwap=1-0=1, k=1-1=0
 S.T = 0 1 1 1 1 1 1 1 1
 
 k=0
 
 return ans=122245678 



 to keep track of how many digits have been used in range [0....idx] we use segment tree

 let we shifting digit at index i1 or using digit at index i1 at any left side index , than we update our segment tree by adding 1 at index i1 in the segment tree 

*/

class Solution {
public:
    string minInteger(string num, int k) {
        
    int n=num.length();
    
    if(k>n*n){
        sort(num.begin(),num.end());
        
        return num;
    }
        
        
unordered_map<int,deque<int>>mp;
        
int arr[n];
        
        for(int i=0;i<n;i++){
            arr[i]=0;
        }
        
int *st=constructST(arr,n);
        
        for(int i=0;i<n;i++){
            mp[num[i]-'0'].push_back(i);
        }
       
        string ans;
        
        for(int i=0;i<n;i++){
            
            for(int d=0;d<=9;d++){
                
                if(mp[d].size()>0){
                    
                    int nextIdx=mp[d].front();
                    
                    // no. of digits that already used
                    int alreadyUsed=getsum(st,0,0,n-1,0,nextIdx);
                    
                    int countSwap=nextIdx-alreadyUsed;
                    
                    if(k>=countSwap){
                        ans+=to_string(d);
                        mp[d].pop_front();
                        k-=countSwap;
                        update(st,0,0,n-1,nextIdx,1);
                        break;
                    }
                }
            }
        }
        
        
        
        return ans;
    
    }
    
    
    
void update(int *st,int si,int sl,int sr,int pos,int diff)
{
if(sl>pos || sr<pos)
return ;
st[si]=st[si]+diff;
if(sl!=sr){
int mid=(sl+sr)/2;
update(st,2*si+1,sl,mid,pos,diff);
update(st,2*si+2,mid+1,sr,pos,diff);
}}



int getsum(int *st,int si,int sl,int sr,int l,int r)
{
if(l<=sl && r>=sr)
return st[si];
if(l>sr || r<sl)
return 0;
int mid=(sl+sr)/2;
return (getsum(st,2*si+1,sl,mid,l,r)+
getsum(st,2*si+2,mid+1,sr,l,r));
}



int constructSTUL(int *st,int si,int arr[],int l,int r){
if(l==r){
st[si]=arr[l];
return arr[l];
}
int mid=(l+r)/2;

st[si]=(constructSTUL(st,2*si+1,arr,l,mid)
+ constructSTUL(st,2*si+2,arr,mid+1,r));
return st[si];
}



int *constructST(int arr[],int n){

int h=(int)(ceil(log2(n)));
int max_size_st=2*(int)pow(2,h)-1;
int *st=new int[max_size_st];

constructSTUL(st,0,arr,0,n-1);

return st;
}

};